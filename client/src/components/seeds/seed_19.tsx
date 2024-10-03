export default function SeedNineteen(
    { color, zIndex, previous, next, pit_type }:
    { color: string; zIndex: number, previous: number, next: number, pit_type: "top" | "bottom" }
) {
    return(
        <div
            className={`w-[16px] h-[16px] bg-center bg-cover bg-no-repeat ${
                color === "Green" ? "bg-[url('./assets/green-seed.png')]" : "bg-[url('./assets/purple-seed.png')]"
            }`}
            style={{ zIndex }}
        />
    )
}