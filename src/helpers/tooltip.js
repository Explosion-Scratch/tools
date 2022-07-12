import { until } from '$helpers/utils';

export default async function tooltip(node, params) {
	fetch('https://unpkg.com/@popperjs/core@2')
		.then((r) => r.text())
		.then(eval)
		.then(() => {
			fetch('https://unpkg.com/tippy.js@6')
				.then((r) => r.text())
				.then(eval);
		});
	await until(() => window.tippy && window.Popper);
	const tip = window.tippy(node, getParams(params));
	function getParams(params) {
		if (typeof params === 'string') {
			params = {
				content: params
			};
		}
		if (!params) {
			params = node.alt;
		}
		return {
			// arrow: roundArrow,
			placement: 'top',
			theme: 'light',
			...params
		};
	}
	return {
		update: (newParams) => {
			let p = getParams(newParams);
			console.log('Updating tooltip, ', p);
			if (p.content) {
				tip.setContent(p.content);
			}
			tip.setProps(p);
		},
		destroy: () => {
			tip.destroy();
		}
	};
}
