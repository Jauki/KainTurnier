import React, { useEffect, useState } from "react";
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
const GameView = () => {
  const [data, setData] = useState<GameProperties[] | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch('https://kainneu.uber.space/kainbackend/match/getall', {
        headers: {
          'Authorization': 'Basic YWRtaW46U2Nob29sVm9sbGV5MjMhI2Nvb2w='
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };

    fetchData(); // Fetch data immediately on mount

    const interval = setInterval(() => {
      fetchData(); // Fetch data every minute
    }, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Game data</p>

  return (
    <div className="col-span-7 sm:col-span-6 w-full overflow-scroll flex flex-col gap-1">
      {
        data.map((game) =>  <Game key={Math.random().toString(23)} teamA={game.teamA} teamB={game.teamB} phase={game.phase} place={game.place} status={game.status} pointsA={game.pointsA} pointsB={game.pointsB}/>)
      }
    </div>
  );
};

export default GameView;
