import { motion } from "framer-motion";

export default function Seed({
  color,
  currentPit,
  previousPit,
  seed,
  zIndex,
  pit_type,
  shouldAnimate
}: {
  color?: string;
  currentPit: number;
  previousPit: number;
  seed: number;
  zIndex: number;
  pit_type?: "top" | "bottom";
  shouldAnimate: boolean;
}) {
  const pitWidth = 115;

  const getAnimation = () => {
    if (!shouldAnimate) return {};

    const direction = pit_type === "top" ? -1 : 1;
    const distance = (currentPit - previousPit) * pitWidth * direction;

    return {
      x: distance,
      y: [0, -50, 0], // Add a slight arc to the animation
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    };
  };

  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={getAnimation()}
      className={`w-[16px] h-[16px] bg-center bg-cover bg-no-repeat ${
        color === "Green" ? "bg-[url('./assets/green-seed.png')]" : "bg-[url('./assets/purple-seed.png')]"
      }`}
      style={{ zIndex }}
    />
  );
}