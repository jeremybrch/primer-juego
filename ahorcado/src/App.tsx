let words: string [] = [
  'COMPUTADORA',
  'TELEFONO',
  'COCINA',
  'TELEVISOR',
  'AGUA',
  'PALABRA',
  'JUEGO',
  'MENSAJE',
  'INTERNET',
  'CODIGO',
  'OCULTO',
  'LOGICA',
  'IMAGENES',
  'LETRAS',
  'AHORCADO',
  'RATON',
]



export function getRandonWord (){

  const randomIndex = Math.floor( Math.random() * words.length )


  return words[randomIndex]

}