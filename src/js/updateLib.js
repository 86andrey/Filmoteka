import { storage } from "./storage";
import { makeMarkupLib } from "./renderFunctions";

export async function updateWatched() {
   const libraryPage = document.querySelector("#library")
    const parsing = storage.readItem('watched');
    const containerCard = document.querySelector('.container-card');
    if (libraryPage) {
        if (parsing) {
      containerCard.innerHTML = await makeMarkupLib(parsing);
    }
  
    }
}
export async function updateQueue() {
  const libraryPage = document.querySelector("#library")
    const parsing = storage.readItem('qu');
     const containerCard = document.querySelector('.container-card');
    if (libraryPage) {
        if (parsing) {
      containerCard.innerHTML = await makeMarkupLib(parsing);
    }
    }
}