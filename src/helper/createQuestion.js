export function createQuestion(noOfOperator, operator, digitNumber) {
    // Hàm phụ để tạo ra một số ngẫu nhiên với số chữ số nhất định
    const generateRandomNumber = (digits) => {
        const min = Math.pow(10, digits - 1);
        const max = Math.pow(10, digits) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // Tạo các số ngẫu nhiên
    const numbers = [];
    for (let i = 0; i < noOfOperator; i++) {
        numbers.push(generateRandomNumber(digitNumber));
    }
    //let question = numbers[0]
    let result = numbers[0];
    console.log(numbers);
    // Tạo câu hỏi và tính toán kết quả
    for (let i = 1; i < noOfOperator; i++) {
        let num = numbers[i];
        // Đảm bảo kết quả không âm và xử lý phép chia
        switch (operator) {
            case '+':
                result += num;
                console.log('result', result);
                // question +=  + ${num};
                break;
            case '-':
                if (result < num) {
                    // Đổi chỗ để đảm bảo kết quả không âm
                    [result, num] = [num, result];
                    numbers[i + 1] = num;
                }
                result -= num;
                // question +=  - ${num};
                break;
            case '*':
                result *= num;
                // question +=  * ${num};
                break;
            case '/':
                // Tránh chia cho 0 và đảm bảo chia hết
                while (num === 0 || result % num !== 0) {
                    num = generateRandomNumber(digitNumber);
                    numbers[i + 1] = num;
                }
                result = Math.floor(result / num);
                // question +=  / ${num};
                break;
            default:
                throw new Error(`Phép toán không được hỗ trợ: ${operator}`);
        }
    }
    return { result };
}
console.log(createQuestion(2, '/', 1));