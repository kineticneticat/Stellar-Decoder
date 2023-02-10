export class Vec2d {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	add(vec) {
		return new Vec2d(this.x + vec.x, this.y + vec.y)
	}

	get inverse() {
		return new Vec2d(0 - this.x, 0 - this.y)
	}

	static get zero() {
		return new Vec2d(0, 0)
	}
}