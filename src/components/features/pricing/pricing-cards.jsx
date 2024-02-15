import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function PricingCards() {
    return (
        <div className="flex flex-row items-center justify-center gap-10">
          <Card className="h-[60vh] w-[25vw] flex flex-col py-4 px-5 gap-6">
            <div>
              <Badge>Self-Hosted</Badge>
              <h1 className="text-5xl font-bold pt-6">Free</h1>
              <p className="text-gray-500 pt-2">Antimatter&apos;s free, self-hosted, plan. Perfect for control over your data.</p>
            </div>
            <Button>Get Started</Button>
          </Card>
          <Card className="h-[60vh] w-[25vw] flex flex-col py-4 px-5 gap-6">
            <div>
              <Badge variant={"secondary"}>Coming Soon</Badge>
              <div className="flex flex-row gap-1 items-end pt-6"><h1 className="text-5xl font-bold">£19.99</h1><p className="text-lg font-bold">/mo</p></div>
              <p className="text-gray-500 pt-2">Coming Soon - Antimatter hosted in the cloud with little configuration required.</p>
            </div>
            <Button>Buy Now</Button>
          </Card>
        </div>
    )
}

