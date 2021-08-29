// Горлова Виктория
//задача. 
// Перепешите функцию, используя оператор '?' или '‖'
// let age;
// function checkAge (age) {
//     if (age < 18 ) {
//         return true;
//     } else {
//         return confirm ('Родители разрешили?');
//     }
// }

function checkAge (age) {
    let result = (age > 18) ? 'true' :  confirm ('Родители разрешили?');
    return  result;
}
checkAge (17);


// Напишите функцию min(a,b), которая возвращает меньшее из чисел а и в

function min(a, b) {
    return (a > b) ? b : a; 
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));


// Напишите функцию  pow(x, n), которая возвращает х в степени n. Иначе говоря, умножает х на себя n раз 
// и возвращает результат.

function pow(x, n) {
    return x ** n;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));


// Задачи.
// Сделайте функцию InArray, которая определяет, есть в массиве элемент с заданным тестом  или нет. Функция
//  первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
//  Функция должна возвращать true или false.

function InArray (item, array) {
    console.log(array.includes(item)); 
}
InArray('fine', 'The weather is fine');

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте
//  вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным
//  и возвращать обратно строку с заглавной первой буквой.

let str = 'fdddf fgadfdfds dffdsfd';
var res = [];
var arr = str.split(' ');
for (let i = 0; i < arr.length; i++) {
 res.push(ucfirst(arr[i]));
}
var newStr = res.join(' ');
// console.log(res);
console.log(newStr);
 function ucfirst(word) {
 return word[0].toUpperCase() + word.substr(1);
}

//Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится 
// к каждому элементу массива. Функция each должна вернуть измененный массив.

function each(ar, my_f){
    return my_f(ar)
}
var arr = [5, 3, '23', '1'];
function my_f(){
var newAr = [];
for (var i = 0; i < arr.length; i++) {
 		newAr[i]= 4 + (+arr[i]);
}
 	return newAr;
 }
 console.log(each(arr, my_f));

// Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, которые
// по очереди применятся к каждому элементу массива: к первому элементу массива - первая функция, ко второму - вторая
//  и так далее пока функции в массиве не закончатся, после этого возьмется первая функция, вторая и так далее 
//  по кругу.

function each(ar, funcAr) {
	var newAr = [];
	for (var i = 0; i < ar.length; i++){
		var calcul = funcAr[i % funcAr.length](ar[i]);
		newAr.push(calcul);
  	}
	return newAr;
}

var function1 = function(i) {
	return i * 23
};
var function2 = function(i) {
	return i + 1
};
var function3 = function(i) { 
	return i ** 2
};
var function4 = function(i) {
	return i % 2
};
var functionAll = [function1, function2, function3, function4];
var oneAr = [7, 3, 2, 3, 4, 5, 6, 7];
console.log(each(oneAr, functionAll));


// Используя замыкание сделайте функцию, которая считает и выводит количество своих вызовов.

function count() {
	let i = 1;
	return function() {
        return i++;
    }
}
var f = count();
console.log(f());
console.log(f());