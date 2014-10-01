(function($){

	var defaults =
	{
		width       : 600,
		height      : 200,
		loop        : false,
		autoplay    : false,
		delay       : 0,		// Delay on first play
		inverted    : false,	// false: forward, true: backward
		velocity    : 500,
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
		first      : function()      { return this.each(function() { $.fn.simpleSlider.first(this); }); },
		previous   : function()      { return this.each(function() { $.fn.simpleSlider.previous(this); }); },
		play       : function()      { return this.each(function() { $.fn.simpleSlider.play(this); }); },
		delay_play : function(p_arg) { return this.each(function() { $.fn.simpleSlider.delay_play(this, p_arg); }); },
		pause      : function()      { return this.each(function() { $.fn.simpleSlider.pause(this); }); },
		resume     : function()      { return this.each(function() { $.fn.simpleSlider.resume(this); }); },
		stop       : function()      { return this.each(function() { $.fn.simpleSlider.stop(this); }); },
		next       : function()      { return this.each(function() { $.fn.simpleSlider.next(this); }); },
		goto       : function(p_arg) { return this.each(function() { $.fn.simpleSlider.goto(this, p_arg); }); },
		restart    : function()      { return this.each(function() { $.fn.simpleSlider.restart(this); }); },
		refresh    : function()      { return this.each(function() { $.fn.simpleSlider.refresh(this); }); },
		last       : function()      { return this.each(function() { $.fn.simpleSlider.last(this); }); },
		velocity   : function(p_arg) { return this.each(function() { $.fn.simpleSlider.velocity(this, p_arg); }); },
		loop       : function(p_arg) { return this.each(function() { $.fn.simpleSlider.loop(this, p_arg); }); },
		invert     : function()      { return this.each(function() { $.fn.simpleSlider.invert(this); }); },
		delay      : function(p_arg) { return this.each(function() { $.fn.simpleSlider.delay(this, p_arg); }); },
		attach     : function(p1, p2){ return this.each(function() { $.fn.simpleSlider.attach(this, p1, p2); }); },
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

	$.fn.simpleSlider.loop = function(p_arg, p_loop)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		objects[ids].options.loop = p_loop;
		$.fn.simpleSlider.refresh(ids);
	}

	$.fn.simpleSlider.delay = function(p_arg, p_delay)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		objects[ids].options.delay = p_delay;
		$.fn.simpleSlider.refresh(ids);
	}

	$.fn.simpleSlider.invert = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		objects[ids].options.inverted = (!objects[ids].options.inverted);
		if (objects[ids].timer != null)
		{
			$.fn.simpleSlider.refresh(ids);
		}
	}

	$.fn.simpleSlider.velocity = function(p_arg, p_velocity)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		objects[ids].options.velocity = p_velocity;
		if (objects[ids].timer != null)
		{
			$.fn.simpleSlider.refresh(ids);
		}
	}

	$.fn.simpleSlider.delay_play = function(p_arg, p_miliseconds)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		setTimeout(function() { objects[ids].options.delay = 0; $.fn.simpleSlider.play(ids); }, p_miliseconds);
	}

	$.fn.simpleSlider.play = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids === undefined) { return; }

		if (objects[ids].options.delay > 0)
		{
			return $.fn.simpleSlider.delay_play(ids, objects[ids].options.delay);
		}

		if (objects[ids].timer != null)
		{
			clearInterval(objects[ids].timer);
		}

		$.fn.simpleSlider.first(ids);
		objects[ids].timer = setInterval
		(
			function()
			{
				$.fn.simpleSlider.next(ids);
			},
			objects[ids].options.velocity
		);
	}

	$.fn.simpleSlider.pause = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids == undefined) { return; }
		if (objects[ids].timer != null)
		{
			clearInterval(objects[ids].timer);
		}
	}

	$.fn.simpleSlider.stop = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids == undefined) { return; }
		if (objects[ids].timer != null)
		{
			clearInterval(objects[ids].timer);
		}
	}

	$.fn.simpleSlider.resume = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids == undefined) { return; }
		if (objects[ids].timer != null)
		{
			clearInterval(objects[ids].timer);
		}

		objects[ids].timer = setInterval
		(
			function()
			{
				$.fn.simpleSlider.next(ids);
			},
			objects[ids].options.velocity
		);
	}

	$.fn.simpleSlider.refresh = function(p_arg)
	{
		$.fn.simpleSlider.pause(p_arg);
		$.fn.simpleSlider.resume(p_arg);
	}

	$.fn.simpleSlider.restart = function(p_arg)
	{
		$.fn.simpleSlider.stop(p_arg);
		$.fn.simpleSlider.play(p_arg);
	}

	$.fn.simpleSlider.goto = function(p_arg, p_frame)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids == undefined) { return; }
		objects[ids].frame = (p_frame - 1);
		$.fn.simpleSlider.updateFrame(ids);
	}
	
	$.fn.simpleSlider.first = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids == undefined) { return; }
		objects[ids].frame = (!objects[ids].options.inverted) ? 0 : objects[ids].options.frame_count-1;
		$.fn.simpleSlider.updateFrame(ids);
	}
	
	$.fn.simpleSlider._get_ids = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids == undefined) { return false; }
		return ids;
	}

	$.fn.simpleSlider.previous = function(p_arg, p_force)
	{
		var ids = $.fn.simpleSlider._get_ids(p_arg);
		if (!ids) { return; }
		
		if ($('.simpleSlider.' + ids + ' ul li:first.slide-active').length > 0)
		{
			$('.simpleSlider.' + ids + ' ul li:last').detach().prependTo( $('.simpleSlider.' + ids + ' ul') );
			$('.simpleSlider.' + ids + ' ul').css('marginLeft', '-=' + objects[ids].options.width + 'px');

			$('.simpleSlider.' + ids + ' ul').animate
			(
				{'margin-left': '+=' + objects[ids].options.width + 'px'},
				'fast',
				function()
				{
					$('.simpleSlider.' + ids + ' ul li:first').detach().appendTo( $('.simpleSlider.' + ids + ' ul') );
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '0px');
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '-' + ( objects[ids].options.width * ($('.simpleSlider.' + ids + ' ul li').length-1) ) + 'px');
					$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
					$('.simpleSlider.' + ids + ' ul li:last').addClass('slide-active');
				}
			);
			return;
		}

		$('.simpleSlider.' + ids + ' ul').animate({'margin-left': '+=' + objects[ids].options.width + 'px'}, 'fast');
		var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
		$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
		$('.simpleSlider.' + ids + ' ul li:eq(' + (index-1) + ')').addClass('slide-active');
	};

	$.fn.simpleSlider.next = function(p_arg, p_force)
	{
		var ids = $.fn.simpleSlider._get_ids(p_arg);
		if (!ids) { return; }

		if ($('.simpleSlider.' + ids + ' ul li:last.slide-active').length > 0)
		{
			$('.simpleSlider.' + ids + ' ul li:first').detach().appendTo( $('.simpleSlider.' + ids + ' ul') );
			$('.simpleSlider.' + ids + ' ul').css('marginLeft', '+=' + objects[ids].options.width + 'px');

			$('.simpleSlider.' + ids + ' ul').animate
			(
				{'margin-left': '-=' + objects[ids].options.width + 'px'},
				'fast',
				function()
				{
					$('.simpleSlider.' + ids + ' ul li:last').detach().prependTo( $('.simpleSlider.' + ids + ' ul') );
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '0px');

					$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
					$('.simpleSlider.' + ids + ' ul li:first').addClass('slide-active');
				}
			);

			return;
		}

		$('.simpleSlider.' + ids + ' ul').animate
		(
			{'margin-left': '-=' + objects[ids].options.width + 'px'},
			'fast',
			function()
			{
				var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
				$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
				$('.simpleSlider.' + ids + ' ul li:eq(' + (index+1) + ')').addClass('slide-active');
			}
		);
	};

	$.fn.simpleSlider._onComplete = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (objects[ids].options.onComplete !== null)
		{
			objects[ids].options.onComplete.call(this, objects[ids]);
		}
	}

	$.fn.simpleSlider.last = function(p_arg)
	{
		var ids = (typeof(p_arg) == 'object') ? $(p_arg).attr('data-sprite-ids') : p_arg;
		if (ids == undefined) { return; }
		objects[ids].frame = (!objects[ids].options.inverted) ? objects[ids].options.frame_count-1 : 0;
		$.fn.simpleSlider.updateFrame(ids);
	}

	$.fn.simpleSlider.updateFrame = function(p_ids)
	{
		var pos = (objects[p_ids].frame * objects[p_ids].image.frame_size) * -1;
		switch(objects[p_ids].direction)
		{
			case 'h':
				objects[p_ids].element.css('background-position', pos + 'px 0px');
			break;
			case 'v':
				objects[p_ids].element.css('background-position', '0px ' + pos + 'px');
			break;
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
		comp.direction = '';
		comp.timer = null;

		objects[ids] = (comp);
		p_elem
			.attr('data-sprite-ids', ids)
			.addClass('simpleSlider ' + ids)
		;

		var $dv = $('.simpleSlider.' + ids);
		var $ul = $('.simpleSlider.' + ids + ' ul');
		var $li = $('.simpleSlider.' + ids + ' ul li');
		
		$dv
			.css('backgroundColor', 'silver')
			.css('width', comp.options.width)
			.css('height', comp.options.height)
			.css('overflow', 'hidden')
		;

		$ul
			.css('backgroundColor', 'gray')
			.css('width', ($li.length + 1) * comp.options.width )
			.css('height', comp.options.height)
			.css('list-style', 'none')
			.css('margin-top', 0)
			.css('margin-bottom', 0)
			.css('margin-right', 0)
			.css('margin-left', 0)
			.css('padding', '0')
		;

		$li
			.css('width', comp.options.width)
			.css('height', comp.options.height)
			.css('list-style', 'none')
			.css('float', 'left')
		;

		var $li = $('.simpleSlider.' + ids + ' ul li:first').addClass('slide-active');

		$('.simpleSlider.' + ids + ' ul li:eq(0)').css('backgroundColor', 'yellow');
		$('.simpleSlider.' + ids + ' ul li:eq(1)').css('backgroundColor', 'red');
		$('.simpleSlider.' + ids + ' ul li:eq(2)').css('backgroundColor', 'cyan');
	
		//if (objects[ids].options.autoplay)
		//{
		//	$.fn.simpleSlider.play(ids);
		//}
	};

})( jQuery );
