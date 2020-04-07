var s1 = "hello1";

//에러: not a function
//s1.myFunction();

String.prototype.myFunction = function(){
	console.log('mystring:' + this);
}

var s2 = "hello2";
s1.myFunction();
s2.myFunction();
