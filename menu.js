const defaultProducts = [
    {
        name: "Croissant",
        price: 70,
        image: "🥐🌸 (1).jfif"
    },
    {
        name: "Donut",
        price: 60,
        image: "DÓNUTS DE FERRERO ROCHER - Petit Fit by Cris (1).jfif"
    },
    {
        name: "Cinnamon",
        price: 100,
        image: "Red Velvet Cinnamon Rolls.jfif"
    },
    {
        name: "Danish",
        price: 90,
        image: "b695c8ab-4f77-492e-b165-079a413c6635.jfif"
    },
    {
        name: "Cookies",
        price: 120,
        image: "Biscoff Cookie Butter White Chocolate Chip Cookies - House of Nash Eats (1).jfif"
    }
];
function getAllProducts() {
    const vendorProducts = JSON.parse(localStorage.getItem("products")) || [];
    return [...defaultProducts, ...vendorProducts];
}
function loadMenu() {
    const products = getAllProducts();
    const container = document.getElementById("menuContainer");
    container.innerHTML = "";
    products.forEach(p => {
        container.innerHTML += `
            <div class="menu-item">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${p.price}EGP</p>
                <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
            </div>
        `;
    });
}
loadMenu();

