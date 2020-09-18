export const carName = (carObj) =>{
    return ` 
    <section id="car-card"${carObj.id} class="car-card">
    <h2>${carObj.carName}</h2>
    ` 
};