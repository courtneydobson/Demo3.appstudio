let name = "Mary"
let names = ["Mary","Bob","Joey"]


btnShowMessage.onclick=function(){
console.log("I really enjoy " + names[1])
alert(`The first person in the array is ${names[0]}`)
  lblMessage.textContent = "I really enjoy" + names[1]
}
