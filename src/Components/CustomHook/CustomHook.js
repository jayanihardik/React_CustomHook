import { useState } from 'react'

const CustomHook = () => {

    const [counter, setCounter] = useState(0)

    const handleCounterIncrement = () => {
        setCounter(counter + 1)
    }

    const handleCounterDecrement = () => {
        if (counter) {
            setCounter(counter - 1)
        }
    }

    return {
        counter,
        handleCounterIncrement,
        handleCounterDecrement
    }
}

export default CustomHook