const carsUrl =
  "https://gist.githubusercontent.com/AdamSheaffer/fe50daf69c713eeb1a83edc2525a4643/raw/3d84acd63a40582c12f47885106071c0ffee6e83/cars.json";

let cars = [];

export const useCars = () => {
  // TODO
    return cars.slice();
};

export const getCars = () => {
  // TODO
  return fetch("https://gist.githubusercontent.com/AdamSheaffer/fe50daf69c713eeb1a83edc2525a4643/raw/3d84acd63a40582c12f47885106071c0ffee6e83/cars.json")
    .then(response => response.json())
    .then(parsedCars => {
      cars = parsedCars
    })
};
