const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)


function validateAndSendMail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+46|0)[0-9]{7,13}$/;

    let params = {
        fullName: document.getElementById("fullName").value,
        mail: document.getElementById("mail").value,
        message: document.getElementById("message").value,
        number: document.getElementById("number").value,
        checkbox: document.getElementById("termsCheckbox").checked
    }



    if (!params.mail || !params.message || !params.number) {
        alert("Vänligen fyll i alla obligatoriska fält.");
        return false;
    }

    if (!emailRegex.test(params.mail)) {
        alert("Vänligen ange en giltig e-postadress.");
        return false;
    }

    if (!phoneRegex.test(params.number)) {
        alert("Vänligen ange ett giltigt telefonnummer.");
        return false;
    }
    
    if (params.checkbox) {
        emailjs.send("$2a$12$v3IHBtfc.wtcsDpHF5cTyOo4LGg/9OWcbG7fFfc2XN3IFH/UQdKMK"
                    ,"$2a$12$S8fbwhWcRTyhMsBrt/ILO.Kkz9C82yjHcoXQv7at8UIkaYwx32hJm", params).then(function (res) {
            alert("Meddelande skickat!");
            
        }).catch(function (error) {
            alert("Det uppstod ett fel vid skickandet av meddelandet: " + error);
        });
    } else {
        alert("Du måste godkänna villkoren innan du kan skicka meddelandet.");
    }

}

const highlightMenu = () => {
    const element = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servivesMenu = document.querySelector('#services-page')
    const contactMenu = document.querySelector('#contact-page')

    let scrollPos = window.scrollY

     console.log(scrollPos)

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servivesMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 2211){
        servivesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 2955){
        contactMenu.classList.add('highlight')
        servivesMenu.classList.remove('highlight')
        return
    }

    if ((element && window.innerWidth < 960 && scrollPos < 600) || element){
        element.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () => {
    const menuBar = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBar) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

// const services_btn1 = document.getElementById('services_btn1')
// const services_btn2 = document.getElementById('services_btn2')
// const services_btn3 = document.getElementById('services_btn3')

// const popup = document.getElementById('popup');

// services_btn1.addEventListener('click', () => {
//     console.log("showmoreInfooooooooo1111111")
//     popup.style.display = 'block';
// })

// services_btn2.addEventListener('click', () => {
//     console.log("showmoreInfooooooooo2222222")
//     popup.style.display = 'block';
// })

// services_btn3.addEventListener('click', () => {
//     console.log("showmoreInfooooooooo33333333")
//     popup.style.display = 'block';
// })

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const modalOverlay = document.getElementById('modal_overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

openModal = (modal) => {
    if (modal == null) return
    modal.classList.add('active')
    modalOverlay.classList.add('active')
}

closeModal = (modal) => {
    if (modal == null) return
    modal.classList.remove('active')
    modalOverlay.classList.remove('active')
}

modalOverlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
