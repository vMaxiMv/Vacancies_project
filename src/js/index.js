// Работа с массивами

//const arr = ['banana', true, 1, 'car', {}, { a: 1 }, 5, true, true, false, 455, {}]

// 1. Написать функцию, которая вернет новый массив, где все числа массива arr будут увеличины в 2 раза

// function func (arr) {
//     return arr.map(item => {
//        return typeof(item)==='number' ?
//        item * 2 :
//        item;
//     })
// }
// const newArr = func(arr)
// console.log(newArr)

// 2. Написать новую функцию, которая вернет объект, в котором будут поля с названиями равными типам данным, а в полях будет итоговый подсчет кол-ва элементов в массиве arr

// function func (arr){
//     const obj = arr.map(item=>typeof(item)).reduce((acc, item)=>{
//         acc[item] = (acc[item] || 0) + 1
//         return acc
//     },{})
//     return obj
// }
// const obj = func(arr)
// console.log(obj)

// 3. Написать функцию, которая отсортирует массив следующим образом: булевы, числа, строки, объекты

// function func (arr){
//    return arr.sort((a,b)=>{
//        const types = ['boolean', 'number', 'string', 'object']
//        return types.indexOf(typeof(a)) - types.indexOf(typeof(b)) 
//     })
// }
// const newArr = func(arr)
// console.log(newArr)

// 4. Написать функцию, которая принимает неограниченное число параметров и возвращает массив, в котором каждое число умножается на общее количество параметров.

// function func(...args){
//     const argsCount = args.length
//     return args.map(item=>{
//         return item * argsCount
//     })
// }

// const newArr = func(3,4,5,6,10)
// console.log(newArr)

// 5.Написать функцию, которая принимает массив слов, а выводит массив уникальных слов отсортированных по количеству повторов этого слова,
//  если у 2х слов параметр уникальности одинаковый, то они должны быть отсортированы между собой по алфавиту.

// function func (arr){
//     const obj = arr.reduce((acc, item)=>{
//          acc[item] = (acc[item] || 0) + 1
//         return acc
//      },{})
//     return Object.entries(obj)
//      .sort(([aWord, aCount],[bWord, bCount])=>{
//        return bCount - aCount || aWord.localeCompare(bWord) 
//      })
//      .map(([word]) => word)
// }

// const newArr = func(['fruit', 'keyboard', 'word', 'word', 'keyboard', 'word', 'fruit', 'banana'])
// console.log(newArr)

// Работа с объектами

// 1. Написать функцию, которая посчитает количество ключей

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 1
// }

// function func(obj){
//    return Object.keys(obj).length
// }
// const qty = func(obj)
// console.log(qty)

// 2. Написать функцию, которая конвертнет исходный объект в новый по структуре ниже

// const obj = {
//         a: 1,
//         b: 2,
//         c: 3
// }

// function func (obj){
//     // Object.entries(obj).map(([key, value])=>{
//     //     key === 'a' && key === 'c' && 
//     // })
//     return convertedObj = {...obj, d: obj.a + obj.c}
// }
// const newObj = func(obj);
// console.log(newObj)

// Работа с классами

// 1. Создать AreaCalculator класс, который будет считать площади фигур. Дополнительно создать 2 класса: Square и Circle.

// class AreaCalculator {

// }

// class Square {
//     constructor(side) {
//       this.side = side;
//     }
//   area(){
//     return this.side ** 2
//   }
//   }
// const squareArea = new Square(5).area()
// console.log(squareArea)

// class Circle {
//     constructor(radius) {
//       this.radius = radius;
//     }
//   area(){
//     return Math.PI * (this.radius ** 2)
//   }
//   }
// const circleArea = new Circle(10).area()
// console.log(circleArea)

// class Triangle{
//     constructor(side, height) {
//       this.side = side;
//       this.height = height
//     }
//   area(){
//     return (this.side * this.height) / 2
//   }
//   }

//   const triangleArea = new Triangle(10, 8).area()
//   console.log(triangleArea)

// class AreaCalculator {
//     constructor(shapes){
//         this.shapes = shapes
//     }
//     sum(){
//        return this.shapes.reduce((acc, item)=>{
//             return acc = acc + item.area()
//         }, 0)
//     }
// }

// console.log(new AreaCalculator([new Square(5), new Circle(10), new Triangle(10, 8)]).sum())