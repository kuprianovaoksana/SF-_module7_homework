// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const goods = {
    availability: 'in stock'
}

const product = Object.create(goods);

product.art = '0123';
product.price = 2025;

const printOwnKeys = function (someObj){
    for (let key in someObj) {
        if(someObj.hasOwnProperty(key)) {
            console.log(key);
            console.log(someObj[key]);
        } 
    }   
}

printOwnKeys(product);









// (function (someObj){
//     for (let key in someObj) {
//         if(someObj.hasOwnProperty(key)) {
//             console.log(key);
//             console.log(someObj[key]);
//         } 
//     }   
// }(product));

// const printOwnKeys = someObj =>{
//     for (let key in someObj) {
//         if(someObj.hasOwnProperty(key)) {
//             console.log(key);
//             console.log(someObj[key]);
//         } 
//     }   
// }

// printOwnKeys(product);

