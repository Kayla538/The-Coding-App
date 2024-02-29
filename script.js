const programmingLanguages = [
  "JavaScript", "Python", "HTML", "CSS", "Java", "Ruby", "C++", "Perl", "SQL", "Swift", "Rust", 
  "Scala", "TypeScript", "Assembly language", "Objective-C", "C", "Kotlin", "C#", 
  "Lisp", "Fortran", "COBOL", "Lua", "MATLAB", "PHP"
];

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submitButton').addEventListener('click', function() {
      var textInput = document.getElementById('textInput').value;
      var newText = document.createElement('p');
      newText.textContent = textInput;
      newText.style.color = 'limegreen';
      newText.style.textAlign = 'center';
      document.body.appendChild(newText);
  });
});

  


