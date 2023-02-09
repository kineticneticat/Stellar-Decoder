import {ImageHandler} from '../js/Images.mjs'
import {JsonHandler} from '../js/Json.mjs'

class Tilemap {
	constructor(path) {
		this.path = path
		this.data = new JsonHandler(path)
	}
	genTilesets() {
		this.data = this.data.json
		this.data.tilesets.forEach(x => {
			x.img = new ImageHandler(`source/${x.image}`)
		})
	}
	draw() {
		
	}
}

export const tilemaps = [
	new Tilemap('tilemaps/map.json')
]
export const genTilesets = () => tilemaps.forEach(x => x.genTilesets())