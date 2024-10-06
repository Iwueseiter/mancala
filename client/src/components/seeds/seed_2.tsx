import { motion } from "framer-motion";

export default function SeedTwo(
    { color, zIndex, pit }:
    { color: string; zIndex: number, pit: number }
) {
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
        />
    )
}