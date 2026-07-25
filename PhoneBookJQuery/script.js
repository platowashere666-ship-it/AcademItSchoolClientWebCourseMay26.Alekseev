"use strict";

$(function () {
    const tableBody = $("#phonebook-body");
    const form = $("#new-contact-form");
    const newContactSurname = $("#new-contact-surname");
    const newContactName = $("#new-contact-name");
    const newContactPhoneNumber = $("#new-contact-phone-number");

    let currentContactId = 1;

    function validateFieldValue(field) {
        field.removeClass("is-invalid");

        const fieldValue = field.val().trim();

        if (fieldValue.length === 0) {
            field.addClass("is-invalid");
            return null;
        } else {
            return fieldValue;
        }
    }

    form.on("submit", function (e) {
        e.preventDefault();

        let newContactSurnameValue = validateFieldValue(newContactSurname);
        let newContactNameValue = validateFieldValue(newContactName);
        let newContactPhoneNumberValue = validateFieldValue(newContactPhoneNumber);

        if (newContactSurnameValue === null || newContactNameValue === null || newContactPhoneNumberValue === null) {
            return;
        }

        const newContactRow = $("<tr>");

        function setViewMode() {
            const newContactId = newContactRow.data('new-contact-id') || currentContactId;

            newContactRow.html(`
                <th scope="row" class="new-contact-id">${newContactId}</th>
                <td class="new-contact-surname"></td>
                <td class="new-contact-name"></td>
                <td class="new-contact-phone-number"></td>
                <td>
                    <button class="btn btn-sm btn-warning edit-button" type="button">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger delete-button" type="button">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `);

            newContactRow.data('new-contact-id', newContactId);

            newContactRow.find(".new-contact-surname").text(newContactSurnameValue);
            newContactRow.find(".new-contact-name").text(newContactNameValue);
            newContactRow.find(".new-contact-phone-number").text(newContactPhoneNumberValue);

            newContactRow.find(".edit-button").on("click", function () {
                const editContactId = newContactRow.data("new-contact-id");

                newContactRow.html(`
                    <th scope="row" class="edit-contact-id">${editContactId}</th>
            
                    <td>
                        <input class="form-control edit-contact-surname" type="text" placeholder="Иван">
                        <div class="invalid-feedback">Необходимо заполнить поле "Фамилия"</div>
                    </td>
            
                    <td>
                        <input class="form-control edit-contact-name" type="text" placeholder="Иванов">
                        <div class="invalid-feedback">Необходимо заполнить поле "Имя"</div>
                    </td>
            
                    <td>
                        <input class="form-control edit-contact-phone-number" type="tel" placeholder="+7__________">
                        <div class="invalid-feedback">Необходимо заполнить поле "Номер телефона"</div>
                    </td>
            
                    <td>
                        <button class="btn btn-sm btn-success save-button" type="button">
                            <i class="bi bi-check-lg"></i>
                        </button>
                        <button class="btn btn-sm btn-secondary cancel-button" type="button">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </td>
                `);

                newContactRow.find(".edit-contact-surname").val(newContactSurnameValue);
                newContactRow.find(".edit-contact-name").val(newContactNameValue);
                newContactRow.find(".edit-contact-phone-number").val(newContactPhoneNumberValue);

                newContactRow.find(".cancel-button").on("click", function () {
                    setViewMode();
                });

                newContactRow.find(".save-button").on("click", function () {
                    const editContactSurname = newContactRow.find(".edit-contact-surname");
                    const editContactName = newContactRow.find(".edit-contact-name");
                    const editContactPhoneNumber = newContactRow.find(".edit-contact-phone-number");

                    const editContactSurnameValue = validateFieldValue(editContactSurname);
                    const editContactNameValue = validateFieldValue(editContactName);
                    const editContactPhoneNumberValue = validateFieldValue(editContactPhoneNumber);

                    if (editContactSurnameValue === null || editContactNameValue === null || editContactPhoneNumberValue === null) {
                        return;
                    }

                    newContactSurnameValue = editContactSurnameValue;
                    newContactNameValue = editContactNameValue;
                    newContactPhoneNumberValue = editContactPhoneNumberValue;

                    setViewMode();
                });
            });

            newContactRow.find(".delete-button").on("click", function () {
                newContactRow.remove();
            });
        }

        setViewMode();
        tableBody.append(newContactRow);

        form[0].reset();
        ++currentContactId;
    });
});