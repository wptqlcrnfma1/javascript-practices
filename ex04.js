//변수의 범위
//1. 자바스크립트는 자바와 같은 block scope는 없다.
//2. function의 { }(블록) 안에서 var를 사용하게 되면 function scope가 된다. 
//3. var를 붙히는 습관을 들여서 함수내부에서 변수를 생성하면 전역변수가 되니까 자바처럼 지역변수로 사용하도록
//4. let(es6), constt(es6)는 Block Scope를 만든다.
	
	//자바에서는 error지만 스크립트에서는 외부에 있는 i를 가린다.
	var i = 10; 	//global scope
	var f = function(){
		var i=20;
		j = 100;
		console.log(i);
		i = j-1;
	}
	
	f();
	console.log(i);
	
	/* 함수 내부에서 j에 var를 안붙히면 var j 처럼 위로 올라간다.
	var j;
	var i =10;
	var j = function(){
		
	}
	*/
	
	{
		let x1 = 100000;
		var x = 100000; 
		
	}
	console.log(x1);
	
	{
		let x1 = 100000;
		const PI = 3.14;
		
		x1=100;
		// 상수이기 때문에 오류
		//PI = 0;
	}
	
	//접근 안됨
	//console.log(x)
	