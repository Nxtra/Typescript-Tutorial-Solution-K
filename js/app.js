var erwin = new Teacher("Erwin");
var maria = new Teacher("Maria");
var studentEric = new Student("Eric");
var studentAdam = new Student("Adam");
var studentJeff = new Student("Jeff");
var wiskunde = new Course("Wiskunde", erwin, new Array(studentAdam));
var nederlands = new Course("Nederlands", maria, [studentEric, studentAdam]);
var gradeService = new GradeService();
gradeService.add(new Grade(5, nederlands, studentAdam));
gradeService.add(new Grade(10, nederlands, studentEric));
var courseService = new CourseService();
courseService.add(wiskunde);
courseService.add(nederlands);
courseService.addStudent(nederlands, studentJeff);
var studentService = new StudentService();
studentService.add(studentEric);
studentService.add(studentAdam);
studentService.add(studentJeff);
var teacherService = new TeacherService();
teacherService.add(maria);
teacherService.add(erwin);
gradeService.addWithConstraintCheck(erwin, new Grade(8, wiskunde, studentAdam));
var select = document.getElementById("optionsCourses");
var options = courseService.getAll();
for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.id = i.toString();
    el.value = opt.name;
    el.textContent = opt.name;
    select.appendChild(el);
}
var secondSelect = document.getElementById("optionsTeachers");
var secondOptions = teacherService.getAll();
for (var i = 0; i < secondOptions.length; i++) {
    var secOpt = secondOptions[i];
    var secEl = document.createElement("option");
    secEl.id = i.toString();
    secEl.value = secOpt.name;
    secEl.textContent = secOpt.name;
    secondSelect.appendChild(secEl);
}
function getSelectedCourse() {
    var course = document.getElementById("optionsCourses");
    var name = course.options[course.selectedIndex].value;
    return courseService.getAll().filter(function (course) { return course.name === name; })[0];
}
function getSelectedTeacher() {
    var teacher = document.getElementById("optionsTeachers");
    var students = document.getElementById("students");
    while (students.firstChild) {
        students.removeChild(students.firstChild);
    }
    return teacher.options[teacher.selectedIndex].value;
}
function getStudentsOfTeacher(name) {
    var container = document.getElementById("students");
    var students = courseService.getCourseOfTeacher(name).students;
    for (var i = 0; i < students.length; i++) {
        var thirdOpt = students[i];
        var thirdEl = document.createElement("li");
        thirdEl.id = i.toString();
        thirdEl.textContent = thirdOpt.name;
        container.appendChild(thirdEl);
    }
}
//# sourceMappingURL=app.js.map