const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

// Serve images from the 'public' folder in backend
app.use("/images", express.static(path.join(__dirname, "public/images")));

// 📌 Menu Data with Categories
const menuItems = [
    {
        id: "L5SJ6HO5JN4TAQL3EUHZSLWS",
        name: "Gyros",
        category: "Sandwiches",
        price: 9.99,
        image_url: "/images/gyros.jpeg",
        order_link: "https://www.gyroshero.com/product/gyros/1?cp=true&sa=true&sbp=false&q=false"
    },
    {
        id: "XXOHVVPNRHMCJS52PRHSXYOQ",
        name: "Falafel Pita",
        category: "Sandwiches",
        price: 9.99,
        image_url: "/images/falafel-pita.jpeg",
        order_link: "https://www.gyroshero.com/product/falafel-pita/2?cp=true&sa=true&sbp=false&q=false"
    },
    {
        id: "L2WBPID63L7WWEDWGP5V2723",
        name: "Chicken Shawarma",
        category: "Sandwiches",
        price: 9.99,
        image_url: "/images/shawrma.jpeg",
        order_link: "https://www.gyroshero.com/product/chicken-shawrma/3?cp=true&sa=true&sbp=false&q=false"
    },
    {
        id: "S42WJXHWVHHDTJTTJBV3LOU2",
        name: "Zinger Wrap",
        category: "Sandwiches",
        price: 9.99,
        image_url: "/images/zinger-wrap.jpeg",
        order_link: "https://www.gyroshero.com/product/zinger-wrap/74?cp=true&sa=false&sbp=false&q=false&category_id=2"
    },
    {
        id: "WBKMNREXXO7SOWF6RIPIABAL",
        name: "Philly Cheesesteak",
        category: "Sandwiches",
        price: 9.99,
        image_url: "/images/philly-cheesesteak.jpeg",
        order_link: "https://www.gyroshero.com/product/philly-cheesesteak/51?cp=true&sa=true&sbp=false&q=false"
    },
    {
        id: "RYP2P4W7HFC2WTJVHMCX4TXT",
        name: "Chicken Panini",
        category: "Sandwiches",
        price: 9.99,
        image_url: "/images/chicken-panini.jpeg",
        order_link: "https://www.gyroshero.com/product/chicken-panini/23?cp=true&sa=false&sbp=false&q=false&category_id=2"
    },
    {
        id: "6FYLQTS4GCEYMZ6MCDYSTXQY",
        name: "Hero Burger",
        category: "Sandwiches",
        price: 12.99,
        image_url: "/images/hero-burger.jpeg",
        order_link: "https://www.gyroshero.com/product/hero-burger/52?cp=true&sa=true&sbp=false&q=false"
    },
    {
        id: "32WLCC3AFVQ2TK4C2WN45UJS",
        name: "Tender Bun",
        category: "Sandwiches",
        price: 9.99,
        image_url: "/images/tender-bun.jpeg",
        order_link: "https://www.gyroshero.com/product/tender-bun/26?cp=true&sa=false&sbp=false&q=false&category_id=2"
    },
    {
        id: "GFCU32DGMQRKHL7FYMCDLK7Y",
        name: "HERO COMBO PLATE",
        category: "Plates",
        price: 12.99,
        image_url: "/images/hero-combo.jpeg",
        order_link: "https://www.gyroshero.com/product/hero-combo-plate/5?cp=true&sa=true&sbp=false&q=false"
    },
    {
        id: "REL3CPZEN5X5VN5HH4MFLWCX",
        name: "GYROS OVER RICE PLATE",
        category: "Plates",
        price: 11.99,
        image_url: "/images/gyros-rice.jpeg",
        order_link: "https://www.gyroshero.com/product/gyros-rice/7?cp=true&sa=false&sbp=false&q=false&category_id=3"
    },
    {
        id: "5GVGODTBMB7WBTBGT7CXKWQG",
        name: "CHICKEN OVER RICE PLATE",
        category: "Plates",
        price: 11.99,
        image_url: "/images/chicken-rice.jpeg",
        order_link: "https://www.gyroshero.com/product/chicken-over-rice/31?cp=true&sa=false&sbp=false&q=false&category_id=3"
    },
    {
        id: "T2WE62WCZBHWL5UQXZSVVJVB",
        name: "Falafel Plate",
        category: "Plates",
        price: 11.99,
        image_url: "/images/falafel-plate.jpeg",
        order_link: "https://www.gyroshero.com/product/falafel-plate/4?cp=true&sa=true&sbp=false&q=false"
    },
    {
        id: "X5QGBQH6FVBJJGQZ2W2SPAQQ",
        name: "Hummus",
        category: "Sides",
        price: 4.99,
        image_url: "/images/hummus.jpeg",
        order_link: "https://www.gyroshero.com/product/hummus/9?cp=true&sa=true&sbp=false&q=false"
    },
    {
        id: "Z2Q6JJNICPBQDWZIHNXNJ3JM",
        name: "Crinkle Fries",
        category: "Sides",
        price: 4.99,
        image_url: "/images/crinkle-fries.jpeg",
        order_link: "https://www.gyroshero.com/product/crinkle-fries/10?cp=true&sa=true&sbp=false&q=false"
    }
];

// ✅ API Endpoint to Get Categorized Menu
app.get("/api/menu", (req, res) => {
    res.json(menuItems);
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});