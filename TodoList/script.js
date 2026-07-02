"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("new-todo-form");
    const newTodoItemTextField = document.getElementById("new-todo-item-text-field");
    const todoList = document.getElementById("todo-list");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        newTodoItemTextField.classList.remove("invalid");

        let newTodoItemText = newTodoItemTextField.value.trim();

        if (newTodoItemText.length === 0) {
            newTodoItemTextField.classList.add("invalid");
            return;
        }

        const todoItem = document.createElement("li");

        function setViewMode() {
            todoItem.innerHTML = `
                <span class="todo-item-text"></span>
                <button class="edit-button" type="button">Редактировать</button>
                <button class="delete-button" type="button">Удалить</button> 
            `;

            todoItem.querySelector(".todo-item-text").textContent = newTodoItemText;

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                todoItem.innerHTML = `
                    <form class="edit-todo-form">
                        <div class="edit-field-wrapper">
                            <input class="edit-todo-item-text-field" type="text">
                            <div class="edit-error-message">Необходимо заполнить поле</div>
                        </div>
                        
                        <button class="save-button">Сохранить</button>
                        
                        <button class="cancel-button" type="button">Отменить</button>  
                    </form>
                `

                const editTodoItemTextField = todoItem.querySelector(".edit-todo-item-text-field");

                editTodoItemTextField.value = newTodoItemText;

                todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                todoItem.querySelector(".edit-todo-form").addEventListener("submit", function (e) {
                    e.preventDefault();

                    editTodoItemTextField.classList.remove("invalid");

                    const editTodoItemText = editTodoItemTextField.value.trim();

                    if (editTodoItemText.length === 0) {
                        editTodoItemTextField.classList.add("invalid");
                        return;
                    }

                    newTodoItemText = editTodoItemText;
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.appendChild(todoItem);

        newTodoItemTextField.value = "";
    });
});