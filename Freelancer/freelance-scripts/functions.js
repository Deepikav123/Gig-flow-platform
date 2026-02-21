import { getGigs, setGigs } from "../../Client/client-scripts/store.js";

export function match(id) {
    let matching;
    let gigs = getGigs();
    gigs.forEach((e) => {
        if (e.id == id) {
           matching=e;
        }
    })
    return matching;
}