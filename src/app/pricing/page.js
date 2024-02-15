import { PricingCards } from "@/components/features/pricing/pricing-cards";

export default function Pricing() {
  return (
    <>
      <main className="flex flex-col w-screen h-screen items-center justify-center p-24 pb-16 z-50 gap-10 relative bg-secondary">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-5xl font-bold text-center">Two Simple Pricing Options</h1>
          <p className="text-gray-500">A clean, refined, report writing application for penetration tests and offensive engagements.</p>
        </div>
        <PricingCards />
      </main>
    </>
  );
}