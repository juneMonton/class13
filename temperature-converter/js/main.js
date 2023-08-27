//Write your pseduo code first! 

//0->32

//need the value that is in celsius

//convert from celsius to fahrenheight

//show it

document.querySelector('#convert').addEventListener('click',convert)

function convert(){
    //need the value that is in celsius
let temp=document.querySelector('#tempInCelsius').value
//convert from celsius to fahrenheight
temp=temp * 9/5 + 32
//show it
document.querySelector('#fahrenheit').innerText=temp

document.querySelector('#flabel').innerText="fahrenheit"
}