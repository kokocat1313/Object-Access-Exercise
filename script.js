//OPTION 1 PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:

const fullAddress = restaurant.address + ' ' + restaurant.city + ' ' + restaurant.state + ' ' + restaurant.zipcode;
console.log(fullAddress);

//OPTION 2

const restaurant1 = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
    fullAddress : function(){
    return this.name + " " + this.address + " " + this.city + " " + this.state + " " + this.zipcode
    }
}
console.log(restaurant1.fullAddress());