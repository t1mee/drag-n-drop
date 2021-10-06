import React from 'react';
import {Button, Card} from 'react-bootstrap';

export const Cards = ({cardState, boardId, BoardContentState, setBoardContentState}) => {
  let contentStateClone = [...BoardContentState]
  const deleteCard = () => {
    contentStateClone = contentStateClone.map(b => {
                          if(b.id === boardId){
                            return {title: b.title, id: b.id, card: (b.card.filter(c => c.id !== cardState.id))}
                          }else{
                            return b
                          }
    })
    setBoardContentState(contentStateClone)
    console.log(contentStateClone)
  }
  return(
  <div className="col-3  mx-2 mt-2 " id={cardState.id}>
    <Card
    bg={'dark'}
    text={'info'}
    key={1}  
  >
        <Card.Header className="d-flex justify-content-between px-2">
        <h4 className="mt-1 mx-2">
        {cardState.name} 
        </h4>
        <Button 
        onClick={deleteCard}
        className='d-flex px-2'
        variant="dark">
        <span className="material-icons text-info" size="sm">
        close
        </span>
        </Button>
        
        </Card.Header>
    <Card.Body>
      <Card.Title><br /> </Card.Title>
      <Card.Text>
      {cardState.text}  
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
)}