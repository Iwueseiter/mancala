import clsx from "clsx";
import { motion } from "framer-motion";

export default function Seed({ color, currentPit, previousPit, seed }: { color?: string, currentPit: number, previousPit: number, seed: number }) {
    const animations = [
        {
            x: 100,
            y: 100,
        }
    ]
    console.log(seed)
    return (
        <motion.div
            animate={animations[seed - 1]}
            className={clsx(color === "Green" ? "bg-[url('./assets/green-seed.png')]" : "bg-[url('./assets/purple-seed.png')]", 'w-[16px] h-[16px] bg-center bg-cover bg-no-repeat')} 
        />
    )
}
