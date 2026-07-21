"use strict";

Vue.createApp({
    data() {
        return {
            newTodoItemText: "",
            isNewTodoItemTextInvalid: false,
            items: [],
            currentItemId: 1,
            confirmDeleteDialog: null,
            todoItemToDelete: null
        };
    },

    mounted() {
        const modal = this.$refs.confirmDeleteDialog;
        this.confirmDeleteDialog = new bootstrap.Modal(modal, {});
    },

    methods: {
        addTodoItem() {
            this.isNewTodoItemTextInvalid = false;

            const newTodoItemText = this.newTodoItemText;

            if (newTodoItemText.length === 0) {
                this.isNewTodoItemTextInvalid = true;
                return;
            }

            this.items.push({
                id: this.currentItemId,
                text: newTodoItemText,
                isEditing: false,
                editingTodoItemText: ""
            });

            ++this.currentItemId;

            this.newTodoItemText = "";
        },

        showRemoveTodoItemDialog(item) {
            this.todoItemToDelete = item;
            this.confirmDeleteDialog.show();
        },

        removeTodoItem() {
            this.items = this.items.filter(x => x !== this.todoItemToDelete);
            this.confirmDeleteDialog.hide();
        },

        startEditing(item) {
            item.editingTodoItemText = item.text;
            item.isEditing = true;
            item.isEditTodoItemTextInvalid = false;
        },

        saveTodoItem(item) {
            if (item.editingTodoItemText.length === 0) {
                item.isEditTodoItemTextInvalid = true;
                return;
            }

            item.text = item.editingTodoItemText;
            item.isEditing = false;
        }
    }
}).mount("#app");