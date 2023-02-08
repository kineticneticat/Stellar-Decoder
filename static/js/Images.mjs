import {ctx} from '../js/Main.mjs'

let targetImages = 0
let loadedImages = 0

export let testForImagesLoaded = () => targetImages == loadedImages

export class ImageHandler {
	constructor(path) {
		this.path = `../images/${path}`
		this.img = new Image()
		this.img.src = this.path
		targetImages++
		this.img.onload = () => {
			loadedImages++
			console.log(`Loaded ${this.path}`)
		}
	}
	get width() {
		return this.img.width
	}
	get height() {
		return this.img.height
	}
	draw(x, y) {
		ctx.draw(this.img, x, y)
	}
}

