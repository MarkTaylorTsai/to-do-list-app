import React, { useState } from 'react';

function App(){
  
  const [inputText, setInputText] = useState('')
  const [importantList, setImportantList] = useState([])
  const[normalList, setNormalList] = useState([])

  const handleInputTextChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleImportantListChange = () => {
    if(inputText.trim() !== ''){
      setImportantList([...importantList, inputText])
      setInputText('')
    }
  }

  const handleNormalListChange = () => {
    if(inputText.trim() !== ''){
    setNormalList([...normalList, inputText])
    setInputText('')
    }
  }

  const handleDeleteItem = (listType, index) => {
    if(listType === 'important'){
      const updatedList = [...importantList]
      updatedList.splice(index, 1)
      setImportantList(updatedList)
    } else if(listType === 'normalList'){
      const updatedList = [...normalList]
      updatedList.splice(index, 1)
      setNormalList(updatedList)
    }
  }
  return(
    <div>
      <h1>待辦清單</h1>
      <form onSubmit={handleSubmit}>
        <input 
        value={inputText} 
        placeholder="輸入代辦事項" 
        onChange={handleInputTextChange}
        />
      </form>
      <button onClick={handleImportantListChange}>加入"重要事項"</button>
      <button onClick={handleNormalListChange}>加入"一般事項"</button>
      <h3>重要事項</h3>
      <ul>
        {importantList.map((item, index) => (
          <li key={index}>{item}
          <button onClick={() => handleDeleteItem('important', index)}>刪除</button>
          </li>
        ))}
      </ul>
      <h3>一般事項</h3>
      <ul>
        {normalList.map((item, index) => (
          <li key={index}>{item}
          <button onClick={() => handleDeleteItem('normalList', index)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
      
  )
  
}
export default App;