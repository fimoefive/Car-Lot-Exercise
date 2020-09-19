export const carHTML = (carObj) => {
    return ` 
    <section id="carCard"${carObj.id} class="car-card">
    <h2>Name:${carObj.name}</h2>
    <p>Year: ${carObj.year}</p>
    </section>
    ` 
};