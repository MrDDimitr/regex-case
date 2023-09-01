const predefinedChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

export const validateWithRegex = (someString, maxLength, specialChars = predefinedChars) => {
    const theRegex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${specialChars}])(?!.*[\\s]).{1,${maxLength}}$`, "gm")
    const regexTestResult = theRegex.test(someString)
    return regexTestResult
}

export const testFunction = () => {
    const firstResultPos = validateWithRegex("Az123$#@%$", 10)
    const secondResultNegLen = validateWithRegex("Az123$#@%$1", 10)
    const thirdResultNegSpace = validateWithRegex("Az1 3$#@%$", 10)
    const fourthResultNegUpperCase = validateWithRegex("az123$#@%$", 10)
    const fifthResultNegLowerCase = validateWithRegex("AX123$#@%$", 10)
    const sixthResultNegSpecChars = validateWithRegex("AX123$#@%$", 10, "!*")
    const seventhResNegNewLine = validateWithRegex(`Az123$
    #@%$`, 10)
    const eighthResPos = validateWithRegex("65^abFgdrwefOIJ89(", 20, "^(")
    const ninthResNegTab = validateWithRegex("65^abFgdrwe   fOIJ89(", 30, "^(")
    const tenthResNegDigits = validateWithRegex("wEF^abFgdrwefOIJVnji(", 20, "^(")

    const result = firstResultPos === true
        && secondResultNegLen === false
        && thirdResultNegSpace === false
        && fourthResultNegUpperCase === false
        && fifthResultNegLowerCase === false
        && sixthResultNegSpecChars === false
        && seventhResNegNewLine === false
        && eighthResPos === true
        && ninthResNegTab === false
        && tenthResNegDigits === false

    return result
}