const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

let num = false;
const data1 = '630612104 PARINYA MUANGROD';
const data2 = '630612104'
// define more constants and variables here
btn_toggle.onclick = () => {
  // your code here
  if(num==false){
    author.innerHTML = '630612104'
    btn_toggle.innerHTML = 'Show Author'
    num=true;
  }else if(num==true){
    author.innerHTML = '630612104 PARINYA MUANGROD'
    btn_toggle.innerHTML = 'Show Calculation'
    num=false;
  }
}

// more codes for Search and Reset buttons here
//console.log(length.value)

const btns = document.getElementById('search')
const text = document.querySelector('#text')
btns.onclick=()=>{
  text.innerHTML = highlight()
}

const btnre = document.querySelector('#reset')
btnre.onclick=()=>{
  text.innerHTML=reset()
}

function highlight(){
  let output = "";
  const data = text.textContent.split(" ");
  let replace = "";
  for(let i=0;i<data.length;i++){
    let word = data[i];
    if(word.length>length.value){
      replace = "<span style='color:"+color.value+"'>"+word+"</span>"
    }else{
      replace = word;
    }
    output = output+" "+replace+" "; 
  }
  return output
}

function reset(){
  let output = "";
  const data = text.textContent.split(" ");
  let replace = "";
  for(let i=0;i<data.length;i++){
    let word = data[i];
    if(word.length>length.value){
      replace = "<span style='color:#000'>"+word+"</span>"
    }else{
      replace = word;
    }
    output = output+" "+replace+" "; 
  }
  return output
}