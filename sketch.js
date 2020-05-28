// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as const Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    engine = Engine.create();
    world = engine.world;
    var canvas =  createCanvas(800, 800);
    ground = new Ground();
    test = new Cannon(PI/2);

}

function draw() {
    background("blue");
    Engine.update(engine);
    test.display();
    ground.display();
    
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}