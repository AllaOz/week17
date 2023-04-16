class Worker {
    constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
    }
  
    getSalary() {
      return this.rate * this.days;
    }
  }
  const worker = new Worker('Иван', 'Иванов', '10', '31');
  console.log(worker.name); //выведет 'Иван'
  console.log(worker.surname); //выведет 'Иванов'
  console.log(worker.rate); //выведет 10
  console.log(worker.days); //выведет 31
  console.log(worker.getSalary()); //выведет 310 — то есть 10*31
  

  class Transport {
    constructor(type, brand, price) {
      this.type = type;
      this.brand = brand;
      this.price = price;
    }
  
    getInfo() {
      return {
        type: this.type,
        brand: this.brand
      };
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class Car extends Transport {
    constructor(brand, doors) {
      super('car', brand, null);
      this.doors = doors;
    }
  
    getDoorsCount() {
      return this.doors;
    }
  }
  
  class Bike extends Transport {
    constructor(brand, maxSpeed) {
      super('bike', brand, null);
      this.maxSpeed = maxSpeed;
    }
  
    getMaxSpeed() {
      return this.maxSpeed;
    }
  }
  
  const id1 = new Transport('car', 'Audi', 4300000);
  const id2 = new Transport('car', 'Mercedes-Benz', 2800000);
  const id3 = new Transport('bike', 'Harley-Davidson', 1300000);
  const id4 = new Transport('bike', 'Harley-Davidson', 1400000);
  
  const car1 = new Car('Audi', 4);
  const car2 = new Car('Mercedes-Benz', 4);
  const bike1 = new Bike('Harley-Davidson', 210);
  const bike2 = new Bike('Harley-Davidson', 220);
  
  console.log(car1.getDoorsCount());
  console.log(bike1.getMaxSpeed());
  
  