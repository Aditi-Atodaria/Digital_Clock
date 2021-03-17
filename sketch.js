function setup() {
  createCanvas(400,400);
  // createSprite(400, 200, 50, 50);
  
  
}

function draw() {
  background(0,0,0); 

translate(200,200)

  
  hr = hour();
  mn = minute();
  sc = second();
  
  angleMode(DEGREES)
  scAngle = map(sc,0,60,0,360); 
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);

  // fill(0, 0, 0);
  // stroke(255,0,0);
  // strokeWeight(7);
  // arc(150, 150, 200, 200);

  // fill(0, 0, 0);
  // stroke(0,255,0);
  // strokeWeight(7);
  // ellipse(150, 150, 160, 160);

  // fill(0, 0, 0);
  // stroke(0,0,255);
  // strokeWeight(7);
  // ellipse(150, 150, 120, 120);

    // stroke(255,0,0);
    // strokeWeight(7);
    // line(100,200,100,100);
    // //line(100,200,100,100);

    // stroke(0,255,0);
    // strokeWeight(7);
    // line(100,170,100,100);

    // stroke(0,0,255);
    // strokeWeight(7);
    // line(100,140,100,100);

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,150,5);
  pop();

  stroke(0,0,255);
  strokeWeight(7);
  fill("black");
  arc(0,0,300,300,0,hrAngle);
  

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,5);
  pop();

  stroke(0,255,0);
  strokeWeight(7);
  fill("black");
  arc(0,0,200,200,0,mnAngle);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,5);
  pop();

  stroke(255,0,0);
  strokeWeight(7);
  fill("black");
  arc(0,0,100,100,0,scAngle);
  


  drawSprites();
}