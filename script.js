// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Aquí deberías implementar la lógica para enviar el correo
    // Por ejemplo, usando una API de envío de correos o un servicio de backend
    console.log('Correo enviado a:', email);
    console.log('Mensaje:', mensaje);
    
    alert('Gracias por contactarnos. Te responderemos pronto.');
    this.reset();
});

// Funcionalidad de acordeón para preguntas frecuentes
document.querySelectorAll('.accordion-item h3').forEach(item => {
    item.addEventListener('click', event => {
        const content = event.target.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

    menu = document.getElementById("header");
    body = document.getElementById("container__all");
    nav = document.getElementById("nav");

function mostrar_menu(){

    body.classList.toggle('move_content');
    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function(){

    if (window.innerWidth > 760)  {
        body.classList.remove('move_content');
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }

});