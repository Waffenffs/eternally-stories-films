'use client';

import Image from "next/image";

import { Playfair_Display } from "next/font/google"

const playfair_display = Playfair_Display({
    weight: '400',
    subsets: ['latin']
})

export default function HomePage() {
    return (
        <main className="w-screen h-screen overflow-auto">
            <header 
                className="bg-hero-background bg-cover bg-left h-96 md:h-full md:bg-right relative"
            >
                <nav className="flex flex-col gap-3 w-full justify-center items-center py-3">
                    <h1 className={`${playfair_display.className} text-2xl`}>Eternally Stories Films</h1>
                    <li className="flex flex-row items-center gap-10 text-md">
                        <ul>HOME</ul>
                        <ul>ABOUT</ul>
                        <ul>GALLERY</ul>
                        <ul>CONTACT</ul>
                    </li>
                </nav>
                <button className="bg-black text-white rounded-full py-4 px-5 md:px-7 text-xs font-semibold ml-3 absolute bottom-24 md:bottom-80 md:ml-10 md:text-xl">
                    <span>About Us</span>
                </button>
            </header>

            <section className="bg-secondary w-full h-full flex flex-col items-center py-10">
                <h2 className={`${playfair_display.className} text-xl`}>A FEW OF OUR WORKS</h2>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <Image 
                        src={"/image_2.jpg"}
                        alt="selected_image"
                        width={100}
                        height={100}
                    />
                    <Image 
                        src={"/image_3.jpg"}
                        alt="selected_image"
                        width={100}
                        height={100}
                    />
                    <Image 
                        src={"/image_4.jpg"}
                        alt="selected_image"
                        width={100}
                        height={100}
                    />
                    <Image 
                        src={"/image_5.jpg"}
                        alt="selected_image"
                        width={100}
                        height={100}
                    />
                </div>
            </section>
        </main>
    )
}