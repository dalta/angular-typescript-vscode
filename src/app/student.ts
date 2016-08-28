module main{

    class Subject{

        name:string;
        marks:number;

        constructor(name:string){
            this.name=name;
        }

        print():string{
            return this.name;
        }
    }

    class Student{

        name:string;
        subjects:Array<Subject>;

        constructor(name:string){
            this.name=name;
            this.subjects = [];
        }

        print():string{
            return this.name        
        }

        getSubjects():Array<Subject>{
            return this.subjects;
        }

        addSubject(name:string):void{
            this.subjects.push(new Subject(name));
        }
    }

    let stud1:Student = new Student("Student1");
    console.log(stud1.print());
    stud1.addSubject("Maths");
    console.log(stud1.getSubjects()[0].print());
    console.log("Program ends.")

}