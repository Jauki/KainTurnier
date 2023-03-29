import React from 'react'
import RefGameModal from '../../../components/ref/RefGameModal';
import Layout from '../_layout';

export enum Status {
  notStarted="notStarted",
  onGoing="ongoing",
  finished="finished"
}

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

const Referee = () => {
  return (
    <RefGameModal />
  );
}

export default Referee;
