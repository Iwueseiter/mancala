import { UseAccountResult } from "@starknet-react/core";
import { SetStateAction } from "jotai";
import { Dispatch, useEffect } from "react";
import SeedOne from "../seeds/seed_1";
import SeedTwo from "../seeds/seed_2";
import SeedThree from "../seeds/seed_3";
import SeedFour from "../seeds/seed_4";
import { findSeed, findSeedsByPit } from "@/lib/utils";
import Seed from "../seed";

export function PitSeven({
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
    previousSeeds
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
    const seed_1 = findSeed(seeds, 1);
    const seed_2 = findSeed(seeds, 2);
    const seed_3 = findSeed(seeds, 3);
    const seed_4 = findSeed(seeds, 4);
    return (
      <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-4 -mt-12 ml-2.5" onClick={handleMove}>
        <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
          <div className= "w-[60px] h-[60px] flex flex-col items-center justify-center hover:cursor-pointer ml-2">
              <div className={"grid grid-cols-4"}>
                <SeedOne color={seed_1?.node.color} zIndex={1} pit={address !== userAccount?.address ? seed_1?.node.pit_number + 7 : seed_1?.node.pit_number} />
                <SeedTwo color={seed_2?.node.color} zIndex={2} pit={address !== userAccount?.account?.address ? seed_2?.node.pit_number + 7 : seed_2?.node.pit_number} />
                <SeedThree color={seed_3?.node.color} zIndex={3} pit={address !== userAccount?.account?.address ? seed_3?.node.pit_number + 7 : seed_3?.node.pit_number} />
                <SeedFour color={seed_4?.node.color} zIndex={4} pit={address !== userAccount?.account?.address ? seed_4?.node.pit_number + 7 : seed_4?.node.pit_number} />
              </div>
          </div>
        </div>
        <div className="rounded-lg w-fit">
          <p className="text-white ml-2">{amount}</p>
        </div>
      </div>
    );
}