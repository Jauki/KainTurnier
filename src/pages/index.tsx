import React from "react";
import GameView from "../../components/games/GameView";
import { GameProperties, Status } from "../../components/games/Game";
import { TrophyIcon } from "@heroicons/react/24/solid";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 29.03.23
 Project: volleyballtournament
 **/

type indexProperties = {};
const index = (props: indexProperties) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <div className="flex gap-2 p-4 rounded-lg text-2xl font-bold text-slate-900 bg-white"><TrophyIcon className="w-8 fill-orange-500"></TrophyIcon><span className="hidden sm:block">KainTurnier</span></div>
     <div className="sm:w-9/12 sm:h-1/2 h-3/4 overflow-scroll p-4 rounded-xl bg-white">
      <GameView />
     </div>
    </div>
  );
};

export default index;
