var task = +prompt("Введите номер задания");
if (task == 1) {
  var a = 1, b = 1, c, d;
  c = ++a; console.log(c);           // 2  Префиксная форма, сначала увеличивает значение, а потом возвращает результат
  d = b++; console.log(d);           // 1  Постфиксная форма увеличивает значение, но возвращает старое значение
  c = (2 + ++a); console.log(c);      // 5  Сначала увеличили, потом сложили
  d = (2 + b++); console.log(d);      // 4  увеличили b до 3 но при сложении использовали старое значение 2 (стр 3).
  console.log(a);                    // 3  увеличили переменную на 1 2 раза (стр 2 и 4)
  console.log(b);                    // 3  увеличили переменную на 1 2 раза (стр 3 и 5)
}
else if (task == 2) {
  var y = 2;
  var x = 1 + (y *= 2); // 2*2+1
  console.log(x);
}

else if (task == 3) {
  var param1 = +prompt("Ведите первое чило");
  var param2 = +prompt("Ведите второе число");
  if (isNaN(param1) || isNaN(param2)) {
    console.log("Error, numbers only!");
  } else if (param1 >= 0 && param2 >= 0) {
    console.log(param1 - param2);
  } else if (param1 < 0 && param2 < 0) {
    console.log(a * b);
  } else {
    console.log(param1 + param2);
  }
} else if (task == 4) {
  let a = +prompt("Введите число от 0 до 15");
  if (a >= 0 && a <= 15) {
    switch (a) {
      case 0:
        console.log(0);
      case 1:
        console.log(1);
      case 2:
        console.log(2);
      case 3:
        console.log(3);
      case 4:
        console.log(4);
      case 5:
        console.log(5);
      case 6:
        console.log(6);
      case 7:
        console.log(7);
      case 8:
        console.log(8);
      case 9:
        console.log(9);
      case 10:
        console.log(10);
      case 11:
        console.log(11);
      case 12:
        console.log(12);
      case 13:
        console.log(13);
      case 14:
        console.log(14);
      case 15:
        console.log(15);
      default:
        break;
    }
  }
} else if (task == 5) {
  function sum(a, b) {
    // "+"
    return a + b;
  }
  function sub(a, b) {
    // "-"
    return a - b;
  }
  function mul(a, b) {
    // "*"
    return a * b;
  }
  function div(a, b) {
    // "/"
    return a / b;
  }

  let num1 = +prompt("Введите первое число");
  let sign = prompt("Введите знак операции");
  let num2 = +prompt("Введите второе число");

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Error, numbers only!");
  } else {
    switch (sign) {
      case "+":
        console.log(sum(num1, num2));
        break;
      case "-":
        console.log(sub(num1, num2));
        break;
      case "*":
        console.log(mul(num1, num2));
        break;
      case "/":
        console.log(div(num1, num2));
        break;
      default:
        console.log("Такой математической операции не существует");
        break;
    }
  }
} else if (task == 6) {
  function mathOperation(arg1, arg2, operation) {
    switch (operation) {
      case '+':
        console.log('Результат сложения = ' + (arg1 + arg2));
        break;
      case '-':
        console.log('Результат вычитания = ' + (arg1 - arg2));
        break;
      case '*':
        console.log('Результат умножения = ' + (arg1 * arg2));
        break;
      case '/':
        console.log('Результат деления = ' + (arg1 / arg2));
        break;
    }
  }

  var operation = prompt("Введите знак операции");
  var num1 = +prompt("Введите первое число");
  var num2 = +prompt("Введите второе число");

  mathOperation(num1, num2, operation);
}
