// const navLinks = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import NavBar from "../NavBar"

function Header() {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(true);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const backgroundTransparacyVar = clientWindowHeight / 600;
    
    if (backgroundTransparacyVar < 1)
      setBackgroundTransparacy(true);
    else
      setBackgroundTransparacy(false);
  }, [clientWindowHeight]);

  return( 
    <>
      <div className="sticky top-0 z-30 min-h-[4rem]">
            <motion.div
              initial={{backgroundColor: "rgba(6,163,113,0)"}}
              animate={{backgroundColor: backgroundTransparacy ? "rgba(6,163,113,0)" : "rgba(6,163,113,1)" }} 
              transition={{duration: 1, delay: 0.2, ease: "easeInOut"}}
            >
              <NavBar />
            </motion.div>   
     </div> 
    </>
    
  );
}

export default Header;
