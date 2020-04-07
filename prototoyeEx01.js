var buzz={
    flying:true
}

//var woody = new Object();
var woody = Object.create(buzz);

console.log(woody.flying);

var f = function(){
    console.log("f()");
}