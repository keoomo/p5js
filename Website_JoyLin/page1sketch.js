let g

//ANGLES
let a1 = 0
let a2 = 0
let a3 = 0
let a4 = 2

//SPEED
let s1 = 1
let s2 = 5
let s3 = 2
let s4 = 6

//Centre position
let centerX, centerY

let font
function preload() {
  font = loadFont("ClashDisplay-Semibold (1).ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  g = createGraphics(width, height)
  textFont(font)
  stroke(255);
  angleMode(DEGREES)
  noStroke()
  background(0)
  
  centerX = width/2
  centerY=height/2

}

function draw() {
  background(0, 25)
  centerX=mouseX
  centerY=mouseY
  
  push()
  translate(100, height - 150)
  fill(255)
  rect(0, 0, 200, 80, 20)
  fill(0)
  textSize(32)
  textAlign(CENTER, CENTER)
  text('NEXT!!', 100, 40)
  pop()

  push()
  translate(centerX, centerY)
  rotate(a1)
  fill("#345995")
  square(0, 0, 100)
  pop()
  
  push()
  translate(centerX, height/2)
  rotate(a2)
  let x1 = 150 // distance from center
  fill("#E40066")
  ellipse(x1, 0, 40)
  pop()
  
  push()
  translate(centerX, height/2)
  rotate(a3)
  let x2 = 300 // farther distance
  fill("#03CEA4")
  ellipse(x2, 0, 45)
  pop()
    
  push()
  translate(centerX, height/2)
  rotate(a4)
  let x3 = 250 // farther distance
  fill("#EAC435")
  ellipse(x3, 0, 45)
  pop()

  //Rotating Words
  push()
  translate(width/2, height/2)
  fill(255)
  textSize(80)
  text("Welcome To My Site", -200, 0); // other side
  pop();

  push()
  translate(width/2, height/2)
  fill(255)
  textSize(50)
  text("Find the Button!", -300, 50); // other side
  pop();

  //print(rotations)
  a1 += s1
  a2 += s2
  a3 += s3
  a4 += s4

  filter(ERODE)
  
  fill(0, 130) // adjust opacity (higher = darker)
  rect(0, 0, width, height)

  push()
  blendMode(ADD)

  let hue = map(mouseX, 0, width, 0, 360)
  pop()

  //CREATE FLASHLIGHT MASK LAYER
  g.background(0, 10)
  g.erase()
  g.drawingContext.shadowBlur = 60
  g.drawingContext.shadowColor = color(255)
  g.circle(mouseX, mouseY, 500)
  g.noErase()
  g.filter(BLUR, 50)

  
  // APPLY MASK ON TOP
  image(g, 0, 0)
}

 function mousePressed() {
  let bx = 100;
  let by = height - 150;
  let bw = 200;
  let bh = 80;

  if (mouseX > bx && mouseX < bx + bw &&
      mouseY > by && mouseY < by + bh) {
    window.location.href = "page2sketch.html"
  }
}
