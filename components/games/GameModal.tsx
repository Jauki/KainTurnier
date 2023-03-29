import React, { useState } from "react";
import Modal from "../common/Modal";
import { PencilIcon } from "@heroicons/react/20/solid";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 29.03.23
 Project: volleyballtournament
 **/

type GameModalProperties = {};
const GameModal = (props: GameModalProperties) => {
 const [open, setOpen] = useState(false);

 const handleClose = () => setOpen(false);
 const handleOpen = () => setOpen(true);

 // todo: ask max for adding stuff

 return <>
  <button className="w-8 p-2 rounded-lg hover:bg-orange-300 font-bold py-2 flex justify-center items-center bg-orange-400 text-white text-sm" onClick={() => (open ? handleClose() : handleOpen())}><PencilIcon/></button>
  <>
   {open &&
     <Modal handleClose={handleClose}>
      <div className="rounded-lg p-8 bg-white">
       <h2 className="text-lg font-medium">Edit Game</h2>
       <div>
        Change referee:
        <input/>
       </div>
       <div className="flex flex-col gap-2">
         Increase Set:
        <button/>
       </div>
       <button className={"w-20 px-4 py-1 flex justify-center items-center text-white bg-orange-500 rounded-lg"}>Update</button>
      </div>
     </Modal>
   }
  </>
 </>
};

export default GameModal;
