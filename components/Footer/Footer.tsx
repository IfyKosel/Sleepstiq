import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import facebook from "@/public/facebook.svg";
import twitter from "@/public/twitter.svg";
import googleplus from "@/public/googleplus.svg";
import linkedin from "@/public/linkedin.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="py-10 w-full flex justify-center bg-[#043C50]">
      <div className="w-[90%] max-w-[1560px] flex flex-col gap-10">
        <div className="flex justify-center">
          <Image src={Logo} alt="logo" width={130} height={85} className="" />
        </div>
        <div className="flex justify-between text-white gap-5">
          <div className="flex-[1]">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold uppercase ">company</h1>
              <ul className="flex flex-col gap-4 text-[#ABABAB]">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Jobs</li>
              </ul>
            </div>
          </div>
          <div className="flex-[2]">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold uppercase ">contact</h1>
              <ul className="flex flex-col gap-4 text-[#ABABAB]">
                <li>Phone</li>
                <li className="text-white font-bold">+234 708 507 3128</li>
                <li>Contact</li>
                <li className="text-white font-bold">
                  16, Ogindipe Close, Upston Close
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-[3]">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold uppercase ">CONSUMER ADVISORY</h1>
              <p>
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. This product should be used only
                as directed on the label. All trademarks and copyrights are
                property of their respective owners and not affiliated with nor
                do they endorse this product. Results may vary.
              </p>
              <p>
                By using our website or product, you agree to follow our{" "}
                <span className="text-[#8FE2FF]">terms of service.</span>
              </p>
            </div>
          </div>
          <div className="flex-[2]">
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col gap-5 border-l border-[#5D6544] pl-6">
                <h1 className="font-bold uppercase ">Get in Touch</h1>
                <p className="text-[#ABABAB]">
                  Feel free to get in touch with us vai email
                </p>
                <p className="font-bold text-2xl">hello@sleepstiq.com</p>
                <div className="flex gap-2">
                  <Image src={facebook} alt="facebook" width={33} height={33} />
                  <Image src={twitter} alt="facebook" width={33} height={33} />
                  <Image
                    src={googleplus}
                    alt="facebook"
                    width={33}
                    height={33}
                  />
                  <Image src={linkedin} alt="facebook" width={33} height={33} />
                </div>
              </div>
              <p className="text-[#ABABAB] pt-5 text-sm pl-6">
                © 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
