import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

export const Renameboard = ({BoardContentState, setBoardContentState, title, sideState, setSideState}) => {
    const [renameState, setRenameState] = useState(title)
    const handleRenameBoard = e => {setRenameState(e.target.value)}
    const renameButton = () => {
        setSideState(title)
    }
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
                if(BoardContentState.find(b => b.title === renameState)){
                    alert('Название должно быть уникальным')
                }else{
                    const boardStateClone = BoardContentState.map(board => {
                        if(board.title === title){
                            
                           return ( board.title === title?{title: renameState, card: board.card}:board)
                            
                        }else{
                            return board
                           
                        }
                        
                })
                setBoardContentState(boardStateClone)
            }
            setSideState(null)
        }}

            
            
    if(sideState !== title){
        return(
            <Button variant="secondary"
                    onClick={renameButton}>
                <span class="material-icons text-info align-self-center">edit</span>
            </Button>)
    }else{
        return(
            <input
            value={renameState}
            onChange={handleRenameBoard}
            onKeyPress={handleKeyDown} />)
    }}