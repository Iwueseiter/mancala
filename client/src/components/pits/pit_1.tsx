import { UseAccountResult } from "@starknet-react/core";
import { SetStateAction } from "jotai";
import { Dispatch, useState } from "react";
import SeedOne from "../seeds/seed_1";
import SeedTwo from "../seeds/seed_2";
import SeedThree from "../seeds/seed_3";
import SeedFour from "../seeds/seed_4";

export function PitOne({
    amount,
    address,
    pit,
    game_id,
    status,
    winner,
    userAccount,
    system,
    setTimeRemaining,
    max_block_between_move,
    seeds,
    message,
  }: {
    amount: number;
    address: string;
    pit: number;
    winner: string;
    game_id: string;
    status: string;
    userAccount?: UseAccountResult;
    seed_count: number;
    seeds: any[];
    system: any;
    message: Dispatch<SetStateAction<string | undefined>>;
    setTimeRemaining: Dispatch<SetStateAction<number>>;
    max_block_between_move: number;
    previousSeeds: any[];
  }) {
  
    const handleMove = async () => {
      if (
        address === userAccount?.account?.address &&
        status === "InProgress" &&
        winner === "0x0"
      ) {
        message(undefined);
        await system.move(userAccount?.account, game_id, pit);
        setTimeRemaining(max_block_between_move);
      } else {
        if (address !== userAccount?.account?.address) {
          message("Not your pit");
        } else if (status !== "InProgress") {
          message("Game over");
        } else {
          if (winner === userAccount?.account?.address) {
            message("You won");
          } else {
            message("You lost");
          }
        }
      }
    }
    // console.log("seeds: ", seeds)
    const seed_one = seeds?.filter((seed) => seed.node.seed_number === 1)[0]
    const seed_two = seeds?.filter((seed) => seed.node.seed_number === 2)[0]
    const seed_three = seeds?.filter((seed) => seed.node.seed_number === 3)[0]
    const seed_four = seeds?.filter((seed) => seed.node.seed_number === 4)[0]
    // console.log("seeds one: ", seed_one);
    return (
      <div className={"flex-col h-[125px] w-full flex justify-between items-center space-y-6"} onClick={handleMove}>
        <div className="rounded-lg w-fit">
          <p className="text-white ml-2">{amount}</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
          <div className={"w-[60px] h-[60px] flex flex-col items-center justify-center hover:cursor-pointer ml-2"}>
            {amount > 0 && (
              <div className={"grid grid-cols-4"}>
                <SeedOne color={seed_one?.node.color} zIndex={1} pit={seed_one?.node.pit_number} />
                <SeedTwo color={seed_two?.node.color} zIndex={2} pit={seed_two?.node.pit_number} />
                <SeedThree color={seed_three?.node.color} zIndex={3} pit={seed_three?.node.pit_number} />
                <SeedFour color={seed_four?.node.color} zIndex={4} pit={seed_four?.node.pit_number} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
}