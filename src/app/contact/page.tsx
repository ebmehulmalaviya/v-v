import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="A Virtual Vendor operates online, selling goods or services through digital platforms. They eliminate physical storefronts, using technology to manage transactions, inventories, and customer interactions, reaching global audiences efficiently."/>

      <Contact />
    </>
  );
};

export default ContactPage;
