/// Задание №1 ///
console.log('Задание №1');
let s = prompt('Введите целое число овец:');
let txt = '';
for (let i = 1; i <= s; i++)
{
	txt = txt + `${i} овечка... `;
}
console.log(txt)

/// Задание №2 ///
console.log('\n');
console.log('Задание №2');
let i = 0;
while(i <= 15) {
    if (i % 2 == 0) {
        console.log(`${i}  ${'четное'}`);
    } 
    else {
        console.log(`${i}  ${'нечетное'}`);
    }
    i++;
}

/// Задание №3///
console.log('\n');
console.log('Задание №3');
let c = 0;
while(c <= 8) {
    if (c % 2 == 0) {
        console.log(' # # # #');
    } 
    else {
        console.log('# # # # ');
    }
    c++;
}

/// Задание №4///
console.log('\n');
console.log('Задание №4');
let n1 = prompt('Введите первое число');
let n2 = prompt('Введите второе число');
let n3 = prompt('Введите третье число');
if (n1 <= n2 && n2 <= n3) {
    console.log(n1, n2, n3)
}
else if (n1 <= n3 && n3 <= n2) {
    console.log(n1, n3, n2)
}
else if (n2 <= n1 && n1 <= n3) {
    console.log(n2, n1, n3)
}  
else if (n2 <= n3 && n3 <= n1) {
    console.log(n2, n3, n1)
}
else if (n3 <= n1 && n1 <= n2) {
    console.log(n3, n1, n2)
}
else {
    console.log(n3, n2, n1)
}   

/// Задание №5///
console.log('\n');
console.log('Задание №5');
console.log('Максимальное число среди чисел 5, 9, -40, 23, 0 = ' + Math.max(5,9,-40,23,0));
