// ДЗ.
// 1. Добавить пробел между строками name и surname
// 2. Есть переменные r = 12, g = 13, b = 14. Используя конкатенацию вывести строку "rgb({12}, {13}, {14})"
// 3. Попросить у пользователя ввести его возраст(годы) и в консоли вывести год его рождения(валидный для 2023)
// 4. Попросить ввести число и в консоли вывести квадрат этого числа
// 5. Попросить пользователя ввести два числа (поочередно - 2x prompt), а в консоли вывести их произведение(*)

// const name = "Arsen"
// const surname = "Iusupov"
// console.log(name + ' ' + surname)

// let r = 12
// let g = 13
// let b = 14
// console.log(r + ',' + g + ',' + b);

// let age = prompt("сколько вам лет")
// let c = 2023
// const minus = c - age
// console.log( "ваш год рождения: " + minus);

// let number = prompt("введите любое целое число")
// console.log(number * number);

// let number1 = prompt("введите первое число")
// let number2 = prompt("введите второе число")
// console.log(number1 * number2);

/////////////////////////////////////////////////////////

// ДЗ.
// 1. Написать программу, которая запрашивает у пользователя два числа поочередно и выводит бОльшее из них.
// 2. Написать программу, которая запрашивает у пользователя число и выводит "положительное" "отрицательно" "равно 0"
// 3. Есть массив arr = [1, 4, 2, 6, 9]. Есть пустой массив squares = []. Нужно заполнить массив
//     squares квардатами чисел из первого массива, используя методы push, unshift,shift, pop
//     в итоге  squares = [1, 16, 4, 36, 81]
//     ['Властелин колец', 'Аватар', 'Звездные войны', 'Гарри Поттер']
//     1. shift()
//     2. pop(), pop()
//     3. push()
// 4. Используя методы push, unshift, shift, pop удалить из массива movies "Властелин колец" и "Звездные войны"
//     В итоге в массиве должно остаться ["Аватар", "Гарри Поттер"]

//1.
// const num1 = +prompt("введите первое число")
// const num2 = +prompt("введите второе число")
// if(num1 > num2) {
//     console.log(num1)
// } else {
//     console.log(num2)
// }

//2.
// const num3 = +prompt("введите третье число")
// if(num3 > 0) {
//     console.log("ваше число положительноe")
// } else if (num3 < 0) {
//     console.log("ваше число отрицательное")
// } else {
//     console.log("равно 0");
// }

//3.
// const arr = [1, 4, 2, 6, 9]
// const squares = []

// squares.push(Math.pow(arr[0],2),
// Math.pow(arr[1],2),
// Math.pow(arr[2],2),
// Math.pow(arr[3],2),
// Math.pow(arr[4],2));
// console.log(squares);

//4.
// const movies = ['Властелин колец', 'Аватар', 'Звездные войны', 'Гарри Поттер']
// const temp = movies[1]
// movies.shift()
// movies.shift()
// movies.shift()
// movies.unshift(temp)
// console.log(movies);

/////////////////////////////////////////////////////////

/* 
    ДЗ. 
    1. // Есть массив numbers. Нужно найти сумму нечетных элементов.
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
    2. Есть массив numbers. Нужно найти сумму четных и сумму нечетных элементов.
        В консоли вывести разницу между ними (вычесть меньшее из большего)
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
*/

//1.
// const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
// let sum = 0
// for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 > 0) {
//         sum = sum + numbers[i]
//     }
// }
// console.log(sum)

//2.

// const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
// let sum1 = 0
// for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 > 0) {
//         sum1 = sum1 + numbers[i]
//     }
// }
// console.log("сумма нечетных элементов = " + sum1);

// let sum2 = 0
// for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         sum2 = sum2 + numbers[i]
//     }
// }
// console.log("сумма четных элементов = " + sum2);

// let sum3 = 0
// if (sum1 > sum2) {
//     sum3 = sum1 - sum2
// } else {
//     sum3 = sum2 - sum1
// }
// console.log("разница от большего в меньшему равна : " + sum3);

//////////////////////////////////////////////////////////

/*
    ДЗ. 
    1. Создать объект, у которого будет название, цена и цвет. Вывести его в консоль
    2. Создать объект user, у которого будет email, password, login, age.
        Вывести в консоль год рождения пользователя, используя свойтсво age из объекта user
    3. Есть массив prices. Нужно найти общую цену всех товаров внутри массива объектов prices
        и вывести в консоли
        const prices = [
            {
                name: "Iphone 14",
                price : 100000
            },
            {
                name: "Iphone 13",
                price : 80000
            },
            {
                name : "Iphone 12",
                price: 70000
            }
        ]
*/
//1.
// const obj1 = {
//   name: "Iphone",
//   price: 1490,
//   color: "Alpine-green",
// };
// console.log(obj1);

//2.
// const user = {
//   email: "HelloWorld@gmail.com",
//   password: "Qazwsx2515",
//   age: 25,
// };
// console.log(2023 - user.age + " - год рождения пользователя");

//3.
// const prices = [
//   {
//     name: "Iphone 14",
//     price: 100000,
//   },
//   {
//     name: "Iphone 13",
//     price: 80000,
//   },
//   {
//     name: "Iphone 12",
//     price: 70000,
//   },
// ];
// let sum = 0
// for (let i = 0; i < prices.length; i++) {
//     sum = sum + prices[i].price

// }
// console.log(sum);

//////////////////////////////////////////////////////////

/*
ДЗ. 0. Наполнить массив products подобными объектами, с разными значениями
    
1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
   скидкой 10%
   2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
       продукты:
           а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
           б) категория который "phone"; const categoryPhone = []
   3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
       max(10, 20) // 20
       max(100, 5) // 100
   4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
       и "НЕЧЕТ", если нечетное
   5. Написать функцию, которая получает два числа и возводит первое число в степень второго
       power(10, 2) // 100
       power(12, 2) // 144
       power(2, 5) // 32
*/

const products = [
  {
    id: 1,
    name: "Iphone 14 pro",
    price: 150000,
    category: "phone",
  },
  {
    id: 2,
    name: "Iphone 13 pro",
    price: 140000,
    category: "mobile-phone",
  },
  {
    id: 3,
    name: "Iphone 12 pro",
    price: 80000,
    category: "phone",
  },
  {
    id: 4,
    name: "Iphone 11 pro",
    price: 71000,
    category: "mobile-phone",
  },
  {
    id: 5,
    name: "Iphone X",
    price: 55000,
    category: "phone",
  },
];

//1

for (let i = 0; i < products.length; i++) {
  console.log(products[i].name, products[i].price - products[i].price * 0.1);
}

//2
const moreThanPrice = [];
const categoryPhone = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 88000) {
    moreThanPrice.push(products[i].price);
  }
}

for (let i = 0; i < products.length; i++) {
  if (products[i].category === "phone") {
    categoryPhone.push(products[i].price);
  }
}
console.log(moreThanPrice, categoryPhone);

// //3
function max(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
max(10, 20);
max(100, 5);

//4
function EvenOrOdd() {
  let num = +prompt("Enter any number: ");
  if (num % 2 === 0) {
    alert("Even");
  } else if (num % 2 > 0) {
    alert("Odd");
  } else {
    alert("wrong number");
  }
}

// 5
function power(a, b) {
    let result = Math.pow(a, b)
    console.log(result);
}
power(10, 2) //100
power(12,2) //144
power(2,5) //32

