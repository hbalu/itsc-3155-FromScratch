function setup() {
    let myCanvas = createCanvas(650, 650);
    myCanvas.parent('drawing-canvas');
    background("#fff")

}

function draw(){
   stroke(0);
   if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
}