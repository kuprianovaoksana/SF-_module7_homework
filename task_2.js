// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

let someString = "name1";
let someobj = {
    name: 'Katya',
    age: 5
}

const isThereKeyInObj = function(str, obj) {
    for (let key in obj){
        if (key===str) {
            return true;
        }
        else{
            return false;
        }
    }   
}

console.log(isThereKeyInObj(someString, someobj));