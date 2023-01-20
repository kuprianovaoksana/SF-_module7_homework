// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

let sumPower = 0;

class Device {
    
    constructor(power) {
        this.power = power;
        this.status = "off";
    }
    switch() {
        if (this.status==="off"){
            this.status = "on";
            sumPower += this.power;
            console.log(`You turned on your ${this.name}, total power is ${sumPower}`);
        }
        else{
            this.status = "off";
            sumPower -= this.power;
            console.log(`You turned off your ${this.name}, total power is ${sumPower}`);        
        }
        return;
    }
}

let lamp = new Device(25);
let computer = new Device(125);
let clock = new Device(5);

lamp.name = "Lamp";
lamp.light = "blue";
lamp.changeLight = function(){
    if(lamp.status==="on"){
        if(this.light==="blue"){
            this.light="yellow";
            console.log('You turned on the yellow light');
            }
        else{
            this.light="blue";
            console.log('You turned on the blue light');
            }
    }
    else{
        console.log("The Lamp is turned off, turn on your Lamp first");
    }
    return;
}

computer.name = "Computer";
computer.processor = "Intel";

clock.name = "Clock";


lamp.switch();
computer.switch();
lamp.switch();
clock.switch();
lamp.changeLight();
lamp.switch();
lamp.changeLight();
    




