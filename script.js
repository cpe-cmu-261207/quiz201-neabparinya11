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
  Event.stop(ev);
}

// more codes for Search and Reset buttons here
