
export interface Team {
  teamName: string;
  email: string;
  school: string;
  group: {
    id: number,
    name: string;
  };
  // provide an Link to the person 
  contact: string;
  pic_url: string;
}



export const TeamList = ({ teamList, handleTeam }: {teamList: Team[], handleTeam:  (team: Team) => void }) => {
  return <>
  <table className="table-auto h-min max-h-80 overflow-scroll col-span-3">
    <thead className="min-w-full text-left text-md text-neutral-800 font-light">
      <tr>
        <th className="px-6 py-4">Rank   </th>
        <th className="px-6 py-4">Name   </th>
        <th className="px-6 py-4">E-Mail </th>
        <th className="px-6 py-4">School </th>
      </tr>
    </thead>
    <tbody>
        {teamList.map((team, i) => <tr className="border-b dark:border-neutral-200 text-neutral-600" key={Math.random().toString(23)} onClick={() => handleTeam(team)}>
        <td className="whitespace-nowrap px-6 py-4 font-medium">{i}</td>
        <td className="whitespace-nowrap px-6 py-4">{team.teamName}</td>
        <td className="whitespace-nowrap px-6 py-4">{team.email}</td>
        <td className="whitespace-nowrap px-6 py-4">{team.school}</td>
      </tr>)}
    </tbody>
    </table>
    </>
}