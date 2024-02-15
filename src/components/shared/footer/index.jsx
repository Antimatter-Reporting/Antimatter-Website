import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <main className="bg-white h-[100px] border-t flex flex-row items-center justify-between px-5">
            <p className="text-gray-500 text-sm">© Antimatter Reporting {new Date().getFullYear()}</p>
            <Link href="https://jamiepegg.com"><Button variant="ghost" className="text-gray-500 text-sm">Jamie Pegg</Button></Link>
        </main>
    )
}