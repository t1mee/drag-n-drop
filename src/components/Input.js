import React, {useState} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import {Addbutton} from './Addbutton';
import  nextId  from "react-id-generator";
 
export const Input = ({sideState, setSideState, BoardContentState, setBoardContentState}) => {
    const [valueState, setValueState]  = useState()
    const handleChange = e => {setValueState(e.target.value)}
    let stateClone = [...BoardContentState] 
    const getBoardId = nextId()
    const addBoard = () => {
        stateClone = [{title: valueState, card: [], id: getBoardId}, ...stateClone]
        setBoardContentState(stateClone)
    }
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            if(valueState){
                addBoard()
                
            }else{
                alert('значение и не может быть пустым')
            }
            setSideState(null)
            setValueState("")
        }
      }
    const handleButtonDown = () => {
        if( valueState){
            addBoard()
            
        }else{
            alert('значение не может быть пустым')
        }
        setValueState("")
        setSideState(null)
    }

    if(sideState !== 'input'){
        return(
            <Addbutton setSideState={setSideState} />
        )
    }else{
        return(
            <div className="container col-12 d-flex justify-content-center align-items-center">
            <div className="col-3 m-3 ">
             <InputGroup>
                <FormControl
                onKeyPress={handleKeyDown}
                value={valueState}
                onChange={handleChange}
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleButtonDown}>
                Button
                </Button>
            </InputGroup>
            </div>
            </div>
        )
    }
    
}