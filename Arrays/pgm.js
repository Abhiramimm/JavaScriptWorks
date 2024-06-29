var words=["flz","flyoff","flyin","flyout"]

var smallest_word=words[0]

for(let word of words){

    if (word.length<smallest_word.length){

        smallest_word=word
        
    }
   
}
if(!words.includes(smallest_word)){

    let slice_word=smallest_word.slice(-1)
    console.log(slice_word);

}


