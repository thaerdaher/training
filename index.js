function goahead(){
    fetch('http://localhost:1234/ahmad')
      .then(response => response.json())
      .then(json => {
        let studentul= document.getElementById('student');
        json.forEach(s => {
            let studentli = document.createElement('li');
            studentli.innerHTML = s.name;
            studentul.appendChild(studentli);
        });

      })
}