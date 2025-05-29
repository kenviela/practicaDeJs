function createModalStructure() {
  const modal = document.createElement("div");
  modal.id = "modal";
  // No hay estilos aquí

  const modalContent = document.createElement("div");
  modalContent.id = "modalContent";

  const closeButton = document.createElement("span");
  closeButton.id = "closeButton";
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function () {
    modal.classList.remove("show"); // quitar clase para ocultar modal
  };

  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

createModalStructure();

function showModal(text) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  // Limpia todo menos el botón cerrar
  while (content.childNodes.length > 1) {
    content.removeChild(content.lastChild);
  }

  const textTag = document.createElement("p");
  textTag.innerHTML = text;
  content.appendChild(textTag);

  modal.classList.add("show"); // mostrar modal agregando clase
}

//cambiamos nombre de las variables a ingles
function showTitle(title, subtitle) {
  let chapter = document.getElementById("title"); // Busca el div con id="title"

  let titleTag = document.createElement("h1"); // Crea una etiqueta <h1>
  titleTag.innerHTML = title; // Pone como contenido el valor de 'title'

  let subtitleTag = document.createElement("h2");
  subtitleTag.innerHTML = subtitle; // Pone como contenido el valor de 'subtitle'

  chapter.appendChild(titleTag); // Inserta <h1> dentro del div con id="title"
  chapter.appendChild(subtitleTag); // Inserta <h2> debajo del <h1>
}
showTitle("one piece", "Hola, Nakamas");

function pintarEpisodio(title, image, text, containerId) {
  let container = document.getElementById(containerId); // Busca el contenedor por su ID

  if (!container) {
    console.error("No se encontró el contenedor con id:", containerId);
    return; // para que no falle si no encuentra el contenedor
  }
  let titleTag = document.createElement("h2");
  titleTag.innerHTML = title;
  let imageTag = document.createElement("img");
  imageTag.src = image;
  imageTag.onclick = () => showModal(text);

  container.appendChild(titleTag);
  container.appendChild(imageTag);
}

//pasar data a la funcion pintarEpisodio
pintarEpisodio(
  "¡Dime que quieres vivir!¡Somos nakamas!",
  "assets/Img Robin.jpg",
  "Ohara es destruida por completo y gracias al sacrificio de Saul, Robin escapa y le dan una recompensa de Belly79.000.000 y termina su historia, si bien considera que los Sombrero de Paja eran sus amigos, ella cree que un día, ya no será capaz de protegerlos de sus perseguidores, y la traicionaran a ella como los demás lo hicieron. Después de que Spandam señala que teniendo a Robin significa declarar la guerra a todo el mundo, Luffy dice a Sogeking que queme la bandera del Gobierno Mundial. Sogeking usa su Hi no Tori Boshi / Fire Bird Star para quemar la bandera, y se declara la guerra al mundo por el bien de Robin. Robin, conmovida por la profundidad de la acción de Luffy, grita que quiere vivir y volver a la mar con Luffy, él y los otros se preparan para la batalla con el CP9 y salvar a Robin.",
  "chapter2"
);
pintarEpisodio(
  "¡Los sentimientos mostrados a través de los puños! Luffy ejecuta el gattling a la maxima potencia",
  "assets/luffy.png",
  "Los Piratas del Sombrero de Paja continuan su lucha contra los infantes de marina, mientras que Usopp se revela a Luffy y lo alienta para que pueda continuar luchando. Zoro tiene su Yubashiri destruida por Shu , un capitan de la marina usuario de la fruta Sabi Sabi no Mi. Luffy recuerda lo que hizo Robin por ellos y Luffy derrota a Rob Lucci con su poderoso ataque, Gomu Gomu no Jet Gatling, que rompe Lucci través de la pared y asombra a todos los infantes de marina que se enteran de lo que acaba de suceder.",
  "chapter3"
);
pintarEpisodio(
  "¡Gracias Merry! La nevada en el mar de las despedidas",
  "assets/merry.png",
  "En cuanto a la tripulación hace su camino de regreso a Water 7, se reúnen con toda la compañía Galley-La y Iceburg. El Going Merry se parte en 2 y ahora ya no tiene reparación ya que la quilla se parte completamente, entonces la tripulación le da un funeral vikingo quemándolo, ya que el fondo del mar es oscuro y silencioso. Luego el barco pide disculpas por no poder navegar mas con ellos, Luffy dice que los que tienen que disculparse son ellos porque han hecho cosas que terminaron dañándolo, a lo que el Merry responde que a pesar de eso él fue muy feliz junto a ellos y muere...",
  "chapter4"
);
pintarEpisodio(
  "El final de la travesia. Abrir la puerta de la justicia",
  "assets/bon clay (2).jpg",
  "Los presos huyen de Magellan, quien pide un barco para perseguirlos. Se salvan gracias a los tiburones ballena que llamó Jinbe, que los impulsan hasta el buque, aunque son atacados por los barcos de los contraalmirantes que aún quedan en las aguas de Impel Down. Los disparos comienzan a dañar a la nave, por lo que Crocodile decide contraatacar. Mientras tanto, Jinbe está al mando del barco, dirigiéndose a la puerta de la justicia, a pesar de que está cerrada. Luffy se da cuenta de la ausencia de Mr. 2. Jinbe le dice que no esperaba contarle la verdad hasta que pasaran la puerta de la justicia, cuando el Den Den Mushi perdiera la cobertura. Luffy le exige que le diga por qué le ha dejado ir. Entonces se descubre que era una idea del propio Mr. 2, quien ayudaría a Luffy de la misma manera que hizo en Arabasta: sacrificándose y luchando con un enemigo más fuerte que él para que Luffy pudiera huir y conseguir su objetivo.",
  "chapter5"
);
pintarEpisodio(
  "¡Buscando la respuesta! ¡Muere Ace Puño de Fuego!",
  "assets/ace.jpg",
  "Ace es golpeado por el puño de magma del almirante Akainu como un intento de defender a Luffy de un ataque mortal para él, cayendo así en los brazos de su hermano. Ace piensa en su pasado y recuerda su objetivo en la vida: Saber si merecía o no haber nacido. Akainu procede a atacar a Luffy, pero Jinbe detiene este ataque, mientras tanto, Marco no puede quitarse las esposas, por lo que buscan a Galdino, quien se las quita para que vaya, junto a Vista, a ayudar a Luffy, golpeando a Akainu, sin embargo, se dan cuenta de que son ineficaces contra el almirante.Se puede ver a todo el mundo en estado de shock ante las heridas de Ace, y, al deducir que sus órganos fueron quemados sin posibilidad de cura, Ace se da cuenta de que su vida terminará pronto, por ésto, decide darle las gracias a Luffy y Sabo por ser sus hermanos, así como pedirle al primero que fuera su portador de voz, pues la suya no era lo suficientemente fuerte como para llegar a los oídos de las personas a quienes quería agradecer.",
  "chapter6"
);
