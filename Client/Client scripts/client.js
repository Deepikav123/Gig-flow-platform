import { GigStorage } from "./store.js";
import { gigs } from "./store.js";
import { display } from "./existingGigs.js";
const users = JSON.parse(localStorage.getItem('store'));
// export const gigs=JSON.parse(localStorage.getItem('gstore')) || [];
// export function GigStorage(){
//     localStorage.setItem('gstore',JSON.stringify(gigs))
// }
// console.log(users)
let currentUser = users[users.length - 1]
let greeting = `Hello, ${currentUser.name}`
document.querySelector('.greet').innerHTML = greeting

// Create button
document.querySelector('.createButton').addEventListener('click', () => {
    document.querySelector('.body').classList.add('toggle');
    document.querySelector('.greetings').classList.add('hidden');
})




// Resetting Form
function ResetForm() {
    document.querySelector('.titleBox').value = "";
    document.querySelector('.desc').value = "";
    document.querySelector('.budgetBox').value = "";
}




// Post button
document.querySelector('.postButton').addEventListener('click', () => {
    // title
    let title = document.querySelector('.titleBox');
    let v1 = title.value;
    // Description
    let description = document.querySelector('.desc');
    let v2 = description.value;
    // Budget
    let budget = document.querySelector('.budgetBox');
    let v3 = budget.value;

    // input Validation
if(!v1){
   alert("Enter Title");
   return;
}
else if(!v2){
    alert("Fill the description");
    return;
}
else if(!v3 || v3<0){
        alert("Enter valid Budget");
    return;
}


    gigs.push(
        {
            id: crypto.randomUUID(),
            title: v1,
            description: v2,
            budget: v3,
            bids: [],
            status: 'open'
        }
    )

    GigStorage()
 
    document.querySelector('.body').classList.remove('toggle');
    document.querySelector('.greetings').classList.remove('hidden');

    // Clearing input boxes after pressing post button
    ResetForm()
   display()
})


// Cancel Button

document.querySelector('.cancelButton').addEventListener('click', () => {
    ResetForm();
    document.querySelector('.body').classList.remove('toggle');
    document.querySelector('.greetings').classList.remove('hidden');

})

console.log(gigs)

// LogOut Button
document.querySelector('.logout').addEventListener('click', () => {
    window.location.href = "../../index.html"
})