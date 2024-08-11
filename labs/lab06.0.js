const given_string = 'Hello ban, tui ten Teo, ban cung ten Teo luon a';
let words = given_string.replace(/,/gi, "").split(" ");
console.log(words);
const words_map = group_word(words);
console.log(words_map);

function group_word(words) {
    const word_object = {};
    for (let i = 0; i < words.length; i++) {
        if (!word_object[words[i]]) {
            word_object[words[i]]=1;
        } else {
            word_object[words[i]] = word_object[words[i]] + 1;
        }
    }
    return word_object;
}


// function group_word_map(words) {
//     const word_object = new Map();
//     for (let i = 0; i < words.length; i++) {
//         if (!word_object.has(words[i])) {
//             word_object.set(words[i], 1);
//         } else {
//             word_object.set(words[i], word_object.get(words[i]) + 1);
//         }
//     }
//     return word_object;
// }