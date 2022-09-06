import {useState} from 'react'

export default function useToggle(initialValue = false) {
  const [toggled, setToggled] = useState(initialValue);

    function toggleState(){
        setToggled(!toggled);
    }
    function closeState(){
      setToggled(false);
    }
    return [toggled, toggleState, closeState];
}
