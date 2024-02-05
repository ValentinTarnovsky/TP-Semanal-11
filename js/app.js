const productos = [
    {
        name: "Hamburguesa clásica",
        desc: "Deliciosa hamburguesa con carne de res, queso, lechuga y tomate.",
        price: 8.99
    },
    {
        name: "Pizza Margarita",
        desc: "Pizza con salsa de tomate, mozzarella fresca y albahaca.",
        price: 10.49
    },
    {
        name: "Ensalada César",
        desc: "Ensalada fresca con lechuga, pollo a la parrilla, crutones y aderezo César.",
        price: 7.99
    },
    {
        name: "Pasta Alfredo",
        desc: "Pasta con salsa Alfredo cremosa y trozos de pollo.",
        price: 9.99
    },
    {
        name: "Sushi variado",
        desc: "Combinación de sushi con variedad de rollos y nigiri.",
        price: 12.99
    },
    {
        name: "Tacos de carne asada",
        desc: "Tacos mexicanos con carne asada, cebolla y cilantro.",
        price: 6.99
    },
    {
        name: "Sopa de miso",
        desc: "Sopa tradicional japonesa con tofu, algas y cebollín.",
        price: 4.49
    },
    {
        name: "Postre de chocolate",
        desc: "Delicioso postre de chocolate con helado de vainilla.",
        price: 5.99
    },
    {
        name: "Bebida refrescante",
        desc: "Bebida refrescante con limón y menta.",
        price: 2.49
    },
    {
        name: "Parrillada mixta",
        desc: "Combinación de carnes a la parrilla con guarniciones.",
        price: 15.99
    }
];

const getData = () => {
    const container = document.getElementById("products");

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.className = "card";

        const cardInfo = document.createElement("div");
        cardInfo.className = "card-title";

        const nombreElement = document.createElement("h3");
        nombreElement.textContent = producto.name;

        const descElement = document.createElement("p");
        descElement.textContent = producto.desc;

        const containerDiv = document.createElement("div");
        containerDiv.className = "card-info";

        const containerBtn = document.createElement("div");
        containerBtn.className = "card-cont";

        const precioElement = document.createElement("span");
        precioElement.textContent = `$${producto.price.toFixed(2)}`;

        const buttonAddElement = document.createElement("button");
        const buttonRemoveElement = document.createElement("button");
        buttonAddElement.className = "btn-card--add";
        buttonRemoveElement.className = "btn-card--remove";
        buttonAddElement.innerText = "+";
        buttonRemoveElement.innerText = "-";

        card.appendChild(cardInfo);
        cardInfo.appendChild(nombreElement);
        cardInfo.appendChild(descElement);
        containerDiv.appendChild(precioElement);
        containerDiv.appendChild(containerBtn);
        containerBtn.appendChild(buttonAddElement);
        containerBtn.appendChild(buttonRemoveElement);
        card.appendChild(containerDiv);

        container.appendChild(card);
    });
};

getData();