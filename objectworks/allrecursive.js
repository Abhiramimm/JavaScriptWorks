var text="ABCBDDE"
wc={}

for(let ch of text){

    if(ch in wc){

        wc[ch]+=1
    }

    else{
        wc[ch]=1

    }
}

// console.log(wc);

var nestedArray=Object.entries(wc)
// console.log(nestedArray);

var allrecursive=nestedArray.filter(ch=>ch[1]>1)
console.log(allrecursive);