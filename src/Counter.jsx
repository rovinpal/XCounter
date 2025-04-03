import React, {useState} from "react";

const Counter = () => {
    const [valueOfCount, setValueOfCount] = useState(0);

    const handleIncrement= () => {
        setValueOfCount(valueOfCount + 1);
    }

    const handleDecrement= () => {
        setValueOfCount(valueOfCount - 1);
    }

    return (
        <div style={{ padding: '10px 20px', fontSize: '16px' }}>
            <h1>Counter App</h1>
            <p>Count: {valueOfCount}</p>
            <div>
                <button onClick={handleIncrement}>Incrememt</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;