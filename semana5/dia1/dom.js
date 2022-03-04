const inputs = document.getElementsByTagName("input");
const newInputs = Array.from(inputs);
console.log("inputs",inputs);
console.log("NewImputs",newInputs);
newInputs.map((newInput)=>{
    console.log("newInput con map", newInput);
})
const form = document.getElementsByTagName("form");

const button = document.getElementsByTagName("button");

const divContent = document.getElementsByTagName("div");
console.log("DivContent", divContent);
const newDivContent = Array.from(divContent);
console.log(newDivContent);
newDivContent.forEach((element) => {  
  console.log(element);
});

const inputEmail = document.getElementById("input_email");
console.log(inputEmail.value);

const inputPassword = document.getElementById("input_password");
console.log(inputPassword.value);
inputPassword.style.backgroundColor="#000";
inputPassword.style.color="#fff"

const inputsName = document.getElementsByClassName("input_name");
console.log(inputsName);
const newInputsName = Array.from(inputsName);
newInputsName.forEach((input) => {
  console.log(input.value);
});
