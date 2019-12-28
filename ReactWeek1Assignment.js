
class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if (this.students.filter(s => s.email === student.email)){
            console.log('this student ${student.email} is registered already');
        } else {
            this.students.push(student);
            console.log('Registering ${student.email} to the bootcamp ${this.name}.');
        }
        return this.students;
    }
}



