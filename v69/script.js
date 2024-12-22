let a = 5

function facto(no){
        let arr = Array.from(Array(no+1).keys())
        let c = arr.slice(1,).reduce((a, b)=> a*b)
        return c
}

console.log(facto(a))