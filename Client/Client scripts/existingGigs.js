import { gigs } from "./store.js";

let DisplayGig = ``;
export function display() {
    gigs.forEach((gig) => {
        DisplayGig += `
    <div class="existingGig">
                        <div class="etitle">${gig.title}</div>
                        <div class="ebudget">
                            Rs.${gig.budget}
                        </div>
                        <div class="edescription">${gig.description}</div>
                        <div class="buttons">

                            <button class="view">
                                View Bids
                            </button>
                            <button class="close">
                                Close Bid
                            </button>

                        </div>
                        <div class="viewButton">
                        <div class="ViewName">
                        Bid by ${gig.bid}
                        </div>
                        </div>


                        </div>

    `

    })
    document.querySelector('.ExistingGigs').innerHTML = DisplayGig;


}
display()

document.querySelectorAll('.view').forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('.existingGig').classList.add('viewDetails');
        console.log(gigs)
    })
})