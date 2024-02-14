import Image from "next/image";
import { CallToAction } from "@/components/features/landing/call-to-action";
import { Announcement } from "@/components/features/landing/announcement";

export default function Home() {
  return (
    <>
    <main className="flex h-screen flex-col items-center p-24 z-50 relative">
      <Announcement />
      <div className="text-center">
        <h1 className="text-5xl font-bold text-center pt-8">Effortless and Intuitive Reporting</h1>
        <p className="text-gray-600 pt-2">A clean, refined, report writing application for penetration tests and offensive engagements.</p>
      </div>
      <CallToAction />
      <Image className="shadow-xl rounded-xl border" src={"/screenshot.png"} height={0} width={1000}/>
    </main>
    <span className="absolute top-0 left-0 bg-grid-pattern opacity-75 masked-image z-1 h-full w-full"></span>
    <main className="flex h-screen flex-col items-center p-24 z-10 relative bg-secondary">
      
    </main>
    </>
  );
}
