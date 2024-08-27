import { useState } from 'react';

import Timer from './components/timer';
import './App.css';

function App() {
  const [timers, setTimers] = useState([])
  const [countdownInput, setCountdownInput] = useState('')

  const addNewTimer = () => {
    if(!countdownInput || !checkInput(countdownInput)){
      alert('Please enter a valid countdown time')
      return
    }

    const newTimer = {
      minutes: Math.floor(countdownInput / 60),
      seconds: (countdownInput % 60),
      createdAt: Date.now()
    }

    setTimers([...timers, newTimer])
    setCountdownInput('')
  }

  const checkInput = (input) => {
    let regex = /^[0-9]+$/

    return regex.test(input)
  }

  const removeTimer = (id) => {
    setTimers(timers.filter((timer, index) => index !== id))
  }

  return (
    <div className="main">
      <div className='timerContainer'>
        {
          timers.map((timer, index) => {
            return (
              <Timer key={timer.createdAt} id={index} data={timer} onRemove={removeTimer}/>
            )
          })
        }
      </div>
      <div className='formContainer'>
          <input 
            type='number' 
            className='inputStyle' 
            value={countdownInput} 
            placeholder='Enter Seconds'
            onChange={(evt) => setCountdownInput(evt.target.value)}
          />
          <button onClick={() => addNewTimer()}>
            Add New Timer
          </button>
      </div>
    </div>
  );
}

export default App;
