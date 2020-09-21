import { carHTML } from "./Cars.js";
import { useCars, getCars } from "./CarsProvider.js";


const domElement = document.querySelector(".car-container");
const eventHub = document.querySelector("#main");
eventHub.addEventListener("colorChosen", event => {

    if (event.detail.colorThatWasChosen !== "0") {
        const SelectedCar = useCars().filter(singleCar => {
            return singleCar.colorId === parseInt(event.detail.colorThatWasChosen);
        })
        render(SelectedCar)
    } else {
        render(useCars())
    }
});

export const CarList = () => {
    getCars()
        .then(() => {
            const carCollection = useCars();
            render(carCollection);
        })
};

const render = (carArray) => {

    let HTMLArray = carArray.map(singleCar => {
        return carHTML(singleCar);
    })
    domElement.innerHTML = HTMLArray.join("");
};