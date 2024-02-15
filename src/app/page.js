import Image from "next/image";
import { CallToAction } from "@/components/features/landing/call-to-action";
import { Announcement } from "@/components/features/landing/announcement";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center p-24 pb-16 z-50 gap-10 relative">
        <Announcement />
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-5xl font-bold text-center">Effortless and Intuitive Reporting</h1>
          <p className="text-gray-500">A clean, refined, report writing application for penetration tests and offensive engagements.</p>
        </div>
        <CallToAction />
        <Image width={1000} height={0} className="shadow-xl rounded-xl border z-50" src={"/screenshot.png"} priority={true} />
        <span className="absolute top-0 left-0 bg-grid-pattern masked-image z-1 h-full w-full"></span>
      </main>
      <main className="flex flex-col py-24 z-10 relative bg-secondary overflow-x-hidden" id={"features"}>
        <div className="w-screen overflow-x-hidden h-full flex flex-col gap-4 masked-carousel">
          <div className="h-max w-max flex flex-row gap-4 animate-carousel">
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Global Search</h1>
            </div>
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Vulnerability Database</h1>
            </div>
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Templating</h1>
            </div>

            {/* Duplicated Content */}
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Global Search</h1>
            </div>
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Vulnerability Database</h1>
            </div>
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Templating</h1>
            </div>
          </div>
          <div className="h-max w-max flex flex-row gap-4 animate-carousel-reverse">
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Self-Hosted</h1>
            </div>
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Event Log</h1>
            </div>
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">API & Integrations (coming soon)</h1>
            </div>

            {/* Duplicated Content */}
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Self-Hosted</h1>
            </div>
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">Event Log</h1>
            </div>
            <div className="bg-white w-[500px] h-[300px] border rounded-md flex flex-col py-4 px-5">
              <h1 className="font-semibold text-2xl">API & Integrations (coming soon)</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
