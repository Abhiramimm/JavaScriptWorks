var text="pneumonoultramicroscopicsilicovolcanoconiosis"

var wc={}

for(let ch of text){

    if(ch in wc){

        wc[ch]+=1
    }

    else{

        wc[ch]=1
    }
}

console.log(wc);

var nestedArray=Object.entries(wc)

var mostRecursive=nestedArray.reduce((o1,o2)=>o1[1]>o2[1] ? o1 : o2)

console.log(mostRecursive);