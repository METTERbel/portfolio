let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.navigation');
let closeLine = document.querySelector('.header__navigation_close');
hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle('active');
  closeLine.classList.toggle('active');
}
closeLine.addEventListener('click', closeMenu);

function closeMenu() {
  closeLine.classList.toggle('active');
  navMenu.classList.remove('active');
}




console.log(`Самооценка по пунктам:  \n
+ 1.Вёрстка валидная +10 \n
+ 2.Вёрстка семантическая +20 \n
В коде странице присутствуют элементы: \n
+ <header>, <main>, <footer> +2 \n
+ шесть элементов <section> (по количеству секций) +2 \n
+ только один заголовок <h1> +2 \n
+ пять заголовков <h2> +2 \n
+ один элемент <nav> (панель навигации) +2 \n
+ два списка ul > li > a (панель навигации, ссылки на соцсети) +2 \n
+ десять кнопок <button> +2 \n
+ два инпута: <input type=\"email\"> и <input type=\"tel\"> +2 \n
+ один элемент <textarea> +2 \n
+ три атрибута placeholder +2 \n
+ 3.Вёрстка соответствует макету +48 \n
+ блок <header> +6 \n
+ секция hero +6 \n
+ секция skills +6 \n
+ секция portfolio +6 \n
+ секция video +6 \n
+ секция price +6 \n
+ секция contacts +6 \n
+ блок <footer> +6 \n
+ 4.Требования к css + 12 \n
+ для построения сетки используются флексы или гриды +2 \n
+ при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2 \n
+ фоновый цвет тянется на всю ширину страницы +2 \n
+ иконки добавлены в формате .svg +2 \n
+ изображения добавлены в формате .jpg +2 \n
+ есть favicon +2 \n
+ 5.Интерактивность, реализуемая через css +20 \n
+ плавная прокрутка по якорям +5 \n
+ ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5 \n
+ интерактивность включает в себя не только изменение внешнего вида курсора, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта, добавлены стили при клике +5 \n
+ обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5`);