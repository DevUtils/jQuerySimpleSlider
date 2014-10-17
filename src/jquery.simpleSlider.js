// jquery.mobile-events.min.js
// https://github.com/benmajor/jQuery-Mobile-Events
/* jshint ignore:start */
(function(e){function d(){var e=o();if(e!==u){u=e;i.trigger("orientationchange")}}function E(t,n,r,i){var s=r.type;r.type=n;e.event.dispatch.call(t,r,i);r.type=s}e.attrFn=e.attrFn||{};var t=navigator.userAgent.toLowerCase(),n=t.indexOf("chrome")>-1&&(t.indexOf("windows")>-1||t.indexOf("macintosh")>-1||t.indexOf("linux")>-1)&&t.indexOf("mobile")<0&&t.indexOf("nexus")<0,r={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:"ontouchstart"in document.documentElement&&!n,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:"ontouchstart"in document.documentElement&&!n?"touchstart":"mousedown",endevent:"ontouchstart"in document.documentElement&&!n?"touchend":"mouseup",moveevent:"ontouchstart"in document.documentElement&&!n?"touchmove":"mousemove",tapevent:"ontouchstart"in document.documentElement&&!n?"tap":"click",scrollevent:"ontouchstart"in document.documentElement&&!n?"touchmove":"scroll",hold_timer:null,tap_timer:null};e.isTouchCapable=function(){return r.touch_capable};e.getStartEvent=function(){return r.startevent};e.getEndEvent=function(){return r.endevent};e.getMoveEvent=function(){return r.moveevent};e.getTapEvent=function(){return r.tapevent};e.getScrollEvent=function(){return r.scrollevent};e.each(["tapstart","tapend","tap","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,n){e.fn[n]=function(e){return e?this.on(n,e):this.trigger(n)};e.attrFn[n]=true});e.event.special.tapstart={setup:function(){var t=this,n=e(t);n.on(r.startevent,function(e){n.data("callee",arguments.callee);if(e.which&&e.which!==1){return false}var i=e.originalEvent,s={position:{x:r.touch_capable?i.touches[0].screenX:e.screenX,y:r.touch_capable?i.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.touches[0].pageX-i.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.touches[0].pageY-i.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tapstart",e,s);return true})},remove:function(){e(this).off(r.startevent,e(this).data.callee)}};e.event.special.tapmove={setup:function(){var t=this,n=e(t);n.on(r.moveevent,function(e){n.data("callee",arguments.callee);var i=e.originalEvent,s={position:{x:r.touch_capable?i.touches[0].screenX:e.screenX,y:r.touch_capable?i.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.touches[0].pageX-i.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.touches[0].pageY-i.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tapmove",e,s);return true})},remove:function(){e(this).off(r.moveevent,e(this).data.callee)}};e.event.special.tapend={setup:function(){var t=this,n=e(t);n.on(r.endevent,function(e){n.data("callee",arguments.callee);var i=e.originalEvent;var s={position:{x:r.touch_capable?i.changedTouches[0].screenX:e.screenX,y:r.touch_capable?i.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.changedTouches[0].pageX-i.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.changedTouches[0].pageY-i.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tapend",e,s);return true})},remove:function(){e(this).off(r.endevent,e(this).data.callee)}};e.event.special.taphold={setup:function(){var t=this,n=e(t),i,s,o={x:0,y:0};n.on(r.startevent,function(e){if(e.which&&e.which!==1){return false}else{n.data("tapheld",false);i=e.target;var s=e.originalEvent;var u=(new Date).getTime(),a={x:r.touch_capable?s.touches[0].screenX:e.screenX,y:r.touch_capable?s.touches[0].screenY:e.screenY},f={x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY};o.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;o.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;r.hold_timer=window.setTimeout(function(){var l=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,c=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;if(e.target==i&&o.x==l&&o.y==c){n.data("tapheld",true);var h=(new Date).getTime(),p={x:r.touch_capable?s.touches[0].screenX:e.screenX,y:r.touch_capable?s.touches[0].screenY:e.screenY},d={x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY};duration=h-u;var v={startTime:u,endTime:h,startPosition:a,startOffset:f,endPosition:p,endOffset:d,duration:duration,target:e.target};n.data("callee1",arguments.callee);E(t,"taphold",e,v)}},r.taphold_threshold);return true}}).on(r.endevent,function(){n.data("callee2",arguments.callee);n.data("tapheld",false);window.clearTimeout(r.hold_timer)})},remove:function(){e(this).off(r.startevent,e(this).data.callee1).off(r.endevent,e(this).data.callee2)}};e.event.special.doubletap={setup:function(){var t=this,n=e(t),i,s,o,u;n.on(r.startevent,function(e){if(e.which&&e.which!==1){return false}else if(!n.data("lastTouch")){n.data("doubletapped",false);i=e.target;n.data("callee1",arguments.callee);u=e.originalEvent;o={position:{x:r.touch_capable?u.touches[0].screenX:e.screenX,y:r.touch_capable?u.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?u.touches[0].pageX-u.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?u.touches[0].pageY-u.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};return true}}).on(r.endevent,function(e){var u=(new Date).getTime();var a=n.data("lastTouch")||u+1;var f=u-a;window.clearTimeout(s);n.data("callee2",arguments.callee);if(f<r.doubletap_int&&f>0&&e.target==i&&f>100){n.data("doubletapped",true);window.clearTimeout(r.tap_timer);var l={position:{x:r.touch_capable?e.originalEvent.changedTouches[0].screenX:e.screenX,y:r.touch_capable?e.originalEvent.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?e.originalEvent.changedTouches[0].pageX-e.originalEvent.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?e.originalEvent.changedTouches[0].pageY-e.originalEvent.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};var c={firstTap:o,secondTap:l,interval:l.time-o.time};E(t,"doubletap",e,c)}else{n.data("lastTouch",u);s=window.setTimeout(function(e){window.clearTimeout(s)},r.doubletap_int,[e])}n.data("lastTouch",u)})},remove:function(){e(this).off(r.startevent,e(this).data.callee1).off(r.endevent,e(this).data.callee2)}};e.event.special.singletap={setup:function(){var t=this,n=e(t),i=null,s=null,o={x:0,y:0};n.on(r.startevent,function(e){if(e.which&&e.which!==1){return false}else{s=(new Date).getTime();i=e.target;n.data("callee1",arguments.callee);o.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;o.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;return true}}).on(r.endevent,function(e){n.data("callee2",arguments.callee);if(e.target==i){end_pos_x=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.pageX;end_pos_y=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageY:e.pageY;r.tap_timer=window.setTimeout(function(){if(!n.data("doubletapped")&&!n.data("tapheld")&&o.x==end_pos_x&&o.y==end_pos_y){var i=e.originalEvent;var u={position:{x:r.touch_capable?i.changedTouches[0].screenX:e.screenX,y:r.touch_capable?i.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.changedTouches[0].pageX-i.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.changedTouches[0].pageY-i.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};if(u.time-s<r.taphold_threshold){E(t,"singletap",e,u)}}},r.doubletap_int)}})},remove:function(){e(this).off(r.startevent,e(this).data.callee1).off(r.endevent,e(this).data.callee2)}};e.event.special.tap={setup:function(){var t=this,n=e(t),i=false,s=null,o,u={x:0,y:0};n.on(r.startevent,function(e){n.data("callee1",arguments.callee);if(e.which&&e.which!==1){return false}else{i=true;u.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;u.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;o=(new Date).getTime();s=e.target;return true}}).on(r.endevent,function(e){n.data("callee2",arguments.callee);var a=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,f=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageY:e.pageY;diff_x=u.x-a,diff_y=u.y-f;if(s==e.target&&i&&(new Date).getTime()-o<r.taphold_threshold&&(u.x==a&&u.y==f||diff_x>=-r.tap_pixel_range&&diff_x<=r.tap_pixel_range&&diff_y>=-r.tap_pixel_range&&diff_y<=r.tap_pixel_range)){var l=e.originalEvent;var c={position:{x:r.touch_capable?l.changedTouches[0].screenX:e.screenX,y:r.touch_capable?l.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?l.changedTouches[0].pageX-l.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?l.changedTouches[0].pageY-l.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tap",e,c)}})},remove:function(){e(this).off(r.startevent,e(this).data.callee1).off(r.endevent,e(this).data.callee2)}};e.event.special.swipe={setup:function(){function f(t){n=e(t.target);n.data("callee1",arguments.callee);o.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX;o.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;u.x=o.x;u.y=o.y;i=true;var s=t.originalEvent;a={position:{x:r.touch_capable?s.touches[0].screenX:t.screenX,y:r.touch_capable?s.touches[0].screenY:t.screenY},offset:{x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};var f=new Date;while(new Date-f<100){}}function l(t){n=e(t.target);n.data("callee2",arguments.callee);u.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX;u.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;window.clearTimeout(r.hold_timer);var f;var l=n.data("xthreshold"),c=n.data("ythreshold"),h=typeof l!=="undefined"&&l!==false&&parseInt(l)?parseInt(l):r.swipe_h_threshold,p=typeof c!=="undefined"&&c!==false&&parseInt(c)?parseInt(c):r.swipe_v_threshold;if(o.y>u.y&&o.y-u.y>p){f="swipeup"}if(o.x<u.x&&u.x-o.x>h){f="swiperight"}if(o.y<u.y&&u.y-o.y>p){f="swipedown"}if(o.x>u.x&&o.x-u.x>h){f="swipeleft"}if(f!=undefined&&i){o.x=0;o.y=0;u.x=0;u.y=0;i=false;var d=t.originalEvent;endEvnt={position:{x:r.touch_capable?d.touches[0].screenX:t.screenX,y:r.touch_capable?d.touches[0].screenY:t.screenY},offset:{x:r.touch_capable?d.touches[0].pageX-d.touches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?d.touches[0].pageY-d.touches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};var v=Math.abs(a.position.x-endEvnt.position.x),m=Math.abs(a.position.y-endEvnt.position.y);var g={startEvnt:a,endEvnt:endEvnt,direction:f.replace("swipe",""),xAmount:v,yAmount:m,duration:endEvnt.time-a.time};s=true;n.trigger("swipe",g).trigger(f,g)}}function c(t){n=e(t.target);var o="";n.data("callee3",arguments.callee);if(s){var u=n.data("xthreshold"),f=n.data("ythreshold"),l=typeof u!=="undefined"&&u!==false&&parseInt(u)?parseInt(u):r.swipe_h_threshold,c=typeof f!=="undefined"&&f!==false&&parseInt(f)?parseInt(f):r.swipe_v_threshold;var h=t.originalEvent;endEvnt={position:{x:r.touch_capable?h.changedTouches[0].screenX:t.screenX,y:r.touch_capable?h.changedTouches[0].screenY:t.screenY},offset:{x:r.touch_capable?h.changedTouches[0].pageX-h.changedTouches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?h.changedTouches[0].pageY-h.changedTouches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};if(a.position.y>endEvnt.position.y&&a.position.y-endEvnt.position.y>c){o="swipeup"}if(a.position.x<endEvnt.position.x&&endEvnt.position.x-a.position.x>l){o="swiperight"}if(a.position.y<endEvnt.position.y&&endEvnt.position.y-a.position.y>c){o="swipedown"}if(a.position.x>endEvnt.position.x&&a.position.x-endEvnt.position.x>l){o="swipeleft"}var p=Math.abs(a.position.x-endEvnt.position.x),d=Math.abs(a.position.y-endEvnt.position.y);var v={startEvnt:a,endEvnt:endEvnt,direction:o.replace("swipe",""),xAmount:p,yAmount:d,duration:endEvnt.time-a.time};n.trigger("swipeend",v)}i=false;s=false}var t=this,n=e(t),i=false,s=false,o={x:0,y:0},u={x:0,y:0},a;n.on(r.startevent,f);n.on(r.moveevent,l);n.on(r.endevent,c)},remove:function(){e(this).off(r.startevent,e(this).data.callee1).off(r.moveevent,e(this).data.callee2).off(r.endevent,e(this).data.callee3)}};e.event.special.scrollstart={setup:function(){function o(e,n){i=n;E(t,i?"scrollstart":"scrollend",e)}var t=this,n=e(t),i,s;n.on(r.scrollevent,function(e){n.data("callee",arguments.callee);if(!i){o(e,true)}clearTimeout(s);s=setTimeout(function(){o(e,false)},50)})},remove:function(){e(this).off(r.scrollevent,e(this).data.callee)}};var i=e(window),s,o,u,a,f,l={0:true,180:true};if(r.orientation_support){var c=window.innerWidth||e(window).width(),h=window.innerHeight||e(window).height(),p=50;a=c>h&&c-h>p;f=l[window.orientation];if(a&&f||!a&&!f){l={"-90":true,90:true}}}e.event.special.orientationchange=s={setup:function(){if(r.orientation_support){return false}u=o();i.on("throttledresize",d);return true},teardown:function(){if(r.orientation_support){return false}i.off("throttledresize",d);return true},add:function(e){var t=e.handler;e.handler=function(e){e.orientation=o();return t.apply(this,arguments)}}};e.event.special.orientationchange.orientation=o=function(){var e=true,t=document.documentElement;if(r.orientation_support){e=l[window.orientation]}else{e=t&&t.clientWidth/t.clientHeight<1.1}return e?"portrait":"landscape"};e.event.special.throttledresize={setup:function(){e(this).on("resize",m)},teardown:function(){e(this).off("resize",m)}};var v=250,m=function(){b=(new Date).getTime();w=b-g;if(w>=v){g=b;e(this).trigger("throttledresize")}else{if(y){window.clearTimeout(y)}y=window.setTimeout(d,v-w)}},g=0,y,b,w;e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe"},function(t,n,r){e.event.special[t]={setup:function(){e(this).on(n,e.noop)}}})})(jQuery);
/* jshint ignore:end */

(function($){

	var defaults =
	{
		width  : 800,
		height : 300,
		responsive : false,
		arrows : 
		{
			autohide : false
		},
		captions:
		{
			autohide : false
		},
	};
	var objects = [];

	var methods =
	{
		init : function(options)
		{
			var opts = $.extend( {}, defaults, options );

			return this.each(function()
			{
				$.fn.simpleSlider.process($(this), opts);
			});
		},
		previous : function(p_arg) { return this.each(function() { $.fn.simpleSlider.previous(this, p_arg); }); },
		next     : function(p_arg) { return this.each(function() { $.fn.simpleSlider.next(this, p_arg); }); },
		goto     : function(p_arg) { return this.each(function() { $.fn.simpleSlider.goto(this, p_arg); }); } 
	};

	$.fn.simpleSlider = function(methodOrOptions)
	{
		if ( methods[methodOrOptions] )
		{
			return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if ( typeof methodOrOptions === 'object' || ! methodOrOptions )
		{
			return methods.init.apply( this, arguments );
		}
		else
		{
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.simpleSlider');
		}
	};

	$.fn.simpleSlider.makeId = function()
	{
		var text = "";
		var possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789";
		var pl = possible.length;
		for(var i = 0; i < 8; i++)
		{
			text += possible.charAt(Math.floor(Math.random() * pl));
		}
		return text;
	};

	$.fn.simpleSlider._get_ids = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids === undefined) { return false; }
		return ids;
	};

	$.fn.simpleSlider.goto = function(p_arg, p_index)
	{
		var ids = $.fn.simpleSlider._get_ids(p_arg);
		if (!ids) { return; }
		if ($('.simpleSlider.' + ids).hasClass('lock-anim')) { return; }
		var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
		var x_index = p_index - 1;
		if (x_index == index) { return; }

		if (x_index > index)
		{
			$.fn.simpleSlider.next(ids, x_index - index);
		}
		else
		{
			$.fn.simpleSlider.previous(ids, index - x_index);
		}
	};

	$.fn.simpleSlider.previous = function(p_arg, p_quant)
	{
		var ids = $.fn.simpleSlider._get_ids(p_arg);
		if (!ids) { return; }
		p_quant = (p_quant === undefined) ? 1 : parseInt(p_quant);

		if ($('.simpleSlider.' + ids).hasClass('lock-anim')) { return; }
		$('.simpleSlider.' + ids).addClass('lock-anim');
		
		if ($('.simpleSlider.' + ids + ' ul li:first.slide-active').length > 0)
		{
			$('.simpleSlider.' + ids + ' ul li:last').detach().prependTo( $('.simpleSlider.' + ids + ' ul') );
			$('.simpleSlider.' + ids + ' ul').css('marginLeft', '-=' + objects[ids].options.get_width() + 'px');

			$('.simpleSlider.' + ids + ' ul').animate
			(
				{'margin-left': '+=' + objects[ids].options.get_width() + 'px'},
				'fast',
				function()
				{
					$('.simpleSlider.' + ids + ' ul li:first').detach().appendTo( $('.simpleSlider.' + ids + ' ul') );
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '0px');
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '-' + ( objects[ids].options.get_width() * ($('.simpleSlider.' + ids + ' ul li').length-1) ) + 'px');
					$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
					$('.simpleSlider.' + ids + ' ul li:last').addClass('slide-active');
					$.fn.simpleSlider._updateCaption(ids);
					$('.simpleSlider.' + ids).removeClass('lock-anim');
				}
			);
			return;
		}

		var dist = p_quant * objects[ids].options.get_width();
		$('.simpleSlider.' + ids + ' ul').animate
		(
			{'margin-left': '+=' + dist + 'px'},
			'fast',
			function()
			{
				var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
				$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
				$('.simpleSlider.' + ids + ' ul li:eq(' + (index - p_quant) + ')').addClass('slide-active');
				$.fn.simpleSlider._updateCaption(ids);
				$('.simpleSlider.' + ids).removeClass('lock-anim');
			}
		);
	};

	$.fn.simpleSlider.next = function(p_arg, p_quant)
	{
		var ids = $.fn.simpleSlider._get_ids(p_arg);
		if (!ids) { return; }
		p_quant = (p_quant === undefined) ? 1 : parseInt(p_quant);

		if ($('.simpleSlider.' + ids).hasClass('lock-anim')) { return; }
		$('.simpleSlider.' + ids).addClass('lock-anim');

		if ($('.simpleSlider.' + ids + ' ul li:last.slide-active').length > 0)
		{
			$('.simpleSlider.' + ids + ' ul li:first').detach().appendTo( $('.simpleSlider.' + ids + ' ul') );
			$('.simpleSlider.' + ids + ' ul').css('marginLeft', '+=' + objects[ids].options.get_width() + 'px');

			$('.simpleSlider.' + ids + ' ul').animate
			(
				{'margin-left': '-=' + objects[ids].options.get_width() + 'px'},
				'fast',
				function()
				{
					$('.simpleSlider.' + ids + ' ul li:last').detach().prependTo( $('.simpleSlider.' + ids + ' ul') );
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '0px');
					$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
					$('.simpleSlider.' + ids + ' ul li:first').addClass('slide-active');
					$.fn.simpleSlider._updateCaption(ids);
					$('.simpleSlider.' + ids).removeClass('lock-anim');
				}
			);
			return;
		}

		var dist = p_quant * objects[ids].options.get_width();
		$('.simpleSlider.' + ids + ' ul').animate
		(
			{'margin-left': '-=' + dist + 'px'},
			'fast',
			function()
			{
				var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
				$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
				$('.simpleSlider.' + ids + ' ul li:eq(' + (index + p_quant) + ')').addClass('slide-active');
				$.fn.simpleSlider._updateCaption(ids);
				$('.simpleSlider.' + ids).removeClass('lock-anim');
			}
		);
	};

	$.fn.simpleSlider._updateCaption = function(p_ids, p_direction)
	{
		var index = $('.simpleSlider.' + p_ids + ' ul li.slide-active').index();
		var mark = $('.simpleSlider.' + p_ids + ' .vitrine ol.sl-indicators li.active').index();
		if (index != mark)
		{
			$('.simpleSlider.' + p_ids + ' .vitrine ol.sl-indicators li.active').removeClass('active');
			$('.simpleSlider.' + p_ids + ' .vitrine ol.sl-indicators li:eq(' + index + ')').addClass('active');

		}
		var title = $('.simpleSlider.' + p_ids + ' ul li.slide-active').attr('title');
		if ( (title !== '') && (title !== undefined) )
		{
			var $caption = $('.simpleSlider.' + p_ids + ' .caption');
			$caption.html(title);

			$('.simpleSlider.' + p_ids + ' .caption').animate( {'bottom': 0}, 250 );
			$('.simpleSlider.' + p_ids + ' .bgcaption').animate( {'bottom': 0}, 250 );
		}
		else
		{
			$('.simpleSlider.' + p_ids + ' .caption').animate( {'bottom': -30}, 250 );
			$('.simpleSlider.' + p_ids + ' .bgcaption').animate( {'bottom': -30}, 250 );
		}
	};

	$.fn.simpleSlider.process = function(p_elem, p_options)
	{
		var ids = $.fn.simpleSlider.makeId();
		while (objects[ids] !== undefined)
		{
			ids = $.fn.simpleSlider.makeId();
		}
		var comp = {};
		comp.element = p_elem;
		comp.options = p_options;
		comp.options.get_width = function()
		{
			return (comp.options.responsive) ? $(comp.element).parent().width() : comp.options.width;
		};
		comp.direction = '';
		comp.timer = null;

		objects[ids] = (comp);
		p_elem
			.attr('data-sprite-ids', ids)
			.addClass('simpleSlider ' + ids)
		;

		var $dv = $('.simpleSlider.' + ids);
		var $li = $('.simpleSlider.' + ids + ' ul li');
		
		$('.simpleSlider.' + ids + ' ul li:eq(0)').addClass('slide-active');

		var page_count = $li.length;

		var indicators = '<ol class="sl-indicators"><li class="active"></li>';
		for(var k = 0; k < page_count-1; k++)
		{
			indicators = indicators + '<li></li>';
		}
		indicators = indicators + '</ol>';
		$('<div class="vitrine"><span class="arrows arrow-left"></span><span class="arrows arrow-right"></span><span class="bgcaption"></span><span class="caption">&nbsp;</span>' + indicators + '</div>').prependTo($dv);

		var $vt = $('.simpleSlider.' + ids + ' .vitrine');
		var $bc = $('.simpleSlider.' + ids + ' .vitrine .bgcaption');
		var $cp = $('.simpleSlider.' + ids + ' .vitrine .caption');
		var $ul = $('.simpleSlider.' + ids + ' ul');

		$('.simpleSlider.' + ids + ' .vitrine .arrow-left')
			.attr('style', 'position: absolute; width: 27px; height: 30px; left: 10px; background-repeat: no-repeat; background-position: center top; top: 50%; margin-top: -15px; cursor: pointer;')
		;

		$('.simpleSlider.' + ids + ' .vitrine .arrow-right')
			.attr('style', 'position: absolute; width: 27px; height: 30px; right: 10px; background-repeat: no-repeat; background-position: center bottom; top: 50%; margin-top: -15px; cursor: pointer;')
		;

		if (comp.options.arrows.autohide)
		{
			$('.simpleSlider.' + ids + ' .vitrine .arrows').css('opacity', 0).addClass('autohide');
		}
		else
		{
			$('.simpleSlider.' + ids + ' .vitrine .arrows').css('opacity', 1);
		}

		$dv
			.css('position', 'relative')
			.css('backgroundColor', 'silver')
			.css('width', comp.options.get_width())
			.css('height', comp.options.height)
			.css('overflow', 'hidden')
		;

		if (comp.options.responsive)
		{
			$dv.addClass('fit-width');
		}
		else
		{
			$dv.css('margin', '0 auto');
		}

		$vt
			.css('width', comp.options.get_width())
			.css('height', comp.options.height)
			.css('background-color', 'transparent')
			.css('position', 'absolute')
		;

		$bc
			.attr('style', 'position: absolute; height: 30px; color: white; background-color: #000; opacity: 0.5; left: 0px;')
			.css('width', comp.options.get_width())
		;

		$cp
			.attr('style', 'position: absolute; height: 30px; color: #FFF; line-height: 30px; padding-left: 10px;')
			.css('width', comp.options.get_width())
		;

		if (comp.options.captions.autohide)
		{
			$bc.css('bottom', '-30px').addClass('autohide');
			$cp.css('bottom', '-30px').addClass('autohide');
		}
		else
		{
			$bc.css('bottom', '0px');
			$cp.css('bottom', '0px');
		}

		$ul
			.css('backgroundColor', 'gray')
			.css('width', ($li.length + 1) * comp.options.get_width() )
			.css('height', comp.options.height)
			.css('list-style', 'none')
			.css('margin-top', 0)
			.css('margin-bottom', 0)
			.css('margin-right', 0)
			.css('margin-left', 0)
			.css('padding', '0')
		;

		$li
			.css('width', comp.options.get_width())
			.css('height', comp.options.height)
			.css('list-style', 'none')
			.css('float', 'left')
		;

		$('.simpleSlider.' + ids + ' ul li').each
		(
			function(e)
			{
				if ($(this).find('*').length == 1)
				{
					var $img = $(this).find('img');
					if ($img.length > 0)
					{
						var $div = $('<div style="background: url(' + $img.attr('src') + '); background-size: cover; width: ' + comp.options.get_width() + 'px; height: ' + comp.options.height + 'px; background-position: center center; background-repeat: no-repeat;"></div>');
						$img.replaceWith($div);
					}
				}
			}
		);

		$.fn.simpleSlider._updateCaption(ids);

		$(window).resize();
		setTimeout(function() { $(window).resize(); }, 0500);
		setTimeout(function() { $(window).resize(); }, 1000);
		setTimeout(function() { $(window).resize(); }, 1500);
		setTimeout(function() { $(window).resize(); }, 2000);

		$(document).on
		(
			'mouseenter',
			'.simpleSlider.' + ids + ' .vitrine',
			function()
			{
				$(this).find('.arrows.autohide').parent().find('.arrows').animate( {'opacity': 1} );
				var title = $(this).next().find('li.slide-active').attr('title');
				if ( (title !== '') && (title !== undefined) )
				{
					$(this).find('.caption').html(title);
					if ($(this).find('.caption').hasClass('autohide'))
					{
						$(this).find('.caption').animate( {'bottom': 0}, 250 );
						$(this).find('.bgcaption').animate( {'bottom': 0}, 250 );
					}
				}
			}
		);

		$(document).on
		(
			'mouseleave',
			'.simpleSlider.' + ids + ' .vitrine',
			function()
			{
				$(this).find('.arrows.autohide').parent().find('.arrows').animate( {'opacity': 0} );
				if ($(this).find('.caption').hasClass('autohide'))
				{
					$(this).find('.caption').animate( {'bottom': -30}, 250 );
					$(this).find('.bgcaption').animate( {'bottom': -30}, 250 );
				}
			}
		);

		$(document).on
		(
			'click singletap',
			'.simpleSlider.' + ids + ' .vitrine .arrow-left',
			function()
			{
				$('.simpleSlider.' + ids).simpleSlider('previous');
			}
		);

		$(document).on
		(
			'click singletap',
			'.simpleSlider.' + ids + ' .vitrine .arrow-right',
			function()
			{
				$('.simpleSlider.' + ids).simpleSlider('next');
			}
		);

		$(document).on
		(
			'click singletap',
			'.simpleSlider.' + ids + ' .vitrine ol.sl-indicators li:not(.active)',
			function(e)
			{
				e.preventDefault();
				$(this).closest('.simpleSlider').simpleSlider('goto', $(this).index()+1);
			}
		);

		$(window).on
		(
			'resize.simpleSlider',
			function(e)
			{
				var window_width = 0;
				var ids = 'none';
				$('.simpleSlider.fit-width').each
				(
					function()
					{
						window_width = $(this).parent().width();
						ids = $(this).attr('data-sprite-ids');
						$('.simpleSlider.fit-width.' + ids + ', .simpleSlider.fit-width.' + ids + ' ul li, .simpleSlider.fit-width.' + ids + ' .vitrine, .simpleSlider.fit-width.' + ids + ' ul li div, .simpleSlider.fit-width.' + ids + ' .caption, .simpleSlider.fit-width.' + ids + ' .bgcaption')
							.css('width', window_width)
						;
					}
				);

				$('.simpleSlider.fit-width ul').each
				(
					function()
					{
						window_width = $(this).parent().width();
						var page_count = $(this).find('li').length;
						var index = $(this).find('.slide-active').index();
						$(this).css('width', window_width * page_count).css('margin-left', (window_width * -index));
					}
				);
			}
		);

		$(document).on
		(
			'swipeleft',
			'.simpleSlider.' + ids + ' .vitrine',
			function(e)
			{
				var ids = $(this).closest('.simpleSlider').attr('data-sprite-ids');
				if ($('.simpleSlider.' + ids).hasClass('lock-anim')) { return; }

				setTimeout(function() {
					$('.simpleSlider.' + ids).simpleSlider('next');
				}, 10);
			}
		);

		$(document).on
		(
			'swiperight',
			'.simpleSlider.' + ids + ' .vitrine',
			function(e)
			{
				var ids = $(this).closest('.simpleSlider').attr('data-sprite-ids');
				if ($('.simpleSlider.' + ids).hasClass('lock-anim')) { return; }
				setTimeout(function() {
					$('.simpleSlider.' + ids).simpleSlider('previous');
				}, 10);
			}
		);

	};

})( jQuery );

jQuery(document).ready(function() {
	$('head').append
	(
		'<style type="text/css">' + 
			'.simpleSlider .vitrine ol.sl-indicators { font-family: arial,verdana,helvetica; font-size: 12px; position: absolute; bottom: -4px; left: 50%; z-index: 15; width: 60%; padding-left: 0; margin-left: -30%; text-align: center; list-style: none; margin-bottom: 4px; height: 27px; line-height: 30px; margin-top: 0px; } ' +
			'.simpleSlider .vitrine ol.sl-indicators li { font-family: arial,verdana,helvetica; font-size: 12px; box-sizing: content-box; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; display: inline-block; width: 10px; height: 10px; margin: 1px; text-indent: -999px; cursor: pointer; background-color: rgba(0,0,0,0); border: 1px solid #fff; border-radius: 10px; margin-left: 6px; } ' + 
			'.simpleSlider .vitrine ol.sl-indicators .active { font-family: arial,verdana,helvetica; font-size: 12px; box-sizing: content-box; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; width: 12px; height: 12px; margin: 0 0 0 6px; background-color: #fff; cursor: default; } ' + 
			'.simpleSlider .vitrine .arrow-left  { background-image: url(data:image/png;base64,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) }' + 
			'.simpleSlider .vitrine .arrow-right { background-image: url(data:image/png;base64,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) }' + 
		'</style>'
	);
});