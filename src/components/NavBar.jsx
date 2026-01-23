// to update the NavBar underline depending on the page
"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import navBarStyles from "@/styles/navbar.module.css"


// !Figure out a way to change where the underline on the navbar is depending on the page

export default function NavBar(){

    const pathname = usePathname()

    const linkClass = (href) =>
        `m-2 bg-sky-400 p-4 hover:bg-amber-400 ${
      pathname === href ? "underline font-bold" : ""
    }`;

    return(
        <>
        <nav 
        className={navBarStyles.nav}
        >

            <Link href={"/"} className={linkClass("/")}>HOME</Link>

            <Link href={"/helpful-info"} className={linkClass("/helpful-info")}>HELPFUL INFO</Link>

            <Link href={"/hike-menu"} className={linkClass("/hike-menu")}>HIKES</Link>
            </nav>
        </>
    )
}