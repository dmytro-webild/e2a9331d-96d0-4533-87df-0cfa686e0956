import ContactCenter from '@/components/sections/contact/ContactCenter';
import ContactCta from '@/components/sections/contact/ContactCta';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ContactPage() {
  return (
    <>
  <div id="contact-section" data-section="contact-section">
    <SectionErrorBoundary name="contact-section">
          <ContactCta
      tag="Let's Talk"
      text="Ready to launch your business online? Tell me about your business and we'll start your project today."
      primaryButton={{
        text: "WhatsApp Us",
        href: "https://wa.me/994514944157",
      }}
      secondaryButton={{
        text: "Send Email",
        href: "mailto:aydinmamedov@gmail.com",
      }}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCenter
      tag="Newsletter"
      title="Stay updated"
      description="Get tips for your online growth."
      inputPlaceholder="Enter your email"
      buttonText="Subscribe"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
