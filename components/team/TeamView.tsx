
import { Team } from "./TeamList";


const TeamView = ({ team }: {team: Team | null}) => {
  return <div className="col-span-3 bg-slate-50 rounded-lg h-96 mr-4 p-4">
      <h2 className="text-xl font-medium">Team Leader</h2>
      <div className="flex flex-col gap-0 py-2 px-4 rounded-2xl bg-white mt-2">
        <span className="text-lg font-medium">{team?.teamName}</span>
        <span className="text-sm">{team?.email}</span>
      </div>
      <h2 className="text-xl font-medium mt-4">Games</h2>
    {
      // todo: display games
    }
    </div>
}

export default TeamView;
