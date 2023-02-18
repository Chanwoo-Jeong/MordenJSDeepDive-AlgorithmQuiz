// function solution(s, n) {
  
//     let Arr = [...s]
        
//     let resultArr = Arr.map((x)=>{
//         if(x === " ") return " "
//         let originalnumber = x.charCodeAt(0)
//         let secretcodenumber = x.charCodeAt(0) + n //123
//         console.log(originalnumber,secretcodenumber)
//         if(65<=originalnumber<=90 && secretcodenumber<=90) return String.fromCharCode(secretcodenumber)
//         if(65<=originalnumber<=90 && secretcodenumber>90) return String.fromCharCode(65 + n - 1)
//         if(97<=originalnumber<=122 && secretcodenumber<=122) return String.fromCharCode(secretcodenumber)
//         if(97<=originalnumber<=122 && secretcodenumber>122) return String.fromCharCode(65 + n - 1)
        
//         })
//     console.log(resultArr)
//     const a = "A";
//     const b = "a";
//     const c = "Z";
//     const d = "z";
//     console.log(a.charCodeAt(0),c.charCodeAt(0),b.charCodeAt(0),d.charCodeAt(0))
// }

        // let originalnumber = 122
        // let secretcodenumber = 123
        // console.log(originalnumber,secretcodenumber)

    //     const solution = (x,n) =>{
    //         let originalnumber = x.charCodeAt(0)
    //         let secretcodenumber = x.charCodeAt(0) + n //123
    //     if(65<=originalnumber<=90 && secretcodenumber<=90) return String.fromCharCode(secretcodenumber)
    //     if(65<=originalnumber<=90 && secretcodenumber>90) return String.fromCharCode(65 + n - 1)
    //     if(97<=originalnumber<=122 && secretcodenumber<=122) return String.fromCharCode(secretcodenumber)
    //     if(97<=originalnumber<=122 && secretcodenumber>122) return String.fromCharCode(97 + n - 1)
    //     }

    //    console.log(solution(122,123)) 
    //    console.log("A".charCodeAt(0),"Z".charCodeAt(0),"a".charCodeAt(0),"z".charCodeAt(0))

    //    function solution(s, n) {
  
    //     let Arr = [...s]
            
    //     let resultArr = Arr.map((x)=>{
    //         if(x === " ") return " "
    //         let originalnumber = parseInt(x.charCodeAt(0))
    //         let secretcodenumber = parseInt(x.charCodeAt(0) + n) //123
    //         console.log(originalnumber)
    //         if(Number(65)<=Number(originalnumber)<=Number(90)){
    //             if(Number(secretcodenumber) <= Number(90)) return "대문자고정"
    //             return"대문자넘김"
    //         } else if( Number(97)<= Number(originalnumber) <=Number(122) ) {
    //             if(Number(secretcodenumber) <= Number(122)) return "소문자고정"
    //             return"소문자넘김"
    //         }
    //         })
    //     return resultArr
    //    }
    //    const a = solution("z",1)

    //    console.log(a)


//     const solution = (arr, num) => {
//         const results = [];
    
//         // nC1 이며, 1이면 의미 없기때문에 바로 반환한다.
//         if (num === 1) return arr.map(v => [v]);
    
//         arr.forEach((fixed, index, origin) => {
//             // 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
//             const rest = origin.slice(index + 1);
            
//             // 나머지 배열을 기준으로 다시 조합을 실시한다.
//             // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//             const combinations = solution(rest, num - 1);
    
//             // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
//             const attached = combinations.map(v => [fixed, ...v]);
    
//             // 붙인 값을 결과 값에 넣어준다.
//             results.push(...attached);
//         });

//         let Array = results.map(x => x[0] + x[1])
        
//         Array.sort((a,b)=>a-b)
//         let lastArray = Array.filter((x,index)=>{
//             if(x !== Array[index+1]) return x
//         })

//         return lastArray
    
//     }
//    console.log(solution([5,0,2,7],2)) 

// let arr1 = [3]

// function solution(arr) {
//     arr.sort((a,b)=>b-a)
//     if(arr.length === 1) return [-1]
//     let result = arr.filter((x,index)=>index < arr.length-1)
//     return result
    
// }

// console.log(solution(arr1))
// let a = "ZbcdeFg"

// function solution(s) {
//   console.log(s.split('').sort().reverse().join())
// }

// console.log(solution(a))

// console.log(a[0])

let arr = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
let num = 3

function solution(n, words) {

    let word = null
    let firstAl = null
    let lastAl = null
    let nextWord = null
    let nextWordAl =null
    
    for(let i =0 ; i <words.length ; i++){
         word = words[i]
         firstAl = word[0]
         lastAl = word[word.length-1]
         nextWord = words[i+1] + ""
         nextWordAl = nextWord[0]
         console.log(nextWordAl)
        if(lastAl !== nextWordAl) break;
        
    }
    console.log(nextWord)
    
    console.log("[0,0]")
}

solution(num,arr)


function solution(n, words) {

    let word = null
    let firstAl = null
    let lastAl = null
    let nextWord = null
    let nextWordAl =null
    let dupYn = null
    let index = null
    let i =0
    let j =0
    
    for(i ; i <words.length ; i++){
         word = words[i]
         firstAl = word[0]
         lastAl = word[word.length-1]
         nextWord = words[i+1] + ""
         nextWordAl = nextWord[0]
    
        if(lastAl !== nextWordAl) break;
        
        for( j = i+1; j < words.length; j++) {
            if(word === words[j]) {
                console.log(word,words[j])
                index = j
                console.log(index)
              dupYn = true;
              break;
            }
        }
        
        if(dupYn){
            console.log((index+1)%n)
            return [ (index+1)%n===0?n:index%n , parseInt((index+1)/n) ]
            break
        }
    }
     
    return [  i+1 === words.length ? 0 : (i+2)%n===0?n:(i+2)%n ,  i+1 === words.length ? 0 : i]
    
}