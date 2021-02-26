import Lottie from 'lottie-react-web'
import bgAnimation from '../assets/background.json'


const Background = () => {    
    return (
        <Lottie  
            className='bg-animation'
            options={{
                animationData: bgAnimation,
            }}
        />
    )
}

export default Background
