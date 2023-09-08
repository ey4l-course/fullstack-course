class Phone{
    constructor(phoneBrand, phoneModel, color, storage, battery, powerOn){
        this.phoneBrand = document.getElementById('phoneBrand').value
        this.phoneModel = document.getElementById("phoneModel").value
        this.color = document.getElementById("color").value
        this.storage = document.getElementById("storage").value
        this.battery = document.getElementById("battery").value
        this.powerOn = document.getElementById("powerOn").value
    }
    res(){
        for (let element in this){
            document.getElementById(element).value = ""
        }
    }

}