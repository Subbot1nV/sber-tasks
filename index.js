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




/*
JavaScript 2
*/



/*
задача 1.1
В программе задана переменная message со строковым значением. Определите наличие подстроки привет в начале строки переменной message. Если данное условие выполняется, выведите в консоль булевое значение true, в ином случае — false. Сравнение должно быть без учета регистра. Правильный ответ выведите в консоль.


Пример значений переменных:

message = "приветствую вас"
Пример результата:

true


решение
if(message.substring(0,6).toLowerCase()=="привет"){
  console.log(true);

}else{
  console.log(false);
}
*/

/*
задача 1.2
В программе задана переменная greetings со строковым значением. Определите позицию последнего вхождения подстроки username в значении переменной greetings. Результат выведите в консоль.

Пример значений переменных:

greetings = "Приветствую, username! Сегодня вы получили два сообщения от username."
Пример результата:

58
 решение
 console.log(greetings.toLowerCase().lastIndexOf("username",greetings.length));
 */

/* 
задача 1.3

В программе задана переменная firstDiv со строковым значением. Определите, встречаются ли в данной строке два парных тега <p>. Выведите в консоль булевое значение true, если встречается, и false — в ином случае.

Пример значений переменных:

firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>"
Пример результата:

true

решение
let start1= firstDiv.indexOf("<p>")
let start2= firstDiv.lastIndexOf("<p>")
let end1 = firstDiv.indexOf("</p>")
let end2 = firstDiv.lastIndexOf("</p>")
console.log(start1, start2);
let startFlag = start1 >=0 && start1 !== start2 && start2 >= 0;
let endFlag = end1 >= 0 && end1 !== end2 && end2 >= 0;
console.log(startFlag && endFlag);

или

let count = 0
for(let i = 0; i < firstDiv.length; i++) {
    if(firstDiv[i] === '<' && firstDiv[i + 1] === 'p' && firstDiv[i + 2] === '>'){
        count++
    }
}
if (count > 1) {
    console.log(true)
    } else {
    console.log(false)
    }
	
	или
	
	let pos = 0;
        let p1 = 0;
        for (let i = 0; i < firstDiv.length; i++) {
            let foundPos = firstDiv.indexOf("<p>", pos);
            if (foundPos == -1) break;
             pos = foundPos + 1;
            p1 += 1;
         }
         let p2 = 0;
         pos = 0;
         for (let i = 0; i < firstDiv.length; i++) {
             let foundPos = firstDiv.indexOf("</p>", pos);
             if (foundPos == -1) break;
             pos = foundPos + 1;
             p2 += 1;
         }
         console.log(p1 == 2 && p2 == 2);
 */

 /*         
 задача 1.4
 В программе объявлена переменная road со строковым значением, которая задает протяженность дороги. Необходимо из строки убрать подстроку km, оставив только численное значение. Его необходимо конвертировать в мили, округлить до одного знака после запятой, а результат вывести в консоль. Помните, что 1 километр равен 0,62 мили.

Пример значений переменных:

road = 15 km
Пример результата:

9.3

решение:

let result =road.slice(0, -3)
 
 console.log(result)
  result = result * 0.62

 console.log(result);
  result = ( Math.round(result * 10) / 10 )
 console.log(result);
 
 или
 let length = parseFloat(road)
console.log(+(length * 0.62).toFixed(1));
 */

 /* 
 задача 1.5
 
 В программе задана переменная words со строковым значением. Напишите условный оператор, который выводит в консоль сообщение В строке больше одного слова, если строка содержит больше одного слова, в ином случае в консоль должна выводиться фраза В строке одно слово.


Пример значений переменных:

words = "Солнечная панель"
Пример результата:

"В строке больше одного слова"


решение

 let mas = words.split(' ');

        if(mas.length > 1){
            console.log("В строке больше одного слова");
        } else {
            console.log("В строке одно слово");
        }
*/

/* 
задача 1.6
		
В программе объявлена переменная symbols со строковым значением. В данной строке могут встречаться буквенные символы и цифры. Опишите условие, которое выводит в консоль строку Первый символ цифра, если первый символ переменной symbols является цифрой. В противном случае необходимо вывести строку Первый символ не цифра.

Пример значений переменных:

symbols = "Первый номер"
Пример результата:

"Первый символ не цифра"

решение:

if ( symbols.search(/\d/) != -1 ) { 
    
console.log("Первый символ цифра")

} else {
  console.log("Первый символ не цифра");
}
*/

