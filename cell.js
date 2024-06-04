class Cell {
  constructor(c, r) {
    this.loc = createVector(c * cellSize, r * cellSize);
    this.center = createVector(
      this.loc.x + cellSize / 2,
      this.loc.y + cellSize / 2
    );
    this.clr = color(0, 0, 0);
    this.strk = color(250, 100, 210);
    this.angle = 0;
    
  }

  run() {
    this.update();
   // this.render();
  }

  update() {
    //this.angle += this.angularVelocity * 8;
  }
  render() {
    let opacity = document.getElementById("slider4").value;
    opacity *= 0.1;
    this.strk = color(0, 0, 0, opacity)
    // stroke(this.strk);
    this.clr = color(200, 200, 200, opacity);
    stroke(this.strk)
    fill(0, 0, 0, 0);
    strokeWeight(3);
    // draw rectangle
    rect(this.loc.x, this.loc.y, cellSize, cellSize);
    // draw center

    ellipse(this.center.x, this.center.y, cellSize / 8);
    // draw line


    //  rotate line
    push();
    translate(this.center.x, this.center.y); //  move origin to center of cell
    rotate(this.angle);
    line(0, 0, cellSize / 2, 0);
    pop();
  }
}

