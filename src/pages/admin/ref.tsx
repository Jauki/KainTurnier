import React from 'react'
import RefGameModal from '../../../components/ref/RefGameModal';
import Layout from '../_layout';
import { GameProperties } from "../../../components/games/Game";
import GameView from "../../../components/games/GameView";

export enum Status {
  notStarted="notStarted",
  onGoing="ongoing",
  finished="finished"
}

const Referee = () => {
  return (
    <GameView />
  );
}

export default Referee;
