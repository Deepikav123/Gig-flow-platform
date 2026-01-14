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

        code += `  <div class="displayGig">
        <div class="title">${element.title}</div>
        <div class="budget">Budget:₹${element.budget}</div>
        <div class="description">${element.description}</div>
        <div class="bidButton buttonId-${element.id}">
            <button class="bid id-${element.id}" data-bid="${element.id}">
                Bid
            </button>

            <div class="bidForm">
            <div class="form">
                <div class="amount">
                    Bid amount:
                    <input type="number" class="inputBox i-${element.id}">
                </div>

                <div class=" messageBox ">
                    Message:
                    <textarea class="message m-${element.id}" rows="5" cols="50"></textarea>
                </div>
                <div class="submitButton" >
                    <button class="submit" data-sid=${element.id}>Submit</button>
                </div>

            </div>
        </div>
        </div>
        

    </div>`

    })
    document.querySelector('.displayGigs').innerHTML = code;

    document.querySelectorAll('.bid').forEach((ele) => {
        let id = ele.dataset.bid;
        ele.addEventListener('click', () => {
            let matching = match(id)
            console.log(matching)
            if(matching.status=='closed'){
                alert('The bid is closed');
            }
            else{

                document.querySelector(`.buttonId-${id}`).classList.add('b');
            }

        })
    })

    document.querySelectorAll('.submit').forEach((element) => {
        let id = element.dataset.sid;
        element.addEventListener('click', () => {

            // Bid amount value
            let amount = document.querySelector(`.i-${id}`);
            let amountValue = amount.value;

            // Bid message
            let message = document.querySelector(`.m-${id}`);
            let messageValue = message.value;
            let bidData = {
                Username: CurrentUser.name,
                gigid: id,
                bidId: crypto.randomUUID(),
                bidAmount: amountValue,
                bidMessage: messageValue
            }
            amount.value = '';
            message.value = '';
            PushInGig(bidData)
            bidDetails.push(bidData)

            BidStore()
            console.log(bidDetails)
            document.querySelector(`.buttonId-${id}`).classList.remove('b');



        })
    })

}
display()

function PushInGig(bidData) {
    gigs.forEach((ele) => {
        if (ele.id == bidData.gigid) {
            ele.bid = bidData
            // console.log(ele)
            GigStorage()

            console.log(gigs)
        }
    })
}
