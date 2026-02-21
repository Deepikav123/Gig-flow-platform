export function getGigs() {
    return JSON.parse(localStorage.getItem('gstore')) || [];
}

export function setGigs(updatedGigs) {
    localStorage.setItem('gstore', JSON.stringify(updatedGigs));
}