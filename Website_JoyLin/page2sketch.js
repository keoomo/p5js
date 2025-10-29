let particles = []
let cubeCount = 50
let t = 0
let overlay

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  rectMode(CENTER)
  noStroke()

  // Initialize random particles
  for (let i = 0; i < 250; i++) {
    particles.push({
      x: random(-400, 300),
      y: random(-400, 400),
      z: random(-400, 400),
      size: random(15, 10),
      col: color(random(255), random(255), random(255))
    }) 
  }
}

function draw() {
  background(20)

  t += 0.02
  
//Particle with noise 
  for (let p of particles) {
    push()
    let nx = p.x + 150 * noise(t + p.x)
    let ny = p.y + 50 * noise(t + p.y)
    let nz = p.z + 150 * noise(t + p.z)
    translate(nx, ny, nz)
    fill(p.col)
    sphere(p.size)
    pop()
  }

  //Flashlight glows 
  push()
  rotateY(frameCount * 0.005)
  rotateX(frameCount * 0.005)  
  translate(mouseX - width/2, mouseY - height/2)
  noFill()
  stroke(255, 100)
  strokeWeight(2)
  sphere(300)
  pop()

  filter(BLUR, 5)
  filter(POSTERIZE, 3)
  
  drawBackButton()
}
function drawBackButton() {
  push()
  resetMatrix()
  translate(-width / 2, -height / 2)
  fill(255)
  rect(200, height - 150, 80, 80, 80)
  
  drawingContext.disable(drawingContext.DEPTH_TEST)
  fill(0)
  textSize(24)
  textAlign(CENTER, CENTER)
  text('BACK TO MAIN', 100 + 100, height - 150 + 40)
  
  drawingContext.enable(drawingContext.DEPTH_TEST)
  pop()
}

function mousePressed() {
  let bx = 100
  let by = height - 150
  let bw = 200
  let bh = 80

  // Check if mouse is inside button
  if (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh) {
    window.location.href = 'index.html' // change to your main page filename
  }
}

