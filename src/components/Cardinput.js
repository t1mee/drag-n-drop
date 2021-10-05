import React, {useState} from 'react';
import { Card} from 'react-bootstrap';
import '../styles/Cards.css'

export const Cardinput = ({BoardState, setBoardContentState, BoardContentState, sideState, setSideState}) => {
    const cardSide =   'card ' + BoardState.title
    const [newCardState, setNewCard] = useState({name: "", text: ""})
    const addNewCard = e => {
        if (e.key === 'Enter') {
            if(newCardState.name && newCardState.text && !BoardContentState.find(i => i.card.find( c=> c.name === newCardState.name))){
                const boardStateClone = BoardContentState.map( i =>{ 
                                                                    if(i.title === BoardState.title){
                                                                        if(i.card){
                                                                            return({title: i.title, card: [...i.card, newCardState]})
                                                                        }else{
                                                                            return({title: i.title, card: [newCardState]})
                                                                        }
                                                                    }else{
                                                                        return i
                                                                    }
                                                                }
                                                                )
                
                setBoardContentState (boardStateClone)
                
            }else{
                alert('название карточки не должно повторяться или быть пустым')
            }
            setNewCard({name: "", text: ""})
            setSideState(null)
        }
        
    }
    const changeText = ({target:{name, value}}) => {
        setNewCard (state => ({...state, [name]: value}))
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
            key={1}      
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