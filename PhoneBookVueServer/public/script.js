"use strict";

class ContactsService {
    static baseUrl = "/api/contact";

    deleteContact(id) {
        return axios.delete(ContactsService.baseUrl + "/" + id)
            .then(response => response.data);
    }

    addContact(contact) {
        return axios.post(ContactsService.baseUrl, contact)
            .then(response => response.data);
    }

    getContacts(term) {
        return axios.get(ContactsService.baseUrl, {params: {term}})
            .then(response => response.data);
    }

    editContact(id, contact) {
        return axios.put(ContactsService.baseUrl + "/" + id, contact)
            .then(response => response.data);
    }
}

Vue.createApp({
    data() {
        return {
            contacts: [],
            name: "",
            surname: "",
            phone: "",
            searchText: "",

            isNameInvalid: false,
            isSurnameInvalid: false,
            isPhoneInvalid: false,

            service: new ContactsService()
        };
    },

    created() {
        this.getContacts();
    },

    methods: {
        deleteContact(contact) {
            this.service.deleteContact(contact.id).then(response => {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                this.getContacts();
            }).catch(() => alert("Ошибка при удалении контакта"));
        },

        addContact() {
            this.isNameInvalid = false;
            this.isSurnameInvalid = false;
            this.isPhoneInvalid = false;

            const contact = {
                name: this.name.trim(),
                surname: this.surname.trim(),
                phone: this.phone.trim()
            };

            let hasInvalidFields = false;

            if (!contact.name) {
                this.isNameInvalid = true;
                hasInvalidFields = true;
            }

            if (!contact.surname) {
                this.isSurnameInvalid = true;
                hasInvalidFields = true;
            }

            if (!contact.phone) {
                this.isPhoneInvalid = true;
                hasInvalidFields = true;
            }

            if (hasInvalidFields) {
                return;
            }

            this.service.addContact(contact).then(response => {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                this.getContacts();
                this.name = "";
                this.surname = "";
                this.phone = "";
            }).catch(() => alert("Ошибка при создании контакта"));
        },

        getContacts() {
            this.service.getContacts(this.searchText).then(contacts => {
                this.contacts = contacts.map(c => ({
                    ...c,
                    isEditing: false,
                    editName: "",
                    editSurname: "",
                    editPhone: "",
                    isEditNameInvalid: false,
                    isEditSurnameInvalid: false,
                    isEditPhoneInvalid: false
                }));
            }).catch(() => alert("Ошибка при загрузке списка контактов"));
        },

        startEditing(contact) {
            contact.editName = contact.name;
            contact.editSurname = contact.surname;
            contact.editPhone = contact.phone;

            contact.isEditNameInvalid = false;
            contact.isEditSurnameInvalid = false;
            contact.isEditPhoneInvalid = false;

            contact.isEditing = true;
        },

        saveContact(contact) {
            contact.isEditNameInvalid = false;
            contact.isEditSurnameInvalid = false;
            contact.isEditPhoneInvalid = false;

            const editContact = {
                editName: contact.editName.trim(),
                editSurname: contact.editSurname.trim(),
                editPhone: contact.editPhone.trim()
            };

            let hasInvalidFields = false;

            if (!editContact.editName) {
                contact.isEditNameInvalid = true;
                hasInvalidFields = true;
            }

            if (!editContact.editSurname) {
                contact.isEditSurnameInvalid = true;
                hasInvalidFields = true;
            }

            if (!editContact.editPhone) {
                contact.isEditPhoneInvalid = true;
                hasInvalidFields = true;
            }

            if (hasInvalidFields) {
                return;
            }

            this.service.editContact(contact.id, editContact).then(response => {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                contact.name = editContact.editName;
                contact.surname = editContact.editSurname;
                contact.phone = editContact.editPhone;
                contact.isEditing = false;
            }).catch(() => alert("Ошибка при сохранении изменений"));
        },

        cancelEditing(contact) {
            contact.isEditing = false;
        }
    }
}).mount("#app");