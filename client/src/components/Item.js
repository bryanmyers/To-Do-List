import React from 'react'
import styles from '../static/Item.module.css'

const Item = (props) => {

  const {list, setList, title, status, index} = props

  const handleSubmit = (e) => {

    e.preventDefault()

    setList(list.filter((_,i) => index !== i))
  }

  const handleChange = (e) => {

    let newList = [...list]

    e.target.checked ? newList[index].status = 'complete' : newList[index].status = 'incomplete'

    setList(newList)

  }

  return (
    <li><form onSubmit={handleSubmit}><input type="checkbox" onChange={handleChange} /><span className={status == 'complete'? styles.complete : null}>{title}</span><button>Delete</button></form></li>
  )
}

export default Item