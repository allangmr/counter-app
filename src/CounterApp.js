import {useState} from 'react'
import Proptypes from 'prop-types'

const CounterApp = ({value = 10}) =>{
    const [counter, setCounter] = useState(value);
    //handelAdd
    const handleAdd = () => {
        setCounter(counter+1);
        // setCounter((c)=> c+1 );
    }
    //handleSubtract
    const handleSubtract = () =>  setCounter(counter-1);

    //handleSubtract
    const handleReset = () => setCounter(value);

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )

}

CounterApp.propTypes = {
    value: Proptypes.number
}

export default CounterApp

