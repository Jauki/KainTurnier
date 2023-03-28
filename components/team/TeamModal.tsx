import React, { useState } from "react"
import Modal from "../common/Modal";


export const TeamModal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  return <>
    <button className="w-full rounded-lg hover:bg-orange-300 font-bold py-2 flex justify-center items-center bg-orange-400 text-white text-sm" onClick={() => (open ? handleClose() : handleOpen())}>Add Team</button>
    <>
      {open &&
        <Modal handleClose={handleClose}>
          <div className="rounded-lg p-8 bg-white">
            <h2 className="text-lg font-medium">Add Team</h2>
          </div>
        </Modal>
      }
    </>
  </>
}
