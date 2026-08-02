const express = require("express");
const router = express.Router();

let contacts = [];
let currentContactId = 1;

router.get("/api/contact", function (req, res) {
    const term = (req.query.term || "").toUpperCase();

    if (term.length === 0) {
        res.send(contacts);
    } else {
        res.send(contacts.filter(c =>
            c.name.toUpperCase().includes(term) ||
            c.phone.toUpperCase().includes(term) ||
            c.surname.toUpperCase().includes(term)
        ));
    }
});

router.post("/api/contact", function (req, res) {
    const name = (req.body.name || "").trim();
    const phone = (req.body.phone || "").trim();
    const surname = (req.body.surname || "").trim();

    if (!name) {
        res.send({
            success: false,
            message: "Необходимо заполнить поле \"Имя\""
        });

        return;
    }

    if (!surname) {
        res.send({
            success: false,
            message: "Необходимо заполнить поле \"Фамилия\""
        });

        return;
    }

    if (!phone) {
        res.send({
            success: false,
            message: "Необходимо заполнить поле \"Телефон\""
        });

        return;
    }

    const phoneInUpperCase = phone.toUpperCase();

    if (contacts.some(c => c.phone.toUpperCase() === phoneInUpperCase)) {
        res.send({
            success: false,
            message: "Уже есть контакт с таким номером телефона"
        });

        return;
    }

    contacts.push({
        id: currentContactId,
        name,
        phone,
        surname
    });

    ++currentContactId;

    res.send({
        success: true,
        message: null
    });
});

router.put("/api/contact/:id", function (req, res) {
    const editName = (req.body.editName || "").trim();
    const editPhone = (req.body.editPhone || "").trim();
    const editSurname = (req.body.editSurname || "").trim();

    if (!editName) {
        res.send({
            success: false,
            message: "Необходимо заполнить поле \"Имя\""
        });

        return;
    }

    if (!editSurname) {
        res.send({
            success: false,
            message: "Необходимо заполнить поле \"Фамилия\""
        });

        return;
    }

    if (!editPhone) {
        res.send({
            success: false,
            message: "Необходимо заполнить поле \"Телефон\""
        });

        return;
    }

    const idParam = req.params.id;

    if (!idParam) {
        res.send({
            success: false,
            message: "Необходимо указать id контакта"
        });

        return;
    }

    const id = Number(idParam);
    const contact = contacts.find(c => c.id === id);

    if (!contact) {
        res.send({
            success: false,
            message: "Указанный id не найден"
        });

        return;
    }

    const editPhoneInUpperCase = editPhone.toUpperCase();

    if (contacts.some(c => c.id !== id && c.phone.toUpperCase() === editPhoneInUpperCase)) {
        res.send({
            success: false,
            message: "Уже есть контакт с таким номером телефона"
        });

        return;
    }

    contact.name = editName;
    contact.surname = editSurname;
    contact.phone = editPhone;

    res.send({
        success: true,
        message: null
    });
});

router.delete("/api/contact/:id", function (req, res) {
    const idParam = req.params.id;

    if (!idParam) {
        res.send({
            success: false,
            message: "Необходимо указать id контакта"
        });

        return;
    }

    const id = Number(idParam);

    contacts = contacts.filter(c => c.id !== id);

    res.send({
        success: true,
        message: null
    });
});

module.exports = router;