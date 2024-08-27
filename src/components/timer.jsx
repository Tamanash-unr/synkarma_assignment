import { useState, useEffect } from 'react'

const Timer = ({ id, data, onRemove }) => {
    const [minutes, setMinutes] = useState(data.minutes)
    const [seconds, setSeconds] = useState(data.seconds)

    setTimeout(() => {
        let updateSec = seconds - 1
        let updateMin = minutes - 1

        if(updateSec <= 0 && updateMin < 0) {
            setSeconds(0)
            onRemove(id)
        } else if(updateSec === 0) {
            setMinutes(updateMin)
            setSeconds(59)
        } else {
            setSeconds(updateSec)
        }   
    }, 10)
    
    useEffect(() => {
        if(minutes > 0 && seconds === 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
        }
    }, [])

    const date = new Date(data.createdAt)
    const formattedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' +
                        date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  
    return (
    <div className='timer'>
        <div className='countdownContainer'>
            <div className='timerCountdown'>
                {`${minutes},${seconds}`}
            </div>
            <button className='countdownBtn' onClick={() => onRemove(id)}> 
                x
            </button>
        </div>
        <div>
            {formattedDate}
        </div>
    </div>
    )
}

export default Timer