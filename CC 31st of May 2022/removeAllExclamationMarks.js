/* 8KYU Exclamation marks series #2: Remove all exclamation marks from the end of sentence

Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

*/

const remove = string => {
    while (string.slice(-1) === '!'){
      string = string.slice(0,-1)
    }
    return string
}