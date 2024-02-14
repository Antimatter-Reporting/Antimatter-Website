import Link from "next/link"
import { NavigationLinks } from "./navigation-links"
import { SocialIcons } from "./social-icons"

import { Ratio } from "lucide-react"

export default function Navigation() {
    return (
        <div className="flex flex-row items-center justify-between p-5 fixed w-full bg-white/50 backdrop-blur border-b z-[100]">
            <Link href="/" className="flex flex-row gap-2 items-center">
                <Ratio className="h-10" />
                <p className="font-semibold">Antimatter</p>
            </Link>
            <div>
                <NavigationLinks />
            </div>
            <SocialIcons />
        </div>
    )
}
