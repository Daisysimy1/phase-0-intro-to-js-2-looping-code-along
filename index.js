// Code your solutions in this file
for(let age = 30; age < 40; age++){
    console.log(`I am ${age} years old. Happy birthday to me!`);
    // debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        // debugger;
    }
    return gifts;
}

wrapGifts(gifts);

// Lab solutions

function writeCards(arr, event) {
    let messageArray = []
    let thanksMessage = '';
    for (let i = 0; i < arr.length; i++) {
        thanksMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
        messageArray.push(thanksMessage);
    }
    return messageArray;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }
}