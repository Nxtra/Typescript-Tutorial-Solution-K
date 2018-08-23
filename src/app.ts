let erwin:Teacher = new Teacher("Erwin");

let maria:Teacher = new Teacher("Maria");

let studentEric:Student = new Student("Eric");
let studentAdam:Student = new Student("Adam");
let studentJeff:Student = new Student("Jeff");


let wiskunde:Course = new Course("Wiskunde",erwin, new Array(studentAdam));

let nederlands:Course = new Course("Nederlands",maria, [studentEric,studentAdam]);


let gradeService = new GradeService();
gradeService.add(new Grade(5, nederlands,studentAdam));
gradeService.add(new Grade(10,nederlands,studentEric));

let courseService = new CourseService();
courseService.add(wiskunde);
courseService.add(nederlands);
courseService.addStudent(nederlands,studentJeff);

let studentService = new StudentService();
studentService.add(studentEric);
studentService.add(studentAdam);
studentService.add(studentJeff);

let teacherService = new TeacherService();
teacherService.add(maria);
teacherService.add(erwin);



gradeService.addWithConstraintCheck(erwin,new Grade(8,wiskunde,studentAdam));

let select = document.getElementById("optionsCourses");
let options = courseService.getAll();

for(let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.id =  i.toString();
    el.value = opt.name;
    el.textContent = opt.name;
    select.appendChild(el);
}​



let secondSelect = document.getElementById("optionsTeachers");
let secondOptions = teacherService.getAll();

for(let i = 0; i < secondOptions.length; i++) {
    let secOpt = secondOptions[i];
    let secEl = document.createElement("option");
    secEl.id =  i.toString();
    secEl.value = secOpt.name;
    secEl.textContent = secOpt.name;
    secondSelect.appendChild(secEl);
}​

function getSelectedCourse(){
    let course:HTMLSelectElement = <HTMLSelectElement> document.getElementById("optionsCourses");
    let name = course.options[course.selectedIndex].value;
    return courseService.getAll().filter(course => course.name === name)[0];
}


function getSelectedTeacher(){
    let teacher = <HTMLSelectElement> document.getElementById("optionsTeachers");
    let students = document.getElementById("students");
    while (students.firstChild) {
        students.removeChild(students.firstChild);
    }
    return teacher.options[teacher.selectedIndex].value;
}

function getStudentsOfTeacher(name:string){
    let container = document.getElementById("students");

    let students: Array<Student> = courseService.getCourseOfTeacher(name).students;

    for(let i = 0; i < students.length; i++) {
        let thirdOpt = students[i];
        let thirdEl = document.createElement("li");
        thirdEl.id = i.toString();
        thirdEl.textContent = thirdOpt.name;
        container.appendChild(thirdEl);
    }

}