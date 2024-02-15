import { Button } from "@/components/ui/button"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"

export function SocialIcons() {
    return (
        <div className="flex flex-row">
            <Link href="https://github.com/Antimatter-Reporting" target="_blank"><Button variant="ghost" size="icon"><Github /></Button></Link>
            <Link href="https://x.com/" target="_blank"><Button variant="ghost" size="icon"><Twitter /></Button></Link>
        </div>
    )
}