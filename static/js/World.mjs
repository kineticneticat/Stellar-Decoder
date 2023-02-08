import {ImageHandler} from '../js/Images.mjs'

class Scene {
	constructor(name, groundHandler, doors, colliderHandler) {
		this.name = name
		this.groundHandler = groundHandler
		this.doors = doors
		this.colliderHandler = colliderHandler
	}
	draw() {
		this.groundHandler.draw()
	}
}

class CWorld {
	constructor() {
		this.scene = new Scene('test', new ImageHandler('scenes/ground/test.png'), {}, new ImageHandler('scenes/collider/test_collider.png'))
	}
	draw() {
		this.scene.draw()
	}
	move() {}
	switch() {}
}
export let World = new CWorld()
