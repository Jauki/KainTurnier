import React from "react";
import Layout from "@/pages/_layout";
import GameView from "../../../components/games/GameView";
import { GameProperties, Status } from "../../../components/games/Game";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 28.03.23
 Project: volleyballtournament
 **/



const games = () => {
  return (
    <Layout>
      <div className="col-span-6 pt-10">
        <h2 className="text-xl font-bold">Games</h2>
        <p className="text-gray-500">History of all Games</p>
      </div>
      <GameView/>
    </Layout>
  );
};

export default games;
