const inputField = document.getElementById('input-field')
const inputButton  = document.getElementById('input-button')
const todoContainer = document.querySelector('.todo-container')
const form = document.querySelector('.form')
const remove = document.querySelector('.del')
const update = doc.querySelector('.edit')
const done = document.getElementById('done')
const editItem = document.getElementById('edit-item')

let todoItems = []

const addTodo = (input) => {
    let inputValue = input.value
    if (inputValue != '') {
        let todoObj = {
            id: Date.now(),
            todo: inputValue
        }
        todoItems.push(todoObj)
        console.log(todoItems)
        inputField.value = ''
        return todoItems[todoItems.length-1]
    } else {
        console.log(`enter a valid input`)
    }
}

const populateUi = (item) => {
    if (item) {
        let todoItem = document.createElement('li')
        let itemText = document.createElement('p')
        let edit = document.createElement('button')
        let del = document.createElement('button')
        let buttonContainer = document.createElement('div')
        todoItem.setAttribute('id', item.id)
        itemText.innerHTML = item.todo
        edit.innerHTML = 'edit'
        del.innerHTML = 'del'
        itemText.classList.add('item-text')
        edit.classList.add('edit')
        del.classList.add('del')
        buttonContainer.appendChild(edit)
        buttonContainer.appendChild(del)
        todoItem.appendChild(itemText)
        todoItem.appendChild(buttonContainer)
        todoContainer.appendChild(todoItem)
    }
}

inputButton.addEventListener('click', (e)=>{
    populateUi(addTodo(inputField))
})

document.addEventListener('keydown', (e)=> {
    if (inputField === document.activeElement && e.keyCode == '13') {
    populateUi(addTodo(inputField))
    }
})

remove.addEventListener('click', ()=>{

})

edit.addEventListener('click', ()=> {
    
})

done.addEventListener('click', ()=> {

})
