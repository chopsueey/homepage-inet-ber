import Link from "next/link";

export default function Navbar() {
    return  (
        <nav className="flex justify-around text-white">
            <ul className="flex space-x-2">
                <Link href={'/'}>home</Link>
                <Link href={'/about'}>about</Link>
                <Link href={'/contact'}>contact</Link>
            </ul>
        </nav>
    )
}