import { gigs } from "../../Client/client-scripts/store.js";

export function match(id) {
    let matching;
    gigs.forEach((e) => {
        if (e.id == id) {
           matching=e;
        }
    })
    return matching;
}