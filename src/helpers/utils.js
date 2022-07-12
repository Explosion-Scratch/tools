export function until(cb, wait) {
	if (cb()) {
		return Promise.resolve(cb());
	}
	return new Promise((resolve) => {
		let int = setInterval(() => {
			if (cb()) {
				clearInterval(int);
				resolve(cb());
			}
		}, wait);
	});
}
