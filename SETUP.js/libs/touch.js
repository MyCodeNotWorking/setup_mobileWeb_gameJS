import { scaleFactor, canvasBound } from "../canvas.js"

var touch = {
    x: null,
    y: null,
    down: false,
    onDown: false,
    checkBox: function(posX, posY, width, height) {
        if(touch.x > posX && touch.x < posX + width &&
           touch.y > posY && touch.y < posY + height
          ) return true
    }
}

document.addEventListener("touchstart", function(e) {
    touch.down = true

    touch.onDown = true
    requestAnimationFrame(function() {
        touch.onDown = false
    })

    set_touch_pos(e)
})
document.addEventListener("touchmove", function(e) {
    set_touch_pos(e)
})
document.addEventListener("touchend", function() {
    touch.down = false 
})

function set_touch_pos(e) {
    touch.x = (e.touches[0].clientX - canvasBound.left) * scaleFactor
    touch.y = (e.touches[0].clientY - canvasBound.top) * scaleFactor
}

export default touch