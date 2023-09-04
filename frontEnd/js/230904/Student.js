class Student {
    constructor(f_name, l_name, age, grades){
        this.f_name = f_name
        this.l_name = l_name
        this.age = age
        this.grades = grades
    }
    print(){
        document.write(JSON.stringify(this))
    }
    avg(){
        let sum = 0;
        this.grades.forEach(element => sum += element);
        let avg = sum / this.grades.length;
        console.log(avg)
    }
    
}