// 일반함수(관례 소뮨자로 시작)
var myFunction = function(){
	console.log('일반 함수');
	
}

// 생성자함수(관례 대문자로 시작)
var MyObject = function(name, age){
	this.name = name;
	this.age = age;
}



var o4 = new MyObject('둘리', 10);
var o5 = new MyObject('마이콜', 20);
var o6 = new MyObject('잭문트', 30);

console.log(o4);
console.log(o5);
console.log(o6);
