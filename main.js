img = ""
status = ""
objects = []

function setup() {
    canvas = createCanvas(555, 407)
    canvas.center()
    objectdetector = ml5.objectDetector("cocossd", modeloaded)



}

function preload() {
    img = loadImage("download.jfif")

}

function draw() {
    image(img, 0, 0, 555, 407)
    if (status != "") {
        for (let i = 0; i < objects.length; i++) {
            fill("#FF0000")
            percent = floor(objects[i].confidence*100)
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
            noFill()
            stroke("#FF0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            document.getElementById("btn1").innerHTML = "objects detected"
        }
    }



}

function modeloaded() {
    console.log("Model is loaded!")
    status = true
    objectdetector.detect(img, gotresults)

}

function gotresults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        objects = results
    }
}""