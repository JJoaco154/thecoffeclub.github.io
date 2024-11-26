//Menu hamburguesa
const mobileMenu = document.getElementById('mobile-menu'); //la variable const mobil-menu tiene como valor el parametro del html obtenido gracias a document.getElementById('mobile-menu'), document.getElementById(permite obtener un valor como parametro)
const navLinks = document.querySelector('.nav-links');  //la variable const nav-links tiene como valor el primer elemnto del parametro del html, document.querySelector(permite obtener el primer elelmento del html que tenga la clase nav-links)

mobileMenu.addEventListener('click', () => {  //activa un escuchador de cliks, cuando se hace clik, o se achica la pantalla se hace responsivo o se activa la funcion entre{}
    navLinks.classList.toggle('active'); //esta funcion arma el menu haburguesa y hace responsiva la pagina
});


// Cambiar entre modo claro y oscuro
const themeToggle = document.getElementById('boton'); //pasa como parametro el balor del id boton 

themeToggle.addEventListener('click', () => { //escucha el clik y si pasa a modo oscura mediante la funcion
    document.body.classList.toggle('dark-mode'); //activa o desactiva la clase darck-mode en el boddy, para que sea el fondo normal o fondo negro letras blancas, aplica los estilos definidos en el CSS
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro'; //esto lo que hace es modificar el texto y color del boton, si esta en modo claro el boton esta con color negro y dice modo oscuro y si esta en el darck-mode el boton dice modo claro con color blanco
});



