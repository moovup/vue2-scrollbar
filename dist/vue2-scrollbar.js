/*!
 * Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Scrollbar @ Version 0.0.2,
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Vue2Scrollbar=e():t.Vue2Scrollbar=e()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="../dist/",e(0)}([function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=r(7),o=i(n);t.exports=o.default},function(t,e){t.exports=function(t,e,r,i){var n,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(n=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),i){var l=Object.create(s.computed||null);Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}}),s.computed=l}return{esModule:n,exports:o,options:s}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{width:0,dragging:!1,start:0}},watch:{"wrapper.width":function(t,e){this.calculateSize(this)},"area.width":function(t,e){this.calculateSize(this)}},methods:{startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start=t.clientX},onDrag:function(t){if(this.dragging){this.onDragging(),t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t;var e=t.clientX-this.start,r=e/this.wrapper.width*100;this.start=t.clientX;var i=this.scrolling+r;this.onChangePosition(i,"horizontal")}},stopDrag:function(t){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(t){var e=t.target===this.$refs.container;if(e){var r=this.$refs.scrollbar.getBoundingClientRect(),i=t.clientX-r.left,n=this.width/2,o=i/this.wrapper.width*100-n;this.start=t.clientX;var a=this.scrolling+o;this.onChangePosition(a,"horizontal")}},calculateSize:function(t){this.width=t.wrapper.width/t.area.width*100}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{height:0,dragging:!1,start:0}},watch:{"wrapper.height":function(t,e){this.calculateSize(this)},"area.height":function(t,e){this.calculateSize(this)}},methods:{startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start=t.clientY},onDrag:function(t){if(this.dragging){this.onDragging(),t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t;var e=t.clientY-this.start,r=e/this.wrapper.height*100;this.start=t.clientY;var i=this.scrolling+r;this.onChangePosition(i,"vertical")}},stopDrag:function(t){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(t){var e=t.target===this.$refs.container;if(e){var r=this.$refs.scrollbar.getBoundingClientRect(),i=t.clientY-r.top,n=this.height/2,o=i/this.wrapper.height*100-n;this.start=t.clientY;var a=this.scrolling+o;this.onChangePosition(a,"vertical")}},calculateSize:function(t){this.height=t.wrapper.height/t.area.height*100},getSize:function(){var t=this.$refs.container.parentElement,e=t.parentElement,r={scrollAreaHeight:t.children[0].clientHeight,scrollAreaWidth:t.children[0].clientWidth,scrollWrapperHeight:e.clientHeight,scrollWrapperWidth:e.clientWidth};return r}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),o=i(n),a=r(5),s=i(a);e.default={props:{classes:String,style:Object,speed:{type:Number,default:53}},components:{VerticalScrollbar:o.default,HorizontalScrollbar:s.default},data:function(){return{ready:!1,top:0,left:0,scrollAreaHeight:null,scrollAreaWidth:null,scrollWrapperHeight:null,scrollWrapperWidth:null,vMovement:0,hMovement:0,dragging:!1,start:{y:0,x:0}}},methods:{scroll:function(t){var e=this;this.calculateSize(function(){var r=e.speed,i=t.shiftKey,n=t.deltaY>0?r:-r,o=t.deltaX>0?r:-r;i&&0==t.deltaX&&(o=t.deltaY>0?r:-r);var a=e.top+n,s=e.left+o,l=e.scrollAreaHeight>e.scrollWrapperHeight,c=e.scrollAreaWidth>e.scrollWrapperWidth;l&&!i&&e.normalizeVertical(a)&&t.preventDefault(),i&&c&&e.normalizeHorizontal(s)&&t.preventDefault()})},startDrag:function(t){var e=this;t=t.changedTouches?t.changedTouches[0]:t,this.calculateSize(function(){e.dragging=!0,e.start={y:t.pageY,x:t.pageX}})},onDrag:function(t){if(this.dragging){var e=t.changedTouches?t.changedTouches[0]:t,r=this.start.y-e.clientY,i=this.start.x-e.clientX;this.start={y:e.clientY,x:e.clientX};var n=this.top+r,o=this.left+i,a=this.normalizeVertical(n),s=this.normalizeHorizontal(o);(a||s)&&t.preventDefault()}},stopDrag:function(t){this.dragging=!1},scrollToY:function(t){this.normalizeVertical(t)},scrollToX:function(t){this.normalizeVertical(t)},normalizeVertical:function(t){var e=this.getSize();if(e.scrollAreaHeight<=e.scrollWrapperHeight)return!1;var r=e.scrollAreaHeight-e.scrollWrapperHeight;return t>r?t=r:t<0&&(t=0),this.top!==t&&(this.top=t,this.vMovement=t/e.scrollAreaHeight*100,!0)},normalizeHorizontal:function(t){var e=this.getSize();if(e.scrollAreaWidth<=e.scrollWrapperWidth)return!1;var r=e.scrollAreaWidth-this.scrollWrapperWidth;return t>r?t=r:t<0&&(t=0),this.left!==t&&(this.left=t,this.hMovement=t/e.scrollAreaWidth*100,!0)},handleChangePosition:function(t,e){var r=this;this.calculateSize(function(){var i=t/100;"vertical"==e&&r.normalizeVertical(i*r.scrollAreaHeight),"horizontal"==e&&r.normalizeHorizontal(i*r.scrollAreaWidth)})},handleScrollbarDragging:function(){this.dragging=!0},handleScrollbarStopDrag:function(){this.dragging=!1},getSize:function(){var t=this.$refs.scrollArea,e=this.$refs.scrollWrapper,r={scrollAreaHeight:t.children[0].clientHeight,scrollAreaWidth:t.children[0].clientWidth,scrollWrapperHeight:e.clientHeight,scrollWrapperWidth:e.clientWidth};return r},calculateSize:function(t){"function"!=typeof t&&(t=null);var e=this.getSize();return e.scrollWrapperHeight!==this.scrollWrapperHeight||e.scrollWrapperWidth!==this.scrollWrapperWidth||e.scrollAreaHeight!==this.scrollAreaHeight||e.scrollAreaWidth!==this.scrollAreaWidth?(this.scrollAreaHeight=e.scrollAreaHeight,this.scrollAreaWidth=e.scrollAreaWidth,this.scrollWrapperHeight=e.scrollWrapperHeight,this.scrollWrapperWidth=e.scrollWrapperWidth,this.ready=!0,!!t&&t()):!!t&&t()}},mounted:function(){this.calculateSize(),window.addEventListener("resize",this.calculateSize)},beforeDestroy:function(){window.removeEventListener("resize",this.calculateSize)}}},function(t,e,r){var i=r(1)(r(2),r(8),null,null);t.exports=i.exports},function(t,e,r){var i=r(1)(r(3),r(10),null,null);t.exports=i.exports},function(t,e,r){var i=r(1)(r(4),r(9),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.width<100?r("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-horizontal",on:{click:t.jump}},[r("div",{ref:"scrollbar",class:"scrollbar"+(t.dragging||t.draggingFromParent?"":" vue-scrollbar-transition"),style:{width:this.width+"%",left:this.scrolling+"%"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"scrollWrapper",class:"vue-scrollbar__wrapper"+(this.classes?" "+this.classes:""),style:this.style,on:{click:t.calculateSize}},[r("div",{ref:"scrollArea",class:"vue-scrollbar__area"+(this.dragging?" ":" vue-scrollbar-transition"),style:{marginTop:this.top*-1+"px",marginLeft:this.left*-1+"px"},on:{wheel:t.scroll,touchstart:t.startDrag,touchmove:t.onDrag,touchend:t.stopDrag}},[t._t("default"),t._v(" "),t.ready?r("vertical-scrollbar",{attrs:{area:{height:t.scrollAreaHeight},wrapper:{height:t.scrollWrapperHeight},scrolling:t.vMovement,"dragging-from-parent":t.dragging,"on-change-position":t.handleChangePosition,"on-dragging":t.handleScrollbarDragging,"on-stop-drag":t.handleScrollbarStopDrag}}):t._e(),t._v(" "),t.ready?r("horizontal-scrollbar",{attrs:{area:{width:t.scrollAreaWidth},wrapper:{width:t.scrollWrapperWidth},scrolling:t.hMovement,"dragging-from-parent":t.dragging,"on-change-position":t.handleChangePosition,"on-dragging":t.handleScrollbarDragging,"on-stop-drag":t.handleScrollbarStopDrag}}):t._e()],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.height<100?r("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-vertical",on:{click:t.jump}},[r("div",{ref:"scrollbar",class:"scrollbar"+(t.dragging||t.draggingFromParent?"":" vue-scrollbar-transition"),style:{height:t.height+"%",top:t.scrolling+"%"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]):t._e()])},staticRenderFns:[]}}])});