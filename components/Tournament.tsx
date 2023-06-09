import { SingleEliminationBracket, Match, SVGViewer, createTheme } from "@g-loot/react-tournament-brackets";
import RefGameModal from "./ref/RefGameModal";
import React from "react";
import Group from "./common/Group";

const matches = [
  {
    "id": 19753,
    "nextMatchId": null,
    "tournamentRoundText": "3",
    "startTime": "2021-05-30",
    "state": "SCHEDULED",
    "participants": []
  },
  {
    "id": 19754,
    "nextMatchId": 19753,
    "tournamentRoundText": "2",
    "startTime": "2021-05-30",
    "state": "SCHEDULED",
    "participants": [
      {
        "id": "14754a1a-932c-4992-8dec-f7f94a339960",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "CoKe BoYz",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19755,
    "nextMatchId": 19754,
    "tournamentRoundText": "1",
    "startTime": "2021-05-30",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "14754a1a-932c-4992-8dec-f7f94a339960",
        "resultText": "Won",
        "isWinner": true,
        "status": "PLAYED",
        "name": "CoKe BoYz",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
        "resultText": "Lost",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Aids Team",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19756,
    "nextMatchId": 19754,
    "tournamentRoundText": "1",
    "startTime": "2021-05-30",
    "state": "RUNNING",
    "participants": [
      {
        "id": "d8b9f00a-0ffa-4527-8316-da701894768e",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "Art of kill",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19757,
    "nextMatchId": 19753,
    "tournamentRoundText": "2",
    "startTime": "2021-05-30",
    "state": "SCHEDULED",
    "participants": []
  },
  {
    "id": 19758,
    "nextMatchId": 19757,
    "tournamentRoundText": "1",
    "startTime": "2021-05-30",
    "state": "SCHEDULED",
    "participants": [
      {
        "id": "9397971f-4b2f-44eb-a094-722eb286c59b",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "Crazy Pepes",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19759,
    "nextMatchId": 19757,
    "tournamentRoundText": "1",
    "startTime": "20:20:19",
    "state": "SCHEDULED",
    "participants": [
      {
        "id": "42fecd89-dc83-4821-80d3-718acb50a30c",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "BLUEJAYS",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "df01fe2c-18db-4190-9f9e-aa63364128fe",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "Bosphorus",
        "picture": "teamlogos/r7zn4gr8eajivapvjyzd"
      }
    ]
  }
]
const WhiteTheme = createTheme({
  // colors
  textColor: {
    main: '#FFFFFF',
    highlighted: '#4A4A4A',
    dark: '#4A4A4A',
  },
  matchBackground: {
    wonColor: '#fb923c',
    lostColor: '#FFFFFF',
  },
  score: {
    background: {
      wonColor: '#f97316',
      lostColor: '#fed7aa',
    },
    text: {
      highlightedWonColor: '#28A745',
      highlightedLostColor: '#DC3545',
    },
  },
  border: {
    color: '#CED4DA',
    highlightedColor: '#fb923c',
  },
  roundHeader: {
    backgroundColor: '#fb923c',
    fontColor: '#FFFFFF',
  },
  connectorColor: '#CED4DA',
  connectorColorHighlight: '#fb923c',
  svgBackground: '#FAFAFA',

  // sizes
  borderRadius: '4px',
  borderWidth: '2px',
  headerHeight: '40px',
  scoreWidth: '60px',
});


const Tournament = () => {
  // todo: implement tournament thing fetches

  return <div className="flex flex-col gap-10">
    <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        theme={WhiteTheme}
      />
    <div className="flex flex-row gap-2">
      <Group/>
    </div>
  </div>
}


export default Tournament;
