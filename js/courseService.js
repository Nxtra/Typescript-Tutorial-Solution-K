var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CourseService = /** @class */ (function (_super) {
    __extends(CourseService, _super);
    function CourseService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CourseService.prototype.lookupStudentsInCourse = function (course) {
        return course.students;
    };
    CourseService.prototype.sortStudentsInCourse = function (course) {
        return course.students.sort(function (a, b) { return (b.name > a.name ? -1 : 1); });
    };
    CourseService.prototype.addStudent = function (course, student) {
        course.students.push(student);
    };
    CourseService.prototype.removeStudent = function (course, index) {
        course.students.slice(index);
    };
    CourseService.prototype.getCourseOfTeacher = function (teacherName) {
        return courseService.getAll().filter(function (course) { return course.teacher.name === teacherName; })[0];
    };
    return CourseService;
}(EntityService));
//# sourceMappingURL=courseService.js.map