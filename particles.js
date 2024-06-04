class Particle {
  constructor(c, r) {
    this.loc = createVector(random(width), random(height));
    this.acc = createVector(2, 2);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    // this.startRange = 80;
    //this.lifespan = random(this.startRange);
    //this.start = this.lifespan / 2;
    let rnd = random(100);

    this.clr = img.get(this.loc.x, this.loc.y);

    this.strkClr = color(166, 22, 100);
    this.diam = 10;
    this.sw = 2; //strokeWeight
  }

  run() {
    this.update();
    //this.checkEdges();
    this.render();
  }

  update() {
    //  find out what vell his particle is over
    let r = floor(this.loc.y / cellSize);
    let c = floor(this.loc.x / cellSize);
    this.acc.setMag(0.08); //accSlider.value());
    if (r >= 0 && c >= 0 && c < numCols && r < numRows) {
      let a = grid[c][r].angle;
      this.acc.setHeading(a);
    }

    // get Velocity From Slider1
    let s2 = document.getElementById("slider2");
    if (s2.value > 0 && s2.value < 100) {
      this.acc.x *= s2.value * 0.1;
      this.acc.y *= s2.value * 0.1;
    }

    this.vel.add(this.acc);
    let s1 = document.getElementById("slider1").value;

    this.vel.limit(floor(s1));
    this.loc.add(this.vel);
  }

  checkEdges() {}

  render() {
    stroke(this.clr, 5);
    let s3 = document.getElementById("slider3");
    strokeWeight(s3.value);
    point(this.loc.x, this.loc.y);
  }
}
