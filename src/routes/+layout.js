import tools from '../tools.json';
console.log(tools);
export async function load({ params, url }) {
	let id = url.pathname.split('/').slice(-1)[0];

	let found = tools.find((i) => i.id.toLowerCase() === id.toLowerCase());
	if (!found) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
		return {
			tool: {}
		};
	}
	console.log(found);
	return {
		tool: found
	};
}
