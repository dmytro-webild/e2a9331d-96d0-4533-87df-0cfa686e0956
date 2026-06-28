import PricingCenteredCards from '@/components/sections/pricing/PricingCenteredCards';
import PricingSimpleCards from '@/components/sections/pricing/PricingSimpleCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function PricingPage() {
  return (
    <>
  <div id="pricing-table" data-section="pricing-table">
    <SectionErrorBoundary name="pricing-table">
          <PricingCenteredCards
      tag="Simple Pricing"
      title="No surprises, no bloat"
      description="Traditional agencies charge thousands. We charge for the work, nothing more."
      plans={[
        {
          tag: "Launch",
          price: "$259",
          description: "Perfect for startups and local shops.",
          features: [
            "1-5 Pages",
            "Responsive Design",
            "Mobile-Ready",
            "Standard Hosting",
          ],
          primaryButton: {
            text: "Start Now",
            href: "/contact",
          },
        },
        {
          tag: "Growth",
          price: "$1,999",
          description: "Best for scaling businesses.",
          features: [
            "10+ Pages",
            "Advanced SEO",
            "Content Management",
            "Priority Support",
          ],
          primaryButton: {
            text: "Start Now",
            href: "/contact",
          },
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSimpleCards
      tag="Plans"
      title="Transparent Pricing"
      description="No hidden costs."
      plans={[
        {
          tag: "Launch",
          price: "$999",
          description: "Standard",
          features: [
            "Hosting",
            "SEO",
          ],
        },
        {
          tag: "Pro",
          price: "$1999",
          description: "Advanced",
          features: [
            "Analytics",
            "Custom UI",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
