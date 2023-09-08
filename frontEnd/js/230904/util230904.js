const carsList = [];
const maintenance_list = [];

function addCar(){
    let counter = parseInt(document.getElementById("counter").innerHTML);
    carsList[counter] = new Car(brand, model, price, license, year, colour, maintenance);
    document.getElementById("counter").innerHTML = `000${counter + 1}`;
    document.getElementById("tmaintenance").innerHTML = 
    `<tr><td>
    <label for="maintenance">maintenance: </label>
    <input type="number" min="2000" max="2023" value="" size="6" id="maintenance">
    <button onclick="addMaintenance()">Add registry</button>
    </td></tr>`

}

function addMaintenance(){
    const current = document.getElementById("maintenance").value
    document.getElementById("tmaintenance").innerHTML += `<tr><td>${current}</td></tr>`
    maintenance_list.push(current)
}