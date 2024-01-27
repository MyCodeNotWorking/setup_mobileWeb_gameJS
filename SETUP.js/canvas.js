var canvas = document.getElementById("canvas")
var c = canvas.getContext("2d")
canvas.width = 480
canvas.height = 720
c.imageSmoothingEnabled = false
var scaleFactor = canvas.width / canvas.getBoundingClientRect().width
var canvasBound = canvas.getBoundingClientRect()

function stopTouchScrolling(){
    document.body.addEventListener("touchstart", function (e) {
        if (e.target == canvas) {
            e.preventDefault()
        }
    }, { passive: false });
    document.body.addEventListener("touchend", function (e) {
        if (e.target == canvas) {
            e.preventDefault()
        }
    }, { passive: false });
    document.body.addEventListener("touchmove", function (e) {
        if (e.target == canvas) {
            e.preventDefault()
        }
    }, { passive: false })
 }
stopTouchScrolling()

export { canvas, c, scaleFactor, canvasBound }