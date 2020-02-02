function XO(str) {
    let O = str.match(/o/gi);
    let X = str.match(/x/gi);
    
    return (X && X.length) === (O && O.length);
}

console.log(XO('xodoxx'));