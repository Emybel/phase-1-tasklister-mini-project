document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo(e.target.task.value);
    form.reset();
  })
});

function addToDo(todo){

  //* Create the list items with the delate button
  let li = document.createElement("li");
  let btn = document.createElement("button");

  //* Add EventLinstener to delete button with handleDelete callback function
  btn.addEventListener('click', handleDelete);
  btn.textContent = "x";
  li.textContent = ` ${ todo} ` ;
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li);

}

function handleDelete(e){
  e.target.parentNode.remove()
}
