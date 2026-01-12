
const users = JSON.parse(localStorage.getItem('store'));
let gigs=JSON.parse(localStorage.getItem('gstore')) || [];
function GigStorage(){
    localStorage.setItem('gstore',JSON.stringify(gigs))
}
let currentUser = users[users.length - 1]
let greeting = `Hello, ${currentUser.name}`
document.querySelector('.greet').innerHTML = greeting


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
            budget: v3
        }
    )
GigStorage()
    console.log(gigs)
// Clearing input boxes after pressing post button

    title.value='';
    description.value='';
    budget.value='';

})


