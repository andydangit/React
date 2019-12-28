
class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class bootcamp {
    constructor(name, level, students){
        this.name = name;
        this.level = level;
        this.students = students;
    }
}

const registerStudent = bootcamp.filter(name=> name[0] === 'K');

