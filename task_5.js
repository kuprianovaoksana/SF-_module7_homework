// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

let sumPower = 0;

class Device {
    constructor(power, name) {
        this.power = power;
        this.status = "off";
        this.name = name;
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

const lamp = new Device(25, "Lamp");
const computer = new Device(125, "Computer");
const clock = new Device(5, "Clock");

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

computer.processor = "Intel";

lamp.switch();
computer.switch();
lamp.switch();
clock.switch();
lamp.changeLight();
lamp.switch();
lamp.changeLight();


    




