const users = JSON.parse(localStorage.getItem('store'));
let currentUser=users[users.length-1]
let greeting=`Hello, ${currentUser.name}`
document.querySelector('.greet').innerHTML=greeting


// Post button
document.querySelector('.postButton').addEventListener('click',()=>{
    console.log("posted")
})
