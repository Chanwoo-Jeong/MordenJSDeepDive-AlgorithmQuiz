// console.log(score)

// score =90
// var score;

// console.log(score)

// const arr = [1,2,3]
// arr.forEach(console.log)

// {
//     var foo = 10;
// }

// console.log(foo)

// outer : for(var i = 0 ; i < 3; i++) {
//     for (var j =0 ; j <3; j++){
//         if(i+j === 3) break outer;
//         console.log(`inner [${i},${j}]`)
//     }
// }

// console.log("Done!")

// var animal = false && "Dog"
// console.log(animal)

// switch(3){
//     case 1:
//         console.log("1")
//     case 2:
//         console.log("2")
//     case 3:
//         console.log("3")
// }

// function String (number) {
//     this.i = number
// }
// var number = new String(1)

// console.log(number)

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car('Eagle', 'Talon TSi', 1993);
// console.log(car1)

// var person = {
// 	name : "lee",
//     age : 20,
//     Hi : function(){
//     console.log(`Hi my name is ${this.name}`)
//     }
// }

// person.Hi()

// const arr = [1,2,3]
// const [selectno , setSelectNo] = useState(0)

// const changeColor = (no) =>{
//     setSelectNo(no)
// }

// {arr.map((no)=>{
//     return <div className="part" onMouseOver={() => changeColor(no)}>
//         <div className="one">첫번째 요소입니다</div>
//         <div className="two">두번째 요소입니다</div>
//         </div>
// })}

// var a = {
//     x : {y : 1}
// }

// var copy = {...a}
// console.log(a, copy)

// copy.x = 3
// console.log(a)
// console.log(copy)

// copy.x.y = 5

// console.log(a)
// console.log(copy)

// copy.x = 3
// console.log(a)
// console.log(copy)

// a.x.y = 10
// console.log(a, copy)

// var f = function add(x,y){
//     console.log(x+y)
// }

// add(2,3)
// console.log(add)
// console.log(sub)

// function add(x,y){
//     return x+y
// }

// var sub = function (x,y){
//     return x-y
// }

// let sayHi = function foo(who){
//     if(who){
//         console.log(`hello ${who}`)
//     } else {
//         foo('guest')
//     }
// }

// const welcome = sayHi

// sayHi = null
// welcome()

// let num = 100

// const chageVal = (x)=>{
//     x += 100
//     return x
// }

// let num2 = chageVal(num)

// console.log(num,num2)

// var result = ((x,y) => {return x+y})(2,4)
// console.log(result)

// var count = 0
// var increase = ()=>{
//     return ++count
// }

// var show = increase()
// num = 5
// console.log(count,show,num)

// const func = () => {
//     var x = "hello";
//   console.log(x);

//   var y = "hi";
//   const func2 = () => {
//     console.log(x)
//     console.log(y);
//   };
//   func2();
// };

// func();

// const foo = ()=>{
//     console.log("im global foo")
// }

// const boo = () =>{

//     const foo =()=>{
//         console.log("im local foo")
//     }

//     foo()
// }
// foo()
// boo()

// let x = 1

// if (true) {
//     let x = 10
//     console.log(x) // 10
// }

// console.log(x) // 1

// var x = "global"
// console.log(foo)

// var foo = function () {
//     console.log("x")
// }

// var Counter = (function () {
//   var num = 0;

//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return --num;
//     },
//   };
// })();

// console.log(Counter.increase());
// console.log(Counter.increase())

// console.log(foo)

// Object 생성자 함수

// const person = new Object

// person.name = "woony"
// person.age = 26

// console.log(person)

// const str = new String('woony')
// const str2 = "jenny"
// const str3 = String("honey")
// str.name = "mungyerg"
// console.log(str.name)
// console.log(typeof str)
// console.log(typeof str2)
// console.log(typeof str3)

// const newPerson = new Object();
// newPerson.name = "woony"
// newPerson.age = 26
// newPerson.sayHello = function () {
//     console.log(`Hi, I'm ${this.name} ${this.age}`)
// }

// newPerson.sayHello()

// console.log(str2.length)

// const circle1 = {
//   radius: 5,
//   getDiameter: function () {
//     return 2 * this.radius;
//   }
// };

// console.log(circle1.getDiameter()); // 10

