// //1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
// var a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// var b = 0;
// while (b < a.length) {
//     console.log(a[b++]);
// }
// let num = 0;
// while(num <= 100) {
//     if (isSimple(num))
//         console.log(num++);
// }

function isSimple(number) {
    let counter = 0;
    for (let i = 0; i <= number; i++) {
        if (number % i == 0)
            counter++;
    }
    return counter == 2;
}

let num = -1;
while (num < 100) {
    // console.log('num', num++));
    if (isSimple(num)) {
        console.log(num);
    }
    num++;
}

// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
// Товары в корзине хранятся в массиве. Задачи:
//  - Организовать такой массив для хранения товаров в корзине;
//  - Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var product = ['Карандаш', 'Ручка', 'Тетрадь'];
var cost = [50, 100, 75];

console.log('Товары: ' + product);
console.log('Cтоимостm товаров: ' + cost);

function countBasketPrice(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log('Общая стоимость товаров: ' + sum);
}
countBasketPrice(cost);

// 4.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for (var number = 0; number <= 9; console.log(number++)) { }

// 5.Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
for (var i = 1, z = ''; i <= 20; i++) {
    z += "x";
    console.log(z);
}