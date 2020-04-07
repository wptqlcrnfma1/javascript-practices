//URL 다루기

//1. escape (x) : - URL을 전부 encoding, deprecated
var url = 'http/localhost:8088/mysite03?n=김정석';
var url2 = escape(url);

console.log(url2);

//2. encodeURI (o)  : parameter 부분만 encoding
var url3 = encodeURI(url);
console.log(url3);

 // location.href = encodeURI(url); 파라미터부분만

 //3. encodeURIComponent :부분적이기 때문에(component) url 전체에 쓰는 것이 아니다. 
 var url4 = encodeURIComponent(url);
 console.log(url4);

 //4. encodeURIComponent 사용 예

 var toQueryString = function(o){
    var qs = [];
    for(property in o){
        qs.push(property + "=" + encodeURIComponent(o[property]));
    }
    console.log(encodeURIComponent(o[property]));
    console.log("qs : " + qs);
    return qs.join('&');
}

 var url = 'http/localhost:8088/mysite03';
 
 var o = {
    no:10, 
    name:'김정석',
     mail:'zozfd@daum.net'
 }

 var url5 = url + "?" + toQueryString(o);

console.log(url5);