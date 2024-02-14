import { Button } from "@/components/ui/button"
import { NavigationLinks } from "./navigation-links"

import { Ratio, Github, Twitter } from "lucide-react"

export default function Navigation() {
    return (
        <div className="flex flex-row items-center justify-between p-5 fixed w-full bg-white/50 backdrop-blur border-b z-[100]">
            <div className="flex flex-row gap-2 items-center">
                <Ratio className="h-10" />
                <p className="font-semibold">Antimatter</p>
            </div>
            <div>
                <NavigationLinks />
            </div>
            <div className="flex flex-row">
                <Button variant="ghost" size="icon"><Github /></Button>
                <Button variant="ghost" size="icon"><Twitter /></Button>
            </div>
        </div>
    )
}
