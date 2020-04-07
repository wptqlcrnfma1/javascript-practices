//ex19.js 의 call 메소드 이해


global.name = "nodejs"; //global.name = 브라우저가 아니기 때문에 접근을위해 global 사용
var f = function(s){
    console.log(s + " " + this.name);
}
f('helllo');

var o = {
    name:'kim'
}


f.call(o, "hello");
f.call(o, "hi");