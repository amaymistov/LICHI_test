Тестовое задание

Тестовое задание: виртуальная прокрутка Next.js

Благодарим Вас за отклик на вакансию Frontend-Developer. Предлагаем выполнить выполнили тестовое задание, чтобы нам проще было познакомиться с Вашими навыками, пониманием Next.js и виртуальной прокрутки. Пожалуйста, следуйте инструкциям ниже:

Описание задания:
Необходимо создать простое веб-приложение с использованием Next.js, которое отображает список элементов с помощью виртуальной прокрутки. Список элементов должен быть получен из предоставленной конечной точки API. Каждый элемент в списке должен отображать заголовок и описание.

Требования:

Используйте Next.js для создания веб-приложения.

Получите список элементов из следующей конечной точки API: https://api.lichi.com/category/get_category_product_list (POST - запрос)

параметры: {
category: “clothes”,
lang: 1,
shop: 1,
limit: 12 (default 12),
page: 1 (default 1)
}

Реализуйте виртуальную прокрутку для эффективного отображения элементов в списке. Список должен отображать только видимые элементы на экране и загружать дополнительные элементы по мере прокрутки пользователем.
Отображение названия и описания каждого элемента в списке.Скролл должен быть подвязан к глобальному.
Разрешается использование любых библиотек или самописных решених (не использовать react-virtualized, аналоги допустимы). Стилизуйте приложение с помощью SASS или SCSS.

Убедитесь, что приложение отзывчиво и хорошо работает на разных размерах экрана.

Пишите чистый и удобный для сопровождения код, следуя рекомендациям и соглашениям.

Выложите свой проект на GitHub