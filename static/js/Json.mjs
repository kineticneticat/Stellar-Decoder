export let targetJsonFiles = 0
export let loadedJsonFiles = 0

export let testForJsonLoaded = () => targetJsonFiles == loadedJsonFiles

export class JsonHandler {
	constructor(path) {
		this.path = '../static/' + path
		targetJsonFiles++
		fetch(this.path)
			.then(response => response.json())
			.then(data => {
				loadedJsonFiles++
				this.json = data
				console.log(`Loaded ${this.path}`)
			})
	}
}
