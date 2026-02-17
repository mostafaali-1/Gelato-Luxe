import React from 'react';
import './Products.css';

const products = [
    {
        id: 1,
        name: "Golden Vanilla Bean",
        description: "Madagascan vanilla infused with flecks of 24k gold leaf for a truly royal treat.",
        price: 8.50,
        color: "#F9E4B7",
        category: "Classic",
        image: `${import.meta.env.BASE_URL}images/flavors/vanilla.png`
    },
    {
        id: 2,
        name: "Dark Midnight Truffle",
        description: "70% Ecuadorian dark chocolate with a rich raspberry ribbon and truffle chunks.",
        price: 9.00,
        color: "#5D4037",
        category: "Chocolate",
        image: `${import.meta.env.BASE_URL}images/flavors/chocolate.png`
    },
    {
        id: 3,
        name: "Pistachio Sicilian",
        description: "Roasted pistachios from Bronte, lightly salted and blended into a creamy base.",
        price: 9.50,
        color: "#C5E1A5",
        category: "Nutty",
        image: `${import.meta.env.BASE_URL}images/flavors/pistachio.png`
    },
    {
        id: 4,
        name: "Honey Lavender Dream",
        description: "Local wild honey matched with fresh lavender buds for a floral, soothing finish.",
        price: 8.75,
        color: "#E1BEE7",
        category: "Floral",
        image: `${import.meta.env.BASE_URL}images/flavors/honey-lavender.png`
    },
    {
        id: 5,
        name: "Salted Caramel Seduction",
        description: "Butter caramel swirled with Himalayan pink sea salt and crunchy toffee bits.",
        price: 8.50,
        color: "#FFCC80",
        category: "Sweet",
        image: `${import.meta.env.BASE_URL}images/flavors/salted-caramel.png`
    },
    {
        id: 6,
        name: "Strawberry Balsamic",
        description: "Ripe harvest strawberries with a hint of aged balsamic glaze for depth.",
        price: 8.50,
        color: "#FFAB91",
        category: "Fruity",
        image: `${import.meta.env.BASE_URL}images/flavors/strawberry.png`
    },
    {
        id: 7,
        name: "Matcha Green Tea",
        description: "Premium ceremonial grade matcha from Uji, Japan. Earthy and smooth.",
        price: 9.25,
        color: "#A5D6A7",
        category: "Tea",
        image: `${import.meta.env.BASE_URL}images/flavors/matcha.png`
    },
    {
        id: 8,
        name: "Espresso Roast",
        description: "Cold-brewed Arabica coffee gelato with chocolate-covered espresso beans.",
        price: 8.75,
        color: "#8D6E63",
        category: "Coffee",
        image: `${import.meta.env.BASE_URL}images/flavors/espresso.png`
    }
];

const Products = ({ addToCart }) => {
    return (
        <section id="flavors" className="products-section">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Our Collection</span>
                    <h2>Curated Flavors</h2>
                    <div className="separator"></div>
                </div>

                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="card-top" style={{ backgroundColor: product.color + '20' }}>
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                ) : (
                                    <div className="product-circle" style={{ backgroundColor: product.color }}></div>
                                )}
                            </div>
                            <div className="card-body">
                                <span className="card-category">{product.category}</span>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="card-footer">
                                    <span className="price">${product.price.toFixed(2)}</span>
                                    <button className="add-btn" onClick={() => addToCart(product)}>
                                        <span>Add</span>
                                        <span className="material-icons">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
