class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
    this.width  = 800;
    this.height = 100;
    this.body = Bodies.rectangle(400, 750, 800, 100, options);
    World.add(world, this.body);
  };
  display()
  {
    rectMode(CENTER);
    fill("green");
    rect(400, 750, this.width, this.height);
  }
}
