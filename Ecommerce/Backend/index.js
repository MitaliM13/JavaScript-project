import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Cotton shirt",
            price: 700,
            image: "https://i.pinimg.com/564x/fc/5e/8b/fc5e8bfa508ed95bf11371f187c2455d.jpg",
            detail: "Loose Striped Peter Pan Collar Button Patchwork Cotton Shirt FallFabric: Cotton BlendedSize & Fit: Fit: This garment fits true to size.Length: Size XL measures 25.467 from shoulder to hemBust: Great for any cup size. Waist: Loose Fit. Comfortable room throughout midsection.Hip: Loose Fit - room for hips. Hand Wash Cold."
        },
        {
            id: 2,
            name: "V-neck silk top",
            price: 900,
            image: "https://i.pinimg.com/564x/26/ae/26/26ae2697ce1f362fdb06c0402f704a2a.jpg",
            detail: "This cowl neck silky tank top with drape stlye is a lightweight, breathable top for any activities, give a slight relaxed sexy style fit. Super soft and comfortable cami tank tops for women. It's skin-friendly and moisture to help feel cool in summer and warm in winter. Trendy cowl neck design camisole is timeless for a casually chic day or evening look. Silky Cami perfect for pajama parties, dorm rooms, vacation settings, or a relaxing evening at home. Fashion Casual Daily Wear"
        },
        {
            id: 3,
            name: "Oversized t-shirt",
            price: 500,
            image: "https://i.pinimg.com/564x/4d/97/54/4d9754fa2904b0fa95ccc973808a96b0.jpg",
            detail: "Make sure your wardrobe is ready to go tubular with this Oversized Cool Surfers Graphic Tee Shirt! Perfect for beach bums and wave riders alike, this trendy, loose unisex shirt is a rad choice if you want to make a splash. Surf’s up, let’s go style Product information: Color: Black, apricot, navy blue, white, Size: M,L,XL,2XL,3XL,4XL,5XL Main fabric composition: linen"
        },
        {
            id: 4,
            name: "Lace Blouse",
            price: 1500,
            image: "https://i.pinimg.com/236x/35/f2/f8/35f2f88bcd07fdbcfe49c69335f8f4d3.jpg",
            detail: "Add a touch of elegance and sophistication to your wardrobe with our Open Back Puff Long Sleeve Lace Blouse. The delicate lace detailing and open back design are sure to turn heads and make you feel confident and stylish. Perfect for any occasion, this blouse is a must-have for any fashion-forward woman. Decoration: Lace with back zip closure Sleeve Style: Puff Sleeve Material: Polyester Clothing Length: Short Collar: V-Neck Sleeve Length(cm): Full Shirt Type: Blouse"
        },
        {
            id: 5,
            name: "Casual streetwear",
            price: 450,
            image: "https://i.pinimg.com/564x/ff/e7/cf/ffe7cf26c87f9d8b9196f045e8580d86.jpg",
            detail: "SPECIFICATIONS: Weight: 220GType: PulloversThickness: STANDARDStyle: StreetwearSleeve Style: RegularSleeve Length(cm): FullSeason: Spring/AutumnRelease Date: Spring 2022Pattern Type: SolidOrigin: CN(Origin)Model Number: 97148Material Composition: Synthetic fiberMaterial: CottonLiner Type: None-LinerItem Type: HoodiesHooded: NoGender: WOMENFabric content: 91% (inclusive) - 95% (inclusive)Fabric Type: CottonClothing Patterns: LOOSEBrand "
        },
        {
            id: 6,
            name: "Woman pants",
            price: 800,
            image: "https://i.pinimg.com/474x/90/22/5c/90225c4f74d595f8b22bc352b1082af1.jpg",
            detail: "Product Details About this Item Fabric Type 💟【Material】: 64% Polyester, 32% Viscose, 4% Elastane. The Wide Leg Pants is Made of a soft woven fabric with a flattering drape and a little stretch throughout. These slacks for women adapt slight stretch, breathable, skin-friendly and flowy polyester fabric to offer relaxing freedom. So cool and fashionable to wear such business casual outfits for women to top off your ordinary casual while matching with your simple attire!"
        },
        {
            id: 7,
            name: "Demin jeans",
            price: 740,
            image: "https://i.pinimg.com/564x/f4/13/e4/f413e47f2feb2d0bda7d2882d1d9f599.jpg",
            detail: "Details Composition: 70% Cotton, 30% Polyester Design: Plain Style: Casual Thickness: Regular Sheer: No Material: Denim Occasion: Leisure Size & Fit Stretch: Non-stretch Fit Type: Shift Cm Inch Size Length Hips Inseam Waist XS 109 92 77.5 70 S 110 96 78 74 M 111 100 78.5 78 L 112 106 79 84 XL 113 112 79.5 90 XS 42.9 36.2 30.5 27.6 S 43.3 37.8 30.7 29.1 M 43.7 39.4 30.9 30.7 L 44.1 41.7 31.1 33.1 XL 44.5 44.1 31.3 35.4 Care Instructions Hand wash cold with like colors Do not bleach Do not soak Iron at a maximum of 110°C/230°F Tumble dry medium"
        },
        {
            id: 8,
            name: "Pant 3",
            price: 1200,
            image: "https://i.pinimg.com/474x/be/ad/43/bead439d9acdfb8741bba8c398048414.jpg",
            detail: "Trousers best for travelling"
        },
        {
            id: 9,
            name: "Pant 4",
            price: 1300,
            image: "https://i.pinimg.com/236x/bf/31/fd/bf31fd2f2947ef22b39963c215d6cc40.jpg",
            detail: ""
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

