import React from "react";
import GameView from "../../components/games/GameView";
import { GameProperties, Status } from "../../components/games/Game";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 29.03.23
 Project: volleyballtournament
 **/

const gameObject: GameProperties[] = [
 {
  teamA : {
   name : "Team0",
   points : 0,
   pic_url : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2016%2F10%2FBarcelona-Logo.png&f=1&nofb=1&ipt=9fc756a34c00abbd57e9852bdc8eb0ee0bda3e6b6843ee20d614e6f04c782f7c&ipo=images"
  },
  teamB : {
   name : "Team1",
   points : 0,
   pic_url : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2016%2F10%2FBarcelona-Logo.png&f=1&nofb=1&ipt=9fc756a34c00abbd57e9852bdc8eb0ee0bda3e6b6843ee20d614e6f04c782f7c&ipo=images"
  },
  phase : {
   name : "Phase2",
  },
  field : "B",
  status : Status.finished,
  start: new Date(),
  end : new Date(),
  pointsA: 1,
  pointsB: 2,
 },
]
type indexProperties = {};
const index = (props: indexProperties) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
     <div className="w-9/12 p-4 rounded-xl bg-white">
      <h2 className="text-xl font-bold mb-2">Game View:</h2>
      <GameView games={gameObject}/>
     </div>
    </div>
  );
};

export default index;
