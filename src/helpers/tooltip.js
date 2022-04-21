export default function tooltip(node, params) {
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
