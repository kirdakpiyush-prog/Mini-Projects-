const todoList = [];
function addtodo(){
 const inputElement =document.querySelector(`.js-name-input`);
 const name = inputElement.value;
 const duedate=document.querySelector(`.due-date`);
 const date = duedate.value;
 const inputtime = document.querySelector(`.time`);
 const time= inputtime.value;
 todoList.push({
  name:name,
  duedate:date,
  duetime:time,
 });
 inputElement.value = ``;
 duedate.value=``;
 inputtime.value=``;
 renderTodoList();
}
function renderTodoList(){
let  todoListHtml=``;
todoList.forEach(function(todoObject,index){
  if(value ===`wash dishes`){
    return;
  }
const todo = todoList[index];
const html = `<p>
${todo.name}-${todo.duedate}-${todo.duetime}</p>
<button onclick="
todoList.splice(${index},1)
renderTodoList();">
  Delete
</button>
</p>`; //generating html
todoListHtml+=html;
})
//   for(let i=0;i<todoList.length;i++){
// const todo = todoList[i];
// const html = `<p>
// ${todo.name}-${todo.duedate}-${todo.duetime}</p>
// <button onclick="
// todoList.splice(${i},1)
// renderTodoList();">
//   Delete
// </button>
// </p>`; //generating html
// todoListHtml+=html;
//   }
document.querySelector(`.js-todo-list`).innerHTML = todoListHtml;
}
