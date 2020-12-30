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
