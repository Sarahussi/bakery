const defaultProducts = [
    {
        name: "Croissant",
        price: 70,
        image: "croissant.jpg"
    },
    {
        name: "Donut",
        price: 60,
        image: "donut.jpg"
    },
    {
        name: "Cinnamon",
        price: 100,
        image: "cinnamon.jpg"
    },
    {
        name: "Danish",
        price: 90,
        image: "danish.jpg"
    },
    {
        name: "Cookies",
        price: 120,
        image: "cookies.jpg"
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
