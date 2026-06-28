import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="Fast, Professional, Affordable"
      title="Professional websites for a fraction of agency costs"
      description="Stop overpaying for agencies. Get your high-converting business website launched in days, not months. High performance, mobile-ready, and optimized for growth."
      primaryButton={{
        text: "Get Your Website Today",
        href: "/contact",
      }}
      secondaryButton={{
        text: "View Our Portfolio",
        href: "/portfolio",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-blank-screen-split-background_9975-133781.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/programming-background-collage_23-2149901782.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-internet-communication-network_23-2148779266.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/website-development-links-seo-webinar-cyberspace-concept_53876-120953.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-internet-communication-network-with-laptop_23-2148779281.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-particle-design-with-shallow-depth-field_1048-14034.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Why Us"
      quote="Small businesses need a digital home that works as hard as they do—without the massive agency overhead."
      author="The WebLaunch Team"
      role="Mission Statement"
      imageSrc="http://img.b2bpic.net/free-photo/young-man-showing-thumb-up-white-background_1149-57.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Our Values"
      title="Building your success, efficiently"
      description="We cut out the bloat to give you a premium website that turns visitors into customers."
      metrics={[
        {
          value: "Affordable",
          title: "Fair Pricing",
          description: "No hidden agency markups. You pay for value, not office rent.",
          imageSrc: "http://img.b2bpic.net/free-photo/logistics-concept-device-screen_53876-124875.jpg",
        },
        {
          value: "Fast",
          title: "Rapid Deployment",
          description: "Get live in record time. We prioritize your time-to-market.",
          imageSrc: "http://img.b2bpic.net/free-photo/innovation-development-rocket-graphic-concept_53876-120019.jpg",
        },
        {
          value: "Pro",
          title: "Quality Assured",
          description: "Professional design standards that help you stand out from the noise.",
          imageSrc: "http://img.b2bpic.net/free-photo/architect-doing-okay-sign_1149-1825.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Our Clients"
      title="What our customers say"
      description="We've helped dozens of small business owners find their voice online."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Restaurant Owner",
          quote: "Finally, a service that doesn't treat you like a cash cow. Affordable and beautiful.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg",
        },
        {
          name: "Michael K.",
          role: "Realtor",
          quote: "I got my site in 3 days. My inquiry rate has already doubled.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-friendly-mature-business-man-wearing-jacket-glasses-posing-indoors-looking-camera_74855-9997.jpg",
        },
        {
          name: "Elena R.",
          role: "Wellness Coach",
          quote: "Fast, friendly, and they actually understood what I needed. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-man-holding-smart-phone_23-2147935571.jpg",
        },
        {
          name: "David T.",
          role: "Contractor",
          quote: "Saved me over $5k vs what an agency quoted. Extremely happy with the results.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",
        },
        {
          name: "Maria L.",
          role: "Retailer",
          quote: "A truly modern approach to web development. Easy process.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mature-business-manager-office_1098-21368.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted By"
      title="Industry leaders choose us"
      description="We are proud to work with these forward-thinking brands."
      names={[
        "Alpha Corp",
        "Beta Solutions",
        "Gamma Ventures",
        "Delta Innovations",
        "Epsilon Systems",
      ]}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
