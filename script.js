const body=document.getElementsByTagName("body")[0]


const btn=document.getElementById("send");
const input=document.getElementById("input");
const son=document.getElementById("son");
const plus=document.getElementById("plus");
const inputcolor=document.getElementById("rang");

btn.addEventListener("click",()=>{
    son.textContent=input.value;
})

plus.addEventListener("click",()=>{
    son.textContent=+son.textContent+1;
})
minus.addEventListener("click",()=>{
    son.textContent=+son.textContent-1;
})
rang.addEventListener("input",()=>{
    son.style.color=rang.value;
})
