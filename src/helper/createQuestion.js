export function createQuestion(noOfOperator, operators, digitNumber) {
    console.log("noOfOperator:", noOfOperator);
    console.log("digitNumber:", digitNumber);
    console.log("operator:", operators);
    // Hàm phụ để tạo ra một số ngẫu nhiên với số chữ số nhất định
    const generateRandomNumber = (arg1, arg2) => {
        let min, max;
        if (arg2 === undefined) {
            min = Math.pow(10, arg1 - 1);
            max = Math.pow(10, arg1) - 1;
        } else {
            min = arg1;
            max = arg2;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // Tạo các số ngẫu nhiên

    const numbers = [];
    for (let i = 0; i < noOfOperator; i++) {
        numbers.push(generateRandomNumber(digitNumber));
    }
    let question = '';
    let answer = 0;

    if (noOfOperator === '1') {
        console.log(123);

        const operator = operators[generateRandomNumber(0, operators.length - 1)];
        let num1 = generateRandomNumber(Math.pow(10, digitNumber - 1), Math.pow(10, digitNumber - 1));
        let num2 = generateRandomNumber(Math.pow(10, digitNumber - 1), Math.pow(10, digitNumber - 1));
        if (operator === '/') {
            num2 = generateRandomNumber(1, Math.pow(10, digitNumber) - 1);
            num1 = num2 * generateRandomNumber(1, Math.pow(10, digitNumber) - 1);
        } else if (operator === '-') {
            if (num1 < num2) {
                [num1, num2] = [num2, num1];
            }
        }
        question = `${num1} ${operator} ${num2}`;
        answer = eval(question);

    } else if (noOfOperator === '2') {
        console.log(456);
        const operator1 = operators[generateRandomNumber(0, operators.length - 1)];
        const operator2 = operators[generateRandomNumber(0, operators.length - 1)];
        let num1 = generateRandomNumber(Math.pow(10, digitNumber - 1), Math.pow(10, digitNumber) - 1);
        let num2 = generateRandomNumber(Math.pow(10, digitNumber - 1), Math.pow(10, digitNumber) - 1);
        let num3 = generateRandomNumber(Math.pow(10, digitNumber - 1), Math.pow(10, digitNumber) - 1);

        if (operator1 === '-') {
            if (num1 < num2) {
                [num1, num2] = [num2, num1];
            }
        }
        let partialQuestion = `${num1} ${operator1} ${num2}`;
        let partialAnswer = eval(partialQuestion);

        if (operator2 === '-') {
            if (partialAnswer < num3) {
                [partialAnswer, num3] = [num3, partialAnswer];
            }
        }
        question = `${partialQuestion} ${operator2} ${num3}`;
        answer = eval(question);
    }

    return { question, answer };
}
