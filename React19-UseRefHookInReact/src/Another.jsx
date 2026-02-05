import { useRef } from 'react'

export default function Another() {
    const inputRef = useRef(null);
    const inputRefNext = useRef(null);
    const focusInput = () => {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'yellow';
    }
    const focusInputNext = () => {
        console.log(inputRefNext);
        inputRefNext.current.focus();
        inputRefNext.current.style.backgroundColor = 'yellow';
    }
    const resetFocus = () => {
        inputRef.current.style.backgroundColor = 'white';
        inputRefNext.current.style.backgroundColor = 'white';
    }
  return (
    <div>
        <h1>Learn React</h1>
        <input ref={inputRef} type="text" placeholder='Focus me' />
        <button onClick={focusInput}>Focus and Highlight</button>
        <input ref={inputRefNext} type="text" placeholder='Focus me' />
        <button onClick={focusInputNext}>Focus and Highlight</button>

        <button onClick={resetFocus}>Reset</button>
    </div>
  )
}
