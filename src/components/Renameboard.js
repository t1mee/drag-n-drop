import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

export const Renameboard = ({BoardContentState, setBoardContentState, title, sideState, setSideState, boardId}) => {
    const [renameState, setRenameState] = useState(title)
    const handleRenameBoard = e => {setRenameState(e.target.value)}
    const renameButton = () => {
        setSideState(boardId)
    }
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
                if(renameState){
                    const boardStateClone = BoardContentState.map(board => {
                        if(board.id === boardId){
                           return ( board.title === title?{title: renameState, id: board.id, card: board.card}:board)
                        }else{
                            return board
                        }
                        
                })
                setBoardContentState(boardStateClone)
                    
                }else{
                alert('Название должно быть уникальным')
            }
            setSideState(null)
        }}

            
            
    if(sideState !== boardId){
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