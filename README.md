Amigo Secreto - Aplicación Web

Este proyecto es una aplicación web sencilla para organizar un sorteo de "Amigo Secreto". Permite agregar amigos a una lista, eliminarlos, realizar el sorteo y reiniciar el proceso en cualquier momento.

Características

Agregar amigos a la lista.

Evitar nombres duplicados.

Eliminar amigos de la lista.

Sortear un ganador aleatorio.

Reiniciar el sorteo y limpiar la lista.

Tecnologías Utilizadas

HTML: Estructura de la página.

CSS: Estilos para la interfaz.

JavaScript: Lógica del sorteo y manejo de la lista de amigos.

Cómo Usar

Agregar Amigos: Ingrese un nombre en el campo de texto y presione el botón "Agregar".

Eliminar Amigos: Cada amigo tiene un botón de eliminar (❌) para removerlo de la lista.

Sortear Amigo: Presione el botón "Sortear" para seleccionar un ganador aleatorio.

Reiniciar Sorteo: Presione "Reiniciar" para vaciar la lista y comenzar de nuevo.

Explicación del Código

Variables y Funciones Principales

let listaAmigos = [];Declara un array vacío donde se almacenarán los nombres de los amigos.

function agregarAmigo()Agrega un amigo a la lista, evitando duplicados y nombres vacíos.

function actualizarLista()Genera la lista de amigos en pantalla y añade un botón de eliminación para cada uno.

function eliminarAmigo(nombre)Busca el amigo en la lista y lo elimina usando un bucle for.

function sortearAmigo()Selecciona aleatoriamente un ganador de la lista.

function reiniciarSorteo()Limpia la lista y la interfaz, permitiendo iniciar un nuevo sorteo.

Personalización

Puedes modificar los estilos en el archivo CSS o mejorar la lógica en JavaScript para añadir nuevas funcionalidades, como grupos de amigos o historial de sorteos.
