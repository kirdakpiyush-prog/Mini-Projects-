let count=0;
function increase(){
   count++;
  let Increase=document.querySelector(`.js-count`).innerText=count;
 
}
function decrease(){
   count--;
  let Decrease=document.querySelector(`.js-count`).innerText=count;
}
function reset(){
  count=0;
  let Decrease=document.querySelector(`.js-count`).innerText=count;
}