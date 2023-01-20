// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

let sumPower = 0;

function Device (power){
    this.power = power;
    this.status = "off";
    this.switch = function(){
        
        if(this.status==="off"){
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
lamp.switch();











