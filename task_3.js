// Написать функцию, которая создает пустой объект, но без прототипа.

const createObj = function() {
    return obj = Object.create(null);
}

console.log(createObj());
console.log(Object.getPrototypeOf(obj));
