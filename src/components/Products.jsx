import React, { useEffect, useState } from "react";
import './Products.css'

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((result) => { setProducts(result.products) });

    }, [])
    return (
        <>
        
    

            <main>

                {
                    products.map((product) => {
                        return (
                            <section className="productContainer">
                                <div key={product.id}>

                                    <img src={product.thumbnail} />
                                    <p id='title'>{product.title}</p>
                                    <p id="price">{product.price}</p>

                                </div>

                            </section>

                        )
                    })
                }


            </main>
        </>
    );
}
export default Products;

