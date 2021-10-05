import React from 'react';
import {Cardinput} from './Cardinput'
import {Cards} from './Cards'
import {Button} from 'react-bootstrap';
import {Renameboard} from './Renameboard';


export const Board = ({sideState, setSideState, BoardState, title, CardState, setBoardContentState, BoardContentState}) => {
    const deleteBoard = () => {
        const boardContentClone = BoardContentState.filter( b => b.title !== title)
        setBoardContentState(boardContentClone)
    }
    if(CardState){
        return(
            <div className='m-2 mb-5 shadow mb-5 bg-secondary rounded'>
             <div className='d-flex shadow mb-5 bg-secondary rounded justify-content-between'>
             <div className='d-flex'>
                 <h1  className='mx-4 '>{title}</h1>

                 
            <Renameboard BoardContentState={BoardContentState}
                         setBoardContentState={setBoardContentState}
                         title={title}
                         sideState={sideState}
                         setSideState={setSideState}
                          />
             </div>
                 
    
               <Button 
                onClick={deleteBoard}
                className='d-flex m-2  align-items-center'
                variant="secondary">
                <span className="material-icons text-info">
                close
                </span>
            </Button>
             </div>
             
            
            <div  className='container col-12  d-flex flex-row'>
                {CardState.map(i => {
                                    if(i){
                                        return(
                                                <Cards 
                                                    name ={i.name}
                                                    text ={i.text}
                                                    boardTitle={title}
                                                    BoardContentState={BoardContentState}
                                                    setBoardContentState={setBoardContentState}
                                                />)
                                                    }}
                                            )}
                                            
                <Cardinput  BoardState={BoardState} 
                            setBoardContentState={setBoardContentState} 
                            BoardContentState={BoardContentState}
                            sideState={sideState}
                            setSideState={setSideState} />
                </div>
            <br />
            </div>
        )
    }else{
        return(
            <div className='m-2 mb-5 shadow mb-5 bg-secondary rounded'>
             <div className='d-flex shadow mb-5 bg-secondary rounded'>
                 <h1  className='mx-4 '>{title}</h1> 
            <Button variant="secondary">
                <span className="material-icons text-info align-self-center">edit</span>
            </Button>
    
               
             </div>
            
            <Cardinput BoardState={BoardState} setBoardContentState={setBoardContentState} BoardContentState={BoardContentState} />
            <br />
            
            {/* <Input textName='Введите название карты' /> */}
            </div>
        )
    }
    

}