/* 
задача 1.7 
В программе объявлена переменная symbols со строковым значением. Напишите условный оператор, который реализует следующую логику:

Если сумма числовых значений Unicode первых двух символов делится на два без остатка, необходимо получившееся число конвертировать в unicode-символ и вывести в консоль
В ином случае необходимо вывести сообщение Символ обнаружить не удалось

Пример значений переменных:

symbols = "floor"
Пример результата:

"Ò"

решение;

let sum = symbols.charCodeAt(1);
let sum2 = symbols.charCodeAt(0);
 let result = (sum + sum2);
if(result % 2 === 0 ){
  console.log(String.fromCodePoint(result))
}else{
  console.log("Символ обнаружить не удалось");
}
*/

/* 
задача 1.8

В программе задана переменная phone со строковым значением. В ней хранится номер телефона и, помимо цифр, иные символы. Преобразуйте строку так, чтобы в номере отсутствовали следующие символы:

Пример значений переменных:

phone = "+712:34567*8,90"
Пример результата:

"+71234567890"

решение

let result = (phone.replace(/\D/g, ''));
console.log("+"+result);
*/

/* 
задача 1.9

 В программе задана переменная emails со строковым значением. В ней указано несколько значений электронной почты через пробел. Преобразуйте данное значение в массив так, чтобы каждая почта в строке являлась элементом массива. Результат выведите в консоль.


Пример значений переменных:

emails = "example@ex.ru primer@primer.com email@com.ru"
Пример результата:

["example@ex.ru", "primer@primer.com", "email@com.ru"]

решение

let mas = emails.split(' ');
console.log(mas);
*/

/* 
задача 1.10

В программе задана переменная ticket со строковым значением. Напишите условный оператор, который работает по следующей логике:

Если в билете после буквенных символов и тире идут 8 цифр подряд, программа должна вывести в консоль сообщение Выбран билет на концерт
Если в билете после буквенных символов идут 12 цифр подряд, программа должна вывести в консоль сообщение Выбран билет в театр
В противном случае выведите в консоль сообщение Билет не определен

Пример значений переменных:

ticket = "BM-12234567:RU"
Пример результата:

"Выбран билет на концерт"

решение

ticket1 = ticket.split(/-/)[1];
ticket2 = ticket1.split(/:/)[0];

if (ticket2.length ==8){
	console.log("Выбран билет на концерт");
}
else if (ticket2.length ==12){
	console.log("Выбран билет в театр");
}
else {
	console.log("Билет не определен");
	
	или
	
	let arr = ticket.match(/\d{8,12}/g)
arr1 = arr.join();
arr2 = arr1.split('')

if (arr2.length == 8) {
  console.log("Выбран билет на концерт");
} else if (arr2.length == 12) {
  console.log("Выбран билет в театр");
} else {
  console.log("Билет не определен");
}
  или 
  
  let arr = ticket.match(/\d+/);
        let num = arr[0].length;
        if (num == 8) console.log("Выбран билет на концерт");
        else if (num == 12) console.log("Выбран билет в театр");
        else console.log("Билет не определен");
*/

/*         
задача 2.1

 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. Замените булевое значение с минимальным индексом на строковое значение Булевый тип. Преобразованный массив выведите в консоль. Примечание: подразумевается решение без методов массивов, просто вспомним, как работать с массивами и циклами!

Пример значений переменных:

values = ["Строка", true, "Число", "Объект", "Не число", false]
Пример результата:

["Строка", "Булевый тип", "Число", "Объект", "Не число", false]

решение

for(let i=0; i<values.length; i++) {
 if (typeof values[i] != "boolean") {
  continue;
} else {values[i] = "Булевый тип";
break
}

}

console.log(values); 
*/

/* 
задача 2.2

В программе задана переменная partNumbers, которая хранит в себе массив. Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе partNumbers. В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль.

Пример значений переменных:

partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"]
Пример результата:

["FIV987451RU", "GE123JO", "P4321NO"]

решение

let regexp= /\d\d\D\D$/;

let result = [];
values = partNumbers;

function printArray(values) {
  	for (let value of values) {
    		if (regexp.test(value)) {
			result.push(value);
  		}
	}
	console.log(result);
}

printArray(values)
*/

