const getDb = require('../utility/database').getdb;
const mongodb = require('mongodb');

class Product {
    constructor(name, price, description, imageUrl){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save() {
        const db = getDb();

        db.collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => { console.log(err) }); 
    }

    static findAll() {
        const db = getDb();
        return db.collection('products')
            .find()
            .toArray()
            .then(products => {
                return products;
            })
            .catch(err => console.log(err));
    }

    static findById(productid) {
        const db = getDb();
        
        return db.collection('products').
            findOne({ _id: new mongodb.ObjectId(productid) })
            .then(product => {
                return product;
            }).catch(err => {
                console.log(err);
            });
    }
}

module.exports = Product;



/*const products = [
    { id:"13213", name: 'samsung s6', price: '2000', imageUrl: '1.jpg', description: 'iyi telefon'},
    { id:"13214", name: 'samsung s7', price: '3000', imageUrl: '2.jpg', description: 'iyi telefon'},
    { id:"13215", name: 'samsung s8', price: '4000', imageUrl: '3.jpg', description: 'iyi telefon'}];

module.exports = class Product {

    constructor(name, price, imageUrl, description) {
        this.id = (Math.floor(Math.random()*99999)+1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    saveProduct() {
        products.push(this);
    }

    static getAll() {
        return products;
    }

    static getById(id){
        const product = products.find(i=>i.id === id);
        return product;
    }

    static Update(product) {
        const index = products.findIndex(i => i.id===product.id);
        
        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
    }

    static DeleteById(id) {
        const index = products.findIndex(i => i.id===id);
        products.splice(index, 1);
    }
}*/