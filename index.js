/*
Задача 3.1

let word_1 = "велосипед", word_2 = "полезен";
console.log(word_1 + " " + word_2); ответ велосипед полезен
*/

/*
Задача 3.2

length - длина строка
trim() - убрать все лишнее

let name ="Всеволод";
let last_name ="\nСтарозубов";

console.log(name.trim().length);
console.log(last_name.trim().length);
let sum = name.trim().length + last_name.trim().length - сумма 18
console.log(sum);
console.log(name.trim().length + last_name.trim().length)  -ответ
*/

/*
Задача 3.3
Метод str.toUpperCase приводит все символы к верхнему регистру.
Получить символ по позиции - []- отчет начинается с 0.
word = "велосипед"; 
console.log(word.toUpperCase()[0]); или console.log(word[0].toUpperCase());
*/

/*
Задача 3.4
const ceil = Math.ceil(value);  округление вверх
const floor = Math.floor(value); округление вниз
const round = Math.round(value); округление до ближайшего целого числа
const sqrt = Math.sqrt(ceil+floor+round); сумма значений взятая в квадратный корень
console.log(Math.trunc(sqrt)); целая часть числа. Ответ 8
*/

/*
Задача 3.5
let a = 2;
let b = 4;
console.log((a*b) ** 2) произведение значений выведенные в квадрат. Первый способ
console.log(Math.pow(a * b)) второй способ решения (при запуске не выдает код)
*/

/*
Задача 3.6
С помощью формулы это выражается так:
c2 = a2 + b2
Отсюда следует, что длина гипотенузы равна квадратному корню из суммы квадратов катетов:
c = sqrt(a2 + b2)
Math.sqrt(x) — возвращение квадратного корня x.
let a = 3;
let b = 4;
console.log(Math.sqrt((a ** 2) + (b ** 2)))
*/

/*
Задача 3.7
let obj = { 
    name: "Анатолий",
    last_name: "Максимов",
    age: 32
}

let str = "Имя: \"" + obj.name + "\" Фамилия: '" + obj.last_name + "' Возраст: " + obj.age; первый вариант ответа
str = `Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`; второй вариант ответа
console.log(str);
*/
 
/*
Задача 3.8
const obj1 = {
    name: name,
    last_name: last_name,
    age: age
}
console.log(obj1)
*/

/*
Задача 3.9
if (!value) {
    console.log('null');
} else {
    console.log(typeof value);
}
*/

/*
Задача 3.10
console.log(+num_1 + +num_2)
*/

/*
Задача 3.11
let size = '500.5px'
console.log(parseFloat(size))
*/

/*
Задача 3.12
let a = "5px"
let b = "7px"
let c = "10px"
console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));
*/

/*
Задача 4.1
const speed = 65

if (speed <=30) {
    console.log('Вы едете слишком медленно')
  } else if(speed<=70) {
    console.log('Вы едете с нормальной скоростью')
  } else {
      console.log('Вы едете слишком быстро, сбавьте скорость')
  }
  */

  /*
  Задача 4.2

  if(isNaN(parseInt(price))){
    console.log("Не число");
   } else if(parseInt(price) <= 0){
    console.log("Число не корректное");
   }
   else {
    console.log(parseInt(price));
   }
   */

   /*
   Задача 4.3

   if (a>b && a>c) {
    console.log(a);
  }
if (b>a && b>c){
 console.log(b);
  }
if (c>a && c>b){
 console.log(c);
  }
  */

  /*
  Задача 4.4

  let activity = ""
if(temp>=25 && weather == "clear"){
 activity = "golf";
 }
else if(temp>=10 && temp < 25 && weather == "clear"){
 activity = "bowling";
 }
else if(temp < 10 || weather != "clear"){
 activity = "hiking";
}
*/

/*
Задача 4.5

Пример значений переменных:
word_1 = "машина"
word_2 = "стол"
Пример результата:
"машина"

решение 1:
(word_1.length > word_2.length) ? console.log(word_1) : console.log(word_2);

решение 2:

if (word_1.length > word_2.length){
 console.log(word_1);
}
else{
 console.log(word_2);
}
*/

/*
Задача 4.6

Пример значений переменных:
task = "переименовать"
Пример результата:
"rename"

switch(task) {
  case "удалить":
  
 console.log('delete');
  break;
   case "переименовать":
 console.log ("rename");
  break;
   case "редактировать":
  
  console.log ('edit');
    break;

}
*/

/*
Задача 4.7

Пример значений переменных:
price = 10000
range = "day"
Пример результата:
10000 Р в день

switch(range) {
  case "month":
 console.log(price + " " + "Р в месяц");
  break;
   case "day":
 console.log(price + " " + "Р в день");
  break;
   case "week":
console.log(price + " " + "Р в неделю");
    break;

}
*/

/*
Задача 4.8 

Примеры значений переменных:
a = 2
b = 6
sign = "*"
Пример результата:
12

switch(sign) {
  case "+":
 console.log(a+b);
  break;
   case "-":
 console.log(a-b);
  break;
   case "/":
console.log(a/b);
    break;
 case "*":
console.log(a*b);
    break;
}
*/

/*
Задача 4.9

Пример значений переменных:
a = 2
b = 0
sign = "/"

Пример результата:
Делить на 0 нельзя!
   
switch (sign) { 
     case "+": 
         console.log(a + b); 
         break; 
     case "-": 
         console.log(a - b); 
         break; 
     case "": 
         console.log(a * b); 
         break; 
     case "/": 
         if (b > 0) { 
             console.log(a / b); 
         } else { console.log("Делить на 0 нельзя!") } 
         break; 
*/

 /*
Задача 5.1

Пример значений переменных:
start = 0 end = 50

Пример результата:
275

for(let i=0;start<=end;start++){
if (start % 5==0){
i=i+start;
}
console.log(i);
}
*/

/*
Задача 5.2

Пример значений переменных:
word = "мир"

Пример результата:
"рим"
 
 let newString ="";
for(var i=1;i<=word.length;i++){
newString+=word[word.length-i];
}
console.log(newString)
*/

/*
Задача 5.3

Пример значений переменных:
word = "Доход"

Пример результата:
"Слово является палиндромом!"

let newString ="";
word = word.toLowerCase();
for(var i=1;i<=word.length;i++){
newString+=word[word.length-i];
}
if(newString == word){
console.log("Слово является палиндромом!");
}
if(newString != word){
console.log("Слово не является палиндромом!");
}
*/

/*
Задача 6.1

Пример значений переменных:
price = 80000

Пример результата:
"Данный товар стоит 80000 рублей"

let Price=function priceMessage(){
console.log(`Данный товар стоит ${price} рублей`);
}
Price(price);
*/

/*
Задача 6.2

Пример значений переменных:
num_1 = 3
num_2 = 6

Пример результата:
18

let one = num_1;
let two = num_2;

function mult(num_1 , num_2) {
 console.log(one*two);
}
mult(num_1 , num_2);
*/

/*
Задача 6.3

Пример значений переменных:
num = 9

Пример результата:
81

function square(){
return num*num;
}
console.log(num);
*/

/*
Задача 6.4

Пример значений переменных:
num = 2

Пример результата:
"4 16 256"

num = 2

num2 = ' '
for (let i = 0; i < 3; i++) {
    num = num * num
    num2 = num2 + ' ' + num

}
console.log(num2.trim());
*/

/*
Задача 6.5

Пример значений переменных:
data = "привет"

Пример результата:
0

function getNumber(data) {
 data = parseFloat(data);
 if (Number.isNaN(data) === true){
console.log(0);

}else {
console.log(data);
}
}
getNumber(data);
*/

/*
Задача 6.6

Пример значений переменных:
value = 4

total = 80

Пример результата:
5

function getPercent(value,total){
return (value / total) *100;
}
let result=getPercent(value,total);
console.log(result);
*/

/*
Задача 9.1

Пример значений переменных:
list = ["Груша", "Яблоко"]

Пример результата:
["Яблоко", "Груша", "Клубника"]

list.unshift("Яблоко");

list.pop();
list.push("Клубника");
console.log(list);
*/

/*
Задача 9.2

Пример значений переменных:
list = ["Груша", "Яблоко"]

Пример результата:
"Яблоко"

let longestWord = '';
for (let index = 0; index< list.length; index++) {
  if (list[index].length > longestWord.length) {
    longestWord = list[index];
  }
console.log(longestWord);
}
*/

/*
Задача 9.3

Пример значений переменных:
list = [23, 13, 3]

Пример результата:
39

var result = 0;

for (var i = 0; i < list.length; i++) {
result += list[i];
}
console.log(result);
*/

/*
Задача 9.4

Значения переменных:
list_1 = [12, 3]

list_2 = [2, 1]

Результат:
[144, 9, 4, 1]

const newArray = list_1.concat(list_2);
console.log( newArray);
for (let i in newArray) {
    newArray[i] = newArray[i] **2;  
}

console.log( newArray);
*/

/*
Задача 9.5

Пример значений переменных:
list = [12, -4, 5, 32, 2],

Пример результата:
51

let result = 0;
 for (let i = 0; i < list.length; i++) {
     if (list[i] > 0) {
         result += list[i];
     }
 }
  console.log(result);
*/

/*
Задача 9.6

Пример значений переменных:
list = [1, 2, 3, ... 99, 100]

Пример результата:
1060

let sum = 0
primeNum:
    for (let i of list) {
        if (i == 0 || i == 1) {
            sum += 0
        } else {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue primeNum;
            }
            sum += i
        }
    }
console.log(sum);
*/

/*
Задача 9.7

Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
90

var max = 0;
var min = list[0];

    for (var i = 0; i < list.length; i++) { 
        
        if (list[i] > max) {
            max = list[i];

        }
        if(list[i] < min) {
            min = list[i];
        }
    }
    
console.log(max * min);
*/

/*
Задача 9.8

Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
[6, 23, 3, 45, 2]

var newString =  [];
for (var i = list.length - 1; i >=0; i--) {
    newString.push(list[i]);
}
 console.log(newString);
*/

/*
Задача 9.9

Пример значений переменных:
sentence = "Завтра будет лучше чем вчера"

Пример результата:
['Завтра', 'будет', 'лучше', 'чем', 'вчера']

let position = 0;
const myArray = [''];
for (let i = 0; i < sentence.length; i++){
    if(sentence.charAt(i) == ' '){
        position++;
        myArray.push('');
    }
    else {
        myArray[position] += sentence.charAt(i);
    }
}
console.log(myArray);
*/

/*
Задача 9.10

Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
2

function count(list) {
let s = 0;
for (let i = 0; i < list.length;i++){
    if (list[i] % 2 ==0){
        s++;
    }
}
return s;
}
console.log(count(list));
*/

/*
Задача 9.11

Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
16

function average (list) {
    let s = 0;
    for ( let i = 0; i < list.length;i++) {
        s += list[i];

    }
    let result = Math.round (s/list.length);
    return result
}
console.log( average (list));
*/

/*
Задача 9.12

Пример значений переменных:
list = [2, 54, 2, 54, false, 2]

Пример результата:
112

решение 1:

let sum = 0;

        for(let i = 0; i < list.length; i++){
            if(typeof(list[i]) == "number"){
                sum += list[i];
            } else {
                break;
            }
        }

        console.log(sum);
*/
/*
Решение 2:

for(let i = 0; i < list.length; i++){
          if(typeof(list[i]) == "boolean"){
            break;
          } else {
            sum += list[i];
          }
        }
        console.log(sum);
*/

/*
Задача 9.13

Используя цикл, сформируйте массив list со значениями от 10 до 20. Выведите значение переменной list в консоль.

let start =10;
let result  = [];
while (start <= 20) {
    result.push(start++);
}
console.log(result);
*/

/*
Задача 9.14

Пример значений переменных:
list = [2, "привет", 23, true, 2, false, 2]

Пример результата:
[2, 23, 2]
let numbers_list = [];

        for(let i = 0; i < list.length; i++){
            if(typeof(list[i]) == "number"){
                numbers_list.push(list[i]);
            } else if (list[i] == false){
                break;
            }
        }
console.log(numbers_list);
*/

/*
Задача 9.15

Пример значений переменных:
list = ["Лёша", "default", "полке", "клопа", "нашёл"]

Пример результата:
4

let newList = [];
        let num = 0;

        for(let i = 0; i < list.length; i++){
            list[i] = list[i].toLowerCase(); 
            if(list[i] == "default"){
                continue;
            } else {
                newList.push(list[i]);
            }
            num = newList.length;
        }
        console.log(num);
*/

/*
Задача 9.16

Пример значений переменных:
list = ["почтовый","желание","абсолютный","закрытый"]

Пример результата:
"пжаз"

l = list.length,
z = 0,
n = "";

for (; z < l; ++z)
{
n += list[z].charAt(0);
}
console.log(n);

решение

n = "";
for (z= 0; z < list.length; ++z)
{
n += list[z].charAt(0);
}
console.log(n);
*/

/*
задача 9.17

В программе объявлена переменная obj, содержащая объект с подобным набором значений:

{
        "Яблоко": "фрукт",
        "Арбуз": "ягода",
        "Помидор": "овощ",
        "Огурец": "овощ",
        "Вишня": "ягода"
}
Напишите скрипт, который формирует новый объект со значениями и их количеством. Выведите новый объект в консоль.

Пример результата:
{
    "фрукт": 1,
    "ягода": 2,
    "овощ": 2
}

решение:

let newObj = {};
  for(let key in obj){
  newObj[obj[key]] = (newObj[obj[key]] || 0) + 1;
}
console.log(newObj);
*/

/*
задача 9.18

Пример значений переменных:
 list = [
 {product: "Apple", price: 25},
 {product: "Cherry", price: 32},
 {product: "Strawberry", price: 45}
]
Пример результата:
"Strawberry"

решение:

let maxPrice = 0;
    let goodName = 0;

    for (let key in list){
        if (list[key].price > maxPrice){
        maxPrice = list[key].price;
        goodName = key;
        }
    }
    console.log(list[goodName].product);
*/