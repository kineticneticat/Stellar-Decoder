import {Vec2d} from '../js/Math.mjs'
import {player} from '../js/Player.mjs'

let keyLe=false, keyUp=false, keyRi=false, keyDo=false

document.addEventListener('keydown', (e) => {
		// console.log(e.keyCode)
		switch (e.keyCode) {
			case 37:
				keyLe = true
				break;
			case 38:
				keyUp = true
				break;
			case 39:
				keyRi = true
				break;
			case 40:
				keyDo = true
				break;
		}
	})
	document.addEventListener('keyup', (e) => {
		switch (e.keyCode) {
			case 37:
				keyLe = false
				break;
			case 38:
				keyUp = false
				break;
			case 39:
				keyRi = false
				break;
			case 40:
				keyDo = false
				break;
		}
	})

export function input() {
	let move = Vec2d.zero
	if (keyUp) {move = move.add(new Vec2d(0, -2))}
	if (keyDo) {move = move.add(new Vec2d(0, 2))}
	if (keyLe) {move = move.add(new Vec2d(-2, 0))}
	if (keyRi) {move = move.add(new Vec2d(2, 0))}
	player.move(move, [keyUp, keyDo, keyLe, keyRi])
}