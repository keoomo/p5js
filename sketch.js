let thing = []
let vert = 100
let wobbleA = 40
let baseWidth = 120
let baseHeight = 70
let t = 0

class thingBlob {
//NEED to add Z b/c it’s 3D 
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    this.xV = random(-1,2)
    this.yV = random(-3,1)
    this.zV = random(-1,1)

    this.wobble = random(1000)
    this.col1 = color(random(255), random(255), random(255))
    this.col2 = color(random(255), random(255), random(255))
    this.col3 = color(random(255), random(255), random(255))
    this.rot = random(TWO_PI)
    this.rotSpeed = random(-0.01, 0.01)
  }

  move() {
    //VELOCITY OF BLOBS IN SPACE
    this.x += this.xV
    this.y += this.yV
    this.z += this.zV

    // LIKE FLOWERS doesn't move off screen
    if (this.x > width/2){
 this.x = -width/2
}
    if (this.x < -width/2){
 this.x = width/2
}
    if (this.y > height/2){
this.y = -height/2
}
    if (this.y < -height/2) {
this.y = height/2
}
    if (this.z > 300) {
this.z = -300
}
    if (this.z < -300) {
this.z = 300
}
   this.rot += this.rotSpeed
}

  display() {
    push()
    translate(this.x, this.y, this.z)
    rotateX(this.rot)
    rotateZ(this.rot * 2)
    rotateY(this.rot * 10)

//REFERENCE to Assignment 2 
    beginShape()
    for (let j = 0; j < vert; j++) {
      let angle = (j/vert) * TWO_PI
      let xr = baseWidth * cos(angle)
      let yr = baseHeight * sin(angle)

      // Noise-based wobble
      let n = noise(
        cos(angle) * 3 + this.wobble, 
        sin(angle) * 2 + this.wobble, 
        t
      )
      let rOffset = map(n, 0, 1, -wobbleA, wobbleA)
      let r = 1 + rOffset / 100

      let amt = map(j, 0, vert, 0, 1)
      let c = lerpColor(this.col1, this.col2, amt)
      fill(c)

      vertex(xr * r, yr * r)
    }
    endShape(CLOSE)
    pop()
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  noStroke()
  for (let i = 0; i < 8; i++) {
    thing.push(new thingBlob(
      random(-width/2, width/2), 
      random(-height/2, height/2), 
      random(-200,200)
    ))
  }
}

function draw() {
  background(0)
  t += 0.01

  for (let c of thing) {
    c.move() //makes blobs move
    c.display() //shows blob on the screen
  }
}

function mousePressed() {
  thing.push(new thingBlob(
    random(-width/2, width/2),
    random(-height/2, height/2),
    random(-200,200)
  ))
}




