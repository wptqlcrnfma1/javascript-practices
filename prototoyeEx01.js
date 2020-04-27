var arr = [];
console.log(typeof(arr));


var a = new String('foo');
var b = new String('foo');    

// false as a and b are type Object and reference different objects
console.log(a == b );

// false as a and b are type Object and reference different objects
console.log(a === b );

// true as a and 'foo' are of different type and, the Object (a) 
// is converted to String 'foo' before comparison
console.log(a == 'foo');




var title = document.getElementById("asd");

window.addEventListener("resize", function(){

    console.log("i have been resized"); 
});