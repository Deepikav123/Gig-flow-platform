export function GigStorage(){
    localStorage.setItem('gstore',JSON.stringify(gigs))
}
export const gigs=JSON.parse(localStorage.getItem('gstore')) || [];