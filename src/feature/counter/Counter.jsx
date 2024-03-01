import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, addAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    const [stepValue, setStepValue] = useState(0)
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        const value = Number(e.target.value) || 0;
        setStepValue(value)
    }

    const resetAllFields = () => {
        dispatch(reset())
        setStepValue(0)
    }

    return <section>
        Counter
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>

        <input type="text" value={stepValue} onChange={inputHandler} />

        <div>
            <button onClick={e => dispatch(addAmount(stepValue))}>Add Amount</button>
            <button onClick={resetAllFields}>Reset</button>
        </div>
    </section>;
};

export default Counter;
