import { HangImagen} from './componentes.tsx/HangImage'
import {letters} from './helpers/letters'

import './App.css'

function App () {


  return(
    <div className='App'>
    
    {/*imagen*/}
    <HangImagen imageNumber={8}  />

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
