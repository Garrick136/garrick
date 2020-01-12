/*Напишите код, который будет спрашивать логин (prompt).
 Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён».
  Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!»,
 иначе – «Пароль неверен», при отмене – «Вход отменён».*/

// var a = prompt("login");
// if(a == "admin") {
//   b = prompt("Введите пароль");
// }else{
//     alert("Вход отменен");

// }

// if (b === "Чёрный Властелин") {
//     alert("Добро пожаловать!");
// }
// else if (b === null){
//     alert("Вход отменен")
// }
// else {
//     alert("Пароль не верен");
// }

/*Перепишите if с использованием оператора '?'.
if (a + b < 4) {
    result = "Мало";
} else {
    result = "Много";
}Условие ? true : false ;*/

// (a + b < 4) ?
//     result = "Мало" : result = "Много";


/*Перепишите if..else с использованием нескольких операторов "?"*/

// var message;

// if (login == 'Вася') {
//     message = 'Привет';
// }else if (login == 'Директор') {
//     message = "Здравствуйте";
// }else if (login == " ") {
//     message == 'Нет логина';
// }else {
//     message = " ";
// }
// var a = message
// login == "Вася" ? (message = 'Привет') : (message = " ");
// login == "Директор" ? (message = "Здравствуйте") : (message = " ");
// login == " " ? (message == "Нет логина") : (message = " ");

// var login = prompt("Введите логин")
// login == "Вася" ? (alert('Привет')) : (alert(" "));
// login == "Директор" ? (alert("Здравствуйте")) : (alert(" "));
// login == " " ? (alert("Нет логина")) : (alert(" "));


/*Создайте массив размерностью 15 элементов, выведите все элементы в обратном порядке и разделите каждый элемент спецсимволом "Облака".
 При загрузке страницы спросите у пользователя индекс и удалите этот элемент из массива.*/

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// b = +prompt("индекс");
// var res = array.splice(b, 1);

// document.write(res.join("<p>"));
//  document.write(array.reverse()); 
//  document.write(array.join("&#9729;"));


/*Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.<br>
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.*/

// var styles = ["Джаз","Блюз"];
// var res = styles.push("Рок-н-ролл");
// document.write("<p>После добавления в конец : " + styles.join(' '));
// var res1 = styles.splice(1, 1);
// document.write("<p>Удалены: " + styles.join(" "));
// var res2 = styles.splice(1, 0, "Классика");
// document.write("<p>Вставка: " + styles.join(" "));
// var res3 = styles.shift();
// document.write("<p>Удаленный элемент: " + res3);
// var re4 = styles.unshift("Рэп", "Регги")
// document.write("<p>Вставил в начало: " + styles.join(" "));

/*Создайте функцию калькулятор. При делении на 0 должна выдаватся пользователю ошибка в консоль и в диалоговом окне*/

// function add(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function mul(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     return a / b;
// }

// var operand1 = prompt("Введите первое число");
// var sign = prompt("Введите знак арифметической операции: + - * / ");
// var operand2 = prompt("Введите второе число");
// var result;

// operand1 = parseInt(operand1);
// operand2 = parseInt(operand2);

// switch (sign) {
//     case "+":
//         result = add(operand1, operand2);
//         break;
//     case "-":
//         result = sub(operand1, operand2);
//         break;
//     case "*":
//         result = mul(operand1, operand2);
//         break;
//     case "/":
//         result = div(operand1, operand2);
//         break;
//     default:
//         document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции");

// }

// if (result != undefined) {
//     document.write("<p>" + operand1 + " " + sign + " " + operand2 + " = " + result);
// }
// if(sign === '/' && operand2 === 0){
//     alert("error") 
// };


/*Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
1	function checkAge(age) {
2	if (age > 18) {
3	return true;
4	} else {
5	return confirm('Родители разрешили?');
6	} }*/
