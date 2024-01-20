
const setBudget = document.querySelector(".set-budget"),
    calcTotal = document.querySelector(".calc-total span"),
    checkAmountButton = document.querySelector(".check-amount"),
    submitBudget = document.querySelector(".form-budget"),
    numberExpenses = document.querySelector(".number-expenses"),
    calcExpenses = document.querySelector(".calc-expenses span"),
    nameExpenses = document.querySelector(".product-expenses"),
    submitForm = document.querySelector(".form-expenses"),
    todoList = document.querySelector(".todos-list"),
    calcBalance = document.querySelector(".calc-balance span"),
    numberBudget = document.querySelector(".number-budget");

let tempAmount = 0;




submitBudget.addEventListener("submit" , (e) => {
    e.preventDefault();

    calcTotal.innerText = numberBudget.value;
    calcBalance.innerText = calcTotal.innerText - calcExpenses.innerText;
    numberBudget.value = "";
})


submitForm.addEventListener("submit" , (e) => {
    e.preventDefault();

    disableButton(false);

    let sum = parseInt(calcExpenses.innerText) + parseInt(numberExpenses.value);
    calcExpenses.innerText = sum;
    calcBalance.innerText = parseInt(calcTotal.innerText) - sum;
    createTodos(nameExpenses.value , numberExpenses.value);
    nameExpenses.value = "";
    numberExpenses.value = "";
})

// checkAmountButton.addEventListener("click" , () => {
//     disableButton(false);
//
//     let sum = parseInt(calcExpenses.innerText) + parseInt(numberExpenses.value);
//     calcExpenses.innerText = sum;
//     calcBalance.innerText = parseInt(calcTotal.innerText) - sum;
//     createTodos(nameExpenses.value , numberExpenses.value);
//     nameExpenses.value = "";
//     numberExpenses.value = "";
// })


function disableButton(bool){
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach(e => {
        e.disabled = bool
    });
}

