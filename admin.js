// Liste d'événements (sera remplacé par une base de données plus tard)
let events = [];

// Fonction pour ajouter un événement
document.getElementById("addEventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  const time = document.getElementById("eventTime").value;
  const location = document.getElementById("eventLocation").value;
  const description = document.getElementById("eventDescription").value;
  const image = document.getElementById("eventImage").files[0];

  // Créer un objet événement
  const event = {
    title,
    date,
    time,
    location,
    description,
    image: URL.createObjectURL(image), // Prévisualisation de l'image
  };

  // Ajouter l'événement à la liste
  events.push(event);

  // Réinitialiser le formulaire
  document.getElementById("addEventForm").reset();

  // Afficher la liste des événements
  displayEvents();
});

// Fonction pour afficher les événements
function displayEvents() {
  const eventContainer = document.getElementById("eventContainer");
  eventContainer.innerHTML = ""; // Réinitialiser l'affichage des événements

  if (events.length === 0) {
    eventContainer.innerHTML = "<p>Aucun événement enregistré.</p>";
    return;
  }

  events.forEach((event, index) => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");

    eventElement.innerHTML = `
      <h3>${event.title}</h3>
      <p>Date: ${event.date}</p>
      <p>Heure: ${event.time}</p>
      <p>Lieu: ${event.location}</p>
      <p>${event.description}</p>
      <img src="${event.image}" alt="Image de l'événement" width="100">
      <button onclick="deleteEvent(${index})">Supprimer</button>
    `;

    eventContainer.appendChild(eventElement);
  });
}

// Fonction pour supprimer un événement
function deleteEvent(index) {
  events.splice(index, 1); // Supprimer l'événement du tableau
  displayEvents(); // Réafficher la liste mise à jour
}
