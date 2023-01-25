//Menu 
const menuMobileIcon = document.querySelector('.mobile-menu-icon');

menuMobileIcon.addEventListener('click', () => {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');    

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = 'assets/img/menu_icon.svg';
    } else {
        menuMobile.classList.add('open');
        icon.src = 'assets/img/menu_icon_close.svg';
    }
});

