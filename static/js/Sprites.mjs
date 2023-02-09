export class Sprite {
	constructor(name, bundle) {
		this.name = name
		this.bundle = bundle
	}
	set pos(pos) {
		this.pos = pos
		draw()
	}
}