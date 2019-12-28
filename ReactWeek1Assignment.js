
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
            console.log('the student ${student.email} is already registered!');
        } else {
            this.students.push(student);
            console.log('Registering ${student.email} to the bootcamp ${this.name}.');
        }
        return this.students;
    }
}



// const registerStudent = bootcamp.filter(name=> name[0] === 'K');

