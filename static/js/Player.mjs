import {Vec2d} from '../js/Math.mjs'
import {ctx} from '../js/Main.mjs'
import { Sprite } from '../js/Sprites.mjs'
import { ImageHandler } from '../js/Images.mjs'

class Player {
	constructor() {
		this.pos = Vec2d.zero
		this.sprite = new Sprite('player', {
			0: new ImageHandler('player/player_up.png'),
			1: new ImageHandler('player/player_down.png'),
            2: new ImageHandler('player/player_left.png'),
            3: new ImageHandler('player/player_right.png')
		})
		this.state = 1
	}
	move(vec, current) {
		this.pos = this.pos.add(vec)
		if (current[0]) {this.state = 0}
		else if (current[1]) {this.state = 1}
		else if (current[2]) {this.state = 2}
		else if (current[3]) {this.state = 3}
		this.draw()
	}
	draw() {
		this.sprite.draw(new Vec2d(canvas.width/2, canvas.height/2), this.state)

	}
}

export let player = new Player()