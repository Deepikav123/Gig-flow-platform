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

// Create
document.querySelector('.createButton').addEventListener('click',()=>{
  document.querySelector('.gig').classList.add('toggle')
})






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
    gigs.push(
        {
            id: crypto.randomUUID(),
            title: v1,
            description: v2,
            budget: v3,
            bids:[],
            status:'open'
        }
    )
GigStorage()
display()
    console.log(gigs)
// Clearing input boxes after pressing post button
document.querySelector('.gig').classList.remove('toggle')
    title.value='';
    description.value='';
    budget.value='';

})
console.log(gigs)

