const user = {
    username: "sai",
    price: 555,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
};

user.welcomeMessage();
user.username="satya"
user.welcomeMessage();
console.log("end line");
console.log(this)


function chai(){
    console.log(this)
}