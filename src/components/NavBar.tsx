import Typography from "./Typography"
import Link from "next/link"
import Image from "next/image"

function NavBar() {
    return ( 
        <nav className="flex flex-row flex-wrap justify-between py-4 mx-16">
            <Image 
                src={""} 
                alt={"Fundle"}
                width={100}
            />
            <ul className="flex flex-row">
                <li className="px-2">
                <Link href={""}>
                    <Typography sizeVariant='c3' colorVariant='secondary'>
                    Beranda
                    </Typography>
                </Link>
                </li>
                <li className="px-2">
                <Link href={""}>
                    <Typography sizeVariant='c3' colorVariant='secondary'>
                    Tentang
                    </Typography>
                </Link>
                </li>
                <li className="px-2">
                <Link href={""}>
                    <Typography sizeVariant='c3' colorVariant='secondary'>
                    Layanan
                    </Typography>
                </Link>
                </li>
                <li className="px-2">
                <Link href={""}>
                    <Typography sizeVariant='c3' colorVariant='secondary'>
                    Donasi
                    </Typography>
                </Link>
                </li>
                <li className="px-2">
                <Link href={""}>
                    <Typography sizeVariant='c3' colorVariant='secondary'>
                    Profil
                    </Typography>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;