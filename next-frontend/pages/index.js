import { createClient } from 'next-sanity';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import { PortableText } from 'next-sanity';
import NavBar from '@/components/NavBar';

export default function Home({ blogs, profile, skill, portfolio, clientd, statistics, contact }) {
    console.log(contact);
    
    const client = createClient({
        projectId: 'h46ykdai',
        dataset: 'production',
        useCdn: false,
    });
    const builder = imageUrlBuilder(client);

    return (
        <>
            <Script src="/assets/js/main.js"></Script>
            <NavBar />
            <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden">
                <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
                    <button className="absolute top-0 right-0 mt-4 mr-4">
                        <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
                    </button>

                    <ul className="mt-8 flex flex-col">
                        <li className="py-2">
                            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
                        </li>

                        <li className="py-2">
                            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>
                        </li>

                        <li className="py-2">
                            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>
                        </li>

                        <li className="py-2">

                            <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>

                        </li>

                        <li className="py-2">

                            <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

                        </li>

                        <li className="py-2">
                            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>
                        </li>

                        <li className="py-2">
                            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>
                        </li>

                        <li className="py-2">
                            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="relative bg-cover bg-center bg-no-repeat py-8"
                    style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
                    <div
                        className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
                    </div>

                    <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                        <div className="flex flex-col items-center justify-center lg:flex-row">
                            <div className="rounded-full border-8 border-primary shadow-xl">
                                <img src={builder.image(profile[0].image).width(200).url()} className="h-48 rounded-full sm:h-50" alt="author" />
                            </div>
                            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                                    Hello I'm {profile[0].title}
                                </h1>
                                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                                        <p className="font-body text-lg uppercase text-white">Let's connect</p>
                                        <div className="hidden sm:block">
                                            <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                                        <a href={profile[0].fbLink}>
                                            <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                                        </a>
                                        <a href={profile[0].twitterLink} className="pl-4">
                                            <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                                        </a>
                                        <a href={profile[0].instaLink} className="pl-4">
                                            <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                                        </a>
                                    </div>
                                </div>
                                <Link href={'/blogs'}><div className='buttons pt-5 text-center md:text-left'>
                                    <button className='text-white border-2 px-4 py-2 rounded-2xl'>All Blogs</button>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-grey-50" id="about">
                    <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
                        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                                Who am I?
                            </h2>
                            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                                I'm {profile[0].title}, a Web Developer
                            </h4>
                            <PortableText value={profile[0].description} />
                            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                                <div className="flex items-center justify-center sm:justify-start">
                                    <p className="font-body text-lg font-semibold uppercase text-grey-20">
                                        Connect with me
                                    </p>
                                    <div className="hidden sm:block">
                                        <i className="bx bx-chevron-right text-2xl text-primary"></i>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                                    <a href={profile[0].fbLink}>
                                        <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                                    </a>
                                    <a href={profile[0].twitterLink} className="pl-4">
                                        <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                                    </a>
                                    <a href={profile[0].instaLink} className="pl-4">
                                        <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                            <div>
                                <div className="flex items-end justify-between">
                                    <h4 className="font-body font-semibold uppercase text-black">
                                        HTML & CSS
                                    </h4>
                                    <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                                </div>
                                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                                    <div className="h-3 rounded-full bg-primary" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="flex items-end justify-between">
                                    <h4 className="font-body font-semibold uppercase text-black">Laravel</h4>
                                    <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
                                </div>
                                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                                    <div className="h-3 rounded-full bg-primary" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="flex items-end justify-between">
                                    <h4 className="font-body font-semibold uppercase text-black">
                                        React
                                    </h4>
                                    <h3 className="font-body text-3xl font-bold text-primary">80%</h3>
                                </div>
                                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                                    <div className="h-3 rounded-full bg-primary" style={{ width: '98%' }}></div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="flex items-end justify-between">
                                    <h4 className="font-body font-semibold uppercase text-black">Shopify</h4>
                                    <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                                </div>
                                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                                    <div className="h-3 rounded-full bg-primary" style={{ width: '91%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-16 md:py-20" id="services">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Here are my skills
                    </h2>
                    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        The services I provide
                    </h3>
                    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                    {skill.map((daata) => {
                        return (
                        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img src={builder.image(daata.image).width(200).url()} alt="development icon" />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img src={builder.image(daata.image).width(200).url()} alt="development icon" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    {daata.name}
                                </h3>
                                <PortableText value={daata.description} />
                            </div>
                        </div>
                        )
                    })}

                        {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    Frontend Development
                                </h3>
                                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                                    I specialize in creating responsive and visually engaging user interfaces using HTML, CSS, and JavaScript. With React.js, I build dynamic, component-based applications that provide a seamless user experience.
                                </p>
                            </div>
                        </div>
                        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                                <div className="hidden group-hover:block">
                                    <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" />
                                </div>
                                <div className="block group-hover:hidden">
                                    <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                                    E-Commerce Solutions
                                </h3>
                                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                                    I have experience with Sanity.io, a flexible headless CMS for dynamic content management, and WordPress, where I build custom themes and plugins for tailored content solutions. I specialize in Shopify, e-commerce stores, from theme development to product management, enhance the online shopping experience.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="container py-16 md:py-20" id="portfolio">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        {portfolio[2].title}
                    </h2>
                    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        {portfolio[2].name}
                    </h3>
                    <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                        {portfolio.map((port) => {
                            return (
                                <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
                                    <img src={builder.image(port.image).url()} className="w-full shadow" alt="portfolio image" />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div className="bg-grey-50" id="clients">
                    <div className="container py-16 md:py-20">
                        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
                            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                                {clientd[0].title}
                            </h2>
                            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                                {clientd.map((clientt) => {
                                    return (
                                        <span className="m-8 block">
                                            <img src={builder.image(clientt.image).url()} alt="client logo" className="mx-auto block h-12 w-auto" />
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-16 md:py-20" id="work">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        My work experience
                    </h2>
                    <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        Here's what I did before freelancing
                    </h3>

                    <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
                        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                            <div className="md:w-2/5">
                                <div className="flex justify-center md:justify-start">
                                    <span className="shrink-0">
                                        <img src="/assets/img/logo-spotify.svg" className="h-auto w-32" alt="company logo" />
                                    </span>
                                    <div className="relative ml-3 hidden w-full md:block">
                                        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-3/5">
                                <div className="relative flex md:pl-18">
                                    <span
                                        className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                                    <div className="mt-1 flex">
                                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                        <div className="md:-mt-1 md:pl-8">
                                            <span className="block font-body font-bold text-grey-40">Apr 2015 - Mar 2018</span>
                                            <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Frontend
                                                Developer</span>
                                            <div className="pt-2">
                                                <span className="block font-body text-black">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit.
                                                    Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                                                    venenatis enim.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                            <div className="md:w-2/5">
                                <div className="flex justify-center md:justify-start">
                                    <span className="shrink-0">
                                        <img src="/assets/img/logo-microsoft.svg" className="h-auto w-32" alt="company logo" />
                                    </span>
                                    <div className="relative ml-3 hidden w-full md:block">
                                        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-3/5">
                                <div className="relative flex md:pl-18">
                                    <span
                                        className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                                    <div className="mt-1 flex">
                                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                        <div className="md:-mt-1 md:pl-8">
                                            <span className="block font-body font-bold text-grey-40">Mar 2018 - September 2019</span>
                                            <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Software
                                                Engineer</span>
                                            <div className="pt-2">
                                                <span className="block font-body text-black">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit.
                                                    Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                                                    venenatis enim.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                            <div className="md:w-2/5">
                                <div className="flex justify-center md:justify-start">
                                    <span className="shrink-0">
                                        <img src="/assets/img/logo-fedex.svg" className="h-auto w-32" alt="company logo" />
                                    </span>
                                    <div className="relative ml-3 hidden w-full md:block">
                                        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-3/5">
                                <div className="relative flex md:pl-18">
                                    <span
                                        className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                                    <div className="mt-1 flex">
                                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                        <div className="md:-mt-1 md:pl-8">
                                            <span className="block font-body font-bold text-grey-40">October 2019 - Feb 2021</span>
                                            <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">DevOps
                                                Engineer</span>
                                            <div className="pt-2">
                                                <span className="block font-body text-black">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit.
                                                    Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                                                    venenatis enim.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
                    style={{ backgroundImage: "url(/assets/img/experience-figure.png)" }} id="statistics">
                    <div className="container">
                        <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                                {statistics.map((stat) => {
                                    return (
                                    <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                                        <div>
                                            <img src={builder.image(stat.image).url()} className="mx-auto h-12 w-auto md:h-20" alt="icon project" />
                                        </div>
                                        <div className="pt-5 md:pl-5 md:pt-0">
                                            <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                                                {stat.number}
                                            </h1>
                                            <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                                {stat.name}
                                            </h4>
                                        </div>
                                    </div>
                                    )
                                })}

                                {/* <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                                    <div>
                                        <img src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" />
                                    </div>
                                    <div className="pt-5 md:pl-5 md:pt-0">
                                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                                            3
                                        </h1>
                                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                            Awards Won
                                        </h4>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                                    <div>
                                        <img src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20"
                                            alt="icon happy clients" />
                                    </div>
                                    <div className="pt-5 md:pl-5 md:pt-0">
                                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                                            8
                                        </h1>
                                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                            Happy Clients
                                        </h4>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                                    <div>
                                        <img src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" />
                                    </div>
                                    <div className="pt-5 md:pl-5 md:pt-0">
                                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                                            99
                                        </h1>
                                        <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                            Bugs Fixed
                                        </h4>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-grey-50" id="blog">
                    <div className="container py-16 md:py-20">
                        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
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

                            {/* <a href="/post" className="shadow">
                                <div style={{ backgroundImage: "url(/assets/img/post-02.png)" }}
                                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                                    <span
                                        className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                                    <span
                                        className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                                        More</span>
                                </div>
                                <div className="bg-white py-6 px-5 xl:py-8">
                                    <span className="block font-body text-lg font-semibold text-black">My personal productivity system</span>
                                    <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                </div>
                            </a>

                            <a href="/post" className="shadow">
                                <div style={{ backgroundImage: "url(/assets/img/post-03.png)" }}
                                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                                    <span
                                        className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                                    <span
                                        className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                                        More</span>
                                </div>
                                <div className="bg-white py-6 px-5 xl:py-8">
                                    <span className="block font-body text-lg font-semibold text-black">My year in review 2020</span>
                                    <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                </div>
                            </a> */}

                        </div>
                    </div>
                </div>

                <div className="container py-16 md:py-20" id="contact">
                    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        {contact[0].title}
                    </h2>
                    <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        {contact[0].name}
                    </h4>
                    <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
                        <PortableText value={contact[0].content} />
                    </div>
                    <form className="mx-auto w-full pt-10 sm:w-3/4">
                        <div className="flex flex-col md:flex-row">
                            <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                                placeholder="Name" type="text" id="name" />
                            <input
                                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                                placeholder="Email" type="text" id="email" />
                        </div>
                        <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                            placeholder="Message" id="message" cols="30" rows="10"></textarea>
                        <button
                            className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
                            Send
                            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
                        </button>
                    </form>
                    <div className="flex flex-col pt-16 lg:flex-row">
                        <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
                            <div className="flex items-center">
                                <i className="bx bx-phone text-2xl text-grey-40"></i>
                                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                    My Phone
                                </p>
                            </div>
                            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                                {profile[0].phone}
                            </p>
                        </div>
                        <div
                            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                            <div className="flex items-center">
                                <i className="bx bx-envelope text-2xl text-grey-40"></i>
                                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                    My Email
                                </p>
                            </div>
                            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                                {profile[0].email}
                            </p>
                        </div>
                        <div
                            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                            <div className="flex items-center">
                                <i className="bx bx-map text-2xl text-grey-40"></i>
                                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                    My Address
                                </p>
                            </div>
                            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                                {profile[0].address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary">
                <div className="container flex flex-col justify-between py-6 sm:flex-row">
                    <p className="text-center font-body text-white md:text-left">
                        © Copyright 2022. All right reserved, ATOM.
                    </p>
                    <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                        <a href={profile[0].fbLink}>
                            <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href={profile[0].twitterLink} className="pl-4">
                            <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href={profile[0].instaLink} className="pl-4">
                            <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
        // <div className="home">
        //   <h1>{blogs[0].title}</h1>
        //   <div className="nav">    
        //     <PortableText value={blogs[0].content} />
        //     {blogs[0].blogimage && (
        //       <div>
        //         <img 
        //           src={blogs[0].blogimage.asset.url} 
        //           alt={blogs[0].blogimage.altText || "Blog image"} 
        //           style={{ width: '20%', height: '10%' }} 
        //         />
        //         <span>{blogs[0].blogimage.caption}</span>
        //       </div>
        //     )}

        //   </div>
        // </div>
    );
}

export async function getStaticProps() {
    const client = createClient({
        projectId: 'h46ykdai',
        dataset: 'production',
        useCdn: false,
    });

    const query = `*[_type == "blog"][0...3] {
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

    const profileQuery = `*[_type == "profile"][0...3] {
        title,
        name,
        image {
            asset -> {
                url
            }
        },
        description,
        fbLink,
        twitterLink,
        instaLink,
        email,
        phone,
        address
    }`;
    const profile = await client.fetch(profileQuery);

    const skillQuery = `*[_type == "skill"][0...3] {
        name,
        image {
            asset -> {
                url
            }
        },
        description
    }`;
    const skill = await client.fetch(skillQuery);

    const portfolioQuery = `*[_type == "portfolio"][0...4] {
        title,    
        name,
        image {
            asset -> {
                url
            }
        }
    }`;
    const portfolio = await client.fetch(portfolioQuery);

    const clientQuery = `*[_type == "client"][0...5] {
        title,
        image {
            asset -> {
                url
            }
        }
    }`;
    const clientd = await client.fetch(clientQuery);

    const statisticsQuery = `*[_type == "statistics"][0...5] {
        name,
        image {
            asset -> {
                url
            }
        },
        number
    }`;
    const statistics = await client.fetch(statisticsQuery);

    const contactQuery = `*[_type == "contact"][0...5] {
        title,
        name,
        content
    }`;
    const contact = await client.fetch(contactQuery);

    return {
        props: {
            blogs,
            profile,
            skill,
            portfolio,
            clientd,
            statistics,
            contact
        },
    };
}