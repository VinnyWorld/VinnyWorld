document.getElementById("eventForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche la soumission classique du formulaire

  // Récupérer les données du formulaire
  const eventName = document.getElementById("eventName").value;
  const eventDate = document.getElementById("eventDate").value;
  const eventLocation = document.getElementById("eventLocation").value;
  const eventDescription = document.getElementById("eventDescription").value;
  const eventImage = document.getElementById("eventImage").files[0];

  // Créer une nouvelle entrée d'événement
  const eventItem = document.createElement("li");
  eventItem.innerHTML = `
    <h3>${eventName}</h3>
    <p>Date: ${eventDate}</p>
    <p>Lieu: ${eventLocation}</p>
    <p>${eventDescription}</p>
  `;

  // Si une image est téléchargée, l'afficher
  if (eventImage) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(eventImage);
    img.alt = "Image de l'événement";
    img.style.width = "150px"; // Taille de l'image
    eventItem.appendChild(img);
  }

  // Ajouter l'événement à la liste
  document.getElementById("eventList").appendChild(eventItem);

  // Réinitialiser le formulaire après soumission
  document.getElementById("eventForm").reset();
});
