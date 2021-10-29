import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';

import {useState} from 'react';

function App() {
  const [name,setName] = useState('Niksa');
  const [text,setText] = useState('');

  const handleChangeText = (event) =>{
  
    setText(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
      
      <input type='text' value={text} onChange={handleChangeText} />
        <button onClick={() => setName(text)}>Click</button>
        
        <Ccomponent name={name} />
        
        
      </header>
    </div>
  );
}

export default App;
