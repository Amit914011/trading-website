import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="container mx-auto space-y-6">
        {/* Row 1: Download the App */}
        <div className="text-center text-2xl font-semibold">
          Download the App
        </div>

        {/* Row 2: App Store and Play Store */}
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAp0le4Jjiy2OHgq6e8Kd-n297KLVreDnoPRZqMjJ-l4hZr4IvK4xW3u_zge4AQ-lfA&usqp=CAU"
              alt="Download on App Store"
              className="h-10 rounded"
            />
            <p>Download on App Store</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Play Store"
              className="h-10"
            />
            <p>Get it on Play Store</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 justify-center">
          <a href="#" aria-label="Facebook">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-6"
            />
          </a>
          <a href="https://www.instagram.com/thefarhanmeer?igsh=bWdkc3BibnR2OXR1&utm_source=qr" aria-label="Instagram">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="h-6"
            />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="h-6"
            />
          </a>
          <a href="https://youtube.com/@thefarhanmeer?si=Tl63SP_qyIw73JeT" aria-label="YouTube">
            <img
              src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
              alt="YouTube"
              className="h-7"
            />
          </a>
        </div>

        {/* Column: Links */}
        <div className="flex justify-center gap-5">
          <p className="hover:underline cursor-pointer">ABOUT</p>
          <p className="hover:underline cursor-pointer">SERVICES & PRODUCTS</p>
          <p className="hover:underline cursor-pointer">RESOURCES</p>
          <p className="hover:underline cursor-pointer">BLOG</p>
          <p className="hover:underline cursor-pointer">CONTACT</p>
        </div>

        {/* Row 4: Legal Links */}
        <div className="text-center flex gap-4 justify-center text-sm">
          <p className="hover:underline cursor-pointer">Disclaimers</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms & Conditions</p>
          <p className="hover:underline cursor-pointer">Disclosures</p>
        </div>

        {/* Row 5: Footer Info */}
        <div className="text-center text-sm">
          <p>Farhaan Meer</p>
          <p>AMFI Registered Mutual Fund Distributor</p>
          <p>Mutual Fund investments are subject to market risk. Read all scheme-related documents carefully.</p>
          <p>Date of Initial Registration: 18-07-2006 | Current Validity of ARN Upto: 02-12-2025</p>
          <p>ARN: 41541</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
