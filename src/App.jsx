
import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {
  const handleClick = () => {
    alert('Button clicked')
  }

  const addNum = (num) => {
    alert(num + 5);
  }

  return (

    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick}>Click The Button</button>
      {/* Annoymouse function */}
      <button onClick={() => { alert('2nd Button Clicked') }}>2nd Button</button>
      {/* Annoymouse function with set value */}
      <button onClick={() => addNum(10)}>Add Number</button>


    </>
  )
}

export default App
