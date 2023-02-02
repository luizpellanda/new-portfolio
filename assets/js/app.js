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

//Contact

const sendMailButton = document.getElementById('send-mail-button');
sendMailButton.addEventListener('click', () => SendMail())

function SendMail () {
    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_5nabdfz', 'template_um23u9m', params).then(function(res) {
        if (res.status === 200) {
            alert(`Thank you for your contact! I will get in touch as soon as possible!`)
        }
    })
}



