var reverse = function(x) {
    // get length
    // if number is length 1, then the number is the same number
    
    const maxInteger = Math.pow(2, 31);
    if (x >= maxInteger || x <= (maxInteger * -1)) { return 0 };
    

    // 123 % 100 = 23 && 123 / 100 = 1.23
    const hasNegative = (x + '')[0] === '-';
    const numberLength = hasNegative ? ((x + '').length - 1) : (x + '').length;
    let reversedNumber = 0;
    let restNumber = hasNegative ? x * -1 : x;
    if (numberLength === 1) { return x };
    
    for (let i = 0; i < numberLength; i++) {
        const divisor = Math.pow(10, numberLength - (i + 1));
        // get 1st number
        const firstNumber = Math.floor(restNumber / divisor);
        
        restNumber = restNumber % divisor;
        reversedNumber = reversedNumber + (firstNumber * (10 ** i));
    }
    const finalResult = hasNegative ? reversedNumber * -1 : reversedNumber;
    if (finalResult >= maxInteger - 1 || finalResult <= (maxInteger * -1)) {
      return 0;
    } else {
      return finalResult;
    }
    
};