  // compute current year dynamically

  function getCurrentYear() {
    var currentYear = new Date().getFullYear();

    var currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = currentYear;
  }
  
  getCurrentYear();
  
  // compute current academic year dynamically
  function getAcademicYear() {
    var currentYear = new Date().getFullYear();
    var startOfAcademicYear;
    var endOfAcademicYear;
  
    var currentMonth = new Date().getMonth();
  
    if (currentMonth >= 8) {
      startOfAcademicYear = currentYear + 1;
      endOfAcademicYear = currentYear + 2;
    } else {
      startOfAcademicYear = currentYear;
      endOfAcademicYear = currentYear + 1;
    }
  
    var academicYear = startOfAcademicYear + '-' + endOfAcademicYear;
  
    var academicYearSpanArr = document.querySelectorAll("span.academic-year");
    
    academicYearSpanArr.forEach(span => {
      span.textContent = academicYear
    });  
  }
  
  getAcademicYear();
  