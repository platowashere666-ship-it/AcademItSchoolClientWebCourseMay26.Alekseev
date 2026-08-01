"use strict";

$(function () {
    const tableBody = $("#phonebook-body");
    const form = $("#new-contact-form");
    const newContactSurname = $("#new-contact-surname");
    const newContactName = $("#new-contact-name");
    const newContactPhoneNumber = $("#new-contact-phone-number");

    function validateFieldValue(field) {
        field.removeClass("is-invalid");

        const fieldValue = field.val().trim();

        if (fieldValue.length === 0) {
            field.addClass("is-invalid");
            return null;
        }

        return fieldValue;
    }

    function updateRowsNumbers() {
        tableBody.find("tr").each(function (index) {
            $(this).find(".row-number").text(index + 1);
        });
    }

    form.on("submit", function (e) {
        e.preventDefault();

        const newContactSurnameValue = validateFieldValue(newContactSurname);
        const newContactNameValue = validateFieldValue(newContactName);
        const newContactPhoneNumberValue = validateFieldValue(newContactPhoneNumber);

        if (newContactSurnameValue === null || newContactNameValue === null || newContactPhoneNumberValue === null) {
            return;
        }

        const newContactRow = $("<tr>");

        function setViewMode(surname, name, phoneNumber) {
            newContactRow.html(`
                <th scope="row" class="row-number"></th>
                <td class="new-contact-surname"></td>
                <td class="new-contact-name"></td>
                <td class="new-contact-phone-number"></td>
                <td>
                    <button class="btn btn-sm btn-warning edit-button" title="Редактировать" type="button">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger delete-button" title="Удалить" type="button">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `);

            newContactRow.find(".new-contact-surname").text(surname);
            newContactRow.find(".new-contact-name").text(name);
            newContactRow.find(".new-contact-phone-number").text(phoneNumber);

            newContactRow.find(".edit-button").on("click", function () {
                const currentRowNumber = newContactRow.find(".row-number").text();

                newContactRow.html(`
                    <th scope="row" class="row-number">${currentRowNumber}</th>
            
                    <td>
                        <input class="form-control edit-contact-surname" type="text" placeholder="Фамилия">
                        <div class="invalid-feedback">Необходимо заполнить поле "Фамилия"</div>
                    </td>
            
                    <td>
                        <input class="form-control edit-contact-name" type="text" placeholder="Имя">
                        <div class="invalid-feedback">Необходимо заполнить поле "Имя"</div>
                    </td>
            
                    <td>
                        <input class="form-control edit-contact-phone-number" type="tel" placeholder="Номер телефона">
                        <div class="invalid-feedback">Необходимо заполнить поле "Номер телефона"</div>
                    </td>
            
                    <td>
                        <button class="btn btn-sm btn-success save-button" title="Сохранить" type="button">
                            <i class="bi bi-check-lg"></i>
                        </button>
                        <button class="btn btn-sm btn-secondary cancel-button" title="Отменить" type="button">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </td>
                `);

                newContactRow.find(".edit-contact-surname").val(surname);
                newContactRow.find(".edit-contact-name").val(name);
                newContactRow.find(".edit-contact-phone-number").val(phoneNumber);

                newContactRow.find(".cancel-button").on("click", function () {
                    setViewMode(surname, name, phoneNumber);
                    updateRowsNumbers();
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

                    setViewMode(editContactSurnameValue, editContactNameValue, editContactPhoneNumberValue);
                    updateRowsNumbers();
                });
            });

            newContactRow.find(".delete-button").on("click", function () {
                newContactRow.remove();
                updateRowsNumbers();
            });
        }

        setViewMode(newContactSurnameValue, newContactNameValue, newContactPhoneNumberValue);
        tableBody.append(newContactRow);
        updateRowsNumbers();

        form[0].reset();
    });
});