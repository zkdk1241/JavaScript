const nums = [3,1,8,6];
const nums2 = [3, 1, 11, 8, 6];
console.log(nums2.sort((a , b) => {
    console.log(a, b)
}))
// 실무사용코드
function sort(key){
  if (click){
      click = false
      var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  else{
      click = true
      var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}