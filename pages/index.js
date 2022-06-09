import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import mainImage from "../public/mainImage.png";
import {bgImage} from "../public/deco.svg";

export default function Home() {
  return (
    <div className="relative" >

        <img className="absolute animate-bounce-entry -z-50 h-[900px] top-[-65px] right-0" src="deco.svg"  alt="svg"/>
        <div className="z-10">
            <Header/>
            <div className=" mt-20 mb-10 mx-40 h-full flex flex-row ">
                <div className=" place-content-centerr">
                    <p className="font-extrabold  font-sans text-[80px]">Srɔ̃ nya yeyewo le Ewegbe me.</p>
                    <p className="font-medium font-sans text-[24px]">Ameliore  ta culture en langue Ewe grâce à Duametɔ en apprenant de nouveaux termes</p>
                    <button className="bg-primary rounded-full shadow-primary shadow-lg px-5 py-2 text-white font-sans font-bold text-[26px]" >Dze egɔme</button>
                </div>
                <div>
                    <Image src={mainImage} alt="Image" width={1500} height={1000}/>
                </div>

            </div>

            <Footer/>
        </div>

        <style jsx>{`
   .bg{
   margin-horizontal: 20px;
 
   }
      `}</style>

    </div>
  )
}
