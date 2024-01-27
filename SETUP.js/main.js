import { canvas, c } from "./canvas.js"
//import scenes 
import main_game from "./scenes/Main_Game/Main_Game.js"

export var frame_counter = 0
export var game
window.addEventListener("load", function() {
    class Main {
        constructor() {
            this.scene = main_game
        }
        update() {
            for(var i=0;i<this.scene.ui_objects.length;i++) {
                this.scene.ui_objects[i].update()
            }
            for(var i=0;i<this.scene.game_objects.length;i++) {
                this.scene.game_objects[i].update()
            }
        }
        draw() {
            for(var i=0;i<this.scene.game_objects.length;i++) {
                this.scene.game_objects[i].draw()
            }
            for(var i=0;i<this.scene.ui_objects.length;i++) {
                this.scene.ui_objects[i].draw()
            }
        }
    }

    game = new Main()

    function update_main() {
        c.clearRect(0, 0, canvas.width, canvas.height)
        frame_counter ++
        game.update()
        game.draw()
        requestAnimationFrame(update_main)
    }
    update_main()
})