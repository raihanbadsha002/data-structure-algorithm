// First in First Out
// FIFO

class Queue {
    constructor() {
       this.queue = []; 
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue(){
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

const premiks = new Queue();
premiks.enqueue('Ashique');
premiks.enqueue('Dewan');
premiks.enqueue('Prem');
premiks.enqueue('Priya');

console.log(premiks.queue);

const speaker = premiks.dequeue()
console.log(speaker)
console.log(premiks.queue)