import React from 'react'
import Script from 'next/script'
import Head from 'next/head'

const NavBar = () => {
    return (
        <>
            <Script src="/assets/js/main.js"></Script>
            <Head>
                <meta charset="utf-8" />
                <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                <title>Homepage | Atom Template</title>
                <meta property="og:title" content="Homepage | Atom Template" />
                <meta property="og:locale" content="en_US" />
                <link rel="canonical" href="//" />
                <meta property="og:url" content="//" />
                <meta name="description"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
                <meta name="theme-color" content="#5540af" />
                <meta property="og:site_name" content="Atom Template" />
                <meta property="og:image" content="//assets/img/social.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@tailwindmade" />
                <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
                <link as="style"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
                    rel="preload" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
                    rel="stylesheet" />
                <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
                <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
                <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>
                <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
            </Head>
            <div className="w-full z-50 top-0 py-3 sm:py-5  absolute " style={{backgroundColor: '#4b399b'}}>
                <div className="container flex items-center justify-between">
                    <div>
                        <a href="/">
                            <h2 className='text-white text-2xl font-bold'>WorkWith Anshu</h2>
                            {/* <img src="/assets/img/logo.svg" className="w-24 lg:w-48" alt="logo image" /> */}
                        </a>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center">
                            <li className="group pl-6">
                                <a href='#about'><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span></a>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                                <a href='#services'><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span></a>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                                <a href='#portfolio'><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span></a>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                                <a href='#clients'><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span></a>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                                <a href='#work'><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span></a>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                                <a href='#statistics'><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span></a>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                                <a href='#blog'><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span></a>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                                <a href='#contact'><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span></a>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="block lg:hidden">
                        <button>
                            <i className="bx bx-menu text-4xl text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;