// Обработчик для кнопки открытия/закрытия меню
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('dropdown-menu');
  menu.classList.toggle('open');
});
