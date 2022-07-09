export function until(cb, wait) {
	if (cb()) {
		return cb();
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
