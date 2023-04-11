const arr = [1,2,3,4,5,6,7,8,9,10]
arr.filter(function(el){
  return el%2 != 0
})

function solution(n) {
  return Array(n)
      .fill()//
      .map((_, i)=>i+1)
      .filter((v)=>v%2==0)
      .reduce((a,c) => a+c, 0)
}

Array.from('Hello World').filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v))

const arr1 = ['hello', 'world', 'hojun']
arr1.join('!')

const arr2 = ['010', '7751', '1241']
