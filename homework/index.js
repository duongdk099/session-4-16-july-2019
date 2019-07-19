/*
Exercise 1
Given the following Object:
inventory = {
    'gold' : 500,
    'pouch' : ['flint', 'twine', 'gemstone'],
    'backpack' : ['xylophone', 'dagger', 'bedroll', 'bread loaf']
}
Try to do the followings:
Add a key to inventory called 'pocket'.
Set the value of 'pocket' to be a list consisting of the strings 'seashell', 'strange berry', and 'lint'.
Then .remove('dagger') from the list of items stored under the 'backpack' key.
Add 50 to the number stored under the 'gold' key.
*/

/* ta có inventory là 1 bãi kho bao gồm vàng , balo , túi
trong balo bao gồm ..
trong túi bao gồm ...
Từ inventory sẽ tạo ra object
*/


/*
let inventory= {
    gold : 500,
    pouch : ['flint', 'twine', 'gemstone'],
    backpack : ['xylophone', 'dagger', 'bedroll', 'bread loaf'],
};
console.log(inventory);


// thêm key vào trong object , chứ không phải vào chuỗi array
inventory.key= ["seashell", "strange berry", "lint"]



// tìm index của Backpack rồi xóa đi
let indexOfBackPack = inventory.backpack.indexOf('dagger');
inventory.backpack.splice(indexOfBackPack,1)

inventory.gold += 50;

*/


/*
Exercise 2:
Create a new Object called prices using {} format like the example above.
Put these values in your prices dictionary:
"banana": 4,
"apple": 2,
"orange": 1.5,
"pear": 3

Create another Object called stock using {}:
Put these values in your stock dictionary
"banana": 6,
"apple": 0,
"orange": 32,
"pear": 15

Loop through each key in prices. For each key, print out the key along with its price and stock information. Print the answer in the following format:
apple
price: 2
stock: 0

pear
price: 3
stock: 15
Let's determine how much money you would make if you sold all of your food.
Create a variable called total and set it to zero.
Loop through the prices dictionaries. For each key in prices, multiply the number in prices by the number in stock. Print that value into the terminal and then add it to total.
Finally, outside your loop, print total.
*/



    let stock = {
        banana: 6,
        apple: 0,
        orange: 32,
        pear: 15,
    }
    let  prices ={
        banana: 4,
        apple: 2,
        orange: 1.5 ,
        pear: 3,
    }


let key = Object.keys(stock);

let toTAL = 0;

key.forEach( (products,index) =>{
    console.log(`${products}:
    Stock : ${ stock[products] }
    Price : ${ prices[products] }
    Prices : ${stock[products] * prices[products]}
    `)
    toTAL += stock[products] * prices[products]

})

console.log("So, in total is :"+toTAL);




























































