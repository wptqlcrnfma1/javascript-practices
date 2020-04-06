var u;
var i = 10;
var f = 3.14;
var b = true;
var s = 'Hello World';
var n = null;

var fn = function(a,b){return a+b ;};
var o = {};
var a = [];


console.log(u+ ":" + typeof(u));
console.log(i+ ":" + typeof(i));
console.log(f+ ":" + typeof(f));
console.log(b+ ":" + typeof(b));
console.log(s+ ":" + typeof(s));
console.log(n+ ":" + typeof(n));

console.log("=================================");

console.log(fn+ ":" + typeof(fn));
console.log(o+ ":" + typeof(o));
console.log(a+ ":" + typeof(a)); //javaScript에서는 배열과 객체가 거의 차이가 없다. a["1"] 이렇게 접근 가능



var i2 = new Number(10);
var b2 = new Boolean(false);
var s2 = new String("Hello world");

console.log(i2+ ":" + typeof(i2));
console.log(b2+ ":" + typeof(b2));
console.log(s2+ ":" + typeof(s2));

var fn2 = new Function("a", "b", "return a+b;"); //이런게 있구나 생각하고 함수를 이렇게 만들지는 않는다. fn과 같은 문법
var o2 = new Object();
var a2 = new Array();

console.log(fn2+ ":" + typeof(fn2));
console.log(o2+ ":" + typeof(o2));
console.log(a2+ ":" + typeof(a2));



// 원시타입과 원시타입을 Wrapper 객체는 별 구분없이 사용가능(연산가능)
console.log(i + i2);
console.log(s + s2);

// 의아하다) 원시타입도 메소드 호출이 가능하다.
// 원시타입에 미소드가 호출 될 때 임시 객체가 만들어진다.
console.log(b.valueOf()); //new Boolean(b).valueof() 객체가 만들어지고 valueof가 불려진다음 객체가 사라진다. 원시타입의 메소드를 부르는게 말이 안되지만 객체를 잠시 생성하고 메소드를 부른 뒤 사라진다. 
console.log(b2.valueOf());


console.log(typeof(Number())); //함수이다.


var myNumber = function(value){
	this.value = value; //number는 아마 이렇게 만들어져 있을것이다.
	
}
var o = new myNumber(10);
console.log(o.value,typeof(o));

//객체를 함수처럼 사용가능
console.log(Number("10"));
