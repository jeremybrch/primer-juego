import image0 from '../assets.tsx/0.png'
import image1 from '../assets.tsx/1.png'
import image2 from '../assets.tsx/2.png'
import image3 from '../assets.tsx/3.png'
import image4 from '../assets.tsx/4.png'
import image5 from '../assets.tsx/5.png'
import image6 from '../assets.tsx/6.png'
import image7 from '../assets.tsx/7.png'
import image8 from '../assets.tsx/8.png'
import image9 from '../assets.tsx/9.png'

const images : string[] = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
]


interface Props {
    imageNumber: number
}

export function HangImagen ( {imageNumber} : Props) {

    if (imageNumber > 9){
        imageNumber = 9;
    }

    return (
        <img src={images[imageNumber] }
         alt='HangImagen'
         style={{width: 250}}/>
    )
}