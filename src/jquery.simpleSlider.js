(function($){

	var defaults =
	{
		width  : 800,
		height : 300,
		fit_width : false,
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
		previous   : function()      { return this.each(function() { $.fn.simpleSlider.previous(this); }); },
		next       : function()      { return this.each(function() { $.fn.simpleSlider.next(this); }); } 
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
				}
			);
			return;
		}

		$('.simpleSlider.' + ids + ' ul').animate({'margin-left': '+=' + objects[ids].options.get_width() + 'px'}, 'fast');
		var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
		$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
		$('.simpleSlider.' + ids + ' ul li:eq(' + (index-1) + ')').addClass('slide-active');
		$.fn.simpleSlider._updateCaption(ids);
	};

	$.fn.simpleSlider.next = function(p_arg, p_force)
	{
		var ids = $.fn.simpleSlider._get_ids(p_arg);
		if (!ids) { return; }

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
				}
			);

			return;
		}

		$('.simpleSlider.' + ids + ' ul').animate
		(
			{'margin-left': '-=' + objects[ids].options.get_width() + 'px'},
			'fast',
			function()
			{
				var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
				$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
				$('.simpleSlider.' + ids + ' ul li:eq(' + (index+1) + ')').addClass('slide-active');
				$.fn.simpleSlider._updateCaption(ids);
			}
		);
	};

	$.fn.simpleSlider._updateCaption = function(p_ids)
	{
		var title = $('.simpleSlider.' + p_ids + ' ul li.slide-active').attr('title');
		if ( (title != '') && (title != undefined) )
		{
			$('.simpleSlider.' + p_ids + ' .caption').html(title);
			$('.simpleSlider.' + p_ids + ' .caption').animate( {'bottom': 0}, 250 );
			$('.simpleSlider.' + p_ids + ' .bgcaption').animate( {'bottom': 0}, 250 );
		}
		else
		{
			$('.simpleSlider.' + p_ids + ' .caption').animate( {'bottom': -30}, 250 );
			$('.simpleSlider.' + p_ids + ' .bgcaption').animate( {'bottom': -30}, 250 );
		}
	}

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
			return (comp.options.fit_width) ? $(comp.element).parent().width() : comp.options.width;
		}
		comp.direction = '';
		comp.timer = null;

		objects[ids] = (comp);
		p_elem
			.attr('data-sprite-ids', ids)
			.addClass('simpleSlider ' + ids)
		;

		var $dv = $('.simpleSlider.' + ids);

		$('<div class="vitrine"><span class="arrows arrow-left"></span><span class="arrows arrow-right"></span><span class="bgcaption"></span><span class="caption">&nbsp;</span></div>').prependTo($dv);

		var $vt = $('.simpleSlider.' + ids + ' .vitrine');
		var $bc = $('.simpleSlider.' + ids + ' .vitrine .bgcaption');
		var $cp = $('.simpleSlider.' + ids + ' .vitrine .caption');
		var $ul = $('.simpleSlider.' + ids + ' ul');
		var $li = $('.simpleSlider.' + ids + ' ul li');

		$('.simpleSlider.' + ids + ' .vitrine .arrow-left')
			.attr('style', 'position: absolute; width: 27px; height: 30px; left: 10px; background-repeat: no-repeat; background-position: center top; top: 50%; margin-top: -15px; cursor: pointer;')
			.css('background-image', 'url(data:image/png;base64,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)')
		;

		$('.simpleSlider.' + ids + ' .vitrine .arrow-right')
			.attr('style', 'position: absolute; width: 27px; height: 30px; right: 10px; background-repeat: no-repeat; background-position: center bottom; top: 50%; margin-top: -15px; cursor: pointer;')
			.css('background-image', 'url(data:image/png;base64,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)')
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

		if (comp.options.fit_width)
		{
			$dv.addClass('fit-width');
		}
		else
		{
			$dv.css('margin', '0 auto')
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
			$bc
				.css('bottom', '0px')
			;
			$cp
				.css('bottom', '0px')
			;
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

		var $li = $('.simpleSlider.' + ids + ' ul li:first').addClass('slide-active');

		$('.simpleSlider.' + ids + ' ul li').each
		(
			function(e)
			{
				if ($(this).find('*').length == 1)
				{
					var $img = $(this).find('img');
					if ($img.length > 0)
					{
						var $div = $('<div style="background: url(' + $img.attr('src') + '); background-size: cover; width: ' + comp.options.get_width() + 'px; height: ' + comp.options.height + 'px; background-position: center center; background-repeat: no-repeat;"></div>')
						$img.replaceWith($div);
					}
				}
			}
		);

		$.fn.simpleSlider._updateCaption(ids);

		$(window).resize();

		$(document).on
		(
			'mouseenter',
			'.simpleSlider.' + ids + ' .vitrine',
			function()
			{
				$(this).find('.arrows.autohide').parent().find('.arrows').animate( {'opacity': 1} );
				var title = $(this).next().find('li.slide-active').attr('title');
				if ( (title != '') && (title != undefined) )
				{
					$(this).find('.caption').html(title);
					$(this).find('.caption').hasClass('autohide')
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
			'click',
			'.simpleSlider.' + ids + ' .vitrine .arrow-left',
			function()
			{
				$('.simpleSlider.' + ids).simpleSlider('previous');
			}
		);

		$(document).on
		(
			'click',
			'.simpleSlider.' + ids + ' .vitrine .arrow-right',
			function()
			{
				$('.simpleSlider.' + ids).simpleSlider('next');
			}
		);

		$(window).on
		(
			'resize.simpleSlider',
			function(e)
			{
				var window_width = 0;
				var ids = 'none';
				$('.simple-slider.fit-width').each
				(
					function()
					{
						window_width = $(this).parent().width();
						ids = $(this).attr('data-sprite-ids');
						$('.simple-slider.fit-width.' + ids + ', .simple-slider.fit-width.' + ids + ' ul li, .simple-slider.fit-width.' + ids + ' .vitrine, .simple-slider.fit-width.' + ids + ' ul li div, .simple-slider.fit-width.' + ids + ' .caption, .simple-slider.fit-width.' + ids + ' .bgcaption')
							.css('width', window_width)
						;
					}
				);

				$('.simple-slider.fit-width ul').each
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

	};

})( jQuery );