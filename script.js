
let counter = 0;

function handleOnAdd() {
    let inputElement = document.getElementById("input-todo")
    let inputValue = inputElement.value

    let todosContainer = document.getElementById("todolist-container")
    
    todosContainer.innerHTML += renderTodoItem(counter, inputValue)
    counter++
    inputElement.value = ''
    
}

function handleOnChecked(element) {

    let labelElement = document.querySelector(`label[for="${element.id}"]`)

    if (element.checked) {
        labelElement.classList.add('coret')
    } else {
        labelElement.classList.remove('coret')
    }
}

function handleOnChangeSelect(element) {
    let dipilihElement = document.getElementById("dipilih")
    dipilihElement.innerHTML = `<div>${element.value}</div>`
}

function handleOnDelete() {
    
}

function renderTodoItem(id, value) {
    return `
    <div id="todo-container-${id}" class="flex todo-container">
        <div class="flex gap-5 width-l">
            <div>
                <input 
                    id="${id}" 
                    type="checkbox" 
                    name="todo${id}" 
                    value="${value}"
                    onchange=handleOnChecked(this)
                />
            </div>
            <div class="width-lg multiline">
                <label for="${id}">${value}</label>
            </div>
        </div>
        <div class="width-xs gap-5 flex justify-end">
            <span>
                <img 
                    data-id=${id}
                    class="icon" 
                    src="./assets/delete.png" 
                    alt="delete" 
                    width="16px" 
                    height="16px" 
                />
            </span>
        </div>        
    </div>
    `
}