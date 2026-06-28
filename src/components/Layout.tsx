import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "/"
  },
  {
    "name": "Services",
    "href": "/services"
  },
  {
    "name": "Portfolio",
    "href": "/portfolio"
  },
  {
    "name": "Pricing",
    "href": "/pricing"
  },
  {
    "name": "Contact",
    "href": "/contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="WebLaunch"
      ctaButton={{
        text: "Get Started",
        href: "/contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="WebLaunch"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "/",
            },
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "Portfolio",
              href: "/portfolio",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 WebLaunch. All rights reserved."
      links={[
        {
          label: "LinkedIn",
          href: "#",
        },
        {
          label: "Twitter",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
