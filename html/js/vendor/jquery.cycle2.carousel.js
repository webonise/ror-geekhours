!function(e){"use strict";e(document).on("cycle-bootstrap",function(e,i,l){"carousel"===i.fx&&(l.getSlideIndex=function(e){var i=this.opts()._carouselWrap.children(),l=i.index(e);return l%i.length},l.next=function(){var e=i.reverse?-1:1;i.allowWrap===!1&&i.currSlide+e>i.slideCount-i.carouselVisible||(i.API.advanceSlide(e),i.API.trigger("cycle-next",[i]).log("cycle-next"))})}),e.fn.cycle.transitions.carousel={preInit:function(i){i.hideNonActive=!1,i.container.on("cycle-destroyed",e.proxy(this.onDestroy,i.API)),i.API.stopTransition=this.stopTransition;for(var l=0;l<i.startingSlide;l++)i.container.append(i.slides[0])},postInit:function(i){var l,s,r,t,o=i.carouselVertical;i.carouselVisible&&i.carouselVisible>i.slideCount&&(i.carouselVisible=i.slideCount-1);var n=i.carouselVisible||i.slides.length,c={display:o?"block":"inline-block",position:"static"};if(i.container.css({position:"relative",overflow:"hidden"}),i.slides.css(c),i._currSlide=i.currSlide,t=e('<div class="cycle-carousel-wrap"></div>').prependTo(i.container).css({margin:0,padding:0,top:0,left:0,position:"absolute"}).append(i.slides),i._carouselWrap=t,o||t.css("white-space","nowrap"),i.allowWrap!==!1){for(s=0;s<(void 0===i.carouselVisible?2:1);s++){for(l=0;l<i.slideCount;l++)t.append(i.slides[l].cloneNode(!0));for(l=i.slideCount;l--;)t.prepend(i.slides[l].cloneNode(!0))}t.find(".cycle-slide-active").removeClass("cycle-slide-active"),i.slides.eq(i.startingSlide).addClass("cycle-slide-active")}i.pager&&i.allowWrap===!1&&(r=i.slideCount-n,e(i.pager).children().filter(":gt("+r+")").hide()),i._nextBoundry=i.slideCount-i.carouselVisible,this.prepareDimensions(i)},prepareDimensions:function(i){var l,s,r,t=i.carouselVertical,o=i.carouselVisible||i.slides.length;if(i.carouselFluid&&i.carouselVisible?i._carouselResizeThrottle||this.fluidSlides(i):i.carouselVisible&&i.carouselSlideDimension?(l=o*i.carouselSlideDimension,i.container[t?"height":"width"](l)):i.carouselVisible&&(l=o*e(i.slides[0])[t?"outerHeight":"outerWidth"](!0),i.container[t?"height":"width"](l)),s=i.carouselOffset||0,i.allowWrap!==!1)if(i.carouselSlideDimension)s-=(i.slideCount+i.currSlide)*i.carouselSlideDimension;else{r=i._carouselWrap.children();for(var n=0;n<i.slideCount+i.currSlide;n++)s-=e(r[n])[t?"outerHeight":"outerWidth"](!0)}i._carouselWrap.css(t?"top":"left",s)},fluidSlides:function(i){function l(){clearTimeout(r),r=setTimeout(s,20)}function s(){i._carouselWrap.stop(!1,!0);var e=i.container.width()/i.carouselVisible;e=Math.ceil(e-o),i._carouselWrap.children().width(e),i._sentinel&&i._sentinel.width(e),n(i)}var r,t=i.slides.eq(0),o=t.outerWidth()-t.width(),n=this.prepareDimensions;e(window).on("resize",l),i._carouselResizeThrottle=l,s()},transition:function(i,l,s,r,t){var o,n={},c=i.nextSlide-i.currSlide,a=i.carouselVertical,d=i.speed;if(i.allowWrap===!1){r=c>0;var u=i._currSlide,p=i.slideCount-i.carouselVisible;c>0&&i.nextSlide>p&&u==p?c=0:c>0&&i.nextSlide>p?c=i.nextSlide-u-(i.nextSlide-p):0>c&&i.currSlide>p&&i.nextSlide>p?c=0:0>c&&i.currSlide>p?c+=i.currSlide-p:u=i.currSlide,o=this.getScroll(i,a,u,c),i.API.opts()._currSlide=i.nextSlide>p?p:i.nextSlide}else r&&0===i.nextSlide?(o=this.getDim(i,i.currSlide,a),t=this.genCallback(i,r,a,t)):r||i.nextSlide!=i.slideCount-1?o=this.getScroll(i,a,i.currSlide,c):(o=this.getDim(i,i.currSlide,a),t=this.genCallback(i,r,a,t));n[a?"top":"left"]=r?"-="+o:"+="+o,i.throttleSpeed&&(d=o/e(i.slides[0])[a?"height":"width"]()*i.speed),i._carouselWrap.animate(n,d,i.easing,t)},getDim:function(i,l,s){var r=e(i.slides[l]);return r[s?"outerHeight":"outerWidth"](!0)},getScroll:function(e,i,l,s){var r,t=0;if(s>0)for(r=l;l+s>r;r++)t+=this.getDim(e,r,i);else for(r=l;r>l+s;r--)t+=this.getDim(e,r,i);return t},genCallback:function(i,l,s,r){return function(){var l=e(i.slides[i.nextSlide]).position(),t=0-l[s?"top":"left"]+(i.carouselOffset||0);i._carouselWrap.css(i.carouselVertical?"top":"left",t),r()}},stopTransition:function(){var e=this.opts();e.slides.stop(!1,!0),e._carouselWrap.stop(!1,!0)},onDestroy:function(){var i=this.opts();i._carouselResizeThrottle&&e(window).off("resize",i._carouselResizeThrottle),i.slides.prependTo(i.container),i._carouselWrap.remove()}}}(jQuery);