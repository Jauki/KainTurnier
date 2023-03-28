import React from "react";
import Layout from "@/pages/_layout";
import GameView from "../../components/games/GameView";
import { GameProperties, Status } from "../../components/games/Game";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 28.03.23
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
const games = () => {
  return (
    <Layout>
      <div className="col-span-6 pt-10">
        <h2 className="text-xl font-bold">Games</h2>
        <p className="text-gray-500">History of all Games</p>
      </div>
      <GameView games={gameObject}/>
    </Layout>
  );
};

export default games;