// function Circle (radius) {
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius
//   }
// }

// const circle1 = new Circle(5)
// const circle2 = new Circle(10)

// console.log(circle1.getDiameter());
// console.log(circle2.getDiameter());

// const circle3 = Circle(15)
// console.log(circle3)
// console.log(radius)


// const increase = function (num) {
//   return ++num
// }
// const obj = {increase ,b:2}

// function square(num){
//   return num*num
// }

// console.dir(square)

// function sum () {
//   let res = 0;
//   console.log(res)
//   for(let i = 0; i <arguments.length; i++) {
//       res += arguments[i]
//   }
  
//   return res;
// }

// console.log(sum())
// console.log(sum(1,2))
// console.log(sum(1,2,3))
// console.log(res)

// const circle = {
//   radius : 5, // 반지름
//   getDiameter() {
//     return 2 * this.radius
//   },
  
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// };

// console.log(circle);
// console.log(circle.getArea());

// function Circle (radius) {

//   this.radius = radius;
//   this.Area = function () {
//     return Math.PI * this.radius ** 2
//   }
// }

// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };  

// const circle1 = new Circle(5) //반지름이 5인 인스턴스 생성
// const circle2 = new Circle(10) //반지름이 10인 인스턴스 생성

// // Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// // 프로토타입 Cricle.prototype으로부터 getArea 메서드를 상속받는다.
// // 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.

// console.log(circle1.getArea === circle2.getArea); //true 
// //이제는 같은 메서드를 공유한다.

// console.log(circle1.Area()); 
// console.log(circle2.Area());

// console.log(x)
// console.log(y)

// function foo () {
//   // console.log(x)
//   console.log(y)
//   var y = 20
//   x = 10
// }

// foo()

// console.log(x)
// // console.log(y)
// console.log(x)
// var x = 'global';

// function foo () {
//     console.log(x); // ? => undefined
//     var x = 'local'
// }

// foo();
// console.log(x); // global

// const arr = []
// const fast = {}
// const slow = {}

// arr.push(fast)
// arr.push(slow)

// slow["name"] = "chanWoo"
// fast["name"] = "munkyeong"

// console.log(arr)

// javascript 구조분해 할당 공부하기
// const userid = "happy"
// const age = 26 
// const live = "동작구 상도동"
// const sex = "men"

// const obj = {userid:"kricnt" , age:20 , live:"동작구" , sex:"남자"}
// console.log(obj)

// const { userid ,age ,live ,sex } = obj
// console.log(userid,age,live,sex)

// 중첩되었을 경우 중첩된 위치까지의 구조를 똑같이 그려줘야한다
// 더불어 가장 깊은곳의 내용이 구조분해할당이 된다. 
// const obj2 = {data : {userid2 : "krict"}}
// const { data :{userid2} } =obj2

// console.log(userid2) // krict

// var text = "hell0"
// var text2 = "hell to me"

// var result = text2.includes(text)
// console.log(result)


//중괄호와 return의 관계

// const validator = (value) => value < 5
// console.log(validator(3)) // true 값 출력

// 1. 로직을 중괄호로 감싸주면 "return"을 써준다.

// const add = (x, y) => {
//     return x + y;
// }
  
//   // 2. 화살표 함수 내부에 return문 밖에 없는 경우에는 return문을 줄일 수 있다.
  
//   const addV2 = (x, y) => x + y
  
//   // 3. 2번과 같지만 보기좋게 로직을 소괄호로 감싸줄 수 있다.
  
//   const addV3 = (x, y) => (x + y)
  
//   // 4. 매개변수가 한 개라면 매개변수를 소괄호로 묶지 않을 수 있다.
  
//   const addV4 = x => !x 
//   console.log(addV4(false))

// //ChatGPT 가 짜준 코드
// let randomNumbers = [];

// // Loop 5 times to generate 5 random numbers
// for (let i = 0; i < 5; i++) {
//   // Generate a random number between 1 and 100
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
  
//   // Add the random number to the array
//   randomNumbers.push(randomNumber);
// }

// // Log the array of random numbers to the console
// console.log(randomNumbers);

const obj = {name : "chanwoo", age : 26 , sex : "man"}

const newObj = {...obj , age : 27}

console.log(newObj)