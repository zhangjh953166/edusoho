webpackJsonp(["app/js/search/cloud/index"],{"287a080dacda2766cf12":function(n,e){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),o=function(){function n(e){t(this,n),this.$element=$(e.element),this.init()}return i(n,[{key:"init",value:function(){this.$element.find("#search-input-group .form-control").val()&&this.$element.find(".js-btn-clear").show(),echo.init(),this.initEvent()}},{key:"initEvent",value:function(){var n=this;this.$element.on("click",".js-btn-clear",function(e){return n.onBtnClear(e)}),this.$element.on("input propertychange","#search-input-group .form-control",function(e){return n.onSearchInput(e)})}},{key:"onBtnClear",value:function(n){var e=$(n.currentTarget);e.siblings("input").val("").end().hide()}},{key:"onSearchInput",value:function(n){var e=$(n.currentTarget),t=e.siblings(".js-btn-clear");e.val()?t.show():t.hide()}}]),n}();e.default=o},0:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}var o=t("287a080dacda2766cf12"),c=i(o);t("7840d638cc48059df0fc"),new c.default({element:"body"})},"7840d638cc48059df0fc":function(n,e){"use strict";$("body").on("click",".teacher-item .follow-btn",function(){var n=$(this);$.post(n.data("url"),function(){var e=n.data("loggedin");1===e&&(n.hide(),n.closest(".teacher-item").find(".unfollow-btn").show())})}).on("click",".unfollow-btn",function(){var n=$(this);$.post(n.data("url"),function(){}).always(function(){n.hide(),n.closest(".teacher-item").find(".follow-btn").show()})})}});