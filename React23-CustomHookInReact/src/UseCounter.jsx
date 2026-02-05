import React from 'react'
import { useState } from 'react';

export default function UseCounter(initialValue = 0)
{
    const [count, setCount] = useState(initialValue);
    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
    return {
        count,
        incrementCount,
        decrementCount,
        reset
    }
}
