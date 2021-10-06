import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import '../styles/Cards.css';
import  nextId  from "react-id-generator";

export const Cardinput = ({BoardState, setBoardContentState, BoardContentState, sideState, setSideState}) => {
    const getCardId = nextId()
    const cardSide =   'card ' + BoardState.id
    const [newCardState, setNewCard] = useState({name: "", text: "", id: ''})
    const addNewCard = e => {
        if (e.key === 'Enter') {
            if(newCardState.name && newCardState.text ){
                const boardStateClone = BoardContentState.map( i =>{ 
                                                                    if(i.id === BoardState.id){
                                                                        if(i.card){
                                                                            return({title: i.title, id: i.id, card: [...i.card, newCardState]})
                                                                        }else{
                                                                            return({title: i.title, id: i.id, card: [newCardState]})
                                                                        }
                                                                    }else{
                                                                        return i
                                                                    }
                                                                }
                                                                )
                
                setBoardContentState (boardStateClone)
                
            }else{
                alert('поля не могут быть пустым')
            }
            setNewCard({name: "", text: "", id: ""})
            setSideState(null)
        }
        
    }
    const changeText = ({target:{name, value}}) => {
        setNewCard (state => ({...state, [name]: value, id: getCardId}))
      }

    if(sideState !== cardSide){
         return(
        <div className="col-3  mx-2 mt-2 "> 
        <Card 
            onClick={()=>{setSideState(cardSide)}}          
            className='new-card'
            bg={'light-50'}
            text={'info'}
            key={1}      
                >
                    <Card.Header>
                    <h4 className="mt-1 mx-2">
                    New Card
                    </h4></Card.Header>
                        <Card.Body>
                        <Card.Title>Add card </Card.Title>
                        <Card.Text>
                            <span className="material-icons d-flex align-items-center">
                            add
                            </span>
                        </Card.Text>
                </Card.Body>
                </Card>
                </div>
            )
    }else{
        return(
            <div className="col-3  mx-2 mt-2 ">
            <Card 
            className='new-card'
            bg={'light-50'}
            text={'info'}    
                >
                        <Card.Body>
                        <Card.Title>
                        <h6>name card:</h6>
                            <input className="col-12"
                                   onKeyPress={addNewCard}
                                   name='name'
                                   value={newCardState.name}
                                   onChange={changeText}
                                    />
                        </Card.Title>
                        <Card.Text>
                        <h6>name card:</h6>
                            <input className="col-12"
                                    onKeyPress={addNewCard}
                                    name='text'
                                    value={newCardState.text}
                                    onChange={changeText}
                                     />
                        </Card.Text>
                </Card.Body>
                </Card>
                </div>
        )
    }
   
}