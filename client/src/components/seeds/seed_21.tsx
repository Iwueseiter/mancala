export default function SeedTwentyOne({ color, zIndex }: { color: string; zIndex: number }) {
    return(
        <div
            className={`w-[16px] h-[16px] bg-center bg-cover bg-no-repeat ${
                color === "Green" ? "bg-[url('./assets/green-seed.png')]" : "bg-[url('./assets/purple-seed.png')]"
            }`}
            style={{ zIndex }}
        />
    )
}