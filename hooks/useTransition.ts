import  { useState } from 'react'

export default function useTransition(initial = false) {
    const [isTransitioning, setIsTransitioning] = useState(initial);

    function toggleTransition(){
        setIsTransitioning(true);
       setTimeout(() => {
            setIsTransitioning(false);

        },400)
    }
   

    return [isTransitioning, toggleTransition];
 
}
