(function(k){var f={init:function(t){if(this.attr("id")==""){k.error('You must define an unique id on your element - ex : $("#myId").jPaginator();')}if(this.length!=1){k.error('You must use this plugin with a single element - ex : $("#myId").jPaginator();')}k(this).html("").append("<div class='paginator_root'><div class='paginator_bmax left'></div><div class='paginator_b left'></div><div class='paginator_p_wrap'><div class='paginator_p_bloc'></div></div><div class='paginator_b right'></div><div class='paginator_bmax right'></div></div><div class='paginator_slider' class='ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all'><a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a></div>");var u={selectedPage:1,nbPages:100,length:10,widthPx:30,marginPx:1,withSlider:true,withMaxButton:true,withAcceleration:true,speed:2,coeffAcceleration:2,minSlidesForSlider:3};var s={realWid:0,curNum:1,infRel:0,cInfMax:0,cInf:0,nbMove:0,isMoving:false,isLimitL:false,isLimitR:false};return this.each(function(){var A=k(this);var z=A.data("jPaginator");if(t){k.extend(u,t)}A.find(".paginator_slider").slider({animate:false});for(i=1;i<=u.length+2;i++){A.find(".paginator_p_bloc").append(k("<div class='paginator_p'></div>"))}u.length=Math.min(u.length,u.nbPages);var y=true;if(u.nbPages<=u.length){A.find(".paginator_slider").hide();A.find(".paginator_slider").children().hide();A.find(".paginator_bmax").hide();A.find(".paginator_b").hide();y=false}var B=Math.ceil(u.nbPages/u.length);if(B<u.minSlidesForSlider){u.withSlider=false}if(!u.withSlider){A.find(".paginator_slider").hide();A.find(".paginator_slider").children().hide()}if(!u.withMaxButton){A.find(".paginator_bmax").hide()}var v=0;var x=A.find(".paginator_p").first().css("border-left-width");if(x.indexOf("px")>0){v=x.replace("px","")*1}s.realWid=u.widthPx+u.marginPx*2+v*2;var w=1*s.realWid*u.length;A.find(".paginator_p").css("width",u.widthPx+"px");A.find(".paginator_p").css("margin","0 "+u.marginPx+"px 0 "+u.marginPx+"px");A.find(".paginator_p_wrap").css("width",w+"px");A.find(".paginator_slider").css("width",w+"px");s.cInfMax=u.nbPages*s.realWid-(u.length*s.realWid);u.selectedPage=Math.min(u.selectedPage,u.nbPages);if(!z){A.data("jPaginator",{settings:u,controls:s})}p(A);A.find(".paginator_p").bind("click.jPaginator",function(){q(A,k(this))});if(u.withSlider){A.find(".paginator_slider").bind("slidechange.jPaginator",function(C,D){m(A,C,D)});A.find(".paginator_slider").bind("slide.jPaginator",function(C,D){m(A,C,D)})}if(y){A.find(".paginator_b").bind("mouseenter.jPaginator",function(){g(A,k(this))});A.find(".paginator_b").bind("mouseleave.jPaginator",function(){h(A,k(this))})}if(u.withMaxButton){A.find(".paginator_bmax").bind("click.jPaginator",function(){r(A,k(this))})}A.find(".paginator_p").bind("mouseenter.jPaginator",function(){b(A,k(this))});A.find(".paginator_p").bind("mouseleave.jPaginator",function(){c(A,k(this))})})},destroy:function(){return this.each(function(){k(window).unbind(".jPaginator");k(this).removeData("jPaginator")})}};function q(u,v){var t=u.data("jPaginator").settings;var s=1*v.html();u.find(".paginator_p.selected").removeClass("selected");t.selectedPage=s;u.data("jPaginator").settings=t;p(u)}function g(u,v){var s=u.data("jPaginator").controls;var t="left";if(v.hasClass("right")){t="right"}s.isMoving=true;u.data("jPaginator").controls=s;d(u,t)}function h(s,t){l(s)}function r(t,u){var s="left";if(u.hasClass("right")){s="right"}o(t,s)}function b(s,t){s.find(".paginator_p.hover").removeClass("hover");t.addClass("hover")}function c(s,t){s.find(".paginator_p.hover").removeClass("hover")}function p(u){var t=u.data("jPaginator").settings;var s=u.data("jPaginator").controls;var v=t.selectedPage-Math.floor((t.length-1)/2);n(u,v);e(u,s.cInf);if(typeof(jPaginatorPageClicked)=="function"){jPaginatorPageClicked(u.attr("id"),t.selectedPage)}}function n(u,v){var t=u.data("jPaginator").settings;var s=u.data("jPaginator").controls;u.find(".paginator_p.selected").removeClass("selected");v=Math.min(t.nbPages-t.length+1,v);v=Math.max(1,v);var w=v-2;u.find(".paginator_p_bloc .paginator_p").each(function(x){w+=1;k(this).html(w);if(t.selectedPage==w){k(this).addClass("selected")}});u.find(".paginator_p_bloc").css("left","-"+s.realWid+"px");s.curNum=v;s.cInf=(v-1)*s.realWid;u.data("jPaginator",{settings:t,controls:s})}function e(v,x){var u=v.data("jPaginator").settings;var t=v.data("jPaginator").controls;var w=Math.round((x/t.cInfMax)*100);var s=v.find(".paginator_slider").slider("option","value");if(w!=s){v.find(".paginator_slider").slider("option","value",w)}}function m(t,v,u){var s=t.data("jPaginator").controls;if(!s.isMoving){a(t,u.value)}}function a(v,t){var u=v.data("jPaginator").settings;var s=v.data("jPaginator").controls;t=Math.min(100,t);t=Math.max(0,t);var w=Math.round(s.cInfMax*t/100);var x=w-s.cInf;if(t==100){n(v,u.nbPages-u.length+1);return}if(t==0){n(v,1);return}j(v,x)}function j(w,y){var u=w.data("jPaginator").settings;var A=w.data("jPaginator").controls;var v=Math.abs(y)/y;var z=A.infRel+y;var B=v*Math.floor(Math.abs(z)/A.realWid);var x=z%A.realWid;A.infRel=x;var t=(A.curNum-1)*A.realWid+A.infRel;var s=A.curNum+B;if(s<1){t=-1}if(s>u.nbPages){t=A.cInfMax+1}if(t<0){doReset=true;n(w,1);A.cInf=0;A.infRel=0;e(w,0);A.isLimitL=true;l(w);return}if(t>A.cInfMax){doReset=true;n(w,u.nbPages);A.cInf=A.cInfMax;A.infRel=0;e(w,A.cInfMax);A.isLimitR=true;l(w);return}A.isLimitL=false;A.isLimitR=false;A.cInf=t;w.data("jPaginator",{settings:u,controls:A});if(y==0){return}if(B!=0){n(w,s)}e(w,A.cInf);w.find(".paginator_p_bloc").css("left",-1*x-A.realWid+"px")}function l(t){var s=t.data("jPaginator").controls;s.nbMove=0;s.isMoving=false;t.data("jPaginator").controls=s}function o(v,t){var u=v.data("jPaginator").settings;var s=v.data("jPaginator").controls;if(s.isLimitR&&t=="right"){return}if(s.isLimitL&&t=="left"){return}var w=Math.round(s.cInfMax/10);if(t=="left"){w*=-1}j(v,w);setTimeout(function(){s.nbMove+=1;o(v,t)},20)}function d(w,u){var v=w.data("jPaginator").settings;var t=w.data("jPaginator").controls;if(t.isMoving){var x=Math.min(Math.abs(v.speed),5);var s=Math.min(Math.abs(v.coeffAcceleration),5);if(v.withAcceleration){x=Math.round(x+Math.round(s*(t.nbMove*t.nbMove)/80000))}if(u=="left"){x*=-1}j(w,x);setTimeout(function(){t.nbMove+=1;d(w,u)},10)}}k.fn.jPaginator=function(s){if(f[s]){return f[s].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof s==="object"||!s){return f.init.apply(this,arguments)}else{k.error("Method "+s+" does not exist on jQuery.jPaginator")}}}})(jQuery);