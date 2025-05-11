"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://www.facebook.com/Virtual-Vendor', label: 'Facebook', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/virtualvendor111', label: 'Instagram', icon: <FaInstagram /> },
  { href: '/', label: 'YouTube', icon: <FaYoutube /> },
  { href: '/', label: 'LinkedIn', icon: <FaLinkedinIn /> },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/logo/logo.png"
                alt="Logo Light"
                width={140}
                height={30}
                className="dark:hidden"
              />
              <Image
                src="/images/logo/logo.png"
                alt="Logo Dark"
                width={140}
                height={30}
                className="hidden dark:block"
              />
            </Link>
            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary text-xl transition-colors"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 px-4 mb-12 lg:mb-0">
            <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Useful Links</h2>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-base hover:text-primary">Blog</Link></li>
              <li><Link href="/pricing" className="text-base hover:text-primary">Pricing</Link></li>
              <li><Link href="/about" className="text-base hover:text-primary">About</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 px-4 mb-12 lg:mb-0">
            <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Terms</h2>
            <ul className="space-y-4">
              <li><Link href="/tos" className="text-base hover:text-primary">TOS</Link></li>
              <li><Link href="/privacy-policy" className="text-base hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="text-base hover:text-primary">Refund Policy</Link></li>
            </ul>
          </div>

          <div className="w-full lg:w-4/12 xl:w-3/12 px-4">
            <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Support & Help</h2>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-base hover:text-primary">Open Support Ticket</Link></li>
              <li><Link href="/terms-of-use" className="text-base hover:text-primary">Terms of Use</Link></li>
              <li><Link href="/about" className="text-base hover:text-primary">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-base text-body-color dark:text-body-color-dark">
            Design and Developed by Mehul Malaviya
          </p>
        </div>
      </div>
    </footer>
  );
}
