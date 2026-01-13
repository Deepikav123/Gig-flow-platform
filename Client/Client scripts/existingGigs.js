import { gigs } from "./client.js";

let DisplayGig = ``;
function display() {
    gigs.forEach((gig) => {
        DisplayGig += `
    <div class="existingGig">
                        <div class="etitle">${gig.title}</div>
                        <div class="ebudget">
                            Rs.${gig.budget}
                        </div>
                        <div class="edescription">${gig.description}</div>
                        <div class="buttons">

                            <button class="viewButton">
                                View Bids
                            </button>
                            <button class="close">
                                Close Bid
                            </button>

                        </div>
                    </div>
    `
})
document.querySelector('.ExistingGigs').innerHTML=DisplayGig
}
display()