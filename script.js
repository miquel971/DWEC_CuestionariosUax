const bancoPreguntas = [
    // --- UF1: Desarrollo en entorno cliente ---
    { uf: 1, q: "¿Cuál es la principal tarea de la lógica de servidor (back-end) en una aplicación web compleja?", options: ["a. Enviar datos al usuario.", "b. Mostrar información al usuario.", "c. Almacenar información permanentemente."], correct: 2 },
    { uf: 1, q: "Para instalar las dependencias en un proyecto de NodeJS, hay que ejecutar el comando...", options: ["a. nodejs install.", "b. node install.", "c. npm dependency.", "d. npm install."], correct: 3 },
    { uf: 1, q: "¿Qué extensión es especialmente útil para editar archivos HTML, utilizando sintaxis CSS para generar etiquetas HTML de manera rápida?", options: ["a. Emmet", "b. Live Server", "c. Spanish Language Pack"], correct: 0 },
    { uf: 1, q: "¿Cuál de los siguientes lenguajes de programación fue desarrollado originalmente por el navegador Netscape y estandarizado en ECMAScript?", options: ["a. TypeScript", "b. JavaScript", "c. Java"], correct: 1 },
    { uf: 1, q: "¿Cuál es la metodología de desarrollo que consiste en escribir pruebas unitarias antes que el código, desarrollar el código necesario para superar dichas pruebas y luego refactorizar el código?", options: ["a. Integración continua", "b. Despliegue continuo", "c. Test-driven development (TDD)"], correct: 2 },
    { uf: 1, q: "¿Cuál es el editor recomendado en el entorno de desarrollo mencionado?", options: ["a. Atom", "b. VStudio Code", "c. Sublime Text"], correct: 1 },
    { uf: 1, q: "La lógica de cliente...", options: ["a. Utiliza como tecnología principal PHP.", "b. Utiliza como tecnologías principales HTML, CSS y JavaScript.", "c. Utiliza como tecnologías principales HTML y Java."], correct: 1 },
    { uf: 1, q: "¿Cuál de las siguientes tecnologías se utiliza como alternativa a HTML por las personas encargadas de escribir y editar artículos?", options: ["a. YAML", "b. Markdown", "c. XML"], correct: 1 },
    { uf: 1, q: "¿Cuál es el propósito principal de las Web API en el desarrollo web?", options: ["a. Gestionar contenidos de un sitio web.", "b. Generar plantillas para sitios web.", "c. Proporcionar servicios a diferentes casos de uso, como aplicaciones móviles y de escritorio."], correct: 2 },
    { uf: 1, q: "NodeJS...", options: ["a. Es un motor de JavaScript: permite ejecutar JavaScript, pero no tiene acceso a las funciones definidas en el navegador.", "b. Es un sustituto del navegador web.", "c. Permite ejecutar cualquier código JavaScript que funcione en un navegador."], correct: 0 },
    { uf: 1, q: "¿Qué lenguaje es más adecuado para enviar y recibir datos desde una API web?", options: ["a. HTML.", "b. Markdown.", "c. JSON."], correct: 2 },
    { uf: 1, q: "¿Cuál es la función principal del lenguaje HTML en el desarrollo web en entorno cliente?", options: ["a. Crear estilos y modificar el diseño.", "b. Añadir funcionalidad a la página.", "c. Estructurar el contenido de la página."], correct: 2 },
    { uf: 1, q: "El REPL de JavaScript...", options: ["a. No está incluido en el navegador.", "b. Tiene la misma funcionalidad en NodeJS que en el navegador.", "c. Permite crear y ejecutar código e interactuar con él."], correct: 2 },
    { uf: 1, q: "¿Qué característica define a las aplicaciones web progresivas (progressive web apps)?", options: ["a. Requieren instalación en el dispositivo.", "b. Ofrecen actualizaciones transparentes para el usuario.", "c. Permiten descargar el cliente web como una aplicación convencional."], correct: 1 },
    { uf: 1, q: "¿Qué tecnología se utiliza para realizar comunicaciones full dúplex entre cliente y servidor?", options: ["a. AJAX", "b. HTTP", "c. WebSocket"], correct: 2 },

    // --- UF2 ---
    { uf: 2, q: "Dada la definición de función function funcion1(a, b, c), ¿qué código debemos ejecutar para asignar params = [\"valora\", \"valorB\", \"valorC\"]?", options: ["a. funcion1(...params) (Uso del operador spread)", "b. funcion1([params])", "c. funcion1(params...)"], correct: 0 },
    { uf: 2, q: "¿Cómo se puede añadir una propiedad a un objeto en JavaScript?", options: ["a. Mediante la función assign.", "b. Directamente asignando la propiedad (objeto.propiedad = valor).", "c. Utilizando la palabra reservada add."], correct: 1 },
    { uf: 2, q: "¿Qué característica define a las funciones flecha (arrow functions)?", options: ["a. Siempre tienen un nombre.", "b. Tienen su propio this.", "c. Son funciones anónimas y heredan el this del contexto."], correct: 2 },
    { uf: 2, q: "En el manejo de errores, ¿qué propiedad de Error proporciona la traza?", options: ["a. message.", "b. stack.", "c. name."], correct: 1 },
    { uf: 2, q: "Importar funcion1 y funcion2 de ./modulo1.js:", options: ["a. import { funcion1, funcion2 } from './modulo1.js';", "b. import funcion1, funcion2;", "c. include modulo1;"], correct: 0 },
    { uf: 2, q: "¿Qué estructura se utiliza en JavaScript para capturar errores?", options: ["a. throw...catch", "b. try...error", "c. try...catch"], correct: 2 },
    { uf: 2, q: "Atributo necesario en <script> para usar import en HTML:", options: ["a. type = \"module\"", "b. type = \"text/javascript\"", "c. type = \"json\""], correct: 0 },
    { uf: 2, q: "La declaración de variables con var...", options: ["a. Define una variable a nivel de bloque.", "b. Define una variable local.", "c. Define una variable a nivel global o de función."], correct: 2 },
    { uf: 2, q: "La palabra super...", options: ["a. En Object.create.", "b. En Object.assign.", "c. En Object.clone.", "d. En class (para llamar al constructor padre)."], correct: 3 },
    { uf: 2, q: "¿Cuál es la función para obtener el primer elemento que cumple una condición en un array?", options: ["a. forEach.", "b. find.", "c. filter."], correct: 1 },
    { uf: 2, q: "¿Qué función muestra un cuadro para que el usuario introduzca un valor?", options: ["a. prompt", "b. confirm", "c. alert"], correct: 0 },
    { uf: 2, q: "Para crear un objeto a enlazado con un prototipo b:", options: ["a. b = Object.create(a);", "b. b = Object.assign(a);", "c. a = Object.create(b);", "d. a = Object.assign(b);"], correct: 2 },
    { uf: 2, q: "En JavaScript, \"5\" * 4 es igual a...", options: ["a. 20 (conversión implícita).", "b. Error de sintaxis.", "c. 54."], correct: 0 },
    { uf: 2, q: "¿Cómo aborda el modo estricto la creación de variables globales?", options: ["a. Sin restricciones.", "b. Evita la creación accidental (lanza error).", "c. Obliga a declararlas como globales."], correct: 1 },
    { uf: 2, q: "¿Cuál es la manera más sencilla de crear un objeto?", options: ["a. Palabra reservada class.", "b. Mediante un literal (const obj = {}).", "c. Función constructora."], correct: 1 },

    // --- UF3 ---
    { uf: 3, q: "¿Cómo localizar párrafos con clase clase1 dentro del Shadow DOM de el1?", options: ["a. el1.shadowDOM.querySelectorAll", "b. el1.querySelectorAll", "c. el1.shadowRoot.querySelectorAll('p.clase1')"], correct: 2 },
    { uf: 3, q: "La expresión regular /[a-zA-z]{5}/g significa:", options: ["a. 5 letras, flag global inactivo.", "b. 5 letras, flag global activo.", "c. 5 parejas de letras."], correct: 1 },
    { uf: 3, q: "Los id de campos de formulario sirven para:", options: ["a. Enviar datos.", "b. Relacionar campos con etiquetas label.", "c. Asociar grupos radio."], correct: 1 },
    { uf: 3, q: "La sentencia document.cookie = \"cookie1=valor1\"...", options: ["a. Crea o modifica sin borrar las existentes.", "b. Borra todas.", "c. Error."], correct: 0 },
    { uf: 3, q: "Para definir un elemento personalizado...", options: ["a. Sin clase.", "b. Clase que extienda a HTMLElement.", "c. Clase que no extienda."], correct: 1 },
    { uf: 3, q: "/hola/i.test(\"Hola mundo\") devuelve...", options: ["a. true", "b. false", "c. Error"], correct: 0 },
    { uf: 3, q: "addEventListener permite pasar un objeto como manejador si...", options: ["a. Tiene addEventListener.", "b. Implementa el método handleEvent.", "c. Sin condiciones."], correct: 1 },
    { uf: 3, q: "La función submit()...", options: ["a. Envío desde JS.", "b. Detenida por preventDefault.", "c. Activa evento."], correct: 0 },
    { uf: 3, q: "La validación HTML5...", options: ["a. Siempre activa.", "b. Por defecto activa, desactivable con novalidate.", "c. Solo JS."], correct: 1 },
    { uf: 3, q: "Obtener conjunto de elementos con clase clase1:", options: ["a. document.getElementsByClassName(\"clase1\")", "b. document.querySelector(\"div.clase1\")", "c. document.querySelectorAll(\"div.clase1\")"], correct: 2 },
    { uf: 3, q: "¿Pueden guardarse objetos en localStorage?", options: ["a. Sí, si se convierten a JSON.", "b. No.", "c. Directamente."], correct: 0 },
    { uf: 3, q: "Acceder a nodos hijo incluyendo nodos de texto:", options: ["a. firstChild", "b. children", "c. childNodes"], correct: 2 },
    { uf: 3, q: "Si defines click en padre y se hace click en hijo...", options: ["a. No se captura.", "b. Se captura (burbujeo).", "c. Solo manual."], correct: 1 },
    { uf: 3, q: "document.documentElement hace referencia a...", options: ["a. body", "b. html", "c. head"], correct: 1 },
    { uf: 3, q: "Nombre de manejador de eventos válido:", options: ["a. onclicked", "b. clicked", "c. onkeyup"], correct: 2 },

    // --- UF4 ---
    { uf: 4, q: "Los tres estados de una promesa son:", options: ["a. Iniciada, resuelta, rechazada.", "b. Pendiente, resuelta y rechazada.", "c. Creada, procesada."], correct: 1 },
    { uf: 4, q: "El valor devuelto por una promesa es accesible en:", options: ["a. Constructor.", "b. then directamente.", "c. Función parámetro del método then.", "d. finally."], correct: 2 },
    { uf: 4, q: "Si ejecutas await en función que devuelve un número:", options: ["a. Promesa sin valor.", "b. El número original.", "c. Error."], correct: 1 },
    { uf: 4, q: "Formato AJAX mayoritario actual:", options: ["a. JSON.", "b. XML.", "c. YAML."], correct: 0 },
    { uf: 4, q: "Tras un setTimeout 5s, el código siguiente:", options: ["a. Espera.", "b. Se ejecuta inmediatamente."], correct: 1 },
    { uf: 4, q: "Await B dentro de A:", options: ["a. Bloquea principal.", "b. Suspende A hasta que B termine sin bloquear principal.", "c. Error."], correct: 1 },
    { uf: 4, q: "Si se asigna una promesa a una variable:", options: ["a. Guarda valor final.", "b. Almacena objeto promesa.", "c. Null."], correct: 1 },
    { uf: 4, q: "Los callbacks...", options: ["a. Siempre asíncronos.", "b. Síncronos o asíncronos.", "c. Siempre síncronos."], correct: 1 },
    { uf: 4, q: "setTimeout de 5s, el callback:", options: ["a. Bloquea programa.", "b. De inmediato.", "c. A los 5s sin bloquear."], correct: 2 },
    { uf: 4, q: "let res = fetch(\"url\"); ¿qué almacena res?", options: ["a. Response.", "b. Contenido.", "c. Una promesa."], correct: 2 },
    { uf: 4, q: "Las peticiones AJAX...", options: ["a. Segundo plano sin recargar.", "b. Recargando.", "c. Síncronas."], correct: 0 },
    { uf: 4, q: "Errores en async/await se procesan con:", options: ["a. Manejadores await.", "b. Bloques try...catch convencionales.", "c. Promise.catch."], correct: 1 },
    { uf: 4, q: "API fetch de JavaScript:", options: ["a. Define fetch junto con Interfaces (Headers...).", "b. Solo fetch.", "c. Request únicamente."], correct: 0 },
    { uf: 4, q: "La función map...", options: ["a. Es un callback.", "b. Usa como parámetro una función callback.", "c. Asíncrona siempre."], correct: 1 },
    { uf: 4, q: "Callback hell ocurre por:", options: ["a. Paralelismo.", "b. Anidamiento excesivo.", "c. Promesas."], correct: 1 },

    // --- UF5 ---
    { uf: 5, q: "Produce <a href=\"url_enlace\">Enlace</a> en JSX:", options: ["a. const url = \"url_enlace\"; const el1 = <a href={url}>Enlace</a>;", "b. <a href=\"url\">", "c. <a href=\"{url}\">", "d. <a href={\"url\"}>"], correct: 0 },
    { uf: 5, q: "¿Para qué se utiliza la directiva ngModel en Angular?", options: ["a. Definir etiqueta.", "b. Enlazar propiedad con campo formulario (double data binding).", "c. Estilos.", "d. Unidireccional."], correct: 1 },
    { uf: 5, q: "Indica cuáles de las siguientes incluyen código JSX válido:", options: ["a. {value;", "b. let value", "c. \"Hello\" />World", "d. Capa 1. Capa 2.", "e. 42; const element", "f. const el1", "g. const el4 = <div><div>Capa 1.</div><div>Capa 2.</div></div>;", "h. const el4"], correct: 6 },
    { uf: 5, q: "this.state fuera del constructor en React:", options: ["a. Actualiza vista.", "b. Actualiza estado pero no vista.", "c. No produce ningún efecto ni en el estado ni en la vista.", "d. Error."], correct: 2 },
    { uf: 5, q: "¿Cómo modificar variable de estado en React?", options: ["a. Asignación directa.", "b. Asignar this.state.", "c. Asignar this.props.", "d. Ejecutando this.setState() y pasándole un objeto."], correct: 3 },
    { uf: 5, q: "Comunicación Padre e Hijo en Angular:", options: ["a. @Input().", "b. Propiedades sencillas.", "c. De padre a hijo (@Input); de hijo a padre (@Output + eventos).", "d. Slots."], correct: 2 },
    { uf: 5, q: "El empaquetado cliente consiste en:", options: ["a. Generar archivos HTML, JS y CSS compatibles.", "b. Espacios blanco.", "c. Binarios.", "d. Librerías."], correct: 0 },
    { uf: 5, q: "Un componente de Angular está formado por:", options: ["a. Un archivo .ts.", "b. TS y estilos.", "c. HTML y CSS.", "d. TS (lógica), CSS (estilos) y HTML (plantilla)."], correct: 3 },
    { uf: 5, q: "¿Cuáles de las siguientes funciones puede realizar Webpack?", options: ["a. Frameworks.", "b. Backend.", "c. TypeScript.", "d. Empaquetado de la aplicación."], correct: 3 },
    { uf: 5, q: "Si <MiComponente param1=\"dato1\" />, ¿cómo se referencia en la lógica?", options: ["a. Mediante this.props.param1.", "b. Param1.", "c. this.param1.", "d. this.state.param1."], correct: 0 },
    { uf: 5, q: "¿Qué funcionalidades ofrecen los frameworks JS?", options: ["a. Seguridad.", "b. Sin JS.", "c. Herramientas para la creación y compilación de proyectos.", "d. Soporte PHP."], correct: 2 },
    { uf: 5, q: "¿En qué consiste el data binding?", options: ["a. Actualizar interfaz al cambiar datos.", "b. Cargar archivos.", "c. API.", "d. URL."], correct: 0 },
    { uf: 5, q: "El Virtual DOM es característico de:", options: ["a. Angular.", "b. React.", "c. jQuery.", "d. Vue puro."], correct: 1 },
    { uf: 5, q: "Las aplicaciones creadas con estos frameworks suelen ser:", options: ["a. MPA.", "b. Single Page Applications (SPA).", "c. Nativas.", "d. Estáticas."], correct: 1 },
    { uf: 5, q: "Herramienta para gestionar dependencias:", options: ["a. npm / yarn.", "b. git.", "c. webpack.", "d. babel."], correct: 0 },

    // --- UF6 ---
    { uf: 6, q: "¿Cómo se pasa información desde un componente hijo a su componente padre?", options: ["a. Mediante una prop.", "b. Mediante prop o evento.", "c. Slot.", "d. Mediante un evento personalizado."], correct: 3 },
    { uf: 6, q: "En framework Nuxt, ¿qué fichero hay que crear para definir ruta /vehiculos/:vehiculo?", options: ["a. pages/_vehiculos/vehiculo.vue", "b. pages/vehiculos/index.vue", "c. pages/vehiculos/_vehiculo.vue (El guion bajo _ define el parámetro dinámico).", "d. pages/vehiculos/vehiculo.vue"], correct: 2 },
    { uf: 6, q: "¿Cuál es el código correcto para que un componente hijo genere un evento evento1?", options: ["a. this.$emit({{evento1", "b. this.emit('evento1')", "c. This.$emit('evento1') (Estándar de Vue).", "d. emit.evento1"], correct: 2 },
    { uf: 6, q: "¿Qué es una propiedad computada de Vue?", options: ["a. Función ejecutándola.", "b. Función accedida a través del nombre como si fuera variable convencional.", "c. Operación.", "d. Sin parámetros."], correct: 1 },
    { uf: 6, q: "Respuesta SPA direct URL:", options: ["a. Archivos (HTML, CSS, JS) con capa contenedora y script.", "b. JSON.", "c. HTML.", "d. HTML con datos."], correct: 0 },
    { uf: 6, q: "Estilos sin scoped en Vue:", options: ["a. Sí afectan al resto de la aplicación.", "b. No.", "c. Solo si scoped.", "d. Siempre."], correct: 0 },
    { uf: 6, q: "¿Cómo mostrar variable 'colores' (array) en lista desordenada?", options: ["a. ul v-for", "b. li v-for=\"color in colores\"> color", "c. li v-for=\"i in colores\"> {{colores[i]}}", "d. <ul> <li v-for=\"color in colores\"> {{color}} </li> </ul>"], correct: 3 },
    { uf: 6, q: "Condiciones PWA:", options: ["a. Sin conexión.", "b. HTTPS.", "c. Manifiesto.", "d. Todas las anteriores (Seguridad, Manifiesto y Service Worker)."], correct: 3 },
    { uf: 6, q: "Librería gestión centralizada estado Vue:", options: ["a. reactive", "b. vuex", "c. vue-router", "d. State"], correct: 1 },
    { uf: 6, q: "En enlace a vista en Nuxt:", options: ["a. Utilizando el componente <NuxtLink>.", "b. <a>.", "c. <router-link>.", "d. <a href>."], correct: 0 },
    { uf: 6, q: "enlace1 = 'url', ¿cómo mostrar enlace en Vue?", options: ["a. <a>{{ enlace1 }}</a>", "b. <a href=\"enlace1\">", "c. <a :href=\"enlace1\">Visitar enlace</a>", "d. <a href=\"{{enlace1}}\">"], correct: 2 },
    { uf: 6, q: "Respuesta aplicación SSR a petición directa:", options: ["a. JSON.", "b. Archivos con HTML que incluye datos de vista además del script.", "c. HTML solo.", "d. Capa contenedora."], correct: 1 },
    { uf: 6, q: "valor1 = \"<b>negrita</b>\", ¿cómo interpretar HTML?", options: ["a. <span v-html=\"valor1\"></span>", "b. <span> {{ valor1 }} </span>", "c. {{ valor1 }}", "d. <span v-html=\"{{valor1}}\">"], correct: 0 },
    { uf: 6, q: "¿Qué ocurre con computada si cambia origen?", options: ["a. Se actualiza automáticamente.", "b. Recarga.", "c. Función.", "d. No."], correct: 0 },
    { uf: 6, q: "Librería enrutamiento Vue:", options: ["a. vue-router", "b. reactive", "c. pinia", "d. axios"], correct: 0 },

    // --- UF7 ---
    { uf: 7, q: "¿Qué desafío de seguridad se menciona para sesiones?", options: ["a. DDoS", "b. XSS", "c. Inyección SQL", "d. Amenaza de falsificación CSRF"], correct: 3 },
    { uf: 7, q: "¿Qué es AWS S3?", options: ["a. CDN", "b. Despliegue", "c. Servidor estático", "d. Servicio cloud de alojamiento masivo de ficheros"], correct: 3 },
    { uf: 7, q: "Alojamiento SPA:", options: ["a. Lógica servidor", "b. FTP", "c. Lógica frameworks", "d. Servidor web estático"], correct: 3 },
    { uf: 7, q: "GitHub Pages:", options: ["a. Hosting lógica", "b. Alojamiento web estático", "c. Integración", "d. Bases datos"], correct: 1 },
    { uf: 7, q: "URL repo proyecto1 miusuario:", options: ["a. p1.gh.io/user", "b. user.p1.gh.io", "c. user.gh.io", "d. https://miusuario.github.io/proyecto1"], correct: 3 },
    { uf: 7, q: "Ventaja tokens JWT:", options: ["a. Terceros", "b. Complejidad", "c. Cierre", "d. No es necesario almacenar credenciales en el servidor"], correct: 3 },
    { uf: 7, q: "Ventaja CI:", options: ["a. Ramas", "b. No actualizaciones", "c. Detectar fallos pronto", "d. No automáticas"], correct: 2 },
    { uf: 7, q: "Acciones GH Actions:", options: ["a. Commit local", "b. Push o Pull Request según configuración", "c. PR", "d. Push"], correct: 1 },
    { uf: 7, q: "Etapa GH Actions tras VM:", options: ["a. Compilación", "b. Dependencias", "c. El clonado del repositorio en la máquina virtual", "d. Tests"], correct: 2 },
    { uf: 7, q: "URL miusuario.github.io:", options: ["a. Redundante", "b. github.io/user", "c. https://miusuario.github.io", "d. miusuario.io"], correct: 2 },
    { uf: 7, q: "JWT fetch:", options: ["a. Basic", "b. OpenId", "c. Mediante cabecera Authorization: Bearer TOKEN_JWT", "d. JWT"], correct: 2 },
    { uf: 7, q: "Ramas referencia GH Actions:", options: ["a. Las indicadas en el fichero de configuración", "b. main", "c. master", "d. main o master"], correct: 0 },
    { uf: 7, q: "Basic Auth URL:", options: ["a. @user:pass", "b. https://usuario:password@midominio.com/recurso_protegido", "c. user@pass", "d. user:pass:dom"], correct: 1 },
    { uf: 7, q: "Credenciales sesiones:", options: ["a. Primera", "b. Primera y siguientes", "c. Únicamente en el login; luego cookie de sesión", "d. Cada petición"], correct: 2 },
    { uf: 7, q: "CI vs Entrega vs Despliegue:", options: ["a. Entrega manual, Despliegue automático", "b. Ninguna", "c. Entrega auto, Despliegue manual", "d. CI añade tests"], correct: 0 }
];

