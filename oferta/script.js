// Funkcja do sprawdzenia, czy strona jest uruchomiona lokalnie
const adjustLinks = () => {
    const isLocal = window.location.protocol === 'file:';
    const links = document.querySelectorAll('.home-link'); // Wybieramy linki do strony głównej

    links.forEach(link => {
        if (isLocal) {
            // Jeśli lokalnie (plik file://), ustawiamy linki na ../index.html
            link.href = "../index.html";
        }
    });
};

document.addEventListener('DOMContentLoaded', adjustLinks);