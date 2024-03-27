// Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте 

let n = +prompt(`сколько раз?`)

function fib(n) {
    let a = 0;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

console.log(fib(n));


function showLongestName(names) {
    let long = []

    for(itm of names){
        if(itm.length > long.length){
            long = itm
        }
    }
    return long
}
console.log(showLongestName(["Jagoliddinchik" , "Franklin" , "Robin"]));
console.log(showLongestName(["sfsdfsdfsdfsdfsdfsfd" , "Franklin" , "Robin"]));
console.log(showLongestName(["sfsfd" , "Franklin" , "Rob"]));
