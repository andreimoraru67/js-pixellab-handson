class Car {
  areLightsOn = false;

  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;

    this.isTrunkOpen = false;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();

    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5000);
  }
}

const audi = new Car('Audi', 'black', 4, 50);

const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

cars.forEach((car) => {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );

  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();

  console.log(`Viteza noua este ${car.speed} km/h.`);
});
