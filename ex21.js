// Anonymous Parameter

var f = function(arg1, arg2, arg3){
    console.log(arg1);
    console.log(arg2.name); //name이란 속성을 갖고 있어야한다.
    arg3(); //함수의미
}

f(10, {
    name:'wptqlcrnfma1',
    age : 20
}, function(){
    console.log("hello");
    
});