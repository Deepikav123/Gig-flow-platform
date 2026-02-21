import { gigs, GigStorage } from "./store.js";
import { match } from "../../Freelancer/freelance-scripts/functions.js";
if(gigs.length>0){
    document.querySelector('.heading').innerHTML="My Gigs";
}
export function display() {
    let DisplayGig = ``;
    gigs.forEach((gig) => {
        let ViewHTML = ``;
        gig.bids.forEach((e) => {
            ViewHTML +=
                `
                        <div class="ViewGigs">
                        <div class="ViewName">
                        <div class="bidBy">
                        Bid by
                        </div>
                         ${e.Username}
                         
                        </div>
                        <div class="ViewAmount">
                        <div class="amount">
                        Amount
                         </div>
                        ${e.bidAmount}
                       
                        </div>
                        <div class="ViewMessage">
                        <div class="message">
                        Message
                        </div>
                        ${e.bidMessage}
                        </div>
                        <div class="ViewButtons">
                            <button class="hire vb">Hire</button>
                            <button class="reject vb">Reject</button>
                        </div>

                        </div>`
        })

        DisplayGig += `
    <div class="existingGig id-${gig.id}">
    <div class="eTitlePrice">
                        <div class="etitle">${gig.title}</div>
                        <div class="ebudget">
                            ₹${gig.budget}
                        </div>
                        </div>
                        <div class="edescription">${gig.description}</div>
                        
                        <div class="buttons">

                            <button class="view gigButton" data-vid="${gig.id}">
                                View Bids
                            </button>
                            <button class="close gigButton" data-closeid="${gig.id}">
                                Close Bid
                            </button>

                        </div>
                     


                        <div class="viewSection">
                        ${ViewHTML}
                        <div class="viewCancel">
                        <button class="cancel" data-cancelid="${gig.id}">Cancel</button>

                        </div>
                        </div>

                        </div>

    `

    })
    document.querySelector('.ExistingGigs').innerHTML = DisplayGig;


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
         const sure=confirm("Are you sure you want to close this bid?")
    if(!sure){
        return;
    }
        let matching = match(id);
        matching.status = 'closed';
        GigStorage();
        display();
    })
})

// Cancel Button
document.querySelectorAll('.cancel').forEach((e) => {
    let id = e.dataset.cancelid;
    e.addEventListener('click', () => {
        document.querySelector(`.id-${id}`).classList.remove('viewToggle');
    })

})

}
display()

