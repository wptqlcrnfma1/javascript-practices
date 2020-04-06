var o = {
    name:'마이콜',
    age: 20,
    hasProperty: function(property){
    return property in this; 
    }
}

//age 속성이 객체 o에 있냐
console.log(o.hasProperty("name")); 
console.log(o.hasProperty("age"));
console.log(o.hasProperty("email"));

console.log("========================================")

console.log(o.hasOwnProperty("name")); //만들지 않아도 존재하는 매소드 // property 객체 안에 hasOwnProperty 가 있다.
console.log(o.hasOwnProperty("age")); // 체인이 걸려서 사용가능하다.
console.log(o.hasOwnProperty("email"));

console.log("========================================")

with(o){
console.log(name + ":" + age);
}

console.log("===============for ~ in================")
//객체의 모든 property 순회 출력
var data = "";
for(var property in o){
if(typeof(o[property]) != 'function') // property는 string이므로 o.property = o["property"] (x) / function은 호출이므로 제외
data += (o[property]);
}
console.log(data); //마이콜,20 처럼 출력하고싶다.