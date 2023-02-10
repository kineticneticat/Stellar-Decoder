import {Vec2d} from '../js/Math.mjs'

class Player {
	constructor() {
		this.pos = Vec2d.zero
	}
	move(vec) {
		this.pos = this.pos.add(vec)
	}
}

export let player = new Player()