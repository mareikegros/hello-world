function multiplicate (factor1, factor2) {
    console.log('multiplicate()');
    var result = factor1 * factor2;
    return result;
}

function sascha(basis, exponent) {
    var result = 1;
    for (var i=0; i<exponent; i++) {
        result = result * basis;
    }
    return result;
}

function calculate (factor1, factor2, summand1) {
    console.log('calculate()');
    var result = multiplicate(factor1, factor2);

    result = result + summand1;
    return result;
}


function kompliziert (factor1, factor2) {
    var result = 0;
    var i=1;
    while (i<=factor1) {
        result = result + factor2;
        i++;
    }
    return result;
}
console.log(kompliziert(5,8));