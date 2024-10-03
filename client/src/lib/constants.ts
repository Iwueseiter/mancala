import eniola from "../assets/eniola.png";
import israel from "../assets/israel.png";
import { gql } from "@apollo/client";
import SeedOne from "../components/seeds/seed_1";
import SeedTwo from "../components/seeds/seed_2";
import SeedThree from "../components/seeds/seed_3";
import SeedFour from "../components/seeds/seed_4";
import SeedFive from "../components/seeds/seed_5";
import SeedSix from "../components/seeds/seed_6";
import SeedSeven from "../components/seeds/seed_7";
import SeedEight from "../components/seeds/seed_8";
import SeedNine from "../components/seeds/seed_9";
import SeedTen from "../components/seeds/seed_10";
import SeedEleven from "../components/seeds/seed_11";
import SeedTwelve from "../components/seeds/seed_12";
import SeedThirteen from "../components/seeds/seed_13";
import SeedFourteen from "../components/seeds/seed_14";
import SeedFifteen from "../components/seeds/seed_15";
import SeedSixteen from "../components/seeds/seed_16";
import SeedSeventeen from "../components/seeds/seed_17";
import SeedEighteen from "../components/seeds/seed_18";
import SeedNineteen from "../components/seeds/seed_19";
import SeedTwenty from "../components/seeds/seed_20";
import SeedTwentyOne from "../components/seeds/seed_21";
import SeedTwentyTwo from "../components/seeds/seed_22";
import SeedTwentyThree from "../components/seeds/seed_23";
import SeedTwentyFour from "../components/seeds/seed_24";
import SeedTwentyFive from "../components/seeds/seed_25";
import SeedTwentySix from "../components/seeds/seed_26";
import SeedTwentySeven from "../components/seeds/seed_27";
import SeedTwentyEight from "../components/seeds/seed_28";
import SeedTwentyNine from "../components/seeds/seed_29";
import SeedThirty from "../components/seeds/seed_30";
import SeedThirtyOne from "../components/seeds/seed_31";
import SeedThirtyTwo from "../components/seeds/seed_32";
import SeedThirtyThree from "../components/seeds/seed_33";
import SeedThirtyFour from "../components/seeds/seed_34";
import SeedThirtyFive from "../components/seeds/seed_35";
import SeedThirtySix from "../components/seeds/seed_36";
import SeedThirtySeven from "../components/seeds/seed_37";
import SeedThirtyEight from "../components/seeds/seed_38";
import SeedThirtyNine from "../components/seeds/seed_39";
import SeedForty from "../components/seeds/seed_40";
import SeedFortyOne from "../components/seeds/seed_41";
import SeedFortyTwo from "../components/seeds/seed_42";
import SeedFortyThree from "../components/seeds/seed_43";
import SeedFortyFour from "../components/seeds/seed_44";
import SeedFortyFive from "../components/seeds/seed_45";
import SeedFortySix from "../components/seeds/seed_46";
import SeedFortySeven from "../components/seeds/seed_47";
import SeedFortyEight from "../components/seeds/seed_48";
import React from "react";

export const chat = [
  {
    user: "isreal",
    avatar: israel,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "eniola",
    avatar: eniola,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "isreal",
    avatar: israel,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "eniola",
    avatar: eniola,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "isreal",
    avatar: israel,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "eniola",
    avatar: eniola,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "isreal",
    avatar: israel,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
  {
    user: "eniola",
    avatar: eniola,
    message: "I will take it easy on you Eniola, but show me what you've got.",
    date: "01:21pm",
  },
];

export const table_head = ["Player", "Level", "Score"];

export const player_header = [
  {
    id: 1,
    name: "Player",
  },
  {
    id: 2,
    name: "Level",
  },
  {
    id: 3,
    name: "Score",
  },
  {
    id: 4,
    name: "Duels",
  },
  {
    id: 5,
    name: "Wins",
  },
  {
    id: 6,
    name: "Losses",
  },
];

export const player_stats = [
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
  {
    id: 1,
    image: israel,
    name: "Israel",
    level: "Level 5",
    score: "5982.10",
    duels: 16,
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    id: 2,
    image: eniola,
    name: "Eniola",
    level: "Level 3",
    score: "3982.10",
    duels: 12,
    wins: 8,
    losses: 3,
    draws: 1,
  },
];

export const duels_header = [
  {
    id: 1,
    name: "Challenger",
  },
  {
    id: 2,
    name: "Challenged",
  },
  {
    id: 3,
    name: "Winner",
  },
  {
    id: 4,
    name: "Date",
  },
];

export const duels_stats = [
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    winner: "Eniola",
    date: "14 - 05 - 2024",
  },
];

export const live_duels_header = [
  {
    id: 1,
    name: "Challenger",
  },
  {
    id: 2,
    name: "Challenged",
  },
  {
    id: 3,
    name: "Date",
  },
  {
    id: 4,
    name: "Status",
  },
];

export const live_duels_stats = [
  {
    id: 0,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    date: "14 - 05 - 2024, 12:13PM",
    status: "Join Game",
  },
  {
    id: 1,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: null,
    date: "14 - 05 - 2024, 12:13PM",
    status: "Joined",
  },
  {
    id: 2,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    date: "14 - 05 - 2024, 12:13PM",
    status: "Join Game",
  },
  {
    id: 3,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: null,
    date: "14 - 05 - 2024, 12:13PM",
    status: "Joined",
  },
  {
    id: 4,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    date: "14 - 05 - 2024, 12:13PM",
    status: "Join Game",
  },
  {
    id: 5,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: null,
    date: "14 - 05 - 2024, 12:13PM",
    status: "Joined",
  },
  {
    id: 6,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: {
      name: "Israel",
      image: israel,
    },
    date: "14 - 05 - 2024, 12:13PM",
    status: "Join Game",
  },
  {
    id: 7,
    challenger: {
      name: "Eniola",
      image: eniola,
    },
    challenged: null,
    date: "14 - 05 - 2024, 12:13PM",
    status: "Joined",
  },
];

export const players = ["Eniola", "Israel"];

export const animate = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export const gameStarted = (games_data_one: any, games_data_two: any) =>
  !(
    games_data_one?.pit1 == 4 &&
    games_data_one?.pit2 == 4 &&
    games_data_one?.pit3 == 4 &&
    games_data_one?.pit4 == 4 &&
    games_data_one?.pit5 == 4 &&
    games_data_one?.pit6 == 4 &&
    games_data_two?.pit1 == 4 &&
    games_data_two?.pit2 == 4 &&
    games_data_two?.pit3 == 4 &&
    games_data_two?.pit4 == 4 &&
    games_data_two?.pit5 == 4 &&
    games_data_two?.pit6 == 4
  );

export const SLOT_RPC_URL =
  "https://api.cartridge.gg/x/mancala-alpha-v13/katana";

const ACTION_ADDRESS =
  "0x118a60389f608c67c639f83683a265a22102f2d226c41aa04af65135ff8103e";

export const POLICIES = [
  {
    target: ACTION_ADDRESS,
    method: "initialize_game_counter",
  },
  {
    target: ACTION_ADDRESS,
    method: "new_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "create_private_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "join_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "move",
  },
  {
    target: ACTION_ADDRESS,
    method: "request_restart_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "restart_current_game",
  },
  {
    target: ACTION_ADDRESS,
    method: "forfeited",
  },
  {
    target: ACTION_ADDRESS,
    method: "timeout",
  },
];

export const MancalaBoardModelsQuery = gql`
  query mancalaMancalaBoardModels {
    mancalaMancalaBoardModels {
      edges {
        node {
          game_id
          player_one
          player_two
          current_player
          winner
          status
          is_private
          entity {
            executedAt
          }
        }
      }
    }
  }
`;

export const MancalaBoardModelQuery = gql`
  query mancalaMancalaBoardModel($gameId: u128) {
    mancalaMancalaBoardModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          game_id
          player_one
          player_two
          current_player
          winner
          status
          is_private
          max_block_between_move
          entity {
            executedAt
          }
        }
      }
    }
  }
`;

export const MancalaPlayQuery = gql`
  query mancalaPlayerModels($gameId: u128) {
    mancalaPlayerModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          address
          game_id
          len_pits
          restart_requested
        }
      }
    }
    mancalaPitModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          game_id
          player
          seed_count
          pit_number
        }
      }
    }
  }
`;

export const MancalaSeedQuery = gql`
  query mancalaSeedModels($gameId: u128) {
    mancalaSeedModels(where: { game_id: $gameId }, limit: 1000000000) {
      edges {
        node {
          game_id
          pit_number
          player
          seed_number
          color
        }
      }
    }
  }
`;

export const MancalaHeaderQuery = gql`
  query FetchModelsForHeader {
    mancalaGameModels {
      edges {
        node {
          game_id
          player_one
          player_two
          current_player
          winner
          status
          is_private
        }
      }
    }
  }
`;

type SeedProps = {
  color: string;
  zIndex: number;
  previous: number;
  next: number;
  pit_type: "top" | "bottom";
};

type SeedComponent = React.ComponentType<SeedProps>;

export const renderSeed = (seedNumber: number, color: string, zIndex: number, previous: number, next: number, pit_type: "top" | "bottom") => {
  const SeedComponent = getSeedComponent(seedNumber);
  return SeedComponent ? React.createElement(SeedComponent, { color, zIndex, previous, next, pit_type }) : null;
};

export const getSeedComponent = (seedNumber: number): SeedComponent | null => {
  switch (seedNumber) {
    case 1: return SeedOne;
    case 2: return SeedTwo;
    case 3: return SeedThree;
    case 4: return SeedFour;
    case 5: return SeedFive;
    case 6: return SeedSix;
    case 7: return SeedSeven;
    case 8: return SeedEight;
    case 9: return SeedNine;
    case 10: return SeedTen;
    case 11: return SeedEleven;
    case 12: return SeedTwelve;
    case 13: return SeedThirteen;
    case 14: return SeedFourteen;
    case 15: return SeedFifteen;
    case 16: return SeedSixteen;
    case 17: return SeedSeventeen;
    case 18: return SeedEighteen;
    case 19: return SeedNineteen;
    case 20: return SeedTwenty;
    case 21: return SeedTwentyOne;
    case 22: return SeedTwentyTwo;
    case 23: return SeedTwentyThree;
    case 24: return SeedTwentyFour;
    case 25: return SeedTwentyFive;
    case 26: return SeedTwentySix;
    case 27: return SeedTwentySeven;
    case 28: return SeedTwentyEight;
    case 29: return SeedTwentyNine;
    case 30: return SeedThirty;
    case 31: return SeedThirtyOne;
    case 32: return SeedThirtyTwo;
    case 33: return SeedThirtyThree;
    case 34: return SeedThirtyFour;
    case 35: return SeedThirtyFive;
    case 36: return SeedThirtySix;
    case 37: return SeedThirtySeven;
    case 38: return SeedThirtyEight;
    case 39: return SeedThirtyNine;
    case 40: return SeedForty;
    case 41: return SeedFortyOne;
    case 42: return SeedFortyTwo;
    case 43: return SeedFortyThree;
    case 44: return SeedFortyFour;
    case 45: return SeedFortyFive;
    case 46: return SeedFortySix;
    case 47: return SeedFortySeven;
    case 48: return SeedFortyEight;
    default: return null;
  }
};