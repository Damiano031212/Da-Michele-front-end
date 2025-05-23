// Array di oggetti che rappresentano le pizze disponibili nel menù, con nome e prezzo
const menuPizze = [
    { nome: "Margherita", prezzo: 5.00 },
    { nome: "Marinara", prezzo: 4.50 },
    { nome: "Diavola", prezzo: 6.50 },
    { nome: "Quattro Formaggi", prezzo: 7.00 },
    { nome: "Capricciosa", prezzo: 7.50 },
    { nome: "Bufalina", prezzo: 8.00 }
];

// Seleziona il contenitore del menù dalla pagina HTML
const containerMenu = document.querySelector('.container_menu');
const toggleBtn = document.getElementById('toggle_menu');

// Crea un nuovo div che conterrà dinamicamente il menù delle pizze
const menuDiv = document.createElement('div');
menuDiv.className = 'menu_pizze';
menuDiv.style.display = 'none'; // Il menù è nascosto di default


menuPizze.forEach(pizza => {
    const item = document.createElement('div');
    item.className = 'pizza_item';
    // Inserisce nome e prezzo della pizza nell'elemento
    item.innerHTML = `<span class="pizza_nome">${pizza.nome}</span> <span class="pizza_prezzo">€ ${pizza.prezzo.toFixed(2)}</span>`;
    menuDiv.appendChild(item);
});

// Aggiunge il menù dinamico al contenitore nella pagina
containerMenu.appendChild(menuDiv);

toggleBtn.addEventListener('click', () => {
    const isVisible = menuDiv.style.display === 'flex';
    menuDiv.style.display = isVisible ? 'none' : 'flex';
    toggleBtn.textContent = isVisible ? 'Mostra menù' : 'Nascondi menù';
});
