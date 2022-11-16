function caesarCypher(string, shift){
    const cipher = createCipher(shift)
    const alphabet = alphabetKeyValues()
    let stringToNum = [];
    let result = [];

    
    
    for(let i of string){
        stringToNum.push(alphabet[i])
    }
    
    for (let i = 0; i < string.length; i++){
        let letter = stringToNum.shift()
        result.push(cipher[letter])
    }
    
    let encrypted = result.join("");
    
    return encrypted

}


function createCipher(shift){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z'];
    

    for (let i = 0; i < shift; i++){
        let letter = alphabet.shift()
        alphabet.push(letter)
    }

    return alphabet

    
}

function alphabetKeyValues(){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z'];

    let key = {}

    alphabet.forEach((letter, index) => {
        key[letter] = index
    })

    return key
}


export default caesarCypher