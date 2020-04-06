//객체들의 확장

var o = {
    name:'둘리',
    age:10,
    isFemale: false
};

var f = function(){
console.log("hello world");
}

var i = 10;
var n = new Number(10); // window f의 객체에서 Number() 객체 참조

f();
window.f();

console.log(o);
console.log(window.o);

console.log("==========================");

o.another={
name:'마이콜',
age:20
}
console.log(o);

f.another = {
    name:'또치',
    age:10,
    info: function(){
        console.log(this.name + ":" + this.age);
    }
}

console.log(f.another);
f.another.info();

console.log("==============기본타입은 확장X==============")
i.another = {};
console.log(i.another);
