import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity';
import NavBar from '@/components/NavBar';

const client = createClient({
    projectId: 'h46ykdai',
    dataset: 'production',
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export async function getServerSideProps() {
    const sanityAPI = "https://h46ykdai.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+in+%5B%22product%22%5D%5D";

    const response = await fetch(sanityAPI);
    const data = await response.json();

    if (!data || !data.result) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            products: data.result,
        },
    };
}

const Products = ({ products }) => {
    const serializers = {
    };

    return (
        <>
            <NavBar />
            <div className='pt-20'>
                <h1 className='text-center font-bold'>Our Products</h1>
                <div className="product-list">
                    <h2 className='font-extrabold ml-5'>{products[0].title}</h2>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product ml-10">
                                {product.image && <img src={builder.image(product.image).width(200).url()} alt={product.title} />}
                                <h2 className='ml-10'>{product.name}</h2>
                                <h2 className='ml-10'>${product.price}</h2>
                                {product.description && (
                                    <div className="product-description">
                                        <BlockContent blocks={product.description} serializers={serializers} />
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;