// 배열 (Array)

//1. 생성자 함수 사용
console.log("=====생성자 함수 사용=======");
var a1 = new Array(); //생성자 함수
console.log(typeof(a1));

var a2 = new Array(10); //배열 크기 초기화 : 크기 지정은 동적으로 늘어나서 의미가 없다.

//a2[12]는 자바에서 에러지만 
a2[0] = 0;
a2[11] = 11;
a2[12] = 12;
a2[13] = 13;
a2[14] = 14;

console.log(a2[1], a2[2]); //배열 요소에 값을 대입하지 않으면 undifined
console.log(a2.length);
console.log("=====Array VS Object=======");
//Array VS Object
//array
a = [];
a["0"]=0;
a["1"]=0;
a["name"] = "배열:김정석"; //index에 "name" 이렇게 쓰면 안된다. object랑 차이 없다는 것 확인을 위한 코드

console.log(a["0"], a[0], a["name"], a.length);
for(property in a){
    console.log("property of a : " + property + " // " + typeof(property));
}

//object
o = {};
o["0"]=0;
o["1"]=0;
o["name"] = "객체:김정석";
console.log(o["0"] , o[0], o["name"], o.length); //o.length : undifined
for(property in o){
    console.log("property of o : " + property + " // " + typeof(property));
}

console.log("=====리터럴 사용=======");
//2. 리터럴 사용
var a3= []; //생성

console.log(typeof(a3), a3.length);

 //배열에 함수 초기화 가능
var a4 = [
    function(){
        console.log("hello")
    },
    20,
    "javascript",
    true,
    { //객체
        email:'zozfd@daum.net',
        name:'김정석'
    },
    null,
    undefined
];

console.log(a4.length);
for(var i =0; i<a4.length;i++){
    console.log(a4[i]);
}

a4[0](); //a4배열의 0번에 있는 함수 호출

//배열함수
console.log("=========배열 함수=============")

