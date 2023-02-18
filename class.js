//Object 를 여러개 만들어야 할때 class 를 이용하면 빠르게 생성할 수 있다.

//아래가 class 함수이다.
function Circle (r) { 
    this.지름 = 2*3.14*r
    this.넓이 = r*r*3.14
}

const circle1 = new Circle(4)
const circle2 = new Circle(8)

console.log(circle1) //Circle { '지름': 25.12, '넓이': 50.24 }
console.log(circle2) //Circle { '지름': 50.24, '넓이': 200.96 }

//ES6 부터는 아래와 같이 만든다
class Square {
    constructor(n){
        this.둘레 = 4 * n
        this.넓이 = n*n
    }
}

const square1 = new Square(5)
const square2 = new Square(10)

console.log(square1) //Square { '둘레': 20, '넓이': 25 }
console.log(square2) //Square { '둘레': 40, '넓이': 100 }
console.log(square1)

const arr = [4,5,1]
//const arr = new Array(4,5,1)

//아래 메소드 들은 prototype에서 가지고 있다.
console.log(arr.sort()) // [1,4,5]
console.log(arr.length) // 3

Array.prototype.showMe = function () {
    console.log(this[0])
}

arr.showMe()