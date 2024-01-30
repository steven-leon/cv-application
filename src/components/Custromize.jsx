import { useState } from 'react';
import imgContent from '../assets/content.svg'
import imgCustomize from '../assets/edit.svg'


function Customize() {
    const [backgroundColor, setBackgroundColor] = useState("#fff");
    const [customizeBackgroundColor, setCustomizeBackgroundColor] = useState("#fff");

    const contentShow = () => {
        
      setBackgroundColor("rgb(245, 225, 225)")
      setCustomizeBackgroundColor("#fff");
    }

    const customizeShow = () => {
        
        setCustomizeBackgroundColor("rgb(245, 225, 225)")
        setBackgroundColor("#fff")
      
       
      }
      
    
    
    return ( 
    <>
     <div className="containerCustomize">
        <button
         className='buttonContent'
         onClick={contentShow} 
         style={{ backgroundColor: backgroundColor }}
         ><img src={imgContent} alt="" />Content</button>

        <button 
        className='buttonCustomize' 
        onClick={customizeShow} 
        style={{ backgroundColor: customizeBackgroundColor }}
        ><img src={imgCustomize} alt="" />Customize</button>
     </div>

    
    </> 
    );
}

export default Customize;