import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const inc = () => {
        setCounter(prevState => prevState + 1)
    }

    const dec = () => {
        setCounter(prevState => prevState - 1)
    }

    return (
        <div className={classes.btn}>
            <button onClick={dec}>---</button>
            {counter}
            <button onClick={inc}>+++</button>
        </div>
    );
};

export default Counter;