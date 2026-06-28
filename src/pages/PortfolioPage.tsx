import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function PortfolioPage() {
  return (
    <>
  <div id="portfolio-grid" data-section="portfolio-grid">
    <SectionErrorBoundary name="portfolio-grid">
          <FeaturesImageBento
      tag="Portfolio"
      title="Websites that drive results"
      description="Explore our recent launches for businesses like yours."
      items={[
        {
          title: "Local Cafe",
          description: "Modern restaurant layout",
          imageSrc: "http://img.b2bpic.net/free-photo/young-waitress-near-banquet-table_23-2147830631.jpg",
        },
        {
          title: "City Realtors",
          description: "Property agency design",
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-business-work-money-concept_53876-122749.jpg",
        },
        {
          title: "Handyman Service",
          description: "Local business homepage",
          imageSrc: "http://img.b2bpic.net/free-vector/admin-dashboard-template-with-flat-design_23-2147874365.jpg",
        },
        {
          title: "Urban Retail",
          description: "Clean storefront design",
          imageSrc: "http://img.b2bpic.net/free-photo/chic-fashion-boutique-with-well-organized-clothing-racks_482257-118413.jpg",
        },
        {
          title: "Consulting Firm",
          description: "Corporate consultancy look",
          imageSrc: "http://img.b2bpic.net/free-photo/register-enquiry-online-web-page-concept_53876-147930.jpg",
        },
        {
          title: "Zen Wellness",
          description: "Wellness studio branding",
          imageSrc: "http://img.b2bpic.net/free-photo/illustration-coffee-cup-decoration-cafe-commercial-laptop_53876-147688.jpg",
        },
        {
          title: "Creative Lab",
          description: "Designer portfolio showcase",
          imageSrc: "http://img.b2bpic.net/free-photo/communication-social-media-icons-personal-computer_23-2150781058.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesMediaCarousel
      tag="Gallery"
      title="Design Excellence"
      description="View our creative highlights."
      items={[
        {
          title: "UI Design",
          description: "Clean and modern interfaces.",
          buttonIcon: "ArrowRight",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-dashboard-statistic-evolution-template_23-2148284171.jpg",
        },
        {
          title: "UX Strategy",
          description: "User focused flows.",
          buttonIcon: "ArrowRight",
          imageSrc: "http://img.b2bpic.net/free-vector/colorful-app-dashboard-with-flat-design_23-2147884726.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
