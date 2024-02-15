import { Card } from "@/components/ui/card"

export function FeaturesCarousel() {

    return (
        <div className="w-screen overflow-x-hidden h-full flex flex-col gap-4 masked-carousel">
            <div className="h-max w-max flex flex-row gap-4 animate-carousel">
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Global Search</h1>
                </Card>
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Vulnerability Database</h1>
                </Card>
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Templating</h1>
                </Card>

                {/* Duplicated Content */}
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Global Search</h1>
                </Card>
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Vulnerability Database</h1>
                </Card>
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Templating</h1>
                </Card>
            </div>
            <div className="h-max w-max flex flex-row gap-4 animate-carousel-reverse">
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Self-Hosted</h1>
                </Card>
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Event Log</h1>
                </Card>
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">API & Integrations (coming soon)</h1>
                </Card>

                {/* Duplicated Content */}
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Self-Hosted</h1>
                </Card>
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">Event Log</h1>
                </Card>
                <Card className="w-[500px] h-[300px] flex flex-col py-4 px-5">
                    <h1 className="font-semibold text-2xl">API & Integrations (coming soon)</h1>
                </Card>
            </div>
        </div>
    )
}