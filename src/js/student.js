var main;
(function (main) {
    var Subject = (function () {
        function Subject(name) {
            this.name = name;
        }
        Subject.prototype.print = function () {
            return this.name;
        };
        return Subject;
    }());
    var Student = (function () {
        function Student(name) {
            this.name = name;
            this.subjects = [];
        }
        Student.prototype.print = function () {
            return this.name;
        };
        Student.prototype.getSubjects = function () {
            return this.subjects;
        };
        Student.prototype.addSubject = function (name) {
            this.subjects.push(new Subject(name));
        };
        return Student;
    }());
    var stud1 = new Student("Student1");
    console.log(stud1.print());
    stud1.addSubject("Maths");
    console.log(stud1.getSubjects()[0].print());
    console.log("Program ends.");
})(main || (main = {}));
//# sourceMappingURL=student.js.map