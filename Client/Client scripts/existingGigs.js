import { gigs, GigStorage } from "./store.js";
import { match } from "../../Freelancer/Freelance scripts/functions.js";
export function display() {
    let DisplayGig = ``;
    gigs.forEach((gig) => {
        DisplayGig += `
    <div class="existingGig id-${gig.id}">
                        <div class="etitle">${gig.title}</div>
                        <div class="ebudget">
                            Rs.${gig.budget}
                        </div>
                        <div class="edescription">${gig.description}</div>
                        <div class="buttons">

                            <button class="view" data-vid="${gig.id}">
                                View Bids
                            </button>
                            <button class="close" data-closeid="${gig.id}">
                                Close Bid
                            </button>

                        </div>
                        <div class="viewSection">
                        <div class="ViewName">
                        Bid by ${gig.bids.Username}
                        </div>
                        <div class="ViewAmount">
                        Amount:${gig.bids.bidAmount}
                        </div>
                        <div class="ViewMessage">
                        Message:${gig.bids.bidMessage}
                        </div>
                        <div class="ViewButtons">
                            <button class="hire">Hire</button>
                            <button class="reject">Reject</button>
                        </div>
                        </div>

                        </div>

    `

    })
    document.querySelector('.ExistingGigs').innerHTML = DisplayGig;


}
display()
// View button
document.querySelectorAll('.view').forEach((button) => {
    let id = button.dataset.vid;
    button.addEventListener('click', () => {
        let matching = match(id);
        if (matching.bids.length === 0) {
            alert('no bids')
        }
        else {

            document.querySelector(`.id-${id}`).classList.add('viewToggle');
        }
    })
})
// Close button
document.querySelectorAll('.close').forEach((e) => {
    let id = e.dataset.closeid;
    e.addEventListener('click', () => {
        let matching = match(id);
        matching.status = 'closed';
        GigStorage();
    })
})
