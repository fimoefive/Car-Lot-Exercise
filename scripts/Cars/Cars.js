export const carHTML = (carObj) =>{
    return ` 
    <section class="car-card">
    <h2>Name:${carObj.carName}</h2>
    <p>Year: ${carObj.year}</p>
    </section>
    ` 
};