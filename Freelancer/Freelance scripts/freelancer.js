import { GigStorage, gigs } from "../../Client/Client scripts/store.js";
import { match } from "./functions.js";
const users = JSON.parse(localStorage.getItem('store'));
let CurrentUser = users[users.length - 1]
let bidDetails = JSON.parse(localStorage.getItem('bstore')) || [];
function BidStore() {
    localStorage.setItem('bstore', JSON.stringify(bidDetails))
}

function display() {
    let code = ``;
    gigs.forEach((element) => {
        let status = element.status;
        code += `  <div class="displayGig">
        <div class="TitleAndBudget">
        <div class="left">
        <div class="title">${element.title}</div>
        <div class="status ${status}">•${status}</div>
        </div>
        <div class="right">
        <div class="budget">₹${element.budget}</div>
        </div>
        </div>
        <div class="description">${element.description}</div>
        <div class="bidButton buttonId-${element.id}">
            <button class="bid id-${element.id}" data-bid="${element.id}">
                Bid
            </button>

            <div class="bidForm">
            <div class="form">
            <div class="place">Place your bid</div>
                <div class="amount">
                <div class="AmountText">
                    Bid amount
                    </div>
                    <input type="number" class="inputBox i-${element.id}">
                </div>

                <div class=" messageBox ">

                <div class="MessageText">
                    Message
                    </div>
                    <textarea class="message m-${element.id}" rows="5" cols="50"></textarea>
                </div>
                <div class="bidFormButtons" >
                    <button class="submitButton btn" data-sid=${element.id}>Submit</button>
                    <button class="cancelButton btn" data-cid=${element.id}>Cancel</button>
                </div>

            </div>
        </div>
        </div>
        

    </div>`


    })
    document.querySelector('.displayGigs').innerHTML = code;


    function Bidded(id) {
        document.querySelector(`.id-${id}`).innerHTML = 'Bidded';
        document.querySelector(`.id-${id}`).disabled = true;
    }
    // Loads bidded gig
    gigs.forEach((ele) => {
        let id = ele.id;
        ele.bids.forEach((bidEle) => {
            if (bidEle.bidded) {
                Bidded(id);
            }
        })

    })


    document.querySelectorAll('.bid').forEach((ele) => {
        let id = ele.dataset.bid;
        ele.addEventListener('click', () => {
            let matching = match(id)
            console.log(matching)
            if (matching.status == 'closed') {
                alert('The bid is closed');
            }
            else {

                document.querySelector(`.buttonId-${id}`).classList.add('b');

            }

        })
    })

    // Reset function
    function bidFormReset(id) {
        document.querySelector(`.i-${id}`).value = '';
        document.querySelector(`.m-${id}`).value = '';
    }
    // Submit Button
    document.querySelectorAll('.submitButton').forEach((element) => {
        let id = element.dataset.sid;
        element.addEventListener('click', () => {

            // Bid amount value
            let amount = document.querySelector(`.i-${id}`);
            let amountValue = amount.value;

            // Bid message
            let message = document.querySelector(`.m-${id}`);
            let messageValue = message.value;

            if (!amountValue || amountValue < 0) {
                alert("Enter valid amount");
                return;
            }
            else if (!messageValue) {
                alert("Fill the message box");
                return;
            }
            let bidData = {
                Username: CurrentUser.name,
                gigid: id,
                bidId: crypto.randomUUID(),
                bidAmount: amountValue,
                bidMessage: messageValue,
                bidded: true
            }
            // Bid button -->Bidded Button
            Bidded(id);

            bidFormReset(id);
            PushInGig(bidData)
            bidDetails.push(bidData)

            BidStore()
            console.log(bidDetails)
            document.querySelector(`.buttonId-${id}`).classList.remove('b');



        })
    })

    // Cancel Button
    document.querySelectorAll('.cancelButton').forEach((btn) => {
        let id = btn.dataset.cid;
        btn.addEventListener('click', () => {
            document.querySelector(`.buttonId-${id}`).classList.remove('b');
            bidFormReset(id);
        })
    })

}
display()

function PushInGig(bidData) {
    gigs.forEach((ele) => {
        if (ele.id == bidData.gigid) {
            ele.bids.push(bidData);
            // console.log(ele)
            GigStorage();

            console.log(gigs);
        }
    })
}

// LogOut Button
document.querySelector('.logout').addEventListener('click', () => {
    window.location.href = "../index.html"
})