function createTodos(expenseName , expenseValue){
    let todoElement = document.createElement("div");
    todoElement.classList.add("todo-element" , "todo");
    todoList.appendChild(todoElement);
    todoElement.innerHTML = `<p class="name-amount">${expenseName}</p>
                <p class="number-amount">${expenseValue}</p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid" , "fa-pen-to-square" , "edit");
    editButton.addEventListener("click" , () => {
        modifyElement(editButton , true);
    });
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid" , "fa-trash-can" , "delete");
    deleteButton.addEventListener("click" , () => {
        modifyElement(deleteButton);
    });
    todoElement.appendChild(editButton);
    todoElement.appendChild(deleteButton);
    document.getElementById("list").appendChild(todoElement)
}

function modifyElement(element , edit=false){
    let parentDiv = element.parentElement;
    let currentBalance = calcBalance.innerText;
    let currentExpenses = calcExpenses.innerText;
    let parentAmount = parentDiv.querySelector(".number-amount").innerText;
    if (edit){
        nameExpenses.value = parentDiv.querySelector(".name-amount").innerText;
        numberExpenses.value = parentAmount;
        disableButton(true)
    }
    calcBalance.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    calcExpenses.innerText = parseInt(currentExpenses) - parseInt(parentAmount);
    parentDiv.remove();
}


// document.body.addEventListener("click" , (e) => {
//     console.log(e.target)
//     if(e.target.hasAttribute("data-id")){
//         let editButton = document.getElementsByClassName("edit-icon");
//         let deleteButton = document.getElementsByClassName("trash-icon");
//         editButton.addEventListener("click" , () => {
//             modifyElement(editButton , true)
//         })
//
//         deleteButton.addEventListener("click" , () => {
//             modifyElement(deleteButton)
//         })
//     }
// })






// submitBudget.addEventListener("submit", (e) => {
//     e.preventDefault();
//     calcTotal.innerText = numberBudget.value;
//     calcAll()
//     numberBudget.value = ""
// })
//
//
// submitForm.addEventListener("submit", addNewTodo);
//
// // document.addEventListener("DOMContentLoaded" , () => {
// //     todos = getAllTodos();
// //     createTodos(todos)
// // })
//
//
// function calcAll() {
//
//     calcBalance.innerText = calcTotal.innerText - calcExpenses.innerText;
// }
//
// function addNewTodo(e) {
//     e.preventDefault();
//
//     let expenses = parseInt(numberExpenses.value);
//     let sum = parseInt(calcExpenses.innerText) + expenses;
//
//     calcExpenses.innerText = numberExpenses.value
//     calcAll()
//
//     if (!todoName.value || !numberExpenses.value) return;
//
//     const newTodo = {
//         id: Date.now(),
//         title: todoName.value,
//         price: numberExpenses.value
//     }
//
//     todos.push(newTodo)
//     createTodos(todos);
//     // saveTodo(newTodo)
//
//
//     calcExpenses.innerText = sum
//     calcBalance.innerText = calcTotal.innerText - sum
//
// }
//
// function createTodos(todos) {
//     let result = "";
//
//     todos.forEach(todo => {
//         result += `<hr>
//             <table class="todo">
//
//                 <tr>
//
//                     <td class="todo-title">
//
//                         <div class="todo-title-align">
//
//                         <div class="line"></div>
//                         <h4>${todo.title}</h4>
//
//                         </div>
//
//                     </td>
//                     <td class="todo-price">
//                         <span>${todo.price}</span>
//                     </td>
//                     <td class="todo-icons">
//
//                         <button data-id="${todo.id}" class="edit-icon">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                                  stroke="currentColor" class="w-6 h-6">
//                                 <path stroke-linecap="round" stroke-linejoin="round"
//                                       d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
//                             </svg>
//                         </button>
//                         <button data-id="${todo.id}" class="trash-icon">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                                  stroke="currentColor" class="w-6 h-6">
//                                 <path stroke-linecap="round" stroke-linejoin="round"
//                                       d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
//                             </svg>
//                         </button>
//
//                     </td>
//
//                 </tr>
//
//             </table>`
//     })
//
//     todoList.innerHTML = result;
//     numberExpenses.value = "";
//     todoName.value = "";
//
//     const removeBtn = document.querySelectorAll(".trash-icon"),
//
//           editBtn = document.querySelectorAll(".edit-icon");
//
//     removeBtn.forEach(btn => btn.addEventListener("click", removeTodo))
//     editBtn.forEach(btn => btn.addEventListener("click", editTodo))
// }





// function removeTodo(e) {
//     const todoId = Number(e.target.dataset.id);
//     let parentDiv = todos.filter(todo => todo.id !== todoId);
//     let todo = todos.find(todo => todo.id === Number(todoId));
//     calcBalance.innerText = parseInt(calcBalance.innerText) + parseInt(todo.price);
//     calcExpenses.innerText = parseInt(calcExpenses.innerText) - parseInt(todo.price);
//     createTodos(parentDiv)
// }
//
// function editTodo(e, edit = false) {
//     let todoID = e.target.dataset.id;
//     let parentDiv = todos.find(todo => todo.id === Number(todoID));
//     let todo = e.target;
//     todoName.value = parentDiv.title;
//     numberExpenses.value = parentDiv.price;
//     calcBalance.innerText = parseInt(calcBalance.innerText) + parseInt(parentDiv.price);
//     calcExpenses.innerText = parseInt(calcExpenses.innerText) - parseInt(parentDiv.price);
//     todo.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
// }
//
// function getAllTodos() {
//     const saveTodo = JSON.parse(localStorage.getItem("todos")) || [];
//     return saveTodo;
// }
//
// function saveTodo(todo) {
//     const saveTodo = getAllTodos();
//     saveTodo.push(todo);
//     localStorage.setItem("todos", JSON.stringify(saveTodo));
//     return saveTodo
// }
//
// function saveAllTodos(todos) {
//     localStorage.setItem("todos", JSON.stringify(todos))
// }




















// function modifyElement(element , edit=false){
//
//     let parentDiv = element.parentElement,
//         currentBalance = calcBalance.innerText,
//         currentExpenses = calcExpenses.innerText,
//         parentAmount = parentDiv.querySelector(".todo-price span").innerText;
//
//     if (edit){
//         let parentText = parentDiv.querySelector(".todo-title-align h4").innerText;
//         todoName.value = parentText;
//         numberExpenses.value = parentAmount
//     }
//     calcBalance.innerText = parseInt(currentBalance) + parseInt(parentAmount);
//     calcExpenses.innerText = parseInt(currentExpenses) - parseInt(parentAmount);
//     parentDiv.remove();
// }