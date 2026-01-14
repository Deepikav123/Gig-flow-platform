export const users = JSON.parse(localStorage.getItem('store')) || []

function storage() {
    localStorage.setItem('store', JSON.stringify(users))
}
let but = ` <button class="btn">Login</button>`
document.querySelector('.login').innerHTML = but
document.querySelector('.btn').addEventListener('click', () => {
    insertValues()
})

function insertValues() {
    // Name
    let name = document.querySelector('.name');
    let nameVal = name.value
    // Role
    let userRole = document.querySelector('.roles');
    let roleVal = userRole.value
    users.push({
        id: crypto.randomUUID(),
        name: nameVal,
        role: roleVal
    })
    storage()
    name.value=''git 
    // Login interaction
    if (roleVal === 'client') {
        window.location.href = "../Client/client.html"
    }
    else {
        window.location.href = "../Freelancer/freelancer.html"

    }





}


