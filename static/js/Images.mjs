import {ctx} from '../js/Main.mjs'

export let targetImages = 0
export let loadedImages = 0

export let testForImagesLoaded = () => targetImages == loadedImages

export class ImageHandler {
	constructor(path) {
		this.path = `../static/images/${path}`
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
	draw(offset) {
		ctx.drawImage(this.img, offset.x, offset.y)
	}
}

function doesImageExist(path) {
	
}
