import { useState } from "react"
import { testFunction, validateWithRegex } from "./regexFunc"

const RegexComponent = () => {
    const [strToTest, setStrToTest] = useState("")
    const [testResult, setTestResult] = useState(null)
    const [checkResult, setCheckResult] = useState(null)

    const handleOnChange = (e) => {
        setStrToTest(e.target.value)
    }

    const handleOnTest = () => {
        const result = validateWithRegex(strToTest, 10)
        setTestResult(result)
    }

    const handleOnCheck = () => {
        const result = testFunction(strToTest, 10)
        setCheckResult(result)
    }

    return (
        <section>
            <section>
                <label htmlFor="">Input string</label>
                <input
                    type="text"
                    value={strToTest}
                    onChange={handleOnChange}
                />
                <button onClick={handleOnTest}>
                    Test
                </button>
            </section>
            <section>
                {testResult !== null && (
                    <article>
                        <h1>Result</h1>
                        <h3>{testResult ? "Valid" : "Not valid"}</h3>
                    </article>
                )}
            </section>
            <section>
                <h2>Check test function result</h2>
                <button onClick={handleOnCheck}>Check</button>
                {checkResult !== null && (
                    <article>
                        <h1>Result</h1>
                        <h3>{checkResult ? "Everything works!" : "Something is broken!"}</h3>
                    </article>
                )}
            </section>
        </section>
    )
}

export default RegexComponent