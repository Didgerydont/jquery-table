$(document).ready(function() {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
    
    
    /* Working from https://courses.codeinstitute.net/courses/course-v1:CodeInstitute
    +IFD101+2017_T3/courseware/b99394c03fb342ed96e82caa5adef426/9db80543021043558861b
    443386c98e7/        */
    
    $("th").click(function(){
        $("tr").children().removeClass("selection");
        $(this).siblings().addClass("selection");
    });
});