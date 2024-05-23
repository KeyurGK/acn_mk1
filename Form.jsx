import Card from "./Card"
import { BrowserRouter as Routes,Route, Link } from "react-router-dom"
import { useState } from "react";
function Form(){

    const [filledCards, setFilledCards]=useState([]);

    function handleCardFill(form){
        setFilledCards([...filledCards, form])
    }
    function isCardFilled(form){
        return filledCards.includes(form)
    }
    return(
<div className="flex justify-center items-center">           
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">  <div>
    <Link to="/document/basic"><Card form="Basic Details" filled={isCardFilled('basic')}/></Link>
  </div>
  <div>
    <Link to="/document/nda"><Card form="NDA" /></Link>
  </div>
  <div>
    <Link to="/document/epfo"><Card form="EPFO" /></Link>
  </div>
  <div>
    <Link to="/document/education"><Card form="Education" /></Link>
  </div>
  <div>
    <Link to="/document/e"><Card form="Bank" /></Link>
  </div>
  <div>
    <Link to="/document"><Card form="EPFO" /></Link>
  </div>
</div> 

</div> 
       
        
    )
}
export default Form