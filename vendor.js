function loadProducts() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const container = document.getElementById("productList");
    container.innerHTML = "";

    products.forEach((p, index) => {
        container.innerHTML += `
            <div class="productItem">
                <h3>${p.name}</h3>
                <p>Price: ${p.price} EGP</p>
                <button onclick="deleteProduct(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
}

document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const image = document.getElementById("image").value;

    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.push({ name, price, image });

    localStorage.setItem("products", JSON.stringify(products));

    this.reset();
    loadProducts();
});

loadProducts();
