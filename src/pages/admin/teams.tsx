import { TeamModal } from "../../../components/team/TeamModal";
import TeamWrapper from "../../../components/team/TeamWrapper";
import Layout from "../_layout"


const team = () => {
  return <Layout>
    <div className="col-span-5 pt-10">
      <h2 className="text-xl font-bold">Teamlist</h2>
      <p className="text-gray-500">Insert, Delete and remove teams from the tournament</p>
    </div>
    <div className="pt-10 pr-4">
      <TeamModal/>
    </div>
    <TeamWrapper/>

  </Layout>
}

export default team;
