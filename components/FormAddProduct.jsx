const React = require('react')

function FormAddTea() {
    return (
        <form action="/api/teas" method="POST" className="FormAddTea">
            <input
                type="text"
                placeholder="Название чая"
                name="teaName"
                required
                minlength="2"
            />
            <input type="file" multiple name="teaImg" />
            <input
                type="text"
                placeholder="Сорт чая"
                name="teaType"
                required
                minlength="2"
            />
            <input
                type="text"
                placeholder="Координаты"
                name="teaLocation"
                required
                minlength="10"
            />
            <input
                type="text"
                placeholder="Регион"
                name="teaRegion"
                required
                minlength="2"
            />
            <input
                type="text"
                placeholder="Описание"
                name="teaDescription"
                required
                minlength="2"
            />
            <button type="submit">Добавить чай</button>
        </form>
    )
}

module.exports = FormAddTea
