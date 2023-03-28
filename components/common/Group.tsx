import React from "react";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 28.03.23
 Project: volleyballtournament
 **/

interface Group {
  team: string;
  point: number;
}

type GroupProperties = {

};
const Group = (props: GroupProperties) => {
  return (
    <table>
     <thead>
      <tr>
        <th>TeamName</th>
        <th>Points</th>
      </tr>
     </thead>
     <tbody>

     </tbody>
    </table>
  );
};

export default Group;
