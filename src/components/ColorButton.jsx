import React, { useEffect, useState, useRef } from 'react'
// import syncFunction from './syncFunction'

//There will be some text, and the button changes color of the text.

const ColorButton = () => {
  const [colorArray, setColorArray] = useState(['blue', 'green', 'red', 'yellow', 'purple'])
  // console.log(useState(['blue', 'green', 'red', 'yellow', 'purple']))
  const [selectedColor, setSelectedColor] = useState(colorArray[0] || 'blue')
  const [counter, setCounter] = useState(0)
  const [arrayToString, setArrayToString] = useState([])

  //pass by reference and pass by value
  //arrays and objects pass by reference.
  const targetClassName = useRef()
  const handleClick = (e) => {
    console.log(e.target.className, selectedColor, colorArray[e.target.className])
    // selectedColor !== colorArray[e.target.className] ? setCounter(counter + 1) : null
    setSelectedColor(colorArray[e.target.className])
    setArrayToString([...arrayToString, e.target.className])
    // arrayToString.push(e.target.className)
  }

  useEffect(() => {
    setCounter(counter + 1) // didMount (gets overrided)
    // return setCounter(counter + 12) // on unMount (gets priority)
  }, [selectedColor])

  useEffect(() => {}, [arrayToString])

  console.log('rendered')
  //tuple = [1, 2] Map !== Array.prototype.map() Map = [[1 , 2],[1 , 2],[1 , 2]]
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button className="0" onClick={handleClick}>
          Click me to change color to blue
        </button>
        <button className="1" onClick={handleClick}>
          Click me to change color to green
        </button>
        <button className="2" onClick={handleClick}>
          Click me to change color to red
        </button>
        <button className="3" onClick={handleClick}>
          Click me to change color to yellow
        </button>
        <button className="4" onClick={handleClick}>
          Click me to change color to purple
        </button>
      </div>
      <h1 style={{ color: selectedColor }}>text color</h1>
      <p>{counter}</p>
      {arrayToString.map((e) => {
        return <p>{e}</p>
      })}
    </>
  )
}

export default ColorButton

// export default () => {}
