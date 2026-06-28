import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import PricingSimpleCards from '@/components/sections/pricing/PricingSimpleCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ServicesPage() {
  return (
    <>
  <div id="services-content" data-section="services-content">
    <SectionErrorBoundary name="services-content">
          <FeaturesDetailedCards
      tag="All-in-One Package"
      title="What you get with your package"
      description="We take care of the tech, so you can focus on your business."
      items={[
        {
          title: "Custom Web Design",
          description: "Tailored designs that match your brand identity perfectly.",
          tags: [
            "UI",
            "UX",
          ],
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=v76h7b",
        },
        {
          title: "Lightning Hosting",
          description: "Secure, reliable, and fast hosting included as standard.",
          tags: [
            "Speed",
            "Cloud",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/web-design-concept-with-drawings_1134-77.jpg",
        },
        {
          title: "Mobile Optimized",
          description: "Responsive layout that looks stunning on every screen.",
          tags: [
            "Responsive",
            "Mobile",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/analysis-strategy-study-information-business-planning_53876-133682.jpg",
        },
        {
          title: "SEO Basics",
          description: "Built-in SEO setup to help you get found on Google.",
          tags: [
            "SEO",
            "Search",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-connections-background-networking-connecting-lines-dots_1048-12640.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSimpleCards
      tag="Pricing"
      title="Packages to fit your budget"
      description="Flexible tiers for growing needs."
      plans={[
        {
          tag: "Starter",
          price: "$159",
          description: "Basic presence",
          features: [
            "1 page",
            "Fast setup",
          ],
        },
        {
          tag: "Pro",
          price: "$259",
          description: "Professional look",
          features: [
            "5 pages",
            "SEO setup",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
