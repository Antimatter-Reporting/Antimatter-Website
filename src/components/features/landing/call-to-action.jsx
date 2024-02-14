"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function CallToAction() {
    const router = useRouter()

    return (
        <Button onClick={() => router.push("/docs")} className="mt-8 mb-10">Get Started for Free</Button>
    )
}