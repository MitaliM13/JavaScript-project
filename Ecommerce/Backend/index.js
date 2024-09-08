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
            name: "Bell bottom jeans",
            price: 1200,
            image: "https://i.pinimg.com/564x/cf/57/71/cf577102253ec2c262831b1d76f78134.jpg",
            detail: "Discover the epitome of style and comfort with our Women's High Stretch Slim Fit Bell Bottom Jeans featuring slant pockets. Crafted to accentuate your curves flawlessly, these jeans offer unparalleled stretch and a sleek silhouette. Elevate your wardrobe with this timeless and versatile piece."
        },
        {
            id: 9,
            name: "Low rise jeans",
            price: 1300,
            image: "https://i.pinimg.com/564x/ee/3b/2b/ee3b2bfe16677dcf038db60029744da9.jpg",
            detail: "Our favourite denim hue. In dark vintage, the Roomy jean feature a low rise, relaxed fit with extra wide legs and a zip and button fastening. Complete with pockets and belt loops. Complete the look with our basic, everyday, Jansu top. NOW AVAILABLE IN THREE LEG LENGTHS MODEL WEARS SIZE: W26/32L - MODEL HEIGHT:5'7"
        },
        {
            id: 10,
            name: "Vintage ripped jeans",
            price: 1600,
            image: "https://i.pinimg.com/564x/12/20/37/1220372964577f7c6bf103bdbf6aebc1.jpg",
            detail: "Product Information: Applicable age: 18-24 years old Fabric classification: thin denim Color category: Blue Applicable to: Ladies Size information: Size: S M L X Size（cm） Pants length Waist Hips S 102 64 94 M 103 68 98 L 104 72 102 XL 105 76 106 Note： 1. Asian sizes are 1 to 2 sizes smaller than European and American people. Choose the larger size if your size between two sizes. Please allow 2-3cm differences due to manual measurement"
        },
        {
            id: 11,
            name: "Jordans white",
            price: 950,
            image:"https://i.pinimg.com/236x/76/17/5d/76175d7ba208f92c745c55ea68510e27.jpg",
            detail: "Buy Nike Mens Auir Jordan 1 Mid Sneaker, Adult and other Basketball at Amazon.com. Our wide selection is eligible for free shipping and free returns."
        },
        {
            id: 12,
            name: "Womens sneakers",
            price: 650,
            image:"https://i.pinimg.com/564x/e3/d2/77/e3d277810a3d62568c4f573254ad9997.jpg",
            detail: "Shipping: Worldwide Express Shipping Available Delivery time: 🚚7-15Days Fast Shipping Returns: Fast refund,💯100% Money Back Guarantee. Brand Name: YBQJOO Upper Material: PU Origin: Mainland China Heel Height: Super High (8cm-up) Shoes Type: Other Fashion Element: Shallow Department Name: Adult Season: Spring/Autumn Model Number: 20211 Pattern Type: Solid Insole Material: EVA Fit: Fits true to size, take your normal size Lining Material: PVC Closure Type: Lace-up pattern: Solid color Inner material: Gauze Applicable Sports: currency Shoe gang height: Low help Heel height: Flat heel Heel shape: Internal elevation Sole Material: PVC Popular elements: Sewing style: Round head"
        },
        {
            id: 13,
            name: "Thick heeled sandals",
            price: 2000,
            image:"https://i.pinimg.com/564x/7a/41/8a/7a418a21d72bddcdf2b777510fe37594.jpg",
            detail: "Shipping: Worldwide Express Shipping AvailableDelivery time: 7-15Days Fast ShippingReturns: Fast refund, 100% Money Back Guarantee.Brand Name: OYMLGHeel Height: Med (3cm-5cm)With Platforms: NoSandal Type: Modern SandalsOrigin: Mainland ChinaOccasion: CasualUpper Material: PUOutsole Material: RubberBack Counter Type: Ankle StrapPattern Type: SolidSide Vamp Type: OpenFit: Fits true to size, take your normal sizeStyle: ConciseHeel"
        },
        {
            id: 14,
            name: "Ankel high boots",
            price: 2100,
            image:"https://i.pinimg.com/564x/10/9c/c0/109cc068a74c61f29d7733549c197029.jpg",
            detail: "Boot Type: Motorcycle boots Shaft Material: flock Upper Material: flock Season: Spring/Autumn Heel Type: Square heel Lining Material: PU Boot Height: ANKLE Item Type: Boots Fashion Element: Belt Buckle Department Name: Adult Toe Shape: round toe Heel Height: Super High (8cm-up) With Platforms: Yes Platform Height: 3-5cm Style: Office Lady is_handmade: Yes Heel Height: 11.5cm Leather Style: Soft Leather"
        },
        {
            id: 15,
            name: "Jane design heels",
            price: 3000,
            image:"https://i.pinimg.com/564x/e6/1e/3e/e61e3ef8369946c6cd073c5671184582.jpg",
            detail: "Upper Material: Cowhide Toe Shape: Round Head Heel Height: Super High Heel (over 8cm) Leather characteristics: Patent Leather Category: Mary jane shoes Style: Korean Style Fashion Element: Belt Decoration, Buckle, Leather Stitching Pattern: Solid Color Heel Shap: Chunky Heel Sole material: Rubber Closure Type: Ankle-strap buckle Lining Material: Microfiber Upper height: Low Top Heel Shape: Chunky Heel Wearing Style: Buckle Sole Craft: Viscose Shoes Insole Material: Pu leather Occasion: Banquet"
        },
        {
            id: `16`,
            name: "Wood dining chair",
            price: 520,
            image: "https://i.pinimg.com/564x/23/1c/c6/231cc64890f6c3722010e18343f8575c.jpg",
            detail: "What is Included Number of Items Included: 2 Piece Set 4 Piece Set 6 Piece Set 8 Piece Set Product Type: Side Chair Back Style: Open Back Heights: Low Back Material: Wood Upholstered Leg Material: Wood Color: Black Grey Natural White Orange Light Gray Leg Color: Natural Wood Walnut Style: Modern Purposeful Distressing Type: No Distressing Wood Tone: Light Wood Medium Wood Seating Wood Species: Rubberwood"
        },
        {
            id: `17`,
            name: "Ergonomic office chair",
            price: 3450,
            image: "https://i.pinimg.com/564x/0c/9d/45/0c9d45fc07e2514f3bc51dade1d35878.jpg",
            detail: "MODERN DESK CHAIR: Our accent chairs for living room, kitchen, bedroom, and home office. The matt paint is luxurious and generous, whether it is placed at home or in the company, it complements each other. The health chair is ergonomic. The seat is wide and comfortable, and the stylish line seating surface highlights the texture."
        },
        {
            id: `18`,
            name: "Luxury office chair",
            price: 5000,
            image: "https://i.pinimg.com/564x/3b/fe/63/3bfe6383259d89e945b3b1ccc1e62ea2.jpg",
            detail: "The chic emeas design Luxury Ergonomic Swivel Office Chair can give your house or business a rather more premium look. The comfort molded seat features lumbar support built in and a locking tilt mechanism for a mid-pivot knee tilt. For ultimate comfort, there is plenty of padding on the seat, back, and arm rests. Dacron, a synthetic silk, is used to cover PU-Injected foam cushions."
        },
        {
            id: `19`,
            name: "Occasional chair",
            price: 4000,
            image: "https://i.pinimg.com/564x/9a/be/ca/9abeca7c2a19c9a016a473ddd404caac.jpg",
            detail: "Relax to your heart’s content on the Taylor Boucle Chair, an ideal addition to your living space. Cozy and contemporary, this elegantly curved chair features a stylish bouclé fabric and iron details. SPECIFICATIONS Height Option 1: 72 cm Height Option 2: 80 cm Made of: Boucle Fabric, Wool, Iron, FRP, Wood Customisation: We provide an extensive selection of custom colours. To order a custom colour, please get in touch with us via the live chat on our website."
        },
        {
            id: `20`,
            name: "Vanity chair",
            price: 300,
            image: "https://i.pinimg.com/564x/61/d3/54/61d3545fc6f21dfc4fbabbc5ee15a434.jpg",
            detail : " The back of the butterfly chair is carefully designed into the exquisite shape of a bow, the overall shape is unique and beautiful, as a single product or with other scenes have different levels of beauty. Comfortable: The cushion of this product is made of skin-friendly velvet fabric, soft to the touch, bringing you the comfort of being cared for at all times"
        },
        {
            id: `21`,
            name : "Coffee Table",
            price: 890,
            image: "https://i.pinimg.com/564x/90/71/96/9071969160b20b469643cdf8cf83e48e.jpg",
            detail: "A room-anchoring piece for any living space, this striking round coffee table features a warm reeded wood design. Style with a decorative tray and books for an inviting touch. Pair with other pieces from the Scandinavian-inspired Lucca collection, defined by modern reeded designs. Modern reeded wood design Variance in wood grain Fully assembled"
        },
        {
            id: `22`,
            name : "Side Table",
            price: 760,
            image: "https://i.pinimg.com/564x/9b/74/79/9b74790b3c19d22d6bb37a04d41fbb38.jpg",
            detail: "Introducing Indigo, our luxurious boho-style coffee table that seamlessly merges minimalist modern design with the warmth of solid wood. With a circular shape our Nordic inspired Indigo adds a touch of sophistication to any space. Elevate your living area with the understated elegance of this circular coffee table, where boho luxury meets minimalist charm."
        },
        {
            id: `23`,
            name : "Coffe Table",
            price: 500,
            image: "https://i.pinimg.com/564x/6b/27/24/6b2724cd4ec8013e4b537cd1c5a8893d.jpg",
            detail: "Kiln-dried solid mango wood top and legs. Covered in a water-based Burnt Wax finish. The mango wood used on this product is sustainably sourced from trees that no longer produce fruit. Legs feature adjustable levelers to adapt to varying floor levels. This contract-grade item is manufactured to meet the demands of commercial use in addition to residential. See more . Made in India."
        },
        {
            id: `24`,
            name : "Dining Table",
            price: 3400,
            image: "https://i.pinimg.com/736x/c3/e0/28/c3e0287d4cb8abf3911898aa1c1c7886.jpg",
            detail: "The farmhouse wood dining table offers a rustic charm and an earthy and natural feeling to your space. It features an ample rectangle tabletop that can easily seat 6 people. The textured double pedestal base provides sturdy support as well as a contemporary look. Perfect for everyday meals or to accommodate all your guests at gatherings. - Care & Clean: Wipe Clean With Damp Cloth, Wipe Dry With Clean Cloth."
        },
        {
            id: `25`,
            name : "Pedestal Side Table",
            price: 1200,
            image: "https://i.pinimg.com/564x/7a/84/15/7a84152ae079cca62545b2207b0e759b.jpg",
            detail: "Design and convenience go together effortlessly with the Malibu side table. The use of mango wood, metal, and travertine creates a beautiful mix of textures and colors. The travertine base radiates design and the warm tones of the mango wood top make this a unique coffee table. Dia14 x H22 in | Weight 18lbs Dia35 x H55 cm | Weight 8kgs Tabletop | Mangowood Legs "
        },
        {
            id: `26`,
            name: "White mini bear",
            price: 350,
            image: "https://i.pinimg.com/236x/c3/b0/5f/c3b05f3852437522cef1d457c6570e18.jpg",
            detail: "Soft little white bear. With blush on her face and a little hair clip. Nicely dressed up. All sweet, elegant and cuddly. For all girly girls out there."
        },
        {
            id: `27`,
            name: "Brown bear",
            price: 900,
            image: "https://i.pinimg.com/564x/7d/e5/0b/7de50b6ff63f93afa5020183ff69fe50.jpg",
            detail: "Soft and cuddly bworn bear. Just perfect size to decorate your room. Bring that aesthetic vitage feel."
        },
        {
            id: `28`,
            name: "Bunnies",
            price: 600,
            image: "https://i.pinimg.com/474x/9d/5a/b7/9d5ab72b9aa3f263928593c7a21fc63d.jpg",
            detail: "Always comes in pair. Buy these cute little bunnies to brighten up ur day a little more. One in brownish shade with white bows and one in white shade with pink bows. Just perfect size to cuddle and sleep with."
        },
        {
            id: `29`,
            name: "Hello kitty plushie",
            price: 1200,
            image: "https://i.pinimg.com/236x/dc/c8/ca/dcc8ca26a0f3de1756062c9bbb190b89.jpg",
            detail: "A cute little hello kitty plushie awaits to be in your room and be your friend. Comes with a cap and a huge pink bow and a pink neck-tie. Perfect for any room. "
        },
        {
            id: `30`,
            name: "Penguin friends",
            price: 1500,
            image: "https://i.pinimg.com/236x/23/10/a3/2310a3dbebede726866a12881e992af6.jpg",
            detail: "These friends are so cute and are perfect for any room. Buy these cute little friends to brighten up ur day a little more. Just perfect size to cuddle and sleep with. Always together with each other and with you"
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

