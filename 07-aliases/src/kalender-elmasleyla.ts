interface CalendarEventInterface {
    id: number;
    title: string;
    date: string;
    description: string;
    attendees: number;
}

type CalendarEventAlias = CalendarEventInterface[];

let nextId: number = 1;

let events: CalendarEventAlias = [];

function addEvent(title: string, date: string, description: string, attendees: number): CalendarEventInterface {
   const event: CalendarEventInterface = {
         id: nextId++,
         title: title,
         date: date,
         description: description,
         attendees: attendees
   };
   events.push(event);
   return event;
}

function removeEvent(eventId: number): boolean {
    const index = events.findIndex(event => event.id === eventId);
    if(index !== -1){
            events.splice(index,1);
            return true;
    }else {
            return false;
    }
}

function findEventByTitle(title: string): CalendarEventInterface | undefined {
    const lowerCasetitle = title.toLowerCase();
    return events.find(event => event.title.toLowerCase() === lowerCasetitle);
}

function searchEvents(trefwoord : string): CalendarEventAlias {
    const lowerTrefwoord = trefwoord.toLowerCase();
    return events.filter( event => event.title.toLowerCase().includes(lowerTrefwoord) || event.description.toLowerCase().includes(lowerTrefwoord));
}

addEvent("TypeScript Workshop" , "2034-03-15" , "Een diepgaande workshop over TypeScript.", 100);
addEvent("JavaScript Conferentie" , "2034-04-20" , "Internationale conferentie over JavaScript.", 200);

console.log("Evenement met titel 'Workshop':" , findEventByTitle(events[0].title));
console.log("Zoekresultaten voor 'workshop':");
searchEvents('workshop').forEach(event => console.log(event.title));
console.log("Zoekresultaten voor 'TypeScript':");
searchEvents('TypeScript').forEach(event => console.log(event.title));
console.log("Zoekresultaten voor 'over':");
searchEvents('over').forEach(event => console.log(event.title));
console.log("\nEvenement 1 verwijderd:", removeEvent(1));
console.log("\nHuidige Evenementen:", events);