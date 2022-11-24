// var n=require("readline-sync");
// const num=n.question("enter the number:")
// let i=1
// var count=0
// while (i<=num){
//     if (num%i==0){
//     count+=1
//     }
//     i=i+1
// }
// if (count==2){
//     console.log("prim e number")
// }
// else{
//     console.log("not prime number")
// }



let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);