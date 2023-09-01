const predefinedChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

export const validateWithRegex = (someString, maxLength, specialChars = predefinedChars) => {
    const theRegex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${specialChars}])(?!.*[\\s]).{1,${maxLength}}$`, "gm")
    const regexTestResult = theRegex.test(someString)
    return regexTestResult
}