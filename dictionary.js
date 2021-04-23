class Dictionary{
    constructor() {
        this.dictionary = {}; 
     }
     add(key, value){
         this.dictionary[key] = value;
     }
     get(key){
         return this.dictionary[key];
     }
}

const phoneBook = new Dictionary();
phoneBook.add('Mahi', '01717045864');
phoneBook.add('Porimoni', '01717044667');
phoneBook.add('Sakib', '0171867864');

console.log(phoneBook.dictionary);

const Sakib = phoneBook.get("Sakib");
console.log(Sakib);