const arr = [1,2,3,4,5]
arr[0] = 100

console.log(arr)
const a = 10
const b=[10,20,30]

const c = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const d = [
  [[1,2,],  [1,2,],  [1,2,]],
  [[1,2,],  [1,2,],  [1,2,]],
  [[1,2,],  [1,2,],  [1,2,]]
]

// push
const arr = [1, 2, 3];
arr.push(4)

// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`          
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')
const arr = [1, 2, 3, 4, 5]
arr.pop() 
// 1. 마지막에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5]
let lastValue = arr.pop()
arr

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2); 

let firstValue = myArray2.shift();
firstValue
// 사과

//[...tip1].pop()는 tip1에 영향없음 console.log(tip2.pop());은 tip2에 영향있음
let tip1 = [1,2,3,4,5]
console.log([...tip1].pop());
let tip2 = [...tip1]
console.log(tip2.pop());
console.log(tip2);




Math.max(...x.flat())

const y = [
  [[1,2,],  [1,2,],  [1,2,]],
  [[1,2,],  [1,2,],  [1,2,]],
  [[1,2,],  [1,2,],  [1,2,]]
]

Math.max(...y.flat())

tip7= new Array(10).fill(8)
//(10) [8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
tip8 = Array.from('hello world')
//(11) ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

const tip9 = Array(100).fill(0).map()

const arr = [1,2,3]
arr.splice(1,0,4)

const arr = [1,2,3]
arr.splice(1,0, [10,20,30])

const arr = [10,20,30,40,50]
const x = [1,2,3]

arr.splice(1,0,4)

arr.splice(1,0,...x)
arr.splice(6,0,...x)

// slice는 원본안건들임 splice는 원본 건들임


const myArray = ['aaa', 'bbb', 'ccc']
console.log(myArray.slice(1,4));

let tip10 = [1,2,3,4,5];
let new1 = [];
tip10.forEach((item, index)=>new1.push(index+1))
console.log([tip9.slice(0,2), 1000, tip10.slice(2,5)])

//***  ...  은 값에 영향 x ...없으면 값 자체에 영향 */
let a1 = new Array(100).fill(8)

const arr = [1,2,3]
arr.map(x=>x**2)


const arr = Array(100).fill(0)
arr.map((v,i)=>i)

// forEach 는 행위고
// map는 새로운 배열 생성

const tip12 = Array(100).fill(0).map((v,i)=>i+1)

const tip13 = [
  {
    "_id": "642ba3980785cecff3f39a8d",
    "index": 0,
    "age": 28,
    "eyeColor": "green",
    "name": "Annette Middleton",
    "gender": "female",
    "company": "KINETICA"
  },
  {
    "_id": "642ba398d0fed6e17f2f50c9",
    "index": 1,
    "age": 37,
    "eyeColor": "green",
    "name": "Kidd Roman",
    "gender": "male",
    "company": "AUSTECH"
  },
  {
    "_id": "642ba39827d809511d00dd8d",
    "index": 2,
    "age": 39,
    "eyeColor": "brown",
    "name": "Best Ratliff",
    "gender": "male",
    "company": "PRISMATIC"
  }
]


