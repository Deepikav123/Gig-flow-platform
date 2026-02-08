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

    // Input validations

    // Alert if name is empty
    if (!nameVal) {
        alert("Please enter your name");
        return;
    }

    // Length constraints
    else if (nameVal.length < 2 || nameVal.length > 30) {
        alert("Name must be 2-30 characters");
        return;
    }

    // Valid characters
    let isTrue = false;
    for (let i = 0; i < nameVal.length; i++) {
        if ((nameVal[i] >= 'a' || nameVal[i] >= 'A') && (nameVal[i] <= 'z' || nameVal[i] <= 'Z') || (nameVal[i] ==" ")) {
            isTrue = true;
        }
        else {
            isTrue = false;
            break;
        }
    }
    if (isTrue == false) {
        alert("Enter valid name");
        return;
    }


    // Roles
    let userRole = document.querySelector('.roles');
    let roleVal = userRole.value;
    if(roleVal=='select'){
        alert("Enter a valid role");
        return;
    }
    
    users.push({
        id: crypto.randomUUID(),
        name: nameVal,
        role: roleVal
    })
    storage()
    name.value = '';
    userRole.value='select';

    // Login interaction
    if (roleVal === 'client') {
        window.location.href = "../Client/client.html"
    }
    else {
        window.location.href = "../Freelancer/freelancer.html"

    }



}


