class Cannon
{
    constructor(angle)
    {
     
        this.body = Bodies.rectangle(120, 675, 105, 10);
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);

        ellipse(60, 675, 100, 100);
    }
    display()
    {
      fill("grey");
      
      rectMode(CENTER);
      rect(120, 675, 105, 10);
      ellipse(60, 675, 100, 100);
      
    }
}