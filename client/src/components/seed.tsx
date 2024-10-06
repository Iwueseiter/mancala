import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Seed(
    { color, zIndex, pit }:
    { color: string; zIndex: number, pit: number }
) {
    useEffect(() => {}, [pit])
    const x = pit === 1 ? 0 : 
    pit === 2 ? 16 :
    pit === 3 ? 32 :
    pit === 4 ? 48 :
    pit === 5 ? 64 :
    pit === 6 ? 80 : 96;
    return(
        <motion.div
            initial={{
                x: 0,
                y: 0,
            }}
            animate={{
                x,
                y: pit,
            }}
            className={`w-[16px] h-[16px] bg-center bg-cover bg-no-repeat ${
                color === "Green" ? "bg-[url('./assets/green-seed.png')]" : "bg-[url('./assets/purple-seed.png')]"
            }`}
            style={{ zIndex }}
        >{pit}</motion.div>
    )
}