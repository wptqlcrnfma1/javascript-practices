console.log('hello world');

var a = [];
a[0] = 0;
a[1] = 8;
a["name"] = 5;

b={name:'hi',
    title:'ti'    
};

console.log(a);
console.log(typeof(a[0]));
console.log(typeof(a.name));
console.log(a.length);


b.prototye.length = function(){
    console.log(b.prototye.length);
}

console.log

//////////////////////////test////////////