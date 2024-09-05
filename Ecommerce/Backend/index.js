import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Shirt 1",
            price: 300,
            image: "https://i.pinimg.com/236x/3c/6c/bf/3c6cbf7c178a543c7d47c9870f035c25.jpg"
        },
        {
            id: 2,
            name: "Shirt 2",
            price: 700,
            image: "https://i.pinimg.com/236x/51/66/70/5166704be8ce504ab15117045d98fbcb.jpg"
        },
        {
            id: 3,
            name: "Shirt 3",
            price: 500,
            image: "https://i.pinimg.com/236x/a3/89/62/a38962e3e6e83c1ac8b6570e52c9edf4.jpg"
        },
        {
            id: 4,
            name: "Shirt 4",
            price: 1500,
            image: "https://i.pinimg.com/236x/35/f2/f8/35f2f88bcd07fdbcfe49c69335f8f4d3.jpg"
        },
        {
            id: 5,
            name: "Shirt 5",
            price: 450,
            image: "https://i.pinimg.com/236x/00/08/7f/00087f23a5d3ae9dde40f888dfaf636f.jpg"
        },
        {
            id: 6,
            name: "Pant 1",
            price: 800,
            image: "https://i.pinimg.com/474x/90/22/5c/90225c4f74d595f8b22bc352b1082af1.jpg"
        },
        {
            id: 7,
            name: "Pant 2",
            price: 740,
            image: "https://i.pinimg.com/236x/7c/b7/bd/7cb7bd6521d35486af15225143c8aac9.jpg"
        },
        {
            id: 8,
            name: "Pant 3",
            price: 1200,
            image: "https://i.pinimg.com/474x/be/ad/43/bead439d9acdfb8741bba8c398048414.jpg"
        },
        {
            id: 9,
            name: "Pant 4",
            price: 1300,
            image: "https://i.pinimg.com/236x/bf/31/fd/bf31fd2f2947ef22b39963c215d6cc40.jpg"
        },
        {
            id: 10,
            name: "Pant 5",
            price: 1600,
            image: "https://i.pinimg.com/236x/95/36/a9/9536a92f6ac6e93b4d7147c93197f395.jpg"
        },
        {
            id: 11,
            name: "Shoe 1",
            price: 950,
            image:"https://i.pinimg.com/236x/76/17/5d/76175d7ba208f92c745c55ea68510e27.jpg"
        },
        {
            id: 12,
            name: "Shoe 2",
            price: 650,
            image:"https://i.pinimg.com/236x/15/58/46/15584640db91b67d0fb533aac0363c36.jpg"
        },
        {
            id: 13,
            name: "Shoe 3",
            price: 2000,
            image:"https://i.pinimg.com/236x/d2/c3/3a/d2c33a58c6e7820e0d06317cfb4e7e8a.jpg"
        },
        {
            id: 14,
            name: "Shoe 4",
            price: 2100,
            image:"https://i.pinimg.com/236x/62/8d/f4/628df412d2f784b40230ce366f7442b0.jpg"
        },
        {
            id: 15,
            name: "Shoe 5",
            price: 3000,
            image:"https://i.pinimg.com/236x/bf/7c/0e/bf7c0eb23311da3411a6ee104ddc09d6.jpg"
        },
        {
            id: `16`,
            name: "Chair 1",
            price: 520,
            image: "https://i.pinimg.com/236x/23/1c/c6/231cc64890f6c3722010e18343f8575c.jpg"
        },
        {
            id: `17`,
            name: "Chair 2",
            price: 3450,
            image: "https://i.pinimg.com/474x/c0/6f/59/c06f599f9a9f82c5446745d74db90c9f.jpg"
        },
        {
            id: `18`,
            name: "Chair 3",
            price: 5000,
            image: "https://i.pinimg.com/236x/e7/a1/e1/e7a1e1bf4a2117e821c57ea07706b4ee.jpg"
        },
        {
            id: `19`,
            name: "Chair 4",
            price: 4000,
            image: "https://i.pinimg.com/236x/94/0e/cb/940ecb862d684587726ef15db97b8e8b.jpg"
        },
        {
            id: `20`,
            name: "Chair 5",
            price: 300,
            image: "https://i.pinimg.com/236x/e8/f0/85/e8f08579eead1a760cdca53b1bc2147e.jpg"
        },
        {
            id: `21`,
            name: "Tumbler 1",
            price: 400,
            image: "https://i.pinimg.com/236x/d6/4b/0c/d64b0c847ea14a5ec49083afd1148c50.jpg"
        },
        {
            id: `22`,
            name: "Tumbler 2",
            price: 600,
            image: "https://i.pinimg.com/236x/68/9e/2f/689e2fbd31d8f5c50d724a076700fd62.jpg"
        },
        {
            id: `23`,
            name: "Tumbler 3",
            price: 1600,
            image: "https://i.pinimg.com/236x/54/ef/10/54ef109e3bca42d242bc3c637e726876.jpg"
        },
        {
            id: `24`,
            name: "Tumbler 4",
            price: 800,
            image: "https://i.pinimg.com/236x/5b/7b/95/5b7b95f7394985576f456b4c28ae3441.jpg"
        },
        {
            id: `25`,
            name: "Tumbler 5",
            price: 1000,
            image: "https://i.pinimg.com/236x/df/80/0d/df800d040c4e785e1cd9bdd509716835.jpg"
        },
    ]

    if(req.query.search){
        const filterProducts = products.filter((product) => product.name.includes(req.query.search))
        res.send(filterProducts)
        return
    }

    setTimeout(() => res.json(products), 2000);

})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

