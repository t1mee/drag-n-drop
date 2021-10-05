import React from 'react';
import {Button, Card} from 'react-bootstrap';

export const Cards = ({name, text, boardTitle, BoardContentState, setBoardContentState}) => {
  let contentStateClone = [...BoardContentState]
  const deleteCard = () => {
    contentStateClone = contentStateClone.map(b => {
                          if(b.title === boardTitle){
                            return {title: b.title, card: (b.card.filter(c => c.name !== name))}
                          }else{
                            return b
                          }
    })
    setBoardContentState(contentStateClone)
    console.log(contentStateClone)
  }
  return(
  <div className="col-3  mx-2 mt-2 ">
    <Card
    bg={'dark'}
    text={'info'}
    key={1}  
  >
        <Card.Header className="d-flex justify-content-between px-2">
        <h4 className="mt-1 mx-2">
        {name} 
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
      {text}  
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
)}