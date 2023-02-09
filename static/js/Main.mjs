import {testForImagesLoaded, ImageHandler, targetImages, loadedImages} from '../js/Images.mjs'
import {testForJsonLoaded, JsonHandler, targetJsonFiles, loadedJsonFiles} from '../js/Json.mjs'
import {World} from '../js/World.mjs'
import {genTilesets, tilemaps} from '../js/Tilemaps.mjs'

export const canvas = document.getElementById('canvas')
export const ctx = canvas.getContext('2d')
let test
let ticks = 0
canvas.width = 500
canvas.height = 500

const testForResourcesLoaded = () => testForImagesLoaded() && testForJsonLoaded()

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
		genTilesets()
		console.log(tilemaps[0])
		tick()
	} else {requestAnimationFrame(waitForResourcesLoaded)}
}

function tick() {
	if (ticks % 10 == 0) {
		World.draw()
	}


	ticks++
	// requestAnimationFrame(tick)
}