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

//CSS Animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
       if (entry.isIntersecting) {
        entry.target.classList.add('show')
       } else { //this part is to show the animation more than one time
        entry.target.classList.remove('show');    
       }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


//Contact

(function () {
    emailjs.init("Q_VQ2UT0doO5W7Xc6");
  })();

const sendMailButton = document.getElementById('send-mail-button');
sendMailButton.addEventListener('click', () => SendMail())

function SendMail () {
    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_5nabdfz', 'template_um23u9m', params).then(function(res) {
        const sucess = document.querySelector('.contact-success');
        if (res.status === 200) {         
            return sucess.style.display='block';
        }
    })
}



