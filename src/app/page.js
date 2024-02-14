import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-24 z-10 relative">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-center pt-8">Effortless and Intuitive Reporting</h1>
        <p className="text-gray-600 pt-2">A clean, refined, report writing application for penetration tests and offensive engagements.</p>
      </div>
      <Button className="mt-8 mb-10">Get Started for Free</Button>
      <Image className="shadow-2xl rounded-xl border" src={"/screenshot.png"} height={0} width={1000}/>
    </main>
    <span className="absolute top-0 left-0 bg-grid-pattern opacity-75 masked-image z-1 h-full w-full"></span>
    </>
  );
}