/* 
задача 2.3

В программе задана переменная layout, которая хранит в себе строковое значение. Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив.

Пример значений переменных:

layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"
Пример результата:

[100, 196, 23, 43, 9604, 101]

решение

let result =/[<\D*>]/;
let numberlist = layout.split(result);
let new1 = [];


function printArray(numberlist) {
  	for (let i = 0; i < numberlist.length; i++) {
    		if (typeof Number(numberlist[i]) === "number" && Number(numberlist[i]) >0){
			    new1.push(Number(numberlist[i]));
		}
  	}
  	const changeArray = [];
  	for (let i = 0; i < new1.length; i++) {
  	    if ((new1[i]%2) != 0) {
  	        changeArray.push(new1[i]);
  	    }
  	    else {
  	        changeArray.push((new1[i])**2);
  	    }
  	}
	console.log(changeArray);
}
printArray(numberlist)

 или :
 
 let digitLayout = layout.match(/\d+/g);

if (digitLayout == null) {
    console.log([]);
} else {
    console.log(digitLayout.map(function(item) {
        item = +item;
        if (item % 2 == 0) item **= 2;
        return item;
    }));
}
*/

/* 
задача 2.4
В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются объектами с ключами title и completed. Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль.

Пример значений переменных:

tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
]
Пример результата:

["Умыться", "Сделать зарядку", "Приготовить завтрак"]

решение
let titles= []
for(i=0;i< tasks.length;i++) {
    titles.push(tasks[i].title)
    
}
console.log(titles)
или 

const titles = tasks.map(elem=>elem.title)
console.log(titles)
*/

/*
задача 2.5

В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль.

Пример значений переменных:

values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"]
Пример результата:

[true, "Число", "Объект", "Не число", false]

решение;

let start = values.findIndex(el => typeof el ==="boolean")
let end = valuesfindLastIndex(el => typeof el ==="boolean")
let result = values.slice(start, end+1)
console.log(result);

или

let index1 = values.indexOf(true);
    let lastIndex1 = values.lastIndexOf(true);
    let index2 = values.indexOf(false);
    let lastIndex2 = values.lastIndexOf(false);
    let result = [];
    for (let i = index1; i < lastIndex2+1; i++) {
        result.push(values[i]);
    }
    console.log(result);   
	 
  или 
  
  function searchIndexRight() {
    for (let i = values.length; i>=0; i--) {

        
        if (typeof values[i] === 'boolean') return i;
    }};
let indexLeft = values.findIndex(item => typeof item === 'boolean');
let indexRight = searchIndexRight() + 1;

console.log(typeof indexRight, indexRight);

let result = values.slice(indexLeft, indexRight);

console.log(result);
*/
	
/*
задача 2.6
В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет).

Пример значений переменных:

values = [10, 185, 11200, 980]
Пример результата:

false

решение
let result = false
for (let i = 0; i < values.length; i++) {
  if(values[i] < 9999 && values[i] > 1000){
      result = true
}
}
 console.log(result);
 */

 /*
 задача 2.7
 
 Необходимо доработать программу из задания 2.7

В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Если такие значения встречаются, выведите индекс первого в консоль. В противном случае выведите сообщение Искомый элемент не был найден.

Пример значений переменных:

values = [10, 185, 11200, 980]
Пример результата:

"Искомый элемент не был найден"

решение

let s =0
let result = false
for (let i = 0; i < values.length; i++) {
  if(values[i] < 9999 && values[i] > 1000){
      result = true
     
}
}
 console.log(result);
 
 
 if(result===true){
    s = values.indexOf(values[i]) 
    console.log(s)
}else{
console.log("Искомый элемент не был найден")

} 

или :

let index = values.findIndex(el => (el + "").length === 4)
console.log(index !== -1 ? index : "Исходный элемент не был найден");

или :

for(let num in values) {
    if (values[num] > 999 && values[num] < 10000){
      console.log(+num)
      break
    } else {
    console.log('Искомый элемент не был найден')
}}
*/

/*
задача 2.8
В программе задана переменная users, которая хранит в себе массив. Элементы данного массива являются объектами. Определите индекс элемента, значение свойства role которого содержит больше одного слова. Результат выведите в консоль разработчика.

Пример значений переменных:

users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
]

Пример результата:

1

решение:

function res(user) {
    return user.role.split(/\b\W+\b/).length > 1;
}
console.log(users.findIndex(res));
*/

/*
задача2.9

В программе задана переменная array, которая хранит в себе двумерный массив. Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. Результат выведите в консоль.

Пример значений переменных:

array = [[1,2,3],[1,2],[1,2,3,4]]
Пример результата:

[[1,2],[1,2,3],[1,2,3,4]]

решение
array.sort(function(a,b){
       if(a>b){
           return 1;
       }
       if(a<=b){
           return -1;
       }
    })
    
    console.log(array);
*/

/*   
задача2.10
	
	В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом:

В начале массива должны быть все числовые значения по возрастанию
В конце все строковые, упорядоченные по алфавиту
Результат выведите в консоль.

Пример значений переменных:

randValues = ["Банан", 3, "Апельсин", 2, "Вишня"]
Пример результата:

[2, 3, "Апельсин", "Банан", "Вишня"]

решение:

randValues.sort(function(a,b){
  if(isNaN(a) && !isNaN(b)){
    return 1
  }else if(!isNaN(a) && isNaN(b)){
    return -1
  }
  
  if(a>b){
           return 1;
       }
       if(a<=b){
           return -1;
       }
});
        
console.log(randValues);
*/

/* 
задача 2.11
 
 В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.

Пример значений переменных:

words = ["Заказ", "Такси", "Доход"]
Пример результата:

[2, 1]

решение
let result = [0, 0];
for (let i = 0; i < words.length; i++) {
    let newword = ((words[i]).toLowerCase()).split("").reverse().join(''); 
    if (newword === ((words[i]).toLowerCase())) {
        result[0] +=1;
    }
    else {
        result[1] +=1;
    }
} console.log(result);
*/

/* 
задача 2.12
В программе задана переменная dates, которая хранит в себе строковое значение. В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного массива в консоль.

Пример значений переменных:

dates = "23.04.1996 07.10.2002 15.08.1945"
Пример результата:

["23/04/1996", "07/10/2002", "15/08/1945"]

решение;
 let newDate = dates.split(" ");
    for (let i = 0; i < newDate.length; i++) {
    newDate[i] = (newDate[i]).replace(/\./g, '/');
    }
    console.log(newDate);
*/
	
/* 
задача 2.13
В программе задана переменная tickets, которая хранит в себе строковое значение. В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.

Пример значений переменных:

tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."
Пример результата:

{
    "train" : ["AV432", "FS452", "OE402"],
    "airplane" : ["DR578", "JN1089", "NDK140"]
}

решение

 let massif = tickets.replace(/\s+/g,'').replace(/.$/, '').split('.');
console.log(massif)
let obj = {};
console.log(obj)
for (let i = 0; i < massif.length; i++) {
    let massif2 = massif[i].split(':');
    console.log(massif2)
    obj[massif2[0]] = massif2[1].split(',');
} console.log(obj)
for (let key in obj) {
    obj[key.toLowerCase()] = obj[key];
    delete obj[key];
}
console.log(obj);
*/ 

/* 
задача 2.14

В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.

Пример значений переменных:

numbers = [10, 20, 33, 55, 100]
Пример результата:

2

решение

let sum = 0;
      let result = 0;
          for (let i = 0; i < numbers.length; i++) {
              if ((sum = sum+numbers[i]) <= 50) {
            result =result+1;
        }
    }
    console.log(result);
*/

/* 
задача 2.15
	
В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль.

Пример значений переменных:

values = ["100", "30", "Не число", "20", "Тоже не число"]
Пример результата:

150

решение

let result =0
for(let i=0;i < values.length;i++) {
 if (isNaN(values[i]) === true){
continue

}else {
    result=result+Number(values[i])

}
}
        console.log(result);
*/

/* 
задача 2.16
		
		В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.

Пример значений переменных:

array_1 = [2, 4, 7, 8, 1]

array_2 = [2, 5, 11, 6, 1]

Пример результата:

[2, 1]

решение:проходит в сбере но в компиляторе нет

function intersection(array_1, array_2) {
    let result =[];
    for (let index = 0; index < array_1.length; index++) {
        if (array_2.includes(array_1[index]) == true) {
            result.push(array_1[index]);
        }
    }
    return result;
}
intersection(array_1, array_2)


эти решения без использования функции:

1)		   let array_1 = [1,2,3,4]

let array_2 = [7,8,9]

let array_3=array_1.concat(array_2)
console.log(array_3)
	const result = array_3.filter((number, index, numbers) => {
console.log(number); 
console.log(index); 
console.log(numbers);
return numbers.indexOf(number) !== index;
});
console.log(result)
result.sort(function(a,b) {
    return a-b
})
console.log(result)
}
2)var array3 = array_1.filter(function(obj) { return  array_2.indexOf(obj) >= 0; });
 console.log(array3);
*/

 /* 
задача 3.1
 
 В программе объявлена переменная car, которая хранит в себе объект, у которого есть как минимум одно свойство — engine. Удалите из объекта car свойство engine и результат выведите в консоль.

Пример значений переменных:

car  = {
    model: "Audi", 
    color: "white",
    weight: 1850,
    engine: "170 hp"
}
Пример результата:

{
    model: "Audi", 
    color: "white",
    weight: 1850
}

решение
delete car.engine
console.log(car)
*/

/* 
задача 3.2

В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. Результат выведите в консоль.

Пример значений переменных:

goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
}
Пример результата:

["title, "price", "good_id", "Самокат", 6000, 1]

решение:

let sum1 = Object.keys(goods);
console.log(sum1)
let sum2 = Object.values(goods);
console.log(sum2)
let result=sum1.concat(sum2)
console.log(result)
*/

/* 
задача 3.3
В программе заданы две переменные article и author, которые содержат объекты. Объект article содержит информацию о статье, а author — об авторе. Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль.

Пример значений переменных:

article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
author = {
    name: "Ричард М.В.",
    age: 43
}

Пример результата:

article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении",
    name: "Ричард М.В.",
    age: 43
}
  решение
  var result = Object.assign({}, article, author);
console.log(result);
*/

/* 
задача 3.4
В программе задан массив array. Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.

Пример значений переменных:

array = [true, 4, "word", "10n"]
Пример результата:

Количество элементов в массиве: 4

решение 

 1. let result = 0
 
function count() {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count +=1;
    }
    result = +count;
    console.log("Количество элементов в массиве: " + result )
}

count()

или

2.
 function count() {
    console.log("Количество элементов в массиве: " + array.length )
 }

 count()
*/

/* 
задача 3.5 
   
В программе задан двумерный массив employee. Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.

Пример значений переменных:

employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
]
Пример результата:

[
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["jobName", "IT PROG"]
]

решение

let employeeOne = new Map(employee);
employeeOne.delete("hireDate");
employeeOne.set("jobName", "IT PROG");
let employeeTwo = [];
for (let item of employeeOne) {
    employeeTwo.push(item);
}
console.log(employeeTwo);
    
	или 
	
	 let employeeOne = new Map(employee);
    employeeOne.delete("hireDate");
    employeeOne.set("jobName", "IT PROG");
    console.log([...employeeOne.entries()]);
	
	или 
	
	let str = "hireDate";

employee.sort((a,b) => {
    // console.log(a,b);
    if (b[0] !== str) {
        return 1
    } else if (a[0] !== str) {
        return -1;
    }
})
if (typeof employee[0] === "object") {
    while (employee[employee.length - 1][0] === str) {
        employee.pop();
    }
}
employee.push(["jobName", "IT PROG"])
console.log(employee);
*/

/* 
задача 3.6
 
 В программе задан двумерный массив array. Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. Функция countString() должна выводить в консоль сообщение, как в примере.

Пример значений переменных:

array = [
        [ "boolean", true ], 
        [ "number", 4 ],
        [ "string", "word" ],
        [ "object", {}]
    ]
Пример результата:

Количество строковых элементов в именованном массиве: 1

решение

let numStr = 0;
for (let i = 0; i < array.length; i++) {
    if ((typeof array[i][1]) == "string") {
        numStr++;
    }
}
console.log('Количество строковых элементов в именованном массиве: ' + numStr);

или 

const countString = function (a) {
    let cnt = 0;
    for (let val of a) {
        if (typeof val[1] === "string") {
            cnt++;
        }
    }
    console.log(`Количество строковых элементов в именованном массиве: ${cnt}`)
}
countString(array);
( this )
*/

/* 
задача 4.1
 
В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.

Пример значений переменных:

pet_1 = { 
    name: "Шарик", 
    age: 10 
};

pet_2 = { 
    name: "Жучка", 
    age: 5
};

решение

pet_1.getName = function() {
 return this.name + " " + this.age;
};
pet_2.getName = function() {
 return this.name + " " + this.age;
};
pet_1.getName();
pet_2.getName();
console.log(pet_1.getName()+ ";" +pet_2.getName());
 */

/* 
задача 4.2
 В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi().

Пример значений переменных:

input = {
    id: 1,
    value: "Добрый вечер",
    firstName: "Григорий",
    lastName: "Стрельников" 
}

function sayHi() {
    console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}
Пример результата:

Добрый вечер, Григорий Стрельников!

решение:

let result = sayHi.bind(input)
result()
*/

/* 
задача 4.3

В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.

Пример значений переменных:

pet = { 
    name: "Диксон", 
    breed: "Немецкая овчарка" 
}

function getDescription() { 
    console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
}
Пример результата:

Имя питомца: Диксон, Порода: Немецкая овчарка

решение:

getDescription = getDescription.bind(pet);
getDescription()
*/

/* 
задача 4.4
  
  В программе объявлен объект props, у которого задан набор свойств. Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

Пример значений переменных:

props= { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
}
Пример результата:

Значения свойств объекта props (name: Анатолий, age: 29)

решение

let str = '';
for (let key in props) {
  if (typeof props[key] !== 'function') {
    str += key +': ' + props[key] + ', ';
  }
}
str = str.slice(0, -2);
console.log('Значения свойств объекта props (' + str + ')');

или

function getValue() {
    let str = "";
    // console.log(Object.keys(this))
    // console.log(Object.values(this))
    for (let k in this) {
        if (typeof this[k] !== "function") {
            str += `${k}: ${this[k]}, `;
        }
    }
    str = str.slice(0, str.length - 2);
    console.log(`Значения свойств объекта props (${str})`);
}

getValue = getValue.call(props);
*/

/* 
задача 4.5

В программе объявлен объект hero, свойства которого описывают информацию о герое. В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку.

Пример значений переменных:

hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition: ()=>console.log("Позиция героя: " + this.position)
}
Пример результата:

Позиция героя: Лагерь

решение:

hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition () {
    console.log("Позиция героя: " + this.position)
}
}
hero.getPosition()
*/

/*
задача 5.1

В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. Результат выведите в консоль.

Пример значений переменных:

order = {
    productName: "Велосипед",
    costomerName: "Саша",
    salesName: "Петя",
    totalPrice: 15000
}
Пример результата:

{value: 15000, writable: true, enumerable: true, configurable: true}

решение
let  descriptor = Object.getOwnPropertyDescriptor(order,"totalPrice")
 console.log(descriptor);
*/

/*
задача 5.2
 
 В программе задан объект employees, который содержит ряд свойств и методов.
 Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль.
 Имена методов добавляться не должны.

Пример значений переменных:

employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
}
Пример результата:

firstName, lastName, ratePerDay, workingDays

решение

let newobj = [];
 for (let [key, value] of Object.entries(employees)) {
    if (typeof(value) !== 'function' ) {
         newobj.push([key])
     }
 };
 console.log(newobj);
 newobj = newobj.reduce((prev, current)=> prev.concat(current), [])
 let result = newobj.join(', ')
 console.log(result)
 */

/*
задача 5.3
 
 В программе объявлены переменные firstName и lastName.
 Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName.
 Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. 
 Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

Пример значений переменных:

firstName = "Александр"
lastName = "Петров"
Пример результата:

user.fullName // "Александр Петров"
user.fullName = "Всеволод Старозубов"
user.firstName // "Всеволод"
user.lastName // "Старозубов"

решение:
let user= {
    firstName,
    lastName,
get fullName() {
        return `${this.firstName} ${this.lastName}`
      },
      
set fullName(value) {
        var split = value.split(' ');
        this.firstName = split[0];
        this.lastName = split[1];
      },
};
*/

/*
задача 5.4

В программе объявлены переменные name и phone, которые хранят строки.
 В name указано название заведения, а в phone — его номер телефона.
 Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, 
 которое проверяет значение свойства phone на вхождение знака + в начале строки.
 Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true.
 Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone.
 Получившийся экземпляр класса запишите в переменную deliveryName.

Пример значений переменных:

name = "Pizza"
phone = "81234567890"
Пример результата:

false

решение

class Delivery {
    constructor(name, phone,validPhone = true) {
        
        this.name = name;
        this.phone =phone;
       
     if(phone[0] === "+") {
        this.validPhone = validPhone;

     }  else{
        this.validPhone = false;
     }
    }
    getInfo() {
        console.log(this.validPhone);
}
}   
let deliveryName = new Delivery(name,phone)

    deliveryName.getInfo();
	
	или 
	
	class Delivery {
    constructor(n, p) {
        this.name = n;
        this.phone = p;
        this.validPhone = /^\+/.test(p)
    }
}
let deliveryName = new Delivery(name, phone);
*/

/*
задача 5.5

В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте.
 Создайте новый класс User, который наследуется от класса Permissions.
 Дополнительно в классе User добавьте свойство name,
 значение которого класс принимает в качестве аргумента конструктора.
 
 решение
 
 class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}
class User extends Permissions {
    constructor(n) {
        super();
        this.name = n;
    }
}
*/

/*
задача 5.6

В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом. Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array и значение переменной num. Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль.

Пример значений переменных:

array = [2, 4, 7, 8, 1]
num = 2

Пример результата:

3

решение

function queue() {
        let n = arguments[0];
        let arr = [...arguments];
        arr.shift();
        arr.sort((a,b) => a - b);
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += arr[i];
        }
        return sum;
    }
    console.log(queue(num, ...array));
*/

/*
задача 6.1

В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas прямоугольник fillRect с размерами 100 на 65.

ctx.fillRect(5, 5, 100, 65);
*/

/*
задача 6.2

В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas два горизонтальных отрезка длиной 100.

Координаты первого отрезка: точка 1: x = 100, y = 100; точка 2: x = 200, y = 100.

Координаты второго отрезка: точка 1: x = 100, y = 150; точка 2: x = 200, y = 150.

            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.lineTo(200, 100);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(100, 150);
            ctx.lineTo(200, 150);
            ctx.stroke();
*/

/*           
задача 6.3
			
В программе задана переменная ctx, которая содержит контекст canvas элемента.
Отрисуйте в canvas три отрезка разных цветов.
Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, а третий — синего #2980b9 цвета.
			
		    ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.strokeStyle = '#e74c3c';
            ctx.lineTo(200, 100);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(100, 150);
            ctx.strokeStyle = '#16a085';
            ctx.lineTo(200, 150);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(100, 125);
            ctx.strokeStyle = '#2980b9';
            ctx.lineTo(200, 125);
            
            ctx.stroke();
*/

/* 
задача 6.4
			
В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas четыре квадрата fillRect разных цветов с указанными на картинке размерами и отступами.

Значение цветов:

Левый верхний квадрат: #ff3d00
Правый верхний квадрат: #0bdd38
Левый нижний квадрат: #2e77da
Правый нижний квадрат: #ffd200

ctx.fillStyle = '#ff3d00';
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = '#0bdd38';
ctx.fillRect(120, 10, 100, 100);
ctx.fillStyle = '#2e77da';
ctx.fillRect(10, 120, 100, 100);
ctx.fillStyle = '#ffd200';
ctx.fillRect(120, 120, 100, 100);
*/

/* 
задача 6.5
В программе задана переменная ctx, которая содержит контекст canvas элемента.
Отрисуйте в canvas 50 окружностей c центром в точке 150:150 и радиусом от 2 до 100.
Для решения данной задачи воспользуйтесь циклом.
		
		let radius = 2;
        for (let index = 0; index < 50; index++) {
          ctx.beginPath();
          ctx.arc(150, 150, 100, 0, 2 * Math.PI);
          ctx.fill();
          radius +=2;
        }
*/

/* 
задача 6.6

В программе задана переменная ctx, которая содержит контекст canvas элемента. Напишите программу, которая отрисовывает круги при движении мышью по canvas (для получения координат мыши используйте offsetX и offsetY). Для решения задачи воспользуйтесь методом addEventListener у объекта document.

Для правильной валидации задания выполните проверку в следующем порядке:

Выполните задание
Нажмите на кнопку «Проверить»
Проведите курсором по окну с результатом
Нажмите на кнопку «Проверить» еще раз

document.addEventListener('mousemove', e =>{
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 50, 0, 2 *Math.PI);
	ctx.stroke();
});
*/