// // Program User 1
// const Jsuser = {
//     name:"Ayushman",
//     mob: 942200000,
//     email:"jnbdb@gmail.com",
//     password:"1234225@",
//     "Full name":"Ayushman Tripathi"
// } 


// console.log(Jsuser["Full name"]);
// console.log(Jsuser["mob"]);
// console.table(Jsuser["Full name"]);


// Program User 2

const mySym = Symbol("mykey1");

const Jsuser = {
    name:"Ayushman",
    mob: 942200000,
    // [mySym]:"mykey1",
    email:"jnbdb@gmail.com",
    password:"1234225@",
    "Full name":"Ayushman Tripathi"
}

// console.log(Jsuser["Full name"]);
// console.log(Jsuser[mySym])
// // console.log(Jsuser);

function greeting(){
    console.log("hello");
}
function greetingTwo(){
    console.log(`Hello JS User ${name}`);
}
