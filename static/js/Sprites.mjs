export class Sprite {
	constructor(name, bundle) {
		this.name = name
		this.bundle = bundle
	}
	draw(pos, state) {
		// console.log(this.bundle, state)
		this.bundle[state].draw(pos)
	}
}