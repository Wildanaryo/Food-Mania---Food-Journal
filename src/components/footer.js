import FacebookIcon from "@/icon/facebook";
import InstagramIcon from "@/icon/instagram";
import TwitterIcon from "@/icon/twitter";
import YoutubeIcon from "@/icon/youtube";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid place-items-center bg-slate-800">
      <div className="grid grid-cols-2 lg:w-3/5 w-11/12 py-20 gap-2">
        <section className="pr-0">
          <div className="text-3xl">
            Food Mania<span className="text-lg">mantap</span>
          </div>
          <div>
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment"
          </div>
        </section>
        <section className="grid grid-cols-3 gap-1 md:gap-10 text-sm">
          <div className="space-y-2">
            <div className="font-bold text-lg">Food Mania</div>
            <div className="flex flex-col space-y-2">
              <button className="text-left">About Us</button>
              <button className="text-left">Careers</button>
              <button className="text-left">Contact Us</button>
              <button className="text-left">Feedback</button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-lg">Legal</div>
            <div className="flex flex-col space-y-2">
              <button className="text-left">Terms</button>
              <button className="text-left">Conditions</button>
              <button className="text-left">Cookies</button>
              <button className="text-left">Copyright</button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-lg">Follow</div>
            <div className="flex flex-col space-y-2">
              <button className="text-left">Facebook</button>
              <button className="text-left">Twitter</button>
              <button className="text-left">Instagram</button>
              <button className="text-left">Youtube</button>
            </div>
          </div>
        </section>
      </div>
      <div className="border-t-2 w-11/12 lg:w-3/5">
        <div className=" flex justify-between py-5">
          <div>© 2023 Wildan A. Wicaksono - All rights reserved</div>
          <div className="flex space-x-5">
            <FacebookIcon width={16} height={16} fill="#fff" />
            <TwitterIcon fill="#fff" />
            <YoutubeIcon fill="#fff" />
            <InstagramIcon fill="#fff" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
