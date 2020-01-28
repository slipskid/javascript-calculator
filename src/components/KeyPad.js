import React from 'react'
import './KeyPad.css'

export default function KeyPad (props) {
  const onClick = props.onClick
  const keys = [
    { id: 'clear', class: 'clear', value: 'AC' },
    { id: 'delete', class: 'delete', value: 'C' },
    { id: 'divide', class: 'operator', value: '/' },
    { id: 'multiply', class: 'operator', value: '*' },
    { id: 'subtract', class: 'operator', value: '-' },
    { id: 'add', class: 'operator', value: '+' },
    { id: 'equals', class: 'equals', value: '=' },
    { id: 'decimal', class: 'digit', value: '.' },
    { id: 'zero', class: 'digit', value: '0' },
    { id: 'one', class: 'digit', value: '1' },
    { id: 'two', class: 'digit', value: '2' },
    { id: 'three', class: 'digit', value: '3' },
    { id: 'four', class: 'digit', value: '4' },
    { id: 'five', class: 'digit', value: '5' },
    { id: 'six', class: 'digit', value: '6' },
    { id: 'seven', class: 'digit', value: '7' },
    { id: 'eight', class: 'digit', value: '8' },
    { id: 'nine', class: 'digit', value: '9' }
  ]

  return (
    <div className="KeyPad">
      {keys.map(obj => (
        <Key key={obj.id} obj={obj} onClick={onClick}/>
      ))}
    </div>
  )
}

function Key (props) {
  const { obj, onClick } = props

  return (
    <button
      className={'Key ' + obj.class}
      id={obj.id}
      onClick={onClick}
      type="button"
      value={obj.value}
    >
      {obj.value}
    </button>
  )
}
