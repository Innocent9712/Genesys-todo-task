const inputField = document.getElementById('input-field')
const inputButton  = document.getElementById('input-button')
const todoContainer = document.querySelector('.todo-container')



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

const delFunc = (e) => {
    let tagId = e.path[1].id
    let tag = document.getElementById(`${tagId}`)
    console.log(tag)
    todoContainer.removeChild(tag)
    for (let index = 0; index < todoItems.length; index++) {
        const element = todoItems[index];
        if (tagId == element.id) {
            todoItems.splice(index, 1)
            console.log(todoItems)
        }
        
    }
}

const populateUi = (item) => {
    if (item) {
        const edit = document.createElement('button')
        const del = document.createElement('button')
        const itemText = document.createElement('p')
        const todoItem = document.createElement('li')


        itemText.classList.add('item-text')
        edit.classList.add('edit')
        del.classList.add('del')

        edit.innerHTML = 'edit'
        del.innerHTML = 'del'


        todoItem.setAttribute('id', item.id)
        itemText.innerHTML = item.todo
        todoItem.appendChild(itemText)
        todoItem.appendChild(edit)
        todoItem.appendChild(del)
        todoContainer.appendChild(todoItem)

        del.addEventListener('click', (e)=> {
            delFunc(e)
        })

        edit.addEventListener('click', (e)=>{
            let itemToEditId = e.path[1].id
            let itemToEdit = document.getElementById(`${itemToEditId}`).firstChild
            inputField.value = itemToEdit.innerHTML
            delFunc(e)
            
        })
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

