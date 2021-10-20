import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/background.json'

const UncontrolledLottie = () => {
    

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return(
      <div>
        <Lottie options={defaultOptions} 
                isClickToPauseDisabled={true}
                className="lottie"
        />
      </div>
    )
}

  
  export default UncontrolledLottie