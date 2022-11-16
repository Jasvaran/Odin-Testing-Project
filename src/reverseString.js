function reverseString(string){
    let result = [];
    let strArr = string.split("");
    let length = strArr.length
    for (let i = 0; i < length; i++){
        result.push(strArr.pop())
    }

    return result.join("")
}

export default reverseString