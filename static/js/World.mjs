import {tilemaps} from '../js/Tilemaps.mjs'

class Scene {
	constructor(name, doors, tilemap) {
		this.name = name
		this.doors = doors
		this.tilemap = tilemap
	}
	draw() {
		tilemaps[this.tilemap].draw()
	}
}

class CWorld {
	constructor() {
		this.scene = new Scene('test', {}, 0)
	}
	draw() {
		this.scene.draw()
	}
	move() {}
	switch() {}
}
export let World = new CWorld()
