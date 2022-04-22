import _$ from 'bijou.js';

export default function (node, o) {
	let opts = {
		node,
		offset: 20,
		throttle: 200,
		interval: 100
	};
	if (typeof o === 'string') {
		opts.node = node.querySelector(o);
	} else if (typeof o === 'object') {
		opts = { ...opts, ...o };
	}
	let int = setInterval(
		_$.throttle(() => {
			node.style.height = opts.node?.clientHeight + opts.offset + 'px';
		}, opts.throttle),
		opts.interval
	);
}