let seleccionadas = [];
let respondidas = 0;
let aciertos = 0;

// Recuperamos el historial del localStorage
let respondidasGlobalmente = JSON.parse(localStorage.getItem('respondidasUF')) || [];

function escapeHTML(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p.innerHTML;
}

function iniciarTest() {
    // 1. Filtrar preguntas que NO están en el historial de acertadas
    let poolDisponibles = bancoPreguntas.filter(p => !respondidasGlobalmente.includes(p.q));

    // 2. Si se agotan todas las de las UF1 a la UF7
    if (poolDisponibles.length === 0) {
        alert("¡Felicidades! Has completado todas las preguntas del banco oficial.");
        return;
    }

    // 3. Selección aleatoria de 30 o las que queden
    let numASeleccionar = Math.min(30, poolDisponibles.length);
    seleccionadas = poolDisponibles.sort(() => 0.5 - Math.random()).slice(0, numASeleccionar);
    seleccionadas.sort((a,b) => a.uf - b.uf);

    respondidas = 0; aciertos = 0;
    document.getElementById('nota-final').style.display = 'none';
    actualizarMarcador(numASeleccionar);
    render();
}

function render() {
    const cont = document.getElementById('quiz-container');
    cont.innerHTML = seleccionadas.map((p, i) => `
        <div class="pregunta-block" id="block-${i}">
            <span class="pregunta-texto">${i+1}. [UF${p.uf}] ${escapeHTML(p.q)}</span>
            <div class="opciones-list">
                ${p.options.map((opt, oi) => `
                    <div class="opcion" id="opt-${i}-${oi}" onclick="verificar(${i}, ${oi})">${escapeHTML(opt)}</div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function verificar(pIndex, oIndex) {
    const pregunta = seleccionadas[pIndex];
    const block = document.getElementById(`block-${pIndex}`);
    if (block.classList.contains('bloqueado')) return;

    const seleccionada = document.getElementById(`opt-${pIndex}-${oIndex}`);
    const correcta = document.getElementById(`opt-${pIndex}-${pregunta.correct}`);

    if (oIndex === pregunta.correct) {
        seleccionada.classList.add('correcta');
        aciertos++;
        // Al acertar, la guardamos para que no vuelva a salir hasta el reset
        marcarComoVista(pregunta.q);
    } else {
        seleccionada.classList.add('incorrecta');
        correcta.classList.add('correcta');
    }

    block.classList.add('bloqueado');
    respondidas++;
    actualizarMarcador(seleccionadas.length);
}

function marcarComoVista(preguntaTexto) {
    if (!respondidasGlobalmente.includes(preguntaTexto)) {
        respondidasGlobalmente.push(preguntaTexto);
        localStorage.setItem('respondidasUF', JSON.stringify(respondidasGlobalmente));
    }
}

function mostrarResultadoFinal() {
    const nota = ((aciertos / seleccionadas.length) * 10).toFixed(2);
    const panel = document.getElementById('nota-final');
    panel.style.display = 'block';
    panel.innerHTML = `TEST FINALIZADO<br>Aciertos: ${aciertos} / ${seleccionadas.length}<br>NOTA: ${nota} / 10`;
    panel.scrollIntoView({ behavior: 'smooth' });
}

function actualizarMarcador(total) {
    const restantesBanco = bancoPreguntas.length - respondidasGlobalmente.length;
    document.getElementById('contador-aciertos').innerHTML = 
        `Respondidas: ${respondidas} / ${total} | <b>Nuevas disponibles: ${restantesBanco}</b>`;
}

// ESTA FUNCIÓN ES LA QUE TE FALTABA PARA EL HARD RESET
function resetearProgreso() {
    if(confirm("¿Seguro? Se borrarán todos tus aciertos guardados de la UF1 a la UF7.")) {
        localStorage.removeItem('respondidasUF'); // Borra la memoria del navegador
        respondidasGlobalmente = []; // Vaciamos el array actual
        iniciarTest(); // Lanzamos un test nuevo con todas las preguntas
    }
}

function reiniciarTest() { 
    window.scrollTo(0,0); 
    iniciarTest(); 
}

iniciarTest();