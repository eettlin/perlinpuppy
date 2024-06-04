// Lab 424 Flow Field One
// global variables
let cellSize = 50;
let numCols, numRows;
let grid = [];
let parts = [];
let img;
let sw = 5;
const reSize = 1.14;

function preload() {
  img = loadImage("puppy.jpg");
}

function setup() {
  let cnv = createCanvas(900, 800);
  let cd = document.getElementById("canvasDiv");
  cnv.parent(cd);
  initGrid();
  frameRate(30);
  loadParticles(2000);
  strokeWeight(2);
  sw = 5;
  background(img);
}

function draw() {
  manageParticles();
  for (let i = 0; i < parts.length; i++) {
    parts[i].run();
  }
  setCellAngle();
  //renderCalles
  for(let r = 0; r < grid.length;r++){
    for(let c = 0; c < grid[r].length; c++){
       grid[r][c].render()
    }
  }

}

function initGrid() {
  // get cell dimensions
  numCols = floor(width / cellSize);
  numRows = floor(height / cellSize);
  // load 2d array with cell objects
  for (let c = 0; c < numCols; c++) {
    grid[c] = [];
    for (let r = 0; r < numRows; r++) {
      grid[c][r] = new Cell(c, r);
    }
  }
  setCellAngle();
}

function setCellAngle() {
  let yOff = 0;
  for (let c = 0; c < numCols; c++) {
    let xOff = 0;
    for (let r = 0; r < numRows; r++) {
      grid[c][r].angle = noise(xOff, yOff) * TWO_PI * 1;
      xOff += 0.05;
    }
    yOff += 0.05;
  }
}

function loadParticles(n) {
  for (let i = 0; i < n; i++) {
    parts[i] = new Particle();
  }
}

function manageParticles() {
  for (let i = 0; i < parts.length; i++) {
    if (
      parts[i].loc.x < 0 ||
      parts[i].loc.x > width ||
      parts[i].loc.y < 0 ||
      parts[i].loc.y > height
    ) {
      parts.splice(i, 1); //  remover particle if out of bounds
      parts.push(new Particle(random(width), random(height)));
    }
  }
}


