// Работа с массивами

const arr = ['banana', true, 1, 'car', {}, { a: 1 }, 5, true, true, false, 455, {}]

// 1. Написать функцию, которая вернет новый массив, где все числа массива arr будут увеличины в 2 раза

function doubleInt (arr) {
    return arr.map(item => {
       return typeof(item)==='number' ?
       item * 2 :
       item;
    })
}
const newArr = doubleInt(arr)
console.log(newArr)