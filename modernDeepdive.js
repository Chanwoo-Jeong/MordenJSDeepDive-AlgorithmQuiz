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

let x = 1

if (true) { 
    let x = 10
    console.log(x) // 10
}

console.log(x) // 1