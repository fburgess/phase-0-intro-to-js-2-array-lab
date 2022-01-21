// Write your solution here!
const cats = []; 
    cats.push("Milo", "Otis", "Garfield");

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
   const newCats= [
       ...cats,
       name
   ]

   return newCats;
}

function prependCat(name) {
    const oldCats=[
        name,...cats
    ]
    return oldCats;
}

function removeLastCat() {
    const finalCat=[
        ...cats.slice(0,2)
    ]
    return finalCat;
}

function removeFirstCat() {
    const lastCat=[
        ...cats.slice(1)
    ]
    return lastCat;
}