import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-solid border-t-[#493f22] pt-10 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-white font-bold font-serif text-lg mb-4">
            Join the VIP List
          </h3>
          <p className="text-white/70 text-sm mb-4">
            Get exclusive offers, new arrivals, and styling tips sent directly
            to your inbox.
          </p>
          <form className="flex w-full max-w-sm">
            <input
              className="form-input p-2 flex-grow bg-(--surface-dark) border-none text-white placeholder-white/50 rounded-l-lg focus:ring-(--primary)"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="bg-(--primary) text-(--background-dark) font-bold px-4 rounded-r-lg cursor-pointer hover:opacity-90 "
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex justify-center md:justify-around col-span-1 md:col-span-2 text-center md:text-left">
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-white mb-2">Shop</h4>
            <a
              className="text-white/70 hover:text-(--primary) text-sm"
              href="#"
            >
              Lace Fronts
            </a>
            <a
              className="text-white/70 hover:text-(--primary) text-sm"
              href="#"
            >
              Glueless Wigs
            </a>
            <a
              className="text-white/70 hover:text-(--primary) text-sm"
              href="#"
            >
              Colored Wigs
            </a>
            <a
              className="text-white/70 hover:text-(--primary) text-sm"
              href="#"
            >
              New Arrivals
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-white mb-2">Support</h4>
            <a
              className="text-white/70 hover:text-(--primary) text-sm"
              href="#"
            >
              Help &amp; FAQ
            </a>
            <a
              className="text-white/70 hover:text-(--primary) text-sm"
              href="#"
            >
              Returns Policy
            </a>
            <a
              className="text-white/70 hover:text-(--primary) text-sm"
              href="#"
            >
              Shipping
            </a>
            <a
              className="text-white/70 hover:text-(--primary) text-sm"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-solid border-t-[#493f22]/50 flex flex-col sm:flex-row justify-between items-center text-sm text-white/50">
        <p>© 2025 Wig Aura. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a className="hover:text-(--primary)" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-(--primary)" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
