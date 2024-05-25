import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/*const main_title ="salue les gas"
const title = "my_title"
const title_color = {color: 'red', backgroundColor: 'blue'}
const show_title = false
const todos = [
  'task1',
  'task2',
  'task3'
]*/
  


function App() {
  /*const handleClick = (e)=>{
    console.log(e.nativeEvent.target)
    alert('salue')
  }*/

  const increment =(e)=>{
    /*ceci permet de faire que la valeur de count qui sera
    rendu soit independant de count
    setCount((c) => c + 1)
    setCount((c) => c + 1)
    setCount((c) => c + 1)*/
    setCount(count + 1)
  }

  const incrementAge = ()=>{
    setPerson({...person, age: person.age+1})
  }
  const [count, setCount] = useState(0)
  /*return <Fragment>
    <Title color="red" hidden id='fist_comp' className='my_props_class'>Mon composant appelé</Title>
    {show_title ? <h1 className={title} id="title" onClick={handleClick} style={title_color}>{main_title}</h1> : <p>dont show title</p>}
    {todos.map(todo=>(<li key={todo}>{todo}</li>))}
  </Fragment>*/

  const [person, setPerson] = useState({
    firstName: 'dame',
    lastName: 'NDIAYE',
    age: 23
  })
  return <Fragment>
    <p>Compteur: {count}</p>
    <button onClick={increment}>INCREMENTER</button>
    <p>AGE DE {person.firstName} est {person.age} </p>
    <button onClick={incrementAge}>AUGMENTER L'AGE</button>

  </Fragment>
}

/*function Title({color, children, hidden, props}){
  console.log(hidden)
  /*
  ceci permet de masquer le composant avec hidden
  if(hidden){
    return null
  }*/
  /*const prop_to_add = {
    id: 'fist_comp',
    className: 'my_props_class'
  }*/
 /* return <h1 style={{color: color}} {...props}>{children}</h1>
}*/
export default App
