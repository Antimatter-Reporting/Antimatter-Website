"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function CallToAction() {
    const router = useRouter()

    return (
        <Button className="z-50" onClick={() => router.push("/docs")}>Get Started for Free</Button>
    )
}