"use strict";
let nextId = 1;
let events = [];
function addEvent(title, date, description, attendees) {
    const event = {
        id: nextId++,
        title: title,
        date: date,
        description: description,
        attendees: attendees
    };
    events.push(event);
    return event;
}
function removeEvent(eventId) {
    const index = events.findIndex(event => event.id === eventId);
    if (index !== -1) {
        events.splice(index, 1);
        return true;
    }
    else {
        return false;
    }
}
function findEventByTitle(title) {
    const lowerCasetitle = title.toLowerCase();
    return events.find(event => event.title.toLowerCase() === lowerCasetitle);
}
function searchEvents(trefwoord) {
    const lowerTrefwoord = trefwoord.toLowerCase();
    return events.filter(event => event.title.toLowerCase().includes(lowerTrefwoord) || event.description.toLowerCase().includes(lowerTrefwoord));
}
addEvent("TypeScript Workshop", "2034-03-15", "Een diepgaande workshop over TypeScript.", 100);
addEvent("JavaScript Conferentie", "2034-04-20", "Internationale conferentie over JavaScript.", 200);
console.log("Evenement met titel 'Workshop':", findEventByTitle(events[0].title));
console.log("Zoekresultaten voor 'workshop':");
searchEvents('workshop').forEach(event => console.log(event.title));
console.log("Zoekresultaten voor 'TypeScript':");
searchEvents('TypeScript').forEach(event => console.log(event.title));
console.log("Zoekresultaten voor 'over':");
searchEvents('over').forEach(event => console.log(event.title));
console.log("\nEvenement 1 verwijderd:", removeEvent(1));
console.log("\nHuidige Evenementen:", events);
