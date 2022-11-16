let theArray  = [2, 3, 6, 1]

function analyze(arr){
    let length = arr.length

    let obj = {
        average: null,
        min: null,
        max: null,
        length: null
    };

   let avg = arr.reduce((prev, curr) => prev + curr, 0);
    obj.average = avg / length
    obj.min = Math.min(...arr)
    obj.max = Math.max(...arr)
    obj.length = length

    return obj;
}

export default analyze