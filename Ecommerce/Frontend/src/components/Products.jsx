import React from 'react';
import Data from './Data'; // Import the hook

function Products() {
    // Call the Data hook inside the component
    const { data: products, loading, error } = Data();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong</div>;
    }

    return (
        <div className="bg-green-300 w-full h-screen flex items-center justify-center">
            <div>
                <h1>Total Products:</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Products;
