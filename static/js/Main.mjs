import {testForImagesLoaded, ImageHandler, targetImages, loadedImages} from '../js/Images.mjs'
// import {testForJsonLoaded, JsonHandler, targetJsonFiles, loadedJsonFiles} from '../js/Json.mjs'
import {World} from '../js/World.mjs'
import {tilemaps} from '../js/Tilemaps.mjs'
import {input} from '../js/Controls.mjs'

export const canvas = document.getElementById('canvas')
export const ctx = canvas.getContext('2d')
let test
let ticks = 0
canvas.width = 512
canvas.height = 512

const testForResourcesLoaded = () => testForImagesLoaded()// && testForJsonLoaded()

window.onload = function() {
	//load resources here

	// test = new ImageHandler('cauldon_bottom.png')
	// test = new JsonHandler('tilemaps/map.json')
	waitForResourcesLoaded()
}

function waitForResourcesLoaded() {
	if (testForResourcesLoaded()) {
		//triggers when resources loaded
		// console.log(test.json)
		// test.draw(0, 0)
		console.log(tilemaps[0])
		tick()
	} else {requestAnimationFrame(waitForResourcesLoaded)}
}

function tick() {
	if (ticks % 5 == 0) {
		ctx.fillStyle = '#000000'
		ctx.fillRect(0, 0, canvas.width, canvas.height)
		World.draw()
		input()
	}
	


	ticks++
	requestAnimationFrame(tick)
}