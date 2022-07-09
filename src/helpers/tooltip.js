import { until } from '$helpers/utils';

export default async function tooltip(node, params) {
	await until(() => window.tippy);
	if (typeof params === 'string') {
		params = {
			content: params
		};
	}
	if (!params) {
		params = node.alt;
	}
	let tip = window.tippy(node, {
		// arrow: roundArrow,
		placement: 'top',
		theme: 'light',
		...params
	});
	return {
		update: (newParams) => {
			tip.setProps(newParams);
		},
		destroy: () => {
			tip.destroy();
		}
	};
}
