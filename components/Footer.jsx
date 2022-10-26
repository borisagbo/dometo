import React from 'react';
import Image from "next/image";
import Logo from "../public/Logo.png";
import rs1 from "../public/Group 9.png";
import rs2 from "../public/Group 9 Copy.png";
import rs3 from "../public/Group 9 Copy 2.png"
import rs4 from "../public/Group 9 Copy 3.png"
import lang from "../public/Shape.png"


const Footer = () => {
    return (
        <div className="mx-40 grid grid-cols-5 gap-8 ">
            <div className=" space-y-4">
                <Image src={Logo}   alt="Picture of the author" priority/>
                <div className="space-y-10">
                    <p className="text-base font-roboto font-normal">© BlackOVNI 2022</p>
                </div>
         </div>
            <div className="space-y-4 flex flex-col ">
                <h1 className="font-roboto text-primary_01 font-bold text-lg">HÃ</h1>
                <a className="text-base font-roboto font-normal" href="#">ƒuƒoƒo yeye</a>
                <a className="text-base font-roboto font-normal" href="#">Togotɔwo</a>
                <a className="text-base font-roboto font-normal" href="#">IT Habɔbɔa</a>
                <a className="text-base font-roboto font-normal " href="#">Aɖaŋuwɔlawo ƒe habɔbɔ</a>
            </div>
            <div className="space-y-4 flex flex-col ">
                <h1 className="font-roboto text-primary_01 font-bold text-lg">SUBODODOWO</h1>
                <a className="text-base font-roboto font-normal" href="#">Míaƒe Ewegbea tutuɖo</a>
                <a className="text-base font-roboto font-normal" href="#">Be woasrɔ̃ nu yeyewo</a>
                <a className="text-base font-roboto font-normal" href="#">dzesideŋkɔ aɖe nanɔ wo si</a>
                <a className="text-base font-roboto font-normal" href="#">Do Ewegbea ɖe ŋgɔ</a>

            </div>
            <div className="space-y-4 flex flex-col ">
                <h1 className="font-roboto text-primary_01 font-bold text-lg ">NUNƆAMESIWO</h1>
                <a className="text-base font-roboto font-normal" href="#">Ƒuƒoƒo si me ŋusẽ le</a>
                <a className="text-base font-roboto font-normal" href="#"></a>Sɔhɛ siwo nya woƒe asixɔxɔ
            </div>
            <div className="items-center justify-center content-center align-middle space-y-2" >
                <div className="flex space-x-4">
                    <Image src={rs1} alt="Picture of the author" priority/>
                    <Image src={rs2} alt="Picture of the author" priority/>
                    <Image src={rs3} alt="Picture of the author" priority/>
                    <Image src={rs4} alt="Picture of the author" priority/>
                </div>
                <select id="language" className="px-9 py-2 border border-primary">
                    <option selected>Ewé - ew</option>
                </select>
            </div>

        </div>
    );
};

export default Footer;
