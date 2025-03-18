import { useState } from "react";



function Counter() {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    function onFirstAdd(event: any) {
        var re = /^[0-9]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setFirstNumber(parseInt(event.target.value));
            console.log(typeof firstNumber)
        }
        else {
            alert("Invalid input");
        }
    }

    function onSecondAdd(event: any) {
        var re = /^[0-9]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setSecondNumber(parseInt(event.target.value));
        }
        else {
            alert("Invalid input");
        }
    }

    return (
        <>
            <input type="text" placeholder="please enter first number" name="firstNum" onChange={onFirstAdd}></input>
            <input type="text" placeholder="please enter second number" name="secondNum" onChange={onSecondAdd} ></input>
            <h1>Your result : {result}</h1>
            <button onClick={() =>setResult(firstNumber + secondNumber)}>Add</button>
            <button onClick={() =>setResult(firstNumber - secondNumber)}>Subract</button>
            <button onClick={() =>setResult(firstNumber * secondNumber)}>Multiply</button>
            <button onClick={() =>setResult(firstNumber / secondNumber)}>Division</button>
        </>
    )
}

export default Counter;
