/**
*
* @license Guriddo jqGrid JS - v5.2.1 
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";a.fn.jqm=function(d){var f={overlay:50,closeoverlay:!0,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:e,ajaxText:"",target:e,modal:e,toTop:e,onShow:e,onHide:e,onLoad:e,heightOffset:150,widthOffset:100};return this.each(function(){if(this._jqm)return c[this._jqm].c=a.extend({},c[this._jqm].c,d);b++,this._jqm=b,c[b]={c:a.extend(f,a.jqm.params,d),a:e,w:a(this).addClass("jqmID"+b),s:b},f.trigger&&a(this).jqmAddTrigger(f.trigger)})},a.fn.jqmAddClose=function(a){return j(this,a,"jqmHide")},a.fn.jqmAddTrigger=function(a){return j(this,a,"jqmShow")},a.fn.jqmShow=function(b){return this.each(function(){a.jqm.open(this._jqm,b)})},a.fn.jqmHide=function(b){return this.each(function(){a.jqm.close(this._jqm,b)})},a.jqm={hash:{},open:function(b,g){var i=c[b],j=i.c,k="."+j.closeClass,l=parseInt(i.w.css("z-index"));l=l>0?l:3e3;var m=a("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":l-1,opacity:j.overlay/100});if(i.a)return e;if(i.t=g,i.a=!0,i.w.css("z-index",l),j.modal?(d[0]||setTimeout(function(){new h("bind")},1),d.push(b)):j.overlay>0?j.closeoverlay&&i.w.jqmAddClose(m):m=e,i.o=m?m.addClass(j.overlayClass).prependTo("body"):e,j.ajax){var n=j.target||i.w,o=j.ajax;n="string"==typeof n?a(n,i.w):a(n),o="@"===o.substr(0,1)?a(g).attr(o.substring(1)):o,n.html(j.ajaxText).load(o,function(){j.onLoad&&j.onLoad.call(this,i),k&&i.w.jqmAddClose(a(k,i.w)),f(i)})}else k&&i.w.jqmAddClose(a(k,i.w));return j.toTop&&i.o&&i.w.before('<span id="jqmP'+i.w[0]._jqm+'"></span>').insertAfter(i.o),j.onShow?j.onShow(i):i.w.show(),f(i),e},close:function(b){var f=c[b];return f.a?(f.a=e,d[0]&&(d.pop(),d[0]||new h("unbind")),f.c.toTop&&f.o&&a("#jqmP"+f.w[0]._jqm).after(f.w).remove(),f.c.onHide?f.c.onHide(f):(f.w.hide(),f.o&&f.o.remove()),e):e},params:{}};var b=0,c=a.jqm.hash,d=[],e=!1,f=function(a){void 0===a.c.focusField&&(a.c.focusField=0),a.c.focusField>=0&&g(a)},g=function(b){try{a(":input:visible",b.w)[parseInt(b.c.focusField,10)].focus()}catch(a){}},h=function(b){a(document)[b]("keypress",i)[b]("keydown",i)[b]("mousedown",i)},i=function(b){var e=c[d[d.length-1]],f=!a(b.target).parents(".jqmID"+e.s)[0];return f&&(a(".jqmID"+e.s).each(function(){var c=a(this),d=c.offset();if(d.top<=b.pageY&&b.pageY<=d.top+c.height()+e.c.heightOffset&&d.left<=b.pageX&&b.pageX<=d.left+c.width()+e.c.widthOffset)return f=!1,!1}),g(e)),!f},j=function(b,d,f){return b.each(function(){var b=this._jqm;a(d).each(function(){this[f]||(this[f]=[],a(this).click(function(){for(var a in{jqmShow:1,jqmHide:1})for(var b in this[a])c[this[a][b]]&&c[this[a][b]].w[a](this);return e})),this[f].push(b)})})}});