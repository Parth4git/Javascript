function uppercase(sentence) {

const words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

return words.join(" ");
}
console.log(uppercase("challenge two compeleted"));