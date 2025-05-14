// ✅ Obtener referencias a los botones por ID
const btnInicio = document.getElementById('inicio');
const btnProductos = document.getElementById('productos');
const btnCarrito = document.getElementById('carrito');

// ✅ Obtener el contenedor donde se mostrará el contenido dinámico
const contenido = document.getElementById('contenidoPrincipal');

// ✅ Función para cambiar el contenido dentro del contenedor
function mostrarContenido(html) {
    contenido.innerHTML = html;
}

// ✅ Asignar eventos de clic a los botones

// Cuando el usuario haga clic en "INICIO"
btnInicio.addEventListener('click', () => {
    mostrarContenido(`
        <center>
        <h2>QUIÉNES SOMOS</h2>
        <div class="box">
            Somos un equipo dedicado a crear tecnología futurista que protege a tus mascotas detectando emociones y necesidades.
        </center>
        </div>
        
    `);
});

// Cuando el usuario haga clic en "PRODUCTOS"
btnProductos.addEventListener('click', () => {
    mostrarContenido(`
        <h2>Productos Futuristas</h2>
        <div class="box">
            - Collares inteligentes<br>
            - Cámaras emocionales<br>
            - GPS para mascotas<br>
            - Drones de rescate animal
        </div>
    `);
});

// Cuando el usuario haga clic en "CARRITO"
btnCarrito.addEventListener('click', () => {
    mostrarContenido(`
        <h2>Tu Carrito</h2>
        <div class="box">
            Aquí verás los productos futuristas que vayas agregando.<br><br>
            ¡Protege a tu mascota con lo último en tecnología!
        </div>
    `);
});

// ✅ Activar el botón de contacto por WhatsApp
const contactoBtn = document.getElementById('contactoBtn');
contactoBtn.addEventListener('click', () => {
    // Abrir el chat de WhatsApp en una nueva pestaña con el número indicado
    window.open('https://wa.me/573127712998', '_blank');
});


