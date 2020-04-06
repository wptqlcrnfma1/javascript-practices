console.log("==============new + 생성자 함수를 사용하는 방법==================")
 
 //생성 방법1 - new + 생성자 함수를 사용하는 방법
 var o1 = new Object();
 o1.name = '둘리';
 o1.age = 10;
 o1.another = new Object();
 o1.another.name = '마이콜';
 o1.another.age = 30;
 
 console.log(o1);
 console.log(o1.name);
 console.log(o1.age);
 console.log(o1.another);
 console.log(o1.another.name);
 console.log(o1.another.age);
 
 console.log("=============={} literal 사용하는 방법==================")
 
 
 //생성방법2 -{} literal 사용하는 방법
 var o2 = {};
 o2.name = '둘리';
 o2.age = 10;
 o2.another = {};
 o2.another.name = '마이콜';
 o2.another.age = 30;
 console.log(o2);
 
 console.log("==============json==================")
 
 
 //생성방법3 - (J)ava(S)cript (O)bject (N)otation : 자바스크립트 객체 표기법
 var o3 = { //정의를 하는 구문이기때문에 '=' 말고 ':'를 써야한다.
		name: '둘리' , 
		age: 10,
		another: {
			name:'마이콜',
			age: 30
		}
 }; 

 console.log(o3);
 
/* xmlHttpRequest(브라우저에 내장되어있음) 호스트 객체를 사용해서 통신한다.*/ 
var response = '{"no": 1, "name": "김정석", "email": "zozfd@daum.net"}';
var response2 = '{"no": 2, "name": "zzz정석", "email": "zozfd@daum.net"}';
var userVo = eval("(" + response + ")");
console.log("==============eval==================")
console.log(userVo);
console.log(userVo.no + ":" + userVo.name);
 