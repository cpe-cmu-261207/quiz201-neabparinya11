const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
let onclick = false;
btn_toggle.onclick = (ev) => {
  // your code here
  author.innerHTML = "630612104"
  ev.preventDefault();
}


// more codes for Search and Reset buttons here
//console.log(length.value)

const data = [];
const btns = document.getElementById('search')
const text = document.querySelector('#text')
btns.onclick=()=>{
  console.log(text.innerHTML)
  console.log(text.textContent.split(5))
}