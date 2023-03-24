import Image from "next/image";
import Typography from "./Typography";

function Hero() {
    return(
        <div>
            <div className="relative -top-20 z-0 h-screen lg:-top-16">
                <Image 
                    src={"/images/hero.jpg"} 
                    alt={"Hero"}
                    fill
                    className="absolute top-0"
                />
            </div>
            <div className="absolute text-center top-24 left-1/4 right-1/4 lg:top-1/4 lg:left-1/3 lg:right-1/3">
                <Typography sizeVariant='h1' colorVariant='secondary' className="font-bold">
                    Let's Bring More Smile !
                </Typography>  
                <Typography sizeVariant='c3' colorVariant='secondary' className="mt-1 lg:mt-3">
                    Millions of people are trying everyday. <br/>
                    Every step they take, might get harder each day.
                    Every penny we dump, might be a treasure for them. 
                </Typography>
                <button className="border px-3 py-3 mt-2 rounded-2xl lg:mt-6">
                    <Typography sizeVariant='c3' colorVariant='secondary'>
                        Donasi Sekarang
                    </Typography>
                </button>
            </div>            
        </div>
    );
  }
  
  export default Hero;
  