const todolist = [];

rendertodolist();

function rendertodolist() {
    let todolistHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        
        const { name, duedate } = todoObject;
        
        const HTML = `
    <div>${name}</div>
    <div>${duedate}</div>
    <button onclick="
    todolist.splice(${i},1)
    rendertodolist();
    " class="delete-todo-btn">Delete</button>
    `;
        todolistHTML += HTML;
    }
    
    document.querySelector('.js-todolist').innerHTML = todolistHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const datetodoinputelement = document.querySelector('.js-todo-date-input');
    const duedate = datetodoinputelement.value;

    todolist.push({
        // name:name,
        // duedate:duedate
        name,
        duedate
    });
    console.log(todolist);

    inputElement.value = '';
    datetodoinputelement.value='';
    rendertodolist();
}