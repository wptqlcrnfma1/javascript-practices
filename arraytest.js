
var f = function(a,b,c,d){
    console.log(Array.prototype.join(arguments));
}

var arr = ['a','b','c'];
var obj1 = {
    name:'김정석',
    age:10
};

console.log(obj1);
console.log(typeof(obj1));

var objFun = function(){
   var obj2={
        name:'김정석',
         age:10
    }
}

console.log(objFun.prototype.name);



