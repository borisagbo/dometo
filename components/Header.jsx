import React from 'react';
import Image from "next/image";
import Logo from "../public/Logo.png"
import iconDark from "../public/icon_darkmode.svg"


const Header = () => {
    return (
        <div className="flex flex-row justify-between mx-40 mt-16">

            <Image src={Logo}   alt="Picture of the author"
                   width={200}
                   height={50}

                   priority/>
            <div className="flex justify-between">

                <div className="flex space-x-20 justify-center mx-10 self-center">
                    <a className="font-sans hover:underline hover:font-bold font-medium text-xl self-center"  href="#">Aƒeme</a>
                    <a className="font-sans hover:underline hover:font-bold font-medium text-xl self-center" href="#">Srɔ̃nu</a>
                    <a className="font-sans hover:underline hover:font-bold font-medium text-xl self-center" href="#">Ku ɖe</a>
                    <a className="font-sans font-medium text-xl bg-primary p-2 rounded-xl " href="#">Ge ɖe eme</a>

                </div>
                <Image src={iconDark} />
            </div>

        </div>

    );
};

export default Header;
