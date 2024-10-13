import { Playfair_Display } from "next/font/google"

const playfair_display = Playfair_Display({
    weight: '400',
    subsets: ['latin']
})

export default function Navigation() {
    return (
        <nav className="flex flex-col gap-3 w-full justify-center items-center py-3">
            <h1 className={`${playfair_display.className} text-2xl`}>Eternally Stories Films</h1>
            <li className="flex flex-row items-center gap-10 text-md">
                <ul>HOME</ul>
                <ul>ABOUT</ul>
                <ul>GALLERY</ul>
                <ul>CONTACT</ul>
            </li>
        </nav>
    )
}