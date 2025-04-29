const menuButton = document.querySelector('.menù');
const menuContainer = document.getElementById('menuContainer');

const menuPizze = [
    { nome: "Margherita", prezzo: 5.00 },
    { nome: "Marinara", prezzo: 4.50 },
    { nome: "Diavola", prezzo: 6.50 },
    { nome: "Quattro Formaggi", prezzo: 7.00 },
    { nome: "Capricciosa", prezzo: 7.50 },
    { nome: "Bufalina", prezzo: 8.00 }
];

// Funzione per popolare il menù
function populateMenu() {
    menuContainer.innerHTML = ''; // Svuota il contenitore
    menuPizze.forEach(pizza => {
        const pizzaItem = document.createElement('p');
        pizzaItem.textContent = `${pizza.nome}: €${pizza.prezzo.toFixed(2)}`;
        menuContainer.appendChild(pizzaItem);
    });
}

// Gestione del click sul bottone
menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('visible'); // Mostra/nasconde il menù
    if (menuContainer.classList.contains('visible')) {
        populateMenu(); // Popola il menù solo se visibile
    }
});
