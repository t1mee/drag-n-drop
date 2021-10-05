import React, {useState} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import {Addbutton} from './Addbutton';
 
export const Input = ({sideState, setSideState, BoardContentState, setBoardContentState}) => {
    const [valueState, setValueState]  = useState()
    const handleChange = e => {setValueState(e.target.value)}
    let stateClone = [...BoardContentState] 
    const addBoard = () => {
        stateClone = [{title: valueState, card: []}, ...stateClone]
        setBoardContentState(stateClone)
    }
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            if(!BoardContentState.find(i =>(i.title ===  valueState? true: false)) && valueState){
                addBoard()
                
            }else{
                alert('значение должно быть уникальным и не может быть пустым')
            }
            setSideState(null)
        }
      }
    const handleButtonDown = () => {
        if(BoardContentState.find(i =>(i.title ===  valueState? false: true)) && valueState){
            addBoard()
            
        }else{
            alert('значение должно быть уникальным и не может быть пустым')
        }
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