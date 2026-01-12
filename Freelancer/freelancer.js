let gigs = JSON.parse(localStorage.getItem('gstore'))
console.log(gigs)
let code = ``;
function display() {
    gigs.forEach((element) => {

        code += ` 
         <div class="displayGig">
                    <div class="title">${element.title}</div>
                    <div class="budget">Budget:₹${element.budget}</div>
                    <div class="description">${element.description}</div>
                    <div class="bidButton">
                        <button class="bid">
                            Bid
                        </button>
                    </div>
                </div>`
    })
    document.querySelector('.displayGigs').innerHTML = code;

}
display()