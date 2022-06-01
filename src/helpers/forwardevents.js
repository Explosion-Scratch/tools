export default function (element, { additionalEvents = [], dontForward = [], dispatch } = {}) {
	const events = [
		'focus',
		'blur',
		'fullscreenchange',
		'fullscreenerror',
		'scroll',
		'cut',
		'copy',
		'paste',
		'keydown',
		'keypress',
		'keyup',
		'auxclick',
		'click',
		'contextmenu',
		'dblclick',
		'mousedown',
		'mouseenter',
		'mouseleave',
		'mousemove',
		'mouseover',
		'mouseout',
		'mouseup',
		'pointerlockchange',
		'pointerlockerror',
		'select',
		'wheel',
		'drag',
		'dragend',
		'dragenter',
		'dragstart',
		'dragleave',
		'dragover',
		'drop',
		'touchcancel',
		'touchend',
		'touchmove',
		'touchstart',
		'pointerover',
		'pointerenter',
		'pointerdown',
		'pointermove',
		'pointerup',
		'pointercancel',
		'pointerout',
		'pointerleave',
		'gotpointercapture',
		'lostpointercapture',
		...additionalEvents
	].filter((i) => !dontForward.includes(i));

	for (let event of events) {
		element.addEventListener(event, handler);
	}

	function handler(e) {
		dispatch(e.type, e);
	}

	return {
		destroy() {
			for (let event of events) {
				element.removeEventListener(event, handler);
			}
		}
	};
}