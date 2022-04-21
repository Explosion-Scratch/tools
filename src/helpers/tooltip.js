export default async function tooltip(node, params) {
	await until(() => window.tippy);
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

function until(cb, wait) {
	return new Promise((resolve) => {
		let int = setInterval(() => {
			if (cb()) {
				clearInterval(int);
				resolve(cb());
			}
		}, wait);
	});
}
