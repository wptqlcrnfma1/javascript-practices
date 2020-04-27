// 배열 메소드 - concat

var colors = ['black', 'white', 'yellow'];
var fruits = ['mango', 'banana', 'apple'];

var test = fruits.concat(colors);
console.log(test);

// 배열 메소드 - join
console.log("============join=========");

var str = fruits.join(',');
console.log(str);

// 배열 메소드 - pop, push : satck 지원
console.log("============pop, push : satck 지원=========");
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push('red');
console.log(colors);

//배열 메소드 - reverse
console.log("============reverse=========");
console.log(fruits);
fruits.reverse();
console.log(fruits);

//배열 메소드 - shift
console.log("============shift=========");
var numbers = [4000,8000,3000,5000,1000];
console.log(numbers);
numbers.shift();
console.log(numbers); // <미는거

//배열 메소드 - slice
console.log("============slice=========");
var numbers2 = numbers.slice(0,3);
console.log(numbers2);
console.log(numbers);

//배열 메소드 - sort
console.log("============sort=========");
console.log(numbers);
numbers.sort();
console.log(numbers);

//배열 메소드 - splice
//index 부터 count개 삭제 후 삭제 요소를 배열로 반환
console.log("============splice=========");
console.log(fruits);
var fruits2 = fruits.splice(0/*index*/ , 2/*count*/);
console.log(fruits2);
console.log(fruits);

var a1 = [0,1,2,3,4];
a1.splice(1,3,10);
console.log(a1);

var a2 = [0,1,2,3,4];
var a3 = a2.splice(1,1,10); //index1부터 1개의 값을 10으로 대체
var a3 = a2.splice(1,1,10);
console.log(a2);
console.log(a3);
console.log("====================");
var a2 = [0,1,2,3,4];
var a3 = a2.splice(1,0,10);
var a3 = a2.splice(1,0,10);
console.log(a2);
console.log(a3);