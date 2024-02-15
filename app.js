let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

//cada uno tiene que tener una posicion. 
// pronoun 2/2/2/2--4/4/4/4--1/1/1/1

for(let a=0; a < pronoun.length; a++){
    for(let b=0; b < adj.length; b++) 
    for(let c=0; c < noun.length; c++) 
        console.log(`${pronoun[a]}${adj[b]}${noun[c]}.com`);
    }