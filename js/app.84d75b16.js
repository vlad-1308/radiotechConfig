(function(e){function t(t){for(var s,r,l=t[0],o=t[1],c=t[2],f=0,h=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,l=1;l<i.length;l++){var o=i[l];0!==a[o]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},a={app:0},n=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},1458:function(e,t,i){var s={"./af":"8fdd","./af.js":"8fdd","./ar":"ecab","./ar-dz":"fdac","./ar-dz.js":"fdac","./ar-kw":"cc3b","./ar-kw.js":"cc3b","./ar-ly":"c6aa","./ar-ly.js":"c6aa","./ar-ma":"049c","./ar-ma.js":"049c","./ar-ps":"2b71","./ar-ps.js":"2b71","./ar-sa":"78db","./ar-sa.js":"78db","./ar-tn":"5e5e","./ar-tn.js":"5e5e","./ar.js":"ecab","./az":"ba7a","./az.js":"ba7a","./be":"8e16","./be.js":"8e16","./bg":"46bb","./bg.js":"46bb","./bm":"4d62","./bm.js":"4d62","./bn":"e21f","./bn-bd":"fa6b","./bn-bd.js":"fa6b","./bn.js":"e21f","./bo":"0e3a","./bo.js":"0e3a","./br":"1802","./br.js":"1802","./bs":"f4e4","./bs.js":"f4e4","./ca":"37f7","./ca.js":"37f7","./cs":"a222","./cs.js":"a222","./cv":"340a","./cv.js":"340a","./cy":"8fa4","./cy.js":"8fa4","./da":"f4c1","./da.js":"f4c1","./de":"5b7e","./de-at":"bb4d","./de-at.js":"bb4d","./de-ch":"2327","./de-ch.js":"2327","./de.js":"5b7e","./dv":"62ce","./dv.js":"62ce","./el":"1d02","./el.js":"1d02","./en-au":"881b","./en-au.js":"881b","./en-ca":"3938","./en-ca.js":"3938","./en-gb":"4158","./en-gb.js":"4158","./en-ie":"d76c","./en-ie.js":"d76c","./en-il":"c7c9","./en-il.js":"c7c9","./en-in":"c7d8","./en-in.js":"c7d8","./en-nz":"35d5","./en-nz.js":"35d5","./en-sg":"e7cd","./en-sg.js":"e7cd","./eo":"a53d","./eo.js":"a53d","./es":"f3dd","./es-do":"7800","./es-do.js":"7800","./es-mx":"3435","./es-mx.js":"3435","./es-us":"ad5d","./es-us.js":"ad5d","./es.js":"f3dd","./et":"b6ac","./et.js":"b6ac","./eu":"9690","./eu.js":"9690","./fa":"1f4b","./fa.js":"1f4b","./fi":"c64b","./fi.js":"c64b","./fil":"11bf","./fil.js":"11bf","./fo":"48db","./fo.js":"48db","./fr":"fc48","./fr-ca":"a5d8","./fr-ca.js":"a5d8","./fr-ch":"4b8a","./fr-ch.js":"4b8a","./fr.js":"fc48","./fy":"95e9","./fy.js":"95e9","./ga":"aacd","./ga.js":"aacd","./gd":"cede","./gd.js":"cede","./gl":"440c","./gl.js":"440c","./gom-deva":"8902","./gom-deva.js":"8902","./gom-latn":"26ad","./gom-latn.js":"26ad","./gu":"5038","./gu.js":"5038","./he":"0900","./he.js":"0900","./hi":"02da","./hi.js":"02da","./hr":"9dbe","./hr.js":"9dbe","./hu":"bbde","./hu.js":"bbde","./hy-am":"e67d","./hy-am.js":"e67d","./id":"a04d","./id.js":"a04d","./is":"fd22","./is.js":"fd22","./it":"66fe","./it-ch":"36cb","./it-ch.js":"36cb","./it.js":"66fe","./ja":"034b","./ja.js":"034b","./jv":"bcac","./jv.js":"bcac","./ka":"dd28","./ka.js":"dd28","./kk":"7f7b","./kk.js":"7f7b","./km":"c2f1","./km.js":"c2f1","./kn":"4b58","./kn.js":"4b58","./ko":"4ae9","./ko.js":"4ae9","./ku":"542b","./ku-kmr":"0e12","./ku-kmr.js":"0e12","./ku.js":"542b","./ky":"6699","./ky.js":"6699","./lb":"9a33","./lb.js":"9a33","./lo":"0c29","./lo.js":"0c29","./lt":"2ecc","./lt.js":"2ecc","./lv":"0473","./lv.js":"0473","./me":"04b7","./me.js":"04b7","./mi":"2cbb","./mi.js":"2cbb","./mk":"228b","./mk.js":"228b","./ml":"31da","./ml.js":"31da","./mn":"b54f","./mn.js":"b54f","./mr":"d2d2","./mr.js":"d2d2","./ms":"a423","./ms-my":"67c6","./ms-my.js":"67c6","./ms.js":"a423","./mt":"7385","./mt.js":"7385","./my":"1aeb","./my.js":"1aeb","./nb":"7c02","./nb.js":"7c02","./ne":"f7ee","./ne.js":"f7ee","./nl":"12b5","./nl-be":"bbb8","./nl-be.js":"bbb8","./nl.js":"12b5","./nn":"53cc","./nn.js":"53cc","./oc-lnc":"93bc","./oc-lnc.js":"93bc","./pa-in":"7075","./pa-in.js":"7075","./pl":"0d19","./pl.js":"0d19","./pt":"d454","./pt-br":"832e","./pt-br.js":"832e","./pt.js":"d454","./ro":"41e4","./ro.js":"41e4","./ru":"e1b9","./ru.js":"e1b9","./sd":"ffe3","./sd.js":"ffe3","./se":"9f76","./se.js":"9f76","./si":"0de2","./si.js":"0de2","./sk":"d3b8","./sk.js":"d3b8","./sl":"0030","./sl.js":"0030","./sq":"cb4a","./sq.js":"cb4a","./sr":"a880","./sr-cyrl":"a8a6","./sr-cyrl.js":"a8a6","./sr.js":"a880","./ss":"530b","./ss.js":"530b","./sv":"2f23","./sv.js":"2f23","./sw":"9db1","./sw.js":"9db1","./ta":"bb3e","./ta.js":"bb3e","./te":"e474","./te.js":"e474","./tet":"74ce","./tet.js":"74ce","./tg":"2040","./tg.js":"2040","./th":"c4ef","./th.js":"c4ef","./tk":"ce6b","./tk.js":"ce6b","./tl-ph":"f373","./tl-ph.js":"f373","./tlh":"fc39","./tlh.js":"fc39","./tr":"6c70","./tr.js":"6c70","./tzl":"dcde","./tzl.js":"dcde","./tzm":"e9b1","./tzm-latn":"9678","./tzm-latn.js":"9678","./tzm.js":"e9b1","./ug-cn":"0609","./ug-cn.js":"0609","./uk":"052f","./uk.js":"052f","./ur":"1a8f","./ur.js":"1a8f","./uz":"5c35","./uz-latn":"d422","./uz-latn.js":"d422","./uz.js":"5c35","./vi":"25e7","./vi.js":"25e7","./x-pseudo":"e6a4","./x-pseudo.js":"e6a4","./yo":"a465","./yo.js":"a465","./zh-cn":"0e91","./zh-cn.js":"0e91","./zh-hk":"bc52","./zh-hk.js":"bc52","./zh-mo":"859b","./zh-mo.js":"859b","./zh-tw":"9b15","./zh-tw.js":"9b15"};function a(e){var t=n(e);return i(t)}function n(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="1458"},"3aae":function(e,t,i){"use strict";i("e76a")},"48b9":function(e,t,i){},6030:function(e,t){e.exports="data:image/png;base64,"},cd49:function(e,t,i){"use strict";i.r(t);var s=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"font-family":"'Comfortaa', cursive","font-weight":"500"},attrs:{id:"app"}},[i("router-view")],1)},n=[],r=(i("3aae"),i("2877")),l={},o=Object(r["a"])(l,a,n,!1,null,null,null),c=o.exports,d=i("2f62");s["a"].use(d["a"]);const f=new d["a"].Store({state:{message:"",isLoggedIn:!1},mutations:{setMessage:(e,t)=>{e.message=t}}});var h=i("8c4f"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{display:"flex"}},[i("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",width:"100%"}},[i("div",{staticStyle:{"margin-left":"1rem",color:"#0a63ae","font-size":"1.8rem"}},[e._v(" Конфигуратор Li-Ion АКБ ")]),i("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[i("img",{staticStyle:{height:"8rem",padding:"1rem"},attrs:{alt:"uno-soft.ru",src:e.logo}})])]),i("CanvasArea")],1)])},u=[],p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("div",{staticStyle:{width:"100%"}},[i("AInput",{staticStyle:{width:"90%","font-weight":"700","font-size":"2rem",border:"none"},attrs:{placeholder:"Без названия",size:"large"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),i("div",{staticStyle:{width:"100%",display:"flex",padding:"1rem","align-items":"flex-start"}},[i("div",{staticStyle:{width:"20rem",display:"flex","flex-direction":"column","justify-content":"flex-start",padding:"1rem","font-size":".9rem"},style:{height:e.CANVAS_HEIGHT}},[i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"space-between","margin-bottom":"3rem"}},[i("div",{staticStyle:{display:"flex","flex-direction":"column",position:"relative","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Диаметр элемента, мм: ")]),i("AInputNumber",{attrs:{min:e.minDiam,max:e.maxDiam,size:"small"},model:{value:e.diam,callback:function(t){e.diam=t},expression:"diam"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.minDiam,max:e.maxDiam},model:{value:e.diam,callback:function(t){e.diam=t},expression:"diam"}})],1),i("div",{staticStyle:{display:"flex","flex-direction":"column",position:"relative","margin-bottom":"1rem"}},[i("div",{staticStyle:{position:"absolute",top:"0",left:"-1.5rem"}},[i("ATooltip",{attrs:{placement:"topLeft"},scopedSlots:e._u([{key:"title",fn:function(){return[i("span",[e._v(" Количество последовательно соединенных блоков батареи . При этом типе соединения напряжение всех последовательно соединенных элементов складывается. Это позволяет сделать батарею на заданное напряжение U=S*Uэлемента.")])]},proxy:!0}]),model:{value:e.isSTooltipVisible,callback:function(t){e.isSTooltipVisible=t},expression:"isSTooltipVisible"}},[i("AIcon",{attrs:{type:"question-circle"}})],1)],1),i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Длина серии (S): ")]),i("AInputNumber",{attrs:{min:e.minS,max:e.maxS,size:"small"},model:{value:e.s,callback:function(t){e.s=t},expression:"s"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.minS,max:e.maxS},model:{value:e.s,callback:function(t){e.s=t},expression:"s"}})],1),i("div",{staticStyle:{display:"flex","flex-direction":"column",position:"relative","margin-bottom":"1rem"}},[i("div",{staticStyle:{position:"absolute",top:"0",left:"-1.5rem"}},[i("ATooltip",{attrs:{placement:"topLeft"},scopedSlots:e._u([{key:"title",fn:function(){return[i("span",[e._v("Количество параллельно соединенных элементов. При этом типе соединения ёмкость сборки пропорционально увеличивается.")])]},proxy:!0}]),model:{value:e.isPTooltipVisible,callback:function(t){e.isPTooltipVisible=t},expression:"isPTooltipVisible"}},[i("AIcon",{attrs:{type:"question-circle"}})],1)],1),i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Кол-во параллелей (P): ")]),i("AInputNumber",{attrs:{min:e.minP,max:e.maxP,size:"small"},model:{value:e.p,callback:function(t){e.p=t},expression:"p"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.minP,max:e.maxP},model:{value:e.p,callback:function(t){e.p=t},expression:"p"}})],1)]),i("div",{staticStyle:{"margin-bottom":"1rem"}},[e.areElementsFit?i("div",{staticStyle:{"font-weight":"700"}},[e._v(" Помещается: "+e._s(e.fittedCentres.length)+" элементов ")]):i("div",{staticStyle:{color:"#df676f",display:"flex","flex-direction":"column"}},[i("div",{staticStyle:{"font-weight":"700"}},[e._v(" Помещается: ")]),i("div",{staticStyle:{"font-weight":"700"}},[e._v(" "+e._s(e.fittedCentres.length)+" элементов из "+e._s(e.totalElementCount)+" ")])])]),i("div",{staticStyle:{display:"flex","flex-direction":"column",position:"relative","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Вес элемента, г: ")]),i("AInputNumber",{attrs:{min:e.minW,max:e.maxW,size:"small"},model:{value:e.w,callback:function(t){e.w=t},expression:"w"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.minW,max:e.maxW},model:{value:e.w,callback:function(t){e.w=t},expression:"w"}})],1)]),i("div",{staticStyle:{"font-weight":"700"}},[e._v(" Итоговый вес элементов: "+e._s(e.fittedCentres.length*e.w)+" г ")])]),i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"space-between","margin-bottom":"1rem"}},[i("div",{staticStyle:{position:"relative","margin-bottom":".5rem"}},[i("div",{staticStyle:{position:"absolute",top:"0",left:"-1.5rem"}},[i("ATooltip",{attrs:{placement:"topLeft"},scopedSlots:e._u([{key:"title",fn:function(){return[i("span",[e._v("Форма корпуса")])]},proxy:!0}]),model:{value:e.isFormTooltipVisible,callback:function(t){e.isFormTooltipVisible=t},expression:"isFormTooltipVisible"}},[i("AIcon",{attrs:{type:"question-circle"}})],1)],1),i("ARadioGroup",{staticStyle:{display:"flex","margin-bottom":"1rem","font-size":".7rem"},attrs:{value:e.areaType,buttonStyle:"solid",size:"small"}},[i("ARadioButton",{key:e.AreaType.CIRCLE,staticStyle:{flex:"1"},attrs:{value:e.AreaType.CIRCLE},on:{click:function(t){e.areaType=e.AreaType.CIRCLE}}},[i("AIcon",{attrs:{type:"circle"}}),e._v(" Круг ")],1),i("ARadioButton",{key:e.AreaType.RECTANGLE,staticStyle:{flex:"1"},attrs:{value:e.AreaType.RECTANGLE},on:{click:function(t){e.areaType=e.AreaType.RECTANGLE}}},[i("AIcon",{attrs:{type:"square"}}),e._v(" Прямуг-ик ")],1)],1)],1),e.areaType===e.AreaType.CIRCLE?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Диаметр, мм: ")]),i("AInputNumber",{attrs:{min:e.diam,max:Math.floor(e.maxHeight-2),size:"small"},model:{value:e.areaDiam,callback:function(t){e.areaDiam=t},expression:"areaDiam"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.diam,max:Math.floor(e.maxHeight-2)},model:{value:e.areaDiam,callback:function(t){e.areaDiam=t},expression:"areaDiam"}})],1):e._e(),e.areaType===e.AreaType.RECTANGLE?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e._v(" Квадратная решётка: "),i("ACheckbox",{attrs:{checked:e.boxGrid},on:{change:function(t){var i=t.target;return e.boxGrid=i.checked}}})],1)]):e._e(),e.areaType===e.AreaType.RECTANGLE?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Ширина, мм: ")]),i("AInputNumber",{attrs:{min:e.minWidth,max:e.maxWidth,size:"small"},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.minWidth,max:e.maxWidth},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}})],1):e._e(),e.areaType===e.AreaType.RECTANGLE?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Высота, мм: ")]),i("AInputNumber",{attrs:{min:e.minHeight,max:e.maxHeight,size:"small"},model:{value:e.height,callback:function(t){e.height=t},expression:"height"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.minHeight,max:e.maxHeight},model:{value:e.height,callback:function(t){e.height=t},expression:"height"}})],1):e._e(),e.areaType===e.AreaType.CIRCLE?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Отступ, мм: ")]),i("AInputNumber",{attrs:{min:e.minOffset,max:e.maxDiamOffset,size:"small"},model:{value:e.diamOffset,callback:function(t){e.diamOffset=t},expression:"diamOffset"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.minOffset,max:e.maxDiamOffset},model:{value:e.diamOffset,callback:function(t){e.diamOffset=t},expression:"diamOffset"}})],1)]):e._e(),e.areaType===e.AreaType.RECTANGLE?i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Отступ высота, мм: ")]),i("AInputNumber",{attrs:{min:e.minOffset,max:e.maxHeightOffset,size:"small"},model:{value:e.heightOffset,callback:function(t){e.heightOffset=t},expression:"heightOffset"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:e.showSliders,expression:"showSliders"}],attrs:{min:e.minOffset,max:e.maxHeightOffset},model:{value:e.heightOffset,callback:function(t){e.heightOffset=t},expression:"heightOffset"}})],1)]):e._e(),e.areaType===e.AreaType.RECTANGLE?i("div",{staticStyle:{display:"flex","justify-content":"center"}},[i("div",{staticStyle:{"margin-right":".5rem"}},[i("ATooltip",{attrs:{placement:"topLeft"},scopedSlots:e._u([{key:"title",fn:function(){return[i("span",[e._v("Синхронизировать размер отступов")])]},proxy:!0}],null,!1,3475367680),model:{value:e.isLinkTooltipVisible,callback:function(t){e.isLinkTooltipVisible=t},expression:"isLinkTooltipVisible"}},[i("AIcon",{attrs:{type:"link"}})],1)],1),i("ACheckbox",{attrs:{checked:e.linkOffsets},on:{change:function(t){var i=t.target;return e.linkOffsets=i.checked}}})],1):e._e(),e.areaType===e.AreaType.RECTANGLE?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","flex-direction":"column"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[e._v("Отступ ширина, мм: ")]),e.linkOffsets?i("AInputNumber",{attrs:{disabled:"",min:e.minOffset,max:e.maxWidthOffset,size:"small"},model:{value:e.heightOffset,callback:function(t){e.heightOffset=t},expression:"heightOffset"}}):i("AInputNumber",{attrs:{min:e.minOffset,max:e.maxWidthOffset,size:"small"},model:{value:e.widthOffset,callback:function(t){e.widthOffset=t},expression:"widthOffset"}})],1),i("ASlider",{directives:[{name:"show",rawName:"v-show",value:!e.linkOffsets&&e.showSliders,expression:"!linkOffsets && showSliders"}],attrs:{min:e.minOffset,max:e.maxWidthOffset},model:{value:e.widthOffset,callback:function(t){e.widthOffset=t},expression:"widthOffset"}})],1)]):e._e()]),i("div",{staticStyle:{"align-self":"start"}},[i("APopover",{attrs:{placement:"right"},scopedSlots:e._u([{key:"content",fn:function(){return[i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"space-between","margin-bottom":"1rem"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"1rem"}},[e._v(" Отображать размер отступа: "),i("ACheckbox",{attrs:{checked:e.drawOffset},on:{change:function(t){var i=t.target;return e.drawOffset=i.checked}}})],1),i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e._v(" Показывать ползунки: "),i("ACheckbox",{attrs:{checked:e.showSliders},on:{change:function(t){var i=t.target;return e.showSliders=i.checked}}})],1)])]},proxy:!0}])},[i("AButton",{attrs:{size:"small",type:"dashed",icon:"setting"}})],1)],1)]),i("canvas",{attrs:{id:"canvas",width:e.CANVAS_WIDTH,height:e.CANVAS_HEIGHT}})]),(e.computedUpdate,e._e())])},b=[];i("d9e2"),i("f8c9");class y{findFirstCircleCenter(e,[t,i]=this.getStartCoordinate(e),s=1){if(s>10)throw new Error;const a={x:t,y:i},n=(t,i,s)=>{for(let n=0;n<t;n+=1)if(a[i]+=s,this.isCircleFit({x:a.x,y:a.y,r:e}))return!0;return!1},r=()=>this.isCircleFit({x:t,y:i,r:e}),l=()=>n(s,"x",1),o=()=>n(2*s,"y",-1),c=()=>n(2*s,"x",-1),d=()=>n(2*s,"y",1),f=()=>n(s-1,"x",1);return r()||l()||o()||c()||d()||f()?[a.x,a.y]:this.findFirstCircleCenter(e,[a.x+1,a.y+1],s+1)}}const x=i("f53e");class v extends y{constructor(e,t,i){super(),this.x=e,this.y=t,this.r=i}isCircleFit({x:e,y:t,r:i}){const{x:s,y:a,r:n}=this,r=Math.sqrt(Math.pow(s-e,2)+Math.pow(a-t,2));return!(n-i<r&&n+i>r)&&x.circlePoint(s,a,n,e,t)}isExists(){return this.r>0}getStartCoordinate(e){return[this.x,this.y]}}const w=i("f53e");class g extends y{constructor(e){super(),this.points=e}isCircleFit({x:e,y:t,r:i}){const{points:s}=this;if(!w.polygonPoint(s.flat(),e,t))return!1;for(let a=0;a<s.length-1;a+=1){const n=s[a][0],r=s[a][1],l=s[a+1][0],o=s[a+1][1];if(w.circleLine(e,t,i,n,r,l,o))return!1}return!0}isExists(){const{points:e}=this,t=e[0][0],i=e[e.length-3][0];if(i<=t)return!1;const s=e[0][1],a=e[e.length-2][1];return a>=s}getStartCoordinate(e){const{points:t}=this;return[t[0][0]+e,t[0][1]+e]}}const j=1e3,S=600,k=30,T=j-k,A=S-k,C=[Math.round(T/2)+k,Math.round(A/2)+k];class O{constructor(e){this.ctx=e,this.drawCircleSizes=({x:e,y:t,r:i},s)=>{const{ctx:a}=this,n=s<1?1:-1;a.beginPath(),this.drawArrow(e,t,e-Math.cos(s)*i,t+Math.sin(s)*i),this.drawArrow(e,t,e+Math.cos(s)*i,t-Math.sin(s)*i),a.moveTo(e,t);const r=Math.sqrt(Math.pow(T,2)+Math.pow(A,2)),l=Math.max(Math.min(r-770-1e4/i,1.5*i),50),o=e+Math.cos(s)*l,c=t-Math.sin(s)*l;a.lineTo(o,c),a.lineTo(o+50*n,c),a.strokeStyle="grey",a.stroke(),this.drawText(2*i,o+20*n,c-5)},this.drawRectangleSizes=(e,t=0)=>{this.drawRectangleSizesTop(e,t),this.drawRectangleSizesLeft(e,t)},this.drawRectangleSizesTop=(e,t=0)=>{const{ctx:i}=this;i.beginPath();const[s,a]=e[0],[n,r]=e[1];i.strokeStyle="grey";const l=(n-s)/2+s,o=10*t+a-k;i.moveTo(s,a),i.lineTo(s,o),i.moveTo(n,r),i.lineTo(n,o),this.drawArrow(l-12,o+10,s,o+10),this.drawArrow(l+15,o+10,n,o+10),i.stroke(),this.drawText(n-s,l-7,o+15)},this.drawRectangleSizesLeft=(e,t=0)=>{const{ctx:i}=this;i.beginPath();const[s,a]=e[e.length-2],[n,r]=e[0];i.strokeStyle="grey";const l=10*t+s-k,o=(a-r)/2+r;i.moveTo(s,a),i.lineTo(l,a),i.moveTo(n,r),i.lineTo(l,r),this.drawArrow(l+12,o-10,l+12,r),this.drawArrow(l+12,o+10,l+12,a),i.stroke(),this.drawText(a-r,l,o+7),i.restore()},this.drawRectangle=(e,{strokeColor:t,fillColor:i,thickness:s})=>{const{ctx:a}=this;a.strokeStyle=null!==t&&void 0!==t?t:"grey",a.beginPath(),s&&(a.lineWidth=s),e.forEach(([e,t],i)=>{i?a.lineTo(e,t):a.moveTo(e,t)}),a.stroke(),a.closePath(),a.beginPath(),e.forEach(([e,t],i)=>{i?a.lineTo(e,t):a.moveTo(e,t)}),i&&(a.fillStyle=i,a.fill()),a.closePath(),a.lineWidth=1},this.resetCanvas()}draw(e,t){return e instanceof y?this.drawArea(e,t):this.drawElement(e,t)}drawSizes(e,t=1,i=0){e.points?this.drawRectangleSizes(e.points,i):this.drawCircleSizes(e,t)}resetCanvas(){this.fillCanvas(),this.drawRuler()}fillCanvas(){const{ctx:e}=this;e.fillStyle="white",e.fillRect(0,0,j,S)}drawElement(e,t){const i=Object.assign({fillColor:"#0a63ae",strokeColor:"grey"},null!==t&&void 0!==t?t:{});e.points?this.drawRectangle(e.points,i):this.drawCircle(e,i)}drawArea(e,t){const i=Object.assign({strokeColor:"black",thickness:3,index:0},null!==t&&void 0!==t?t:{});e instanceof g?this.drawRectangle(e.points,i):e instanceof v&&this.drawCircle({x:e.x,y:e.y,r:e.r},i)}drawText(e,t,i,s=12){const{ctx:a}=this,n=""+e,{width:r}=a.measureText(n);a.fillStyle="white";const l=6;a.fillRect(t-l,i-2*l,r+2*l,1.3*s),a.font=s+"px Arial",a.strokeStyle="black",a.strokeText(n,t,i)}drawRuler(){const{ctx:e}=this,t=10;for(let i=0;i<Math.ceil(T/10);i+=1)e.strokeStyle="grey",e.globalAlpha=.3,e.beginPath(),e.moveTo(10*i+k,k),e.lineTo(10*i+k,A+k),e.stroke(),e.closePath(),e.globalAlpha=1,e.beginPath(),e.moveTo(10*i+k,k),10*i!==0&&10*i%100===0?(e.strokeStyle="black",e.lineTo(10*i+k,k-.4*k),e.stroke(),this.drawText(10*i,10*i+k-7,k-k+18,t)):(e.lineTo(10*i+k,k-.2*k),e.stroke());for(let i=0;i<Math.ceil(A/10);i+=1)e.strokeStyle="grey",e.globalAlpha=.08,e.beginPath(),e.moveTo(k,10*i+k),e.lineTo(k+T,10*i+k),e.stroke(),e.closePath(),e.globalAlpha=1,e.beginPath(),e.moveTo(k,10*i+k),10*i%100===0?(e.strokeStyle="black",e.lineTo(k-.4*k,10*i+k),e.stroke(),this.drawText(10*i,1,10*i+k+4,t)):(e.lineTo(k-.2*k,10*i+k),e.stroke())}drawCircle({x:e,y:t,r:i},{strokeColor:s,fillColor:a,thickness:n,globalAlpha:r}){const{ctx:l}=this;l.beginPath(),l.strokeStyle=null!==s&&void 0!==s?s:"black",n?(l.lineWidth=n,l.arc(e,t,i+n/2,0,2*Math.PI),l.stroke(),l.lineWidth=1,l.arc(e,t,i,0,2*Math.PI)):l.arc(e,t,i,0,2*Math.PI),a&&(l.globalAlpha=null!==r&&void 0!==r?r:1,l.fillStyle=a,l.fill(),l.globalAlpha=1),l.stroke(),l.closePath(),l.lineWidth=1}drawArrow(e,t,i,s){const{ctx:a}=this,n=10,r=i-e,l=s-t,o=Math.atan2(l,r);a.moveTo(e,t),a.lineTo(i,s),a.lineTo(i-n*Math.cos(o-Math.PI/6),s-n*Math.sin(o-Math.PI/6)),a.moveTo(i,s),a.lineTo(i-n*Math.cos(o+Math.PI/6),s-n*Math.sin(o+Math.PI/6))}}i("14d9");const E=(...e)=>{},_=({x:e,y:t,r:i})=>[[e+2*i,t],[e+i,t+i*Math.fround(Math.sqrt(3))],[e-i,t+i*Math.fround(Math.sqrt(3))],[e-2*i,t],[e-i,t-i*Math.fround(Math.sqrt(3))],[e+i,t-i*Math.fround(Math.sqrt(3))]],M=(e,t,i=1e4)=>{let s;try{s=e.findFirstCircleCenter(t)}catch(l){return[]}const a=[s,..._({x:s[0],y:s[1],r:t})],n=[],r=[];while(a.length&&(0===i||r.length<=i-1)){const i=a.shift();if(!i)break;if(n.some(([e,t])=>e===i[0]&&t===i[1]))continue;n.push(i);const s={x:i[0],y:i[1],r:t};e.isCircleFit(s)&&(r.push(i),a.push(..._(s)))}return r},z=(e,t,i=1e4)=>{let s;try{s=e.findFirstCircleCenter(t)}catch(c){return[]}const a=[s],n=([e,i])=>[e+2*t,i],r=([i,s])=>{const a=[i-t,s+t*Math.sqrt(3)],n=[i+t,s+t*Math.sqrt(3)];return e.isCircleFit({x:a[0],y:a[1],r:t})?[a[0],a[1]]:e.isCircleFit({x:n[0],y:n[1],r:t})?[n[0],n[1]]:void 0};let l=s;const o=[n(s)];while(o.length&&(0===i||a.length<=i-1)){const i=o.shift();if(!i)break;const s={x:i[0],y:i[1],r:t};if(e.isCircleFit(s))a.push(i),o.push(n([i[0],i[1]]));else{const e=r([l[0],l[1]]);if(!e)break;l=e,a.push(e),o.push(n(e))}}return a},P=(e,t,i=1e4)=>{let s;try{s=e.findFirstCircleCenter(t)}catch(c){return[]}const a=[s],n=([e,i])=>[e+2*t,i],r=([e,i])=>[e,i+2*t];let l=s;const o=[n(s)];while(o.length&&(0===i||a.length<=i-1)){const i=o.shift();if(!i)break;const s={x:i[0],y:i[1],r:t};if(e.isCircleFit(s))a.push(i),o.push(n([i[0],i[1]]));else{const i=r([l[0],l[1]]);if(!i||!e.isCircleFit({x:i[0],y:i[1],r:t}))break;l=i,a.push(i),o.push(n(i))}}return a};var I,R=i("1b40"),N=i("a600"),L=i("b558"),D=i("09d9"),W=i("fbdf"),H=i("0c63"),G=i("681b"),F=i("5efb"),V=i("59a5"),q=i("bb76"),B=i("f933"),U=(i("202f"),function(e,t,i,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r});(function(e){e["RECTANGLE"]="RECTANGLE",e["CIRCLE"]="CIRCLE"})(I||(I={}));let $=class extends s["a"]{constructor(){super(...arguments),this.title="",this.showSliders=!1,this.boxGrid=!1,this.isSTooltipVisible=!1,this.isPTooltipVisible=!1,this.isFormTooltipVisible=!1,this.isLinkTooltipVisible=!1,this.widthOffset=0,this.heightOffset=50,this.diamOffset=50,this.linkOffsets=!0,this.drawOffset=!1,this.areaType=I.CIRCLE,this.minDiam=15,this.maxDiam=100,this.diam=18,this.areaDiam=Math.min(this.maxWidth,this.maxHeight)/2,this.width=this.maxWidth/2,this.height=this.maxHeight/2,this.minOffset=0,this.s=1,this.minS=1,this.maxS=100,this.p=85,this.minP=0,this.maxP=1e3,this.w=50,this.minW=1,this.maxW=100}get maxWidth(){return T-2}get minWidth(){return this.diam+2}get maxWidthOffset(){return(this.width+2)/2}get maxDiamOffset(){return this.areaDiam/2}get maxHeight(){return A-2}get minHeight(){return this.diam+2}get maxHeightOffset(){return(this.height+2)/2}get computedUpdate(){const{diam:e,rectangleArea:t,circleArea:i,areaDiam:s,areaType:a,drawer:n,s:r,p:l,maxDiam:o,minDiam:c}=this;return E(e,t,r,l,n,i,s,a),!(e<c||e>o||!n)&&(this.redraw(),!0)}redraw(){const{diam:e,area:t,shell:i,drawer:s,fittedCentres:a,areaType:n,diamOffset:r,widthOffset:l,areElementsFit:o,heightOffset:c,drawOffset:d}=this;s.resetCanvas();const f=n===I.CIRCLE?r:l||c,h=o?"black":"rgba(211, 33, 45, 0.5)",m=o?"#0a63ae":"white";s.draw(i,{strokeColor:h}),s.drawSizes(i,Math.cos(45)),f&&t.isExists()&&(s.draw(t,{strokeColor:o?"black":"rgba(211, 33, 45, 0.5)",thickness:void 0,index:1}),d&&s.drawSizes(t,-Math.cos(45),1)),a.forEach(([t,i])=>{const a={x:t,y:i,r:e/2};s.draw(a,{fillColor:m,strokeColor:"grey",globalAlpha:.3})})}get area(){return this.areaType===I.RECTANGLE?this.rectangleArea:this.circleArea}get shell(){return this.areaType===I.RECTANGLE?this.rectangleShell:this.circleShell}get areElementsFit(){return this.totalElementCount<=this.fittedCentres.length}get totalElementCount(){return this.s*this.p}get fittedCentres(){const{diam:e,rectangleArea:t,circleArea:i,totalElementCount:s,areaType:a,boxGrid:n}=this;return a===I.CIRCLE?M(i,e/2,s):n?P(t,e/2,s):z(t,e/2,s)}get rectangleArea(){const{width:e,height:t,widthOffset:i,heightOffset:s,linkOffsets:a}=this,n=a?s:i,[r,l]=C,[o,c]=[Math.round(r-e/2),Math.round(l-t/2)];return new g([[o+n,c+s],[o+e-n,c+s],[o+e-n,c+t-s],[o+n,c+t-s],[o+n,c+s]])}get rectangleShell(){const{width:e,height:t}=this,[i,s]=C,[a,n]=[Math.round(i-e/2),Math.round(s-t/2)];return new g([[a,n],[a+e,n],[a+e,n+t],[a,n+t],[a,n]])}get circleArea(){const[e,t]=C;return new v(e,t,this.areaDiam/2-this.diamOffset)}get circleShell(){const[e,t]=C;return new v(e,t,this.areaDiam/2)}mounted(){const e=document.getElementById("canvas"),t=e.getContext("2d");if(!t)throw new Error("Canvas context not found");this.drawer=new O(t),this.redraw()}};$=U([Object(R["a"])({components:{[N["a"].name]:N["a"],[L["a"].name]:L["a"],[D["a"].name]:D["a"],[W["a"].name]:W["a"],[H["a"].name]:H["a"],[G["a"].name]:G["a"],[F["a"].name]:F["a"],[V["a"].Button.name]:V["a"].Button,[V["a"].Group.name]:V["a"].Group,[q["a"].name]:q["a"],[B["a"].name]:B["a"]},data(){return{AreaType:I,CANVAS_WIDTH:j,CANVAS_HEIGHT:S,WORKSPACE_WIDTH:T,WORKSPACE_HEIGHT:A}}})],$);var J=$,K=J,Q=(i("ef8d"),Object(r["a"])(K,p,b,!1,null,null,null)),X=Q.exports,Y={name:"Home",components:{CanvasArea:X},data(){const e=i("6030"),t=i("6030");return{logo:"8080"===window.location.port?e:t}}},Z=Y,ee=Object(r["a"])(Z,m,u,!1,null,null,null),te=ee.exports,ie=function(e,t,i,s){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function r(e){try{o(s.next(e))}catch(t){n(t)}}function l(e){try{o(s["throw"](e))}catch(t){n(t)}}function o(e){e.done?i(e.value):a(e.value).then(r,l)}o((s=s.apply(e,t||[])).next())}))};s["a"].use(h["a"]);const se=[{path:"/",name:"Home",component:te,meta:{requiresAuth:!0}}],ae=new h["a"]({mode:"history",routes:se});ae.beforeEach((e,t,i)=>ie(void 0,void 0,void 0,(function*(){i()})));var ne=ae;s["a"].config.productionTip=!1,new s["a"]({store:f,router:ne,render:e=>e(c)}).$mount("#app")},e76a:function(e,t,i){},ef8d:function(e,t,i){"use strict";i("48b9")}});
//# sourceMappingURL=app.84d75b16.js.map