import React from "react";
import Game, { GameProperties } from "./Game";
import games from "@/pages/admin/games";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 28.03.23
 Project: volleyballtournament
 **/

type GameViewProperties = {
  games: GameProperties[];
};
const GameView = (props: GameViewProperties) => {
  // todo: add Sort!
  return (
    <div className="col-span-7 sm:col-span-6 w-full h-full overflow-scroll flex flex-col gap-1">
      {
        props.games.map((game) =>  <Game key={Math.random().toString(23)} teamA={game.teamA} teamB={game.teamB} phase={game.phase} field={game.field} status={game.status} start={game.start} end={game.end} pointsA={game.pointsA} pointsB={game.pointsB}/>)
      }
    </div>
  );
};

export default GameView;
