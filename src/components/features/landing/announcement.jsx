import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Announcement() {
    return (
        <Link href={"/docs"}>
        <Badge variant={"secondary"} className="mt-8 flex items-center">
            🚀 Antimatter v0.0.12-alpha is now live! 
            <ArrowRight className="h-4"/>
        </Badge>
        </Link>
    )
}
