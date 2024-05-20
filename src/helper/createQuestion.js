export function createQuestion(noOfOperator, operators, digitNumber) {

    const radix = 10 ** (Number(digitNumber) - 1)
    let question = ""
    let operand1 = Math.ceil(9 * radix * Math.random() + radix - 1)
    let operand2 = Math.ceil(9 * radix * Math.random() + radix - 1)
    if (noOfOperator === "1") {
        switch (operators) {
            case "+":
                operand1 = Math.ceil(8 * radix * Math.random() + radix - 1)
                operand2 = Math.floor((9 * radix - operand1) * Math.random()) + radix
                break
            case "-":
                if (operand1 < operand2) {
                    [operand1, operand2] = [operand2, operand1]
                }
                break
            case "/":
                operand2 = Math.ceil(4 * radix * Math.random() + radix - 1)
                if (operand1 % operand2) {
                    operand1 = (10 * radix - 1) - (10 * radix - 1) % operand2
                }
                break
            default:
                break
        }
        question = `${operand1} ${operators} ${operand2} =`
    } else {
        let operand3 = Math.floor(9 * radix * Math.random() + radix)
        switch (operators) {
            case "-":
                // Khai thằng số 3 luôn
                operand3 = Math.floor(7 * radix * Math.random()) + radix
                operand2 = Math.floor((8 * radix - operand3) * Math.random()) + radix
                operand1 = operand2 + operand3 + Math.floor((10 * radix - 1 - operand2 - operand3) * Math.random())
                break
            default:
                break
        }
        question = `${operand1} ${operators} ${operand2} ${operators} ${operand3} =`
    }
    return question
}
