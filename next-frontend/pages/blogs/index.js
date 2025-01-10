import React from "react";
import { createClient } from 'next-sanity';
//import styles from '../styles/home.module.css';
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import Script from "next/script";
import NavBar from "@/components/NavBar";
import Head from "next/head";

const Blogs = ({blogs}) => {
    const client = createClient({
        projectId: 'h46ykdai',
        dataset: 'production',
        useCdn: false,
    });
    const builder = imageUrlBuilder(client);
    useEffect(()=>{
        
    }, []);

    return (
        <>
            <NavBar />
            <div className="bg-grey-50" id="blog">
                <div className="container py-16 md:py-20">
                    <h2 className="text-center font-header pt-10 text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        I also like to write
                    </h2>
                    <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        Check out my latest posts!
                    </h4>
                    <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                        {blogs.map((item) => {
                            return <Link key= {item.slug.current} href={"/blog/" + item.slug.current} className="shadow cursor-pointer">
                                <div style={{ backgroundImage: `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})` }}
                                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                                    <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                                    <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                                        More</span>
                                </div>
                                <div className="bg-white py-6 px-5 xl:py-8">
                                    <span className="block font-body text-lg font-semibold text-black">{item.title}</span>
                                    <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const client = createClient({
        projectId: 'h46ykdai',
        dataset: 'production',
        useCdn: false,
    });
    
    const query = `*[_type == "blog"] {
        title,
        content,
        metadesc,
        slug,
        blogimage {
            asset -> {
                url
            },
            caption,
            altText
        }
    }`;
    
    const blogs = await client.fetch(query);

    return {
        props: {
            blogs,
        },
    };
}

export default Blogs;