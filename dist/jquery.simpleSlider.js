/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * jQuery Mobile Events
 * by Ben Major (www.ben-major.co.uk)
 *
 * Copyright 2011, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
(function ($) {
    $.attrFn = $.attrFn || {};

    // navigator.userAgent.toLowerCase() isn't reliable for Chrome installs
    // on mobile devices. As such, we will create a boolean isChromeDesktop
    // The reason that we need to do this is because Chrome annoyingly
    // purports support for touch events even if the underlying hardware
    // does not!
    var agent = navigator.userAgent.toLowerCase(),
        isChromeDesktop = (agent.indexOf('chrome') > -1 && ((agent.indexOf('windows') > -1) || (agent.indexOf('macintosh') > -1) || (agent.indexOf('linux') > -1)) && agent.indexOf('mobile') < 0 && agent.indexOf('nexus') < 0),

        settings = {
			tap_pixel_range: 5,
            swipe_h_threshold: 50,
            swipe_v_threshold: 50,
            taphold_threshold: 750,
            doubletap_int: 500,

            touch_capable: ('ontouchstart' in document.documentElement && !isChromeDesktop),
            orientation_support: ('orientation' in window && 'onorientationchange' in window),

            startevent: ('ontouchstart' in document.documentElement && !isChromeDesktop) ? 'touchstart' : 'mousedown',
            endevent: ('ontouchstart' in document.documentElement && !isChromeDesktop) ? 'touchend' : 'mouseup',
            moveevent: ('ontouchstart' in document.documentElement && !isChromeDesktop) ? 'touchmove' : 'mousemove',
            tapevent: ('ontouchstart' in document.documentElement && !isChromeDesktop) ? 'tap' : 'click',
            scrollevent: ('ontouchstart' in document.documentElement && !isChromeDesktop) ? 'touchmove' : 'scroll',

            hold_timer: null,
            tap_timer: null
        };
    
    // Convenience functions:
    $.isTouchCapable = function() { return settings.touch_capable; };
    $.getStartEvent = function() { return settings.startevent; };
    $.getEndEvent = function() { return settings.endevent; };
    $.getMoveEvent = function() { return settings.moveevent; };
    $.getTapEvent = function() { return settings.tapevent; };
    $.getScrollEvent = function() { return settings.scrollevent; };
    
    // Add Event shortcuts:
    $.each(['tapstart', 'tapend', 'tap', 'singletap', 'doubletap', 'taphold', 'swipe', 'swipeup', 'swiperight', 'swipedown', 'swipeleft', 'swipeend', 'scrollstart', 'scrollend', 'orientationchange'], function (i, name) {
        $.fn[name] = function (fn) {
            return fn ? this.on(name, fn) : this.trigger(name);
        };

        $.attrFn[name] = true;
    });

    // tapstart Event:
    $.event.special.tapstart = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject);

            $this.on(settings.startevent, function (e) {
                $this.data('callee', arguments.callee);
                if (e.which && e.which !== 1) {
                    return false;
                }

                var origEvent = e.originalEvent,
                    touchData = {
                        'position': {
                            'x': ((settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX),
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY,
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY,
                        },
                        'time': new Date().getTime(),
                        'target': e.target
                    };

                triggerCustomEvent(thisObject, 'tapstart', e, touchData);
                return true;
            });
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee);
        }
    };
	
	// tapmove Event:
	$.event.special.tapmove = {
		setup: function() {
			var thisObject = this,
				$this = $(thisObject);
				
			$this.on(settings.moveevent, function(e) {
				$this.data('callee', arguments.callee);
				
				var origEvent = e.originalEvent,
					touchData = {
                        'position': {
                            'x': ((settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX),
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY,
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY,
                        },
                        'time': new Date().getTime(),
                        'target': e.target
                    };
					
				triggerCustomEvent(thisObject, 'tapmove', e, touchData);
				return true;
			});
		},
		remove: function() {
			$(this).off(settings.moveevent, $(this).data.callee);
		}
	}

    // tapend Event:
    $.event.special.tapend = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject);

            $this.on(settings.endevent, function (e) {
                // Touch event data:
                $this.data('callee', arguments.callee);

                var origEvent = e.originalEvent;
                var touchData = {
                    'position': {
                        'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                        'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? origEvent.changedTouches[0].pageX - origEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                        'y': (settings.touch_capable) ? origEvent.changedTouches[0].pageY - origEvent.changedTouches[0].target.offsetTop : e.offsetY
                    },
                    'time': new Date().getTime(),
                    'target': e.target
                };
                triggerCustomEvent(thisObject, 'tapend', e, touchData);
                return true;
            });
        },
        remove: function () {
            $(this).off(settings.endevent, $(this).data.callee);
        }
    };

    // taphold Event:
    $.event.special.taphold = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                origTarget,
                timer,
                start_pos = {
                    x: 0,
                    y: 0
                };

            $this.on(settings.startevent, function (e) {
                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    $this.data('tapheld', false);
                    origTarget = e.target;

                    var origEvent = e.originalEvent;
                    var start_time = new Date().getTime(),
                        startPosition = {
                            'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                        },
                        startOffset = {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                        };

                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;

                    settings.hold_timer = window.setTimeout(function () {

                        var end_x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX,
                            end_y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;

                        if (e.target == origTarget && (start_pos.x == end_x && start_pos.y == end_y)) {
                            $this.data('tapheld', true);

                            var end_time = new Date().getTime(),
                                endPosition = {
                                    'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                                    'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                                },
                                endOffset = {
                                    'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                                    'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                                };
                            duration = end_time - start_time;

                            // Build the touch data:
                            var touchData = {
                                'startTime': start_time,
                                'endTime': end_time,
                                'startPosition': startPosition,
                                'startOffset': startOffset,
                                'endPosition': endPosition,
                                'endOffset': endOffset,
                                'duration': duration,
                                'target': e.target
                            }
                            $this.data('callee1', arguments.callee);
                            triggerCustomEvent(thisObject, 'taphold', e, touchData);
                        }
                    }, settings.taphold_threshold);

                    return true;
                }
            }).on(settings.endevent, function () {
                $this.data('callee2', arguments.callee);
                $this.data('tapheld', false);
                window.clearTimeout(settings.hold_timer);
            });
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };

    // doubletap Event:
    $.event.special.doubletap = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                origTarget,
                action,
                firstTap,
                origEvent;

            $this.on(settings.startevent, function (e) {
                if (e.which && e.which !== 1) {
                    return false;
                } else if(!$this.data('lastTouch')) {
                    $this.data('doubletapped', false);
                    origTarget = e.target;
                    $this.data('callee1', arguments.callee);

                    origEvent = e.originalEvent;
                    firstTap = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                        },
                        'time': new Date().getTime(),
                        'target': e.target
                    };

                    return true;
                }
            }).on(settings.endevent, function (e) {
                var now = new Date().getTime();
                var lastTouch = $this.data('lastTouch') || now + 1;
                var delta = now - lastTouch;
                window.clearTimeout(action);
                $this.data('callee2', arguments.callee);

                if (delta < settings.doubletap_int && delta > 0 && (e.target == origTarget) && delta > 100) {
                    $this.data('doubletapped', true);
                    window.clearTimeout(settings.tap_timer);

                    // Now get the current event:
                    var lastTap = {
                        'position': {
                            'x': (settings.touch_capable) ? e.originalEvent.changedTouches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? e.originalEvent.changedTouches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? e.originalEvent.changedTouches[0].pageX - e.originalEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? e.originalEvent.changedTouches[0].pageY - e.originalEvent.changedTouches[0].target.offsetTop : e.offsetY
                        },
                        'time': new Date().getTime(),
                        'target': e.target
                    }

                    var touchData = {
                        'firstTap': firstTap,
                        'secondTap': lastTap,
                        'interval': lastTap.time - firstTap.time
                    };

                    triggerCustomEvent(thisObject, 'doubletap', e, touchData);
                } else {
                    $this.data('lastTouch', now);
                    action = window.setTimeout(function (e) {
                        window.clearTimeout(action);
                    }, settings.doubletap_int, [e]);
                }
                $this.data('lastTouch', now);
            });
        },
        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };

    // singletap Event:
    // This is used in conjuction with doubletap when both events are needed on the same element
    $.event.special.singletap = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                origTarget = null,
                startTime = null,
                start_pos = {
                    x: 0,
                    y: 0
                };

            $this.on(settings.startevent, function (e) {
                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    startTime = new Date().getTime();
                    origTarget = e.target;
                    $this.data('callee1', arguments.callee);

                    // Get the start x and y position:
                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                    return true;
                }
            }).on(settings.endevent, function (e) {
                $this.data('callee2', arguments.callee);
                if (e.target == origTarget) {
                    // Get the end point:
                    end_pos_x = (e.originalEvent.changedTouches) ? e.originalEvent.changedTouches[0].pageX : e.pageX;
                    end_pos_y = (e.originalEvent.changedTouches) ? e.originalEvent.changedTouches[0].pageY : e.pageY;
                    
                    // We need to check if it was a taphold:

                    settings.tap_timer = window.setTimeout(function () {
                        if (!$this.data('doubletapped') && !$this.data('tapheld') && (start_pos.x == end_pos_x) && (start_pos.y == end_pos_y)) {
                            var origEvent = e.originalEvent;
                            var touchData = {
                                'position': {
                                    'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                                    'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY,
                                },
                                'offset': {
                                    'x': (settings.touch_capable) ? origEvent.changedTouches[0].pageX - origEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                                    'y': (settings.touch_capable) ? origEvent.changedTouches[0].pageY - origEvent.changedTouches[0].target.offsetTop : e.offsetY,
                                },
                                'time': new Date().getTime(),
                                'target': e.target
                            };
                            
                            // Was it a taphold?
                            if((touchData.time - startTime) < settings.taphold_threshold)
                            {
                                triggerCustomEvent(thisObject, 'singletap', e, touchData);
                            }
                        }
                    }, settings.doubletap_int);
                }
            });
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };

    // tap Event:
    $.event.special.tap = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                started = false,
                origTarget = null,
                start_time,
                start_pos = {
                    x: 0,
                    y: 0
                };

            $this.on(settings.startevent, function (e) {
                $this.data('callee1', arguments.callee);

                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    started = true;
                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                    start_time = new Date().getTime();
                    origTarget = e.target;
                    return true;
                }
            }).on(settings.endevent, function (e) {
                $this.data('callee2', arguments.callee);

                // Only trigger if they've started, and the target matches:
                var end_x = (e.originalEvent.targetTouches) ? e.originalEvent.changedTouches[0].pageX : e.pageX,
					end_y = (e.originalEvent.targetTouches) ? e.originalEvent.changedTouches[0].pageY : e.pageY;
					diff_x = (start_pos.x - end_x),
					diff_y = (start_pos.y - end_y);
					
					if (origTarget == e.target && started && ((new Date().getTime() - start_time) < settings.taphold_threshold) && ((start_pos.x == end_x && start_pos.y == end_y) || (diff_x >= -(settings.tap_pixel_range) && diff_x <= settings.tap_pixel_range && diff_y >= -(settings.tap_pixel_range) && diff_y <= settings.tap_pixel_range))) {
                    var origEvent = e.originalEvent;
                    var touchData = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY,
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.changedTouches[0].pageX - origEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.changedTouches[0].pageY - origEvent.changedTouches[0].target.offsetTop : e.offsetY,
                        },
                        'time': new Date().getTime(),
                        'target': e.target
                    };

                    triggerCustomEvent(thisObject, 'tap', e, touchData);
                }
            });
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };

    // swipe Event (also handles swipeup, swiperight, swipedown and swipeleft):
    $.event.special.swipe = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                started = false,
                hasSwiped = false,
                originalCoord = {
                    x: 0,
                    y: 0
                },
                finalCoord = {
                    x: 0,
                    y: 0
                },
                startEvnt;

            // Screen touched, store the original coordinate

            function touchStart(e) {
                $this = $(e.target);
                $this.data('callee1', arguments.callee);
                originalCoord.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                originalCoord.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                finalCoord.x = originalCoord.x;
                finalCoord.y = originalCoord.y;
                started = true;
                var origEvent = e.originalEvent;
                // Read event data into our startEvt:
                startEvnt = {
                    'position': {
                        'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY,
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY,
                    },
                    'time': new Date().getTime(),
                    'target': e.target
                };

                // For some reason, we need to add a 100ms pause in order to trigger swiping
                // on Playbooks:
                var dt = new Date();
                while ((new Date()) - dt < 100) {}
            }

            // Store coordinates as finger is swiping

            function touchMove(e) {
                $this = $(e.target);
                $this.data('callee2', arguments.callee);
                finalCoord.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                finalCoord.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                window.clearTimeout(settings.hold_timer);

                var swipedir;

                // We need to check if the element to which the event was bound contains a data-xthreshold | data-vthreshold:
                var ele_x_threshold = $this.data('xthreshold'),
                    ele_y_threshold = $this.data('ythreshold'),
                    h_threshold = (typeof ele_x_threshold !== 'undefined' && ele_x_threshold !== false && parseInt(ele_x_threshold)) ? parseInt(ele_x_threshold) : settings.swipe_h_threshold,
                    v_threshold = (typeof ele_y_threshold !== 'undefined' && ele_y_threshold !== false && parseInt(ele_y_threshold)) ? parseInt(ele_y_threshold) : settings.swipe_v_threshold;

                if (originalCoord.y > finalCoord.y && (originalCoord.y - finalCoord.y > v_threshold)) {
                    swipedir = 'swipeup';
                }
                if (originalCoord.x < finalCoord.x && (finalCoord.x - originalCoord.x > h_threshold)) {
                    swipedir = 'swiperight';
                }
                if (originalCoord.y < finalCoord.y && (finalCoord.y - originalCoord.y > v_threshold)) {
                    swipedir = 'swipedown';
                }
                if (originalCoord.x > finalCoord.x && (originalCoord.x - finalCoord.x > h_threshold)) {
                    swipedir = 'swipeleft';
                }
                if (swipedir != undefined && started) {
                    originalCoord.x = 0;
                    originalCoord.y = 0;
                    finalCoord.x = 0;
                    finalCoord.y = 0;
                    started = false;

                    // Read event data into our endEvnt:
                    var origEvent = e.originalEvent;
                    endEvnt = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY,
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY,
                        },
                        'time': new Date().getTime(),
                        'target': e.target
                    };

                    // Calculate the swipe amount (normalized):
                    var xAmount = Math.abs(startEvnt.position.x - endEvnt.position.x),
                        yAmount = Math.abs(startEvnt.position.y - endEvnt.position.y);

                    var touchData = {
                        'startEvnt': startEvnt,
                        'endEvnt': endEvnt,
                        'direction': swipedir.replace('swipe', ''),
                        'xAmount': xAmount,
                        'yAmount': yAmount,
                        'duration': endEvnt.time - startEvnt.time
                    }
                    hasSwiped = true;
                    $this.trigger('swipe', touchData).trigger(swipedir, touchData);
                }
            }

            function touchEnd(e) {
                $this = $(e.target);
                var swipedir = "";
                $this.data('callee3', arguments.callee);
                if (hasSwiped) {
                    // We need to check if the element to which the event was bound contains a data-xthreshold | data-vthreshold:
                    var ele_x_threshold = $this.data('xthreshold'),
                        ele_y_threshold = $this.data('ythreshold'),
                        h_threshold = (typeof ele_x_threshold !== 'undefined' && ele_x_threshold !== false && parseInt(ele_x_threshold)) ? parseInt(ele_x_threshold) : settings.swipe_h_threshold,
                        v_threshold = (typeof ele_y_threshold !== 'undefined' && ele_y_threshold !== false && parseInt(ele_y_threshold)) ? parseInt(ele_y_threshold) : settings.swipe_v_threshold;

                    var origEvent = e.originalEvent;
                    endEvnt = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY,
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.changedTouches[0].pageX - origEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.changedTouches[0].pageY - origEvent.changedTouches[0].target.offsetTop : e.offsetY,
                        },
                        'time': new Date().getTime(),
                        'target': e.target
                    };

                    // Read event data into our endEvnt:
                    if (startEvnt.position.y > endEvnt.position.y && (startEvnt.position.y - endEvnt.position.y > v_threshold)) {
                        swipedir = 'swipeup';
                    }
                    if (startEvnt.position.x < endEvnt.position.x && (endEvnt.position.x - startEvnt.position.x > h_threshold)) {
                        swipedir = 'swiperight';
                    }
                    if (startEvnt.position.y < endEvnt.position.y && (endEvnt.position.y - startEvnt.position.y > v_threshold)) {
                        swipedir = 'swipedown';
                    }
                    if (startEvnt.position.x > endEvnt.position.x && (startEvnt.position.x - endEvnt.position.x > h_threshold)) {
                        swipedir = 'swipeleft';
                    }

                    // Calculate the swipe amount (normalized):
                    var xAmount = Math.abs(startEvnt.position.x - endEvnt.position.x),
                        yAmount = Math.abs(startEvnt.position.y - endEvnt.position.y);

                    var touchData = {
                        'startEvnt': startEvnt,
                        'endEvnt': endEvnt,
                        'direction': swipedir.replace('swipe', ''),
                        'xAmount': xAmount,
                        'yAmount': yAmount,
                        'duration': endEvnt.time - startEvnt.time
                    }
                    $this.trigger('swipeend', touchData);
                }

                started = false;
                hasSwiped = false;
            }

            $this.on(settings.startevent, touchStart);
            $this.on(settings.moveevent, touchMove);
            $this.on(settings.endevent, touchEnd);
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.moveevent, $(this).data.callee2).off(settings.endevent, $(this).data.callee3);
        }
    };

    // scrollstart Event (also handles scrollend):
    $.event.special.scrollstart = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                scrolling,
                timer;

            function trigger(event, state) {
                scrolling = state;
                triggerCustomEvent(thisObject, scrolling ? 'scrollstart' : 'scrollend', event);
            }

            // iPhone triggers scroll after a small delay; use touchmove instead
            $this.on(settings.scrollevent, function (event) {
                $this.data('callee', arguments.callee);

                if (!scrolling) {
                    trigger(event, true);
                }

                clearTimeout(timer);
                timer = setTimeout(function () {
                    trigger(event, false);
                }, 50);
            });
        },

        remove: function () {
            $(this).off(settings.scrollevent, $(this).data.callee);
        }
    };

    // This is the orientation change (largely borrowed from jQuery Mobile):
    var win = $(window),
        special_event,
        get_orientation,
        last_orientation,
        initial_orientation_is_landscape,
        initial_orientation_is_default,
        portrait_map = {
            '0': true,
            '180': true
        };

    if (settings.orientation_support) {
        var ww = window.innerWidth || $(window).width(),
            wh = window.innerHeight || $(window).height(),
            landscape_threshold = 50;

        initial_orientation_is_landscape = ww > wh && (ww - wh) > landscape_threshold;
        initial_orientation_is_default = portrait_map[window.orientation];

        if ((initial_orientation_is_landscape && initial_orientation_is_default) || (!initial_orientation_is_landscape && !initial_orientation_is_default)) {
            portrait_map = {
                '-90': true,
                '90': true
            };
        }
    }

    $.event.special.orientationchange = special_event = {
        setup: function () {
            // If the event is supported natively, return false so that jQuery
            // will on to the event using DOM methods.
            if (settings.orientation_support) {
                return false;
            }

            // Get the current orientation to avoid initial double-triggering.
            last_orientation = get_orientation();

            win.on('throttledresize', handler);
            return true;
        },
        teardown: function () {
            if (settings.orientation_support) {
                return false;
            }

            win.off('throttledresize', handler);
            return true;
        },
        add: function (handleObj) {
            // Save a reference to the bound event handler.
            var old_handler = handleObj.handler;

            handleObj.handler = function (event) {
                event.orientation = get_orientation();
                return old_handler.apply(this, arguments);
            };
        }
    };

    // If the event is not supported natively, this handler will be bound to
    // the window resize event to simulate the orientationchange event.

    function handler() {
        // Get the current orientation.
        var orientation = get_orientation();

        if (orientation !== last_orientation) {
            // The orientation has changed, so trigger the orientationchange event.
            last_orientation = orientation;
            win.trigger("orientationchange");
        }
    }

    $.event.special.orientationchange.orientation = get_orientation = function () {
        var isPortrait = true,
            elem = document.documentElement;

        if (settings.orientation_support) {
            isPortrait = portrait_map[window.orientation];
        } else {
            isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
        }

        return isPortrait ? 'portrait' : 'landscape';
    };

    // throttle Handler:
    $.event.special.throttledresize = {
        setup: function () {
            $(this).on('resize', throttle_handler);
        },
        teardown: function () {
            $(this).off('resize', throttle_handler);
        }
    };

    var throttle = 250,
        throttle_handler = function () {
            curr = (new Date()).getTime();
            diff = curr - lastCall;

            if (diff >= throttle) {
                lastCall = curr;
                $(this).trigger('throttledresize');

            } else {
                if (heldCall) {
                    window.clearTimeout(heldCall);
                }

                // Promise a held call will still execute
                heldCall = window.setTimeout(handler, throttle - diff);
            }
        },
        lastCall = 0,
        heldCall,
        curr,
        diff;

    // Trigger a custom event:

    function triggerCustomEvent(obj, eventType, event, touchData) {
        var originalType = event.type;
        event.type = eventType;

        $.event.dispatch.call(obj, event, touchData);
        event.type = originalType;
    }

    // Correctly on anything we've overloaded:
    $.each({
        scrollend: 'scrollstart',
        swipeup: 'swipe',
        swiperight: 'swipe',
        swipedown: 'swipe',
        swipeleft: 'swipe',
        swipeend: 'swipe',
    }, function (e, srcE, touchData) {
        $.event.special[e] = {
            setup: function () {
                $(this).on(srcE, $.noop);
            }
        };
    });

})(jQuery);

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
	var lock_anim = false;

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
			return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call(arguments, 1));
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
		if (lock_anim) { return; }
		$.fn.simpleSlider.lockAnim();
		p_quant = (p_quant === undefined) ? 1 : parseInt(p_quant);
		
		if ($('.simpleSlider.' + ids + ' ul li:first.slide-active').length > 0)
		{
			$('.simpleSlider.' + ids + ' ul li:last').detach().prependTo( $('.simpleSlider.' + ids + ' ul') );
			$('.simpleSlider.' + ids + ' ul').css('marginLeft', '-=' + objects[ids].options.get_width() + 'px');

			$('.simpleSlider.' + ids + ' ul').animate
			(
				{'margin-left': '+=' + objects[ids].options.get_width() + 'px'},
				'slow',
				'easeInOutCubic',
				function()
				{
					$('.simpleSlider.' + ids + ' ul li:first').detach().appendTo( $('.simpleSlider.' + ids + ' ul') );
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '0px');
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '-' + ( objects[ids].options.get_width() * ($('.simpleSlider.' + ids + ' ul li').length-1) ) + 'px');
					$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
					$('.simpleSlider.' + ids + ' ul li:last').addClass('slide-active');
					$.fn.simpleSlider._updateCaption(ids);
					$.fn.simpleSlider.unlockAnim();
				}
			);
		}
		else
		{
			var dist = p_quant * objects[ids].options.get_width();
			$('.simpleSlider.' + ids + ' ul').animate
			(
				{'margin-left': '+=' + dist + 'px'},
				'slow',
				'easeInOutCubic',
				function()
				{
					var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
					$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
					$('.simpleSlider.' + ids + ' ul li:eq(' + (index - p_quant) + ')').addClass('slide-active');
					$.fn.simpleSlider._updateCaption(ids);
					$.fn.simpleSlider.unlockAnim();
				}
			);
		}

	};

	$.fn.simpleSlider.lockAnim = function()
	{
		lock_anim = true;
	};

	$.fn.simpleSlider.unlockAnim = function()
	{
		lock_anim = false;
	};

	$.fn.simpleSlider.next = function(p_arg, p_quant)
	{
		var ids = $.fn.simpleSlider._get_ids(p_arg);
		if (!ids) { return; }
		if (lock_anim) { return; }
		$.fn.simpleSlider.lockAnim();
		p_quant = (p_quant === undefined) ? 1 : parseInt(p_quant);

		if ($('.simpleSlider.' + ids + ' ul li:last.slide-active').length > 0)
		{
			$('.simpleSlider.' + ids + ' ul li:first').detach().appendTo( $('.simpleSlider.' + ids + ' ul') );
			$('.simpleSlider.' + ids + ' ul').css('marginLeft', '+=' + objects[ids].options.get_width() + 'px');

			$('.simpleSlider.' + ids + ' ul').animate
			(
				{'margin-left': '-=' + objects[ids].options.get_width() + 'px'},
				'slow',
				'easeInOutCubic',
				function()
				{
					$('.simpleSlider.' + ids + ' ul li:last').detach().prependTo( $('.simpleSlider.' + ids + ' ul') );
					$('.simpleSlider.' + ids + ' ul').css('marginLeft', '0px');
					$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
					$('.simpleSlider.' + ids + ' ul li:first').addClass('slide-active');
					$.fn.simpleSlider._updateCaption(ids);
					$.fn.simpleSlider.unlockAnim();
				}
			);
		}
		else
		{
			var dist = p_quant * objects[ids].options.get_width();
			$('.simpleSlider.' + ids + ' ul').animate
			(
				{'margin-left': '-=' + dist + 'px'},
				'slow',
				'easeInOutCubic',
				function()
				{
					var index = $('.simpleSlider.' + ids + ' ul li.slide-active').index();
					$('.simpleSlider.' + ids + ' ul li.slide-active').removeClass('slide-active');
					$('.simpleSlider.' + ids + ' ul li:eq(' + (index + p_quant) + ')').addClass('slide-active');
					$.fn.simpleSlider._updateCaption(ids);
					$.fn.simpleSlider.unlockAnim();
				}
			);
		}
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

		if ($.isTouchCapable())
		{
			$(document).on
			(
				'singletap',
				'.simpleSlider.' + ids + ' .vitrine .arrow-left',
				function(e)
				{
					e.preventDefault();
					if (lock_anim) { return; }
					$('.simpleSlider.' + ids).simpleSlider('previous');
				}
			);

			$(document).on
			(
				'singletap',
				'.simpleSlider.' + ids + ' .vitrine .arrow-right',
				function(e)
				{
					e.preventDefault();
					if (lock_anim) { return; }
					$('.simpleSlider.' + ids).simpleSlider('next');
				}
			);

			$(document).on
			(
				'singletap',
				'.simpleSlider.' + ids + ' .vitrine ol.sl-indicators li:not(.active)',
				function(e)
				{
					e.preventDefault();
					if (lock_anim) { return; }
					$(this).closest('.simpleSlider').simpleSlider('goto', $(this).index()+1);
				}
			);

			$(document).on
			(
				'swipeleft',
				'.simpleSlider.' + ids + ' .vitrine',
				function(e)
				{
					e.preventDefault();
					if (lock_anim) { return; }
					var ids = $(this).closest('.simpleSlider').attr('data-sprite-ids');
					$('.simpleSlider.' + ids).simpleSlider('next');
				}
			);

			$(document).on
			(
				'swiperight',
				'.simpleSlider.' + ids + ' .vitrine',
				function(e)
				{
					e.preventDefault();
					if (lock_anim) { return; }
					var ids = $(this).closest('.simpleSlider').attr('data-sprite-ids');
					$('.simpleSlider.' + ids).simpleSlider('previous');
				}
			);
		}
		else
		{
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

			$(document).on
			(
				'click',
				'.simpleSlider.' + ids + ' .vitrine ol.sl-indicators li:not(.active)',
				function(e)
				{
					e.preventDefault();
					$(this).closest('.simpleSlider').simpleSlider('goto', $(this).index()+1);
				}
			);
		}

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