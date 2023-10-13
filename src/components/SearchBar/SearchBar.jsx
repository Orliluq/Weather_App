import React, { useState} from 'react';
import './SearchBar.module.css'

const searchBarClass = 'searchBar';
const inputClass = 'input';
const inputdisabledClass = 'inputdisabled';
const btnClass = 'btn';
const btndisabledClass = 'btndisabled';

export default function SearchBar({onSearch2,match}){
  console.log(match.isExact)
    
  //Estado
  const [inputValue, setInputValue] = useState('')
  const inputDisabled = !match.isExact
  
  
 
  const onAddCity=(e)=>{
    console.log(e)
    setInputValue(e.target.value)
    
  }
  
  const onSubmit=(e,param)=>{
    e.preventDefault()
    console.log(param)
    onSearch2(param)
    setInputValue('')
  }

  return(
    <div className={searchBarClass}>
      <form onSubmit={(e)=>onSubmit(e,inputValue)} action="#">
        <input 
          onChange={(e)=>onAddCity(e)} value={inputValue} 
          type="text" 
          disabled={inputDisabled} 
          className={`${inputClass} ${inputDisabled ? inputdisabledClass : ''}`}  
          placeholder={inputDisabled ? 'Hacer Click en INICIO para agregar' : 'Agrega la ciudad o país...'}/>
        
        <button disabled={inputDisabled} className={`${btnClass} ${inputDisabled ? btndisabledClass : ''}`}>Agregar</button>
      </form>
    </div>
  )

};
