import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonC from "./components/ButtonC";
import Title from "./components/Title";
import { useState } from "react";


function App(){
  const [calval,setcalval]= useState("3");
  const onButtonClick = (buttonText)=> {
    if(buttonText === "C"){
         setcalval("");
    }else if(buttonText ==="="){
         const result = eval(calval);
         setcalval(result);
    }else{
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  };


  return <div className={styles.calculator}>

<Title></Title>
<Display displayValue={calval}></Display>
<ButtonC onButtonClick={onButtonClick}></ButtonC>


  </div>  
  
}

export default App;