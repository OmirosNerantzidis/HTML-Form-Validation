var student_date_of_birth = document.getElementById('student_date_of_birth');


    var today18yearsago = new Date();
    var dd = today18yearsago.getDate();
    var mm = today18yearsago.getMonth()+1; //January is 0!
    var yyyy = today18yearsago.getFullYear();
     if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
    
    today18yearsago = yyyy-18 +'-'+mm+'-'+dd;    


student_date_of_birth.setAttribute("value", today18yearsago);

student_date_of_birth.addEventListener('change', function() {
    if (student_date_of_birth){
        if (student_date_of_birth.value > today18yearsago){
            student_date_of_birth.value = today18yearsago;
        } 
    }

}, false);

