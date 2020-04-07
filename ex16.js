//String

//배열처럼 접근 가능
var str = 'hello world';
for(var i=0;i<str.length;i++){
    console.log(str[i]); //내부적으로 index가 있다.
}

//문자열 합차기
var str1 = 'hello';
var str2 = 'world';
var str3 = str1 +' '+ str2;
console.log(str3);

//캐스팅
var str4 = 5 + "5";
console.log(str4);

var str5 = 'boolean:' + true;
console.log(str5);

//메소드
var str ='string1 string2 string3';
console.log(str.length);

// - 검색
var index = str.indexOf('string2');
console.log(index); //처음 나타난 index
var index = str.indexOf('string4');
console.log(index); // 찾지 못하면 -1

// -substring
var str5 = str.substring(10) //10 ~ 끝
console.log(str5);

var str6 = str.substr(10, 5/*count*/); //10 ~ 15 , 10부터 5개
console.log(str6);

var str7 = str.substring(10, 13/*last index -1*/);
console.log(str7);

var a = str.split(' ');
console.log(a);

var str8 = 'abcdef';
var a = str8.split(':');
console.log(a);


