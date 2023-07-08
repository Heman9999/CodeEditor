import './App.css';
import AllContainer from './managecode/AllContainer';
import { dataManager } from './dataManager/context';
import { useState } from 'react';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'

function App() {
  const [xml,setXml] = useState('')
  const [css,setCss] = useState('')
  const [js,setJs] = useState('')
  return (
    <dataManager.Provider value={{xml,css,js,setXml,setCss,setJs}}>
      <div className="App">
        <AllContainer/>
      </div>
    </dataManager.Provider>
  );
}

export default App;
