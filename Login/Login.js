const user = []



document.querySelector('.b').addEventListener('click', () => {
    insertValues()
})

function insertValues() {
    // Name
    let name = document.querySelector('.name');
    let nameVal = name.value
    // Role
    let userRole = document.querySelector('.roles');
    let roleVal = userRole.value

    user.push({
        id: crypto.randomUUID(),
        name: nameVal,
        role: roleVal
    })
    console.log(user)
    // Login interaction
    if (roleVal === 'client') {
        window.location.href = "../Client/client.html"
    }
    else {
        window.location.href = "../Freelancer/freelancer.html"

    }




   
}


