import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-theme-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="md:text-[32px] text-[22px] mb-4 font-normal">
              Subscribe to our newsletter
            </h3>
            <p className="mb-6 font-light text-sm text-[#fffc] max-w-[400px]">
              Subscribe our newsletter for future updates. don't worry we don't
              spam your email address.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex border-b border-gray-500 pb-1 max-w-[500px]"
            >
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-transparent flex-grow focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="px-2">
                →
              </button>
            </form>

            <div className="flex flex-wrap mt-8 gap-4">
              <a
                href="#"
                className="border border-[#ffffff40] text-[#ffffff7a] rounded-full py-[5px] px-5 text-sm hover:border-white hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="border border-[#ffffff40] text-[#ffffff7a] rounded-full py-[5px] px-5 text-sm hover:border-white hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="border border-[#ffffff40] text-[#ffffff7a] rounded-full py-[5px] px-5 text-sm hover:border-white hover:text-white transition-colors"
              >
                Linkedin
              </a>
              <a
                href="#"
                className="border border-[#ffffff40] text-[#ffffff7a] rounded-full py-[5px] px-5 text-sm hover:border-white hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>

            <div className="pt-10">
              <h3 className="md:text-[32px] text-[22px] mb-4 font-normal">
                Quick links
              </h3>
              <ul className="flex items-center gap-5">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="pb-12">
              <h3 className="md:text-[40px] text-[22px] font-light mb-2">
                Have a project in mind?
              </h3>
              <a
                href="/contact"
                className="md:text-[50px] text-[22px] underline"
              >
                Let's talk
              </a>
            </div>
            <h3 className="md:text-[32px] text-[22px] font-normal mb-4">
              Get in touch
            </h3>
            <div className="text-[#ffffff80] font-light">
              <p>123 Broadway Street, Suite 16,</p>
              <p className="mb-3">New York, NY</p>
              <div>
                <a
                  href="tel:(+01) 123 456 7890"
                  className="mb-5  hover:text-white"
                >
                  (+01) 123 456 7890
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@wewantwaste.com"
                  className="underline hover:text-white"
                >
                  info@wewantwaste.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#ffffffbf] text-sm font-light">
              Copyright © 2025{" "}
              <span className="text-white">We Want Waste. </span>
              All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0 space-x-6 text-[#ffffffbf] text-sm">
              <Link to="/terms" className="hover:underline">
                Terms & Condition
              </Link>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link to="/career" className="hover:underline">
                Career
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
