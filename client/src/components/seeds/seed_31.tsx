import { motion } from "framer-motion";

export default function SeedThirtyOne(
    { color, zIndex, pit }:
    { color: string; zIndex: number, pit: number }
) {
    // console.log("pit 31: ", pit)
    return(
        <motion.div
            initial={{
                x: 0,
                y: 0,
            }}
            animate={{
                x: pit - 7,
                y: 20,
            }}
            className={`w-[16px] h-[16px] bg-center bg-cover bg-no-repeat ${
                color === "Green" ? "bg-[url('./assets/green-seed.png')]" : "bg-[url('./assets/purple-seed.png')]"
            }`}
            style={{ zIndex }}
        />
    )
}