export const noop = (...elements) => { };
const getCloseCentres = ({ x, y, r }) => [
    [x + 2 * r, y],
    [x + r, y + r * Math.fround(Math.sqrt(3))],
    [x - r, y + r * Math.fround(Math.sqrt(3))],
    [x - 2 * r, y],
    [x - r, y - r * Math.fround(Math.sqrt(3))],
    [x + r, y - r * Math.fround(Math.sqrt(3))],
];
export const getFittedCentresSpiral = (area, circleRadius, maximum = 10000) => {
    let firstCenter;
    try {
        firstCenter = area.findFirstCircleCenter(circleRadius);
    }
    catch (_a) {
        return [];
    }
    const queue = [firstCenter, ...getCloseCentres({
            x: firstCenter[0],
            y: firstCenter[1],
            r: circleRadius,
        })];
    const checkedCentres = [];
    const fittedCentres = [];
    while (queue.length && (maximum === 0 || fittedCentres.length <= maximum - 1)) {
        const center = queue.shift();
        if (!center) {
            break;
        }
        if (checkedCentres.some(([x, y]) => x === center[0] && y === center[1])) {
            // eslint-disable-next-line no-continue
            continue;
        }
        checkedCentres.push(center);
        const circle = { x: center[0], y: center[1], r: circleRadius };
        if (area.isCircleFit(circle)) {
            fittedCentres.push(center);
            queue.push(...getCloseCentres(circle));
        }
    }
    return fittedCentres;
};
export const getFittedCentresRightLine = (area, circleRadius, maximum = 10000) => {
    let firstCenter;
    try {
        firstCenter = area.findFirstCircleCenter(circleRadius);
    }
    catch (_a) {
        return [];
    }
    const fittedCentres = [firstCenter];
    const getR = ([x, y]) => [x + 2 * circleRadius, y];
    const getD = ([x, y]) => {
        const circleDL = [x - circleRadius, y + circleRadius * Math.sqrt(3)];
        const circleDR = [x + circleRadius, y + circleRadius * Math.sqrt(3)];
        if (area.isCircleFit({ x: circleDL[0], y: circleDL[1], r: circleRadius })) {
            return [circleDL[0], circleDL[1]];
        }
        if (area.isCircleFit({ x: circleDR[0], y: circleDR[1], r: circleRadius })) {
            return [circleDR[0], circleDR[1]];
        }
        return undefined;
    };
    let lineStarter = firstCenter;
    const queue = [getR(firstCenter)];
    while (queue.length && (maximum === 0 || fittedCentres.length <= maximum - 1)) {
        const center = queue.shift();
        if (!center) {
            break;
        }
        const circle = { x: center[0], y: center[1], r: circleRadius };
        if (area.isCircleFit(circle)) {
            fittedCentres.push(center);
            queue.push(getR([center[0], center[1]]));
        }
        else {
            const d = getD([lineStarter[0], lineStarter[1]]);
            if (d) {
                lineStarter = d;
                fittedCentres.push(d);
                queue.push(getR(d));
            }
            else {
                break;
            }
        }
    }
    return fittedCentres;
};
export const getFittedCentresBoxGrid = (area, circleRadius, maximum = 10000) => {
    let firstCenter;
    try {
        firstCenter = area.findFirstCircleCenter(circleRadius);
    }
    catch (_a) {
        return [];
    }
    const fittedCentres = [firstCenter];
    const getR = ([x, y]) => [x + 2 * circleRadius, y];
    const getD = ([x, y]) => [x, y + circleRadius * 2];
    let lineStarter = firstCenter;
    const queue = [getR(firstCenter)];
    while (queue.length && (maximum === 0 || fittedCentres.length <= maximum - 1)) {
        const center = queue.shift();
        if (!center) {
            break;
        }
        const circle = { x: center[0], y: center[1], r: circleRadius };
        if (area.isCircleFit(circle)) {
            fittedCentres.push(center);
            queue.push(getR([center[0], center[1]]));
        }
        else {
            const d = getD([lineStarter[0], lineStarter[1]]);
            if (d && area.isCircleFit({ x: d[0], y: d[1], r: circleRadius })) {
                lineStarter = d;
                fittedCentres.push(d);
                queue.push(getR(d));
            }
            else {
                break;
            }
        }
    }
    return fittedCentres;
};
