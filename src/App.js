import React, {useState} from 'react';
import {Board} from './components/Board';
import { Input } from './components/Input';



function App() {
  const [BoardContentState, setBoardContentState] = useState([{title: 'The title 1', card: [{name: '123', text: 'lorem1231231231231'}, {name: '321', text: 'lorem1231231231231'}] }, {title: 'The title 2', card: [{ name: '222', text: 'lorem1231231231231'}]}, {title: 'The 12312', card: [{ name: '333', text: 'lorem1231231231231'}]}])
  const [sideState, setSideState] = useState(null)
  return (
    <div className="App container-fluid m-0 p-0 bg-dark">
      <Input sideState={sideState} setSideState={setSideState} BoardContentState={BoardContentState} setBoardContentState={setBoardContentState}/>
      {BoardContentState.map(BoardState =>
      <Board
      sideState={sideState}
      setSideState={setSideState}
      BoardState={BoardState}
      title = {BoardState.title}
      CardState={BoardState.card}
      setBoardContentState={setBoardContentState}
      BoardContentState={BoardContentState}
       />
      )}
    </div>
  );
}

export default App;
