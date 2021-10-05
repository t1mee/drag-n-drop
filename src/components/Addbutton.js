import React from 'react';
import {Button} from 'react-bootstrap'

export const Addbutton = ({setSideState}) => {
    const openToInput = () => {setSideState("input")}
    return(
    <div className="d-flex justify-content-center align-items-center m-2">
    <Button variant="dark " size="lg" onClick={openToInput}>
        
      <div className="text-info d-flex flex-row">
        <span class="material-icons d-flex align-items-center">
           add
        </span> 
        <div>
          Add board
      </div>
     </div>
    </Button>
    </div> 
)}