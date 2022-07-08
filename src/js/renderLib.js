import { storage } from './storage';
import { makeMarkupLib } from './renderFunctions';
const containerCard = document.querySelector('.container-card')
export async function renderWatched() {
    const parsing = storage.readItem("watched")
    if (parsing) {
        containerCard.innerHTML = "";
        containerCard.innerHTML = await makeMarkupLib(parsing)
    }
}
  
export async function renderQueue() {
    const parsing = storage.readItem("qu")
    if (parsing) {
        containerCard.innerHTML = "";
        containerCard.innerHTML = await makeMarkupLib(parsing)
    }
  }