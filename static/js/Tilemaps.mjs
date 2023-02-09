import {ImageHandler} from '../js/Images.mjs'
<<<<<<< HEAD
import {player} from '../js/Player.mjs'
import {Vec2d} from '../js/Math.mjs'
=======
>>>>>>> 4648f2e (aaa)

class Tilemap {
	constructor(path) {
		this.path = path
		this.img = new ImageHandler(path)
<<<<<<< HEAD
		this.imgCentreOffset = new Vec2d(this.img.width/2, this.img.height/2)
=======
>>>>>>> 4648f2e (aaa)
	}
	draw() {
		this.img.draw(player.pos.inverse)
	}
}

export const tilemaps = [
	new Tilemap('tilemaps/test_room.png')
]