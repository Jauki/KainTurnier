import { useState } from "react"
import { Team } from "./TeamList";
import TeamView from "./TeamView";
import { TeamList } from "./TeamList";

const TeamWrapper = () => {
  const [team, setTeam] = useState<Team | null>(null);

  const handleTeam = (team: Team) => {
    console.log("Update displayed State")
    // triggers rerender
    setTeam(team);
  }
  
  return <>
    <TeamList handleTeam={handleTeam}  teamList={[{ teamName: "foo", email: "foo", group: { id: 2, name: "foo"}, school: "HTBLa", contact:"foo!", pic_url: "foo!" }]} />
    <TeamView team={team} />
  </>
}

export default TeamWrapper;