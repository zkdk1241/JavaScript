function one(a,b){
  let z = a+b;
  return z ** 2;

}

console.log(one(7,3))
console.log(one(7,3))

function three(a,b,c){
  rlt = c(a,b) + c(a,b)
  return rlt; 
}

const human = {
  name:"seojin",
  age:53,
  from: "korea",
  askingHim: function(){
    console.log("helloworld");
  },
}
human.name = 'jun'
human.name //jun
human.askingHim()//helloworld
delete human.job
