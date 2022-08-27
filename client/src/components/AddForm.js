import React from 'react'
import styles from '../static/AddForm.module.css'

const AddForm = (props) => {

  const {list, setList} = props

  const handleSubmit = (e) => {

    e.preventDefault()

    const newItem = {title: e.target.title.value, status: 'incomplete'}

    const newList = [...list, newItem]
    
    setList(newList)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Enter a task"></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddForm