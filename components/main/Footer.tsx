import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaXTwitter, FaWhatsapp,  FaFacebook } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div  className="w-full h-full bg-transparent relative text-gray-200 shadow-lg p-[15px] z-50">
        <div  className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaWhatsapp />
                        <a href="https://api.whatsapp.com/send/?phone=639953532613&text=Hello%2C+I+want+to+know+more+about+your+service.+Can+you+help+me%3F&type=phone_number&app_absent=0" className="text-[15px] ml-[6px] cursor-pointer">Whatsap</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <a href='https://github.com/adas0mahdi' className="text-[15px] ml-[6px]">Github</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaFacebook />
                        <a href='https://www.facebook.com/adas.mahdi.atef/' className="text-[15px] ml-[6px]">Facebook</a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <a href='https://www.instagram.com/adas0mahdi/' className="text-[15px] ml-[6px]">Instagram</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaXTwitter />
                        <a href='https://twitter.com/mho_y' className="text-[15px] ml-[6px]">Twitter</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <a href='https://www.linkedin.com/in/mahdi-adas/' className="text-[15px] ml-[6px]">Linkedin</a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <a href='https://drive.google.com/file/d/1k0BtEl22k2tPnWHUJDyW70YfqgzuAq2v/view?usp=sharing' className="text-[15px] ml-[6px]">My Resume</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <a href='https://drive.google.com/drive/folders/1WljcSY_TvldE4AFdA3qnyWKnfm0iTOsk?usp=sharing' className="text-[15px] ml-[6px]">Learning about me</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <a href='mailto:adas0mahdi.com' className="text-[15px] ml-[6px]">adas0mahdi@gmail.com</a>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy;Adas Web Dev {currentYear} Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer