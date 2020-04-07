// 배열 확장 : 리스트 메소드 추가하기
Array.prototype.insert = function(index, value){
    // if(value instanceof Object) (x) 왜 ? instanceof는 new 했을때 생성하는 생성함수를 써줘야한다. array가 있구나
    if(value instanceof Array){
       // for(var i = 0;i<value.length;i++){
       //     this.splice(index++, 0, value[i]) // 0은 값을 빼지 않는다는 의미 / 여기의 this는 object에서 호출하므로 배열이되는데 function(elemnet)의 경우는 object global
       // }

        //this에 관한 2가지
        //1. bind > 자주쓴다.
        //2. closesr

        var _this = this; //closer
        value.forEach(function(element){
            //console.log(this+ ">>>" + element);
            _this/*closer*/.splice(index++, 0, element); //this : object global
        }/*.bind(this)*/);  //bind
    } else{
        this.splice(index,0,value);
    }
} //함수안의 this는 의미가 달라진다는 것을 고민해야한다.

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

//리스트로 사용하기
var a = [1,2,4];
a.insert(2,3); //index 2에 3value 추가
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a','b','c']); // 기대: [1, 2, 'a' ,'b' ,'c' ,3]
console.log(a); //결과 : [ 1, 2, [ 'a', 'b', 'c' ], 3 ] // 객체인 배열을 넣다보니 [ ] 까지 같이 들어가더라 > insert바뀐 메소드 참고



