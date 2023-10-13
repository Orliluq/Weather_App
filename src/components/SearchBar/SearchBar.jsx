import React, { useState } from 'react';
import styles from './SearchBar.module.css'

const inputdisabled = 'inputdisabled';
const btndisabled = 'btndisabled';

export default function SearchBar({onSearch2, match}){
  console.log(match.isExact)
    
  //Estado
  const [inputValue, setInputValue] = useState('')
  const inputDisabled = !match.isExact
  
  const handleSearch = () => {
    // Perform the search using the searchQuery variable
    console.log(`Searching for ${inputValue}`);
    onSearch2(inputValue);
    setInputValue('');
  };
 
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
    <div className={styles.searchBar}>
      <form onSubmit={(e)=>onSubmit(e,inputValue)} action="#">
        <input 
          onChange={(e)=>onAddCity(e)} value={inputValue} 
          type="text" 
          disabled={inputDisabled} 
          className={`${styles.input} ${styles.inputDisabled ? inputdisabled : ''}`}  
          placeholder={inputDisabled ? 'Click on HOME to add' : 'Add the city or country...'}/>
        
        <button className={`${styles.btn} ${styles.inputDisabled ? btndisabled : ''}`} onClick={handleSearch}>🔎</button>
      </form>
    </div>
  )

};