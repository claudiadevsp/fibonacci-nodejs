'use strict'

const fibonacci = () => {        
    return Array.apply(undefined, Array(15)).reduce(function(x, y, z) {
        return x.concat((z < 2) ? z : x[z-1] + x[z-2]);
    }, [])
}

const isFibonnaci = (num) =>  (fibonacci().includes(num)) ? true : false

module.exports = {
    fibonacci,
    isFibonnaci
}