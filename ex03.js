
var myVar1;
var myVar2 = null; //null은 객체니까 직접 대입을 해야한다.

console.log(myVar1 + ":" + myVar2);
console.log(typeof(myVar1) + ":" + typeof(myVar2));


console.log(myVar1 == myVar2); // 값 : null과 undefined는 같다고 평가하더라
console.log(myVar1 === myVar2); // 타입비교

// == : equality, 값의 등치성, 형변환
//
console.log(1 =="1");
console.log(true == 1);
console.log('abc' == new String('abc'));

console.log(true + 10);
console.log('abc'+ new String('abc'));
console.log(1+"1");
console.log("1"+1); //number가 string으로 변한다.

console.log("============================");

// === : identity, 객체의 동일성, 형변환 x
console.log("2" === 2);
console.log(true ===1);
console.log('abc' === new String('abc'));

console.log("============================");
//추천
//엄격하게 형변환을 해서 두 피연산의 타입을 맞춰야한다.
//자바스크립트에서 언어의 자유도는 높지만 엄격하게해서 코드보기 편하게 만들자.
var str="5";
console.log(parseInt(str)===5);


