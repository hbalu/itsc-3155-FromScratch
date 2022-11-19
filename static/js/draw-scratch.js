let canvasHTMLElement;
let context;

function setup() {
    setupCanvas();
    setupColorButtons();
}

function setupCanvas() {
    let jsCanvas = createCanvas(650, 650);
    canvasHTMLElement = document.getElementById("drawing-canvas")
    jsCanvas.parent('drawing-canvas');
    background("#fff")
    context = canvasHTMLElement.getContext('2d');
}

function setupColorButtons() {
    let colorsContainer = document.getElementById('color-container');
    for (const colorButton of colorsContainer.children) {
        colorButton.addEventListener("click", function() {
            currentColor = colorButton.id;
            context.strokeStyle = colorButton.backgroundColor;
        })
    }
}

function draw(){
   stroke(0);
   if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
}