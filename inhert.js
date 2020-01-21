Function.prototype.inherits = function(Superclass) {
    function Surrogate() {}
    Surrogate.prototype = Superclass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};



function MovingObject() { }

MovingObject.prototype.sayHello = function () {
  debugger
  console.log("Hello");
};

function Ship(name) {
  this.name = name; 
  this.sinking = function() {
    console.log(" Im sinking!!");
  };
}
Ship.inherits(MovingObject);

function Asteroid(size) {
  this.size = size;

  this.falling = function() {
    console.log(" Im Destroying Dinosaurs!!");
  };
}

Asteroid.inherits(MovingObject);

mv = new MovingObject();

ship = new Ship("Santa Maria");

ast = new Asteroid("100 Ft"); 

// debugger
ship.sayHello();
console.log("fin");