import Link from "next/link";
import Title from "../1.atoms/Title";

export default function Navbar() {
    return (
        <nav className="w-full p-2 py-6 sticky flex justify-around shadow-lg hover:shadow-xl">
            <Title 
                text={
                    <img className="w-16 md:max-w-15" src='./MDB.svg'></img>
                }
            />
            <div className="flex gap-10">
                <Link href={'/'}>Home</Link>
            </div>
        </nav>
    )
}