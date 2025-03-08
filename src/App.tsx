import './App.css'
import { DisplayCounter } from './DisplayCounter/DisplayCounter'

function App() {  

  return (

    <div className='container'>
      <DisplayCounter teamColor='Pink'/>
      <DisplayCounter teamColor='Blue'/>
    </div>
  )
}

export default App
