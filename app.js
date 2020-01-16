function XO(str) {
    let o = str.match(/o/gi);
    let x = str.match(/x/gi);
    
    return (x && x.length) === (o && o.length);
}

console.log(XO('xodoxx'));