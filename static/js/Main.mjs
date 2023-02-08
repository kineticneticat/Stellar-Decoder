import {testForImagesLoaded, ImageHandler} from '../js/Images.mjs'
import {World} from '../js/World.mjs'

export const canvas = document.getElementById('canvas')
export const ctx = canvas.getContext('2d')
let test
let ticks = 0
canvas.width = 500
canvas.height = 500

window.onload = function() {
	//load resources here

	// test = new ImageHandler('cauldon_bottom.png')
	waitForImagesLoaded()
}

function waitForImagesLoaded() {
	if (testForImagesLoaded()) {
		//triggers when resources loaded
		// console.log(a)
		// test.draw(0, 0)
		tick()
	} else {
		requestAnimationFrame(waitForImagesLoaded)
	}
}

function tick() {
	if (ticks % 10 == 0) {
		
	}


	ticks++
	requestAnimationFrame()
}