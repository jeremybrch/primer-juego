import './App.css'
import { HangImagen } from './componentes/HangImage'

import {letters} from './helpers/letters'
export function App() {

  return(
  <div className='app'>
    
    {/*imagen*/}
    <h3>
      <HangImagen/>
    </h3>

    {/*palabra oculta*/}
      <h3>
        _ _ _ _ _ _ _ _ _ _ _ _ _ _
      </h3>

    {/*contador de intentos*/}
    <h3>
      intentos: 0
    </h3>

    {/*botones de letras*/}
     {
      letters.map( (letter) => (
        <button
          key ={letter}>{ letter }
        </button>
      ))
     }
  </div>
        )
}

export default App
