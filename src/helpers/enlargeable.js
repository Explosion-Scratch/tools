// Enlarge to create an image modal
export default function (node) {
	node.addEventListener('click', handle);
	let container = { remove: () => {} };
	async function handle(e) {
		let clone = document.createElement('img');
		let src = node.src;
		if (node.matches('canvas')) {
			let blob = await new Promise((r) => node.toBlob(r, 'image/png'));
			src = URL.createObjectURL(blob);
		}
		clone.src = url(src);
		container = document.createElement('container');
		container.setAttribute(
			'style',
			`
			position: fixed;
			inset: 0;
			z-index: 100;
			background: #0005;
			cursor: zoom-out;
		`
		);
		container.appendChild(clone);
		document.body.appendChild(container);
		Object.assign(clone.style, {
			position: 'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			maxWidth: '80vw',
			maxHeight: '80vh'
		});
		container.onclick = () => container.remove();
	}

	function url(i) {
		if (i.startsWith('blob')) {
			return i;
		}
		const WIDTH = 512;
		const HEIGHT = 512;
		let a = new URL(i);
		let search = new URLSearchParams(a.search);
		search.set('w', WIDTH);
		search.set('width', WIDTH);
		search.set('h', HEIGHT);
		search.set('height', HEIGHT);
		a.search = search;
		return a.toString();
	}

	return {
		destroy() {
			node.removeEventListener('click', handle);
			container.remove();
		}
	};
}
