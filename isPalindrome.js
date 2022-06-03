// Write your code below
function checkPalindrome(palindrome){

    palindrome = palindrome.toLowerCase()
    console.log(palindrome)

    let len = palindrome.length;

    for (let i=0; i<len / 2; i++){
        if (palindrome[i] !== palindrome[len -1 -i]){
            return false
        } else{
            return true
        }

    }
}


let input = checkPalindrome('Racecar')
console.log(input)