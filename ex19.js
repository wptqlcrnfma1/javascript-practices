// 함수 객체를 생성하는 방법1

var a = 10;
a = "hello"; //동적으로 타이핑이 가능하지만 이렇게 쓰면 안된다.




function f1(a,b){ //var를 안붙히는 이유는 파라미터는 자동으로 함수 scope이기 때문 자동으로 사라져서 
    //for(let i=0;i<10;i++){} //let을 붙히는 이유는 변하기 때문에
    
    return a+b;
}
console.log(typeof(f1), f1(10,20));

// 함수 객체를 생성하는 방법2 : 리터럴
var sum1 = function(a,b){
    return a+b;
}
console.log(typeof(sum1), sum1(10,20));

// 함수 객체를 생성하는 방법3 : new 연산자 생성자 함수
//잘 쓰진 않는 방법
var f3 = new Function('a', 'b', 'return a+b;'); 

console.log(typeof(f3), f3(10,20));


// 함수 객체를 생성하는 방법4 : 익명(Anonymous) 함수
//callback
//비동기통신이라 요청이 왔을때 부른다.
//callback 실행시점
setTimeout(function(){
    console.log('time out');
}, 1000);

var sum = (function(a,b){
return a+b;
})(10,20);
console.log(sum);

//timeout쓸때 조심 출력순서
console.log('test ends......');


//가변변수
var sum2 = function(){
    //for(var i = 0;i<arguments.length;i++){
    //    sum+= arguments[i]; //함수 내부의 arguments : 파라미터로 넘어온 값은 배열로 담고있다.
    //}
    Array.prototype.forEach.call(arguments,function(element){ //argument는 배열이 아니므로 foreach를 바로 접근할수없다. 그러므로 call을 사용한다.
       sum += element;
    });
    return sum;
}

console.log(sum2(1,2));
console.log(sum2(1,2,3));
console.log(sum2(1,2,3,4));
console.log(sum2(1,2,3,4,5));
