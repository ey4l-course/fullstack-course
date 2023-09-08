//Variables for Q1
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

function carRes(){
    const res = new Car()
    res.res()
}

function addMaintenance(){
    const current = document.getElementById("maintenance").value
    document.getElementById("tmaintenance").innerHTML += `<tr><td>${current}</td></tr>`
    maintenance_list.push(current)
}

//Variables for Q2

const phoneList = [];

function addPhone(){
    let counter = parseInt(document.getElementById("phoneCounter").innerHTML);
    phoneList[counter] = new Phone(phoneBrand, phoneModel, color, storage, battery, powerOn);
    document.getElementById("phoneCounter").innerHTML = `000${counter + 1}`;

}

function phoneRes(){
    const res = new Phone()
    res.res()
}