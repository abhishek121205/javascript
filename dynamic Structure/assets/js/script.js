var student = [
  {
    title: "STUDENT-1",
    fname: "FIRSTNAME: TONY",
    lname: "LASTNAME: STARK",
    dob: "D.O.B: 1-2-1993",
    age: "AGE: 30 YEARS",
    add: "ADDRESS: SURAT",
    image: "assets/images/i-5.jpg",
  },
  {
    title: "STUDENT-2",
    fname: "FIRSTNAME: CAPTAIN",
    lname: "LASTNAME: AMERICA",
    dob: "D.O.B: 3-4-1992",
    age: "AGE: 31 YEARS",
    add: "ADDRESS: BHARUCH",
    image: "assets/images/i-6.jpg",
  },
  {
    title: "STUDENT-3",
    fname: "FIRSTNAME: THOR",
    lname: "LASTNAME: ODINSON",
    dob: "D.O.B: 4-5-1991",
    age: "AGE: 32 YEARS",
    add: "ADDRESS: VADODRA",
    image: "assets/images/i-7.jpg",
  },
  {
    title: "STUDENT-4",
    fname: "FIRSTNAME: PETER",
    lname: "LASTNAME: PARKER",
    dob: "D.O.B: 6-7-1990",
    age: "AGE: 33 YEARS",
    add: "ADDRESS: VAPI",
    image: "assets/images/i-8.png",
  },
  {
    title: "STUDENT-5",
    fname: "FIRSTNAME: BLACK",
    lname: "LASTNAME: PANTHER",
    dob: "D.O.B: 8-9-1989",
    age: "AGE: 34 YEARS",
    add: "ADDRESS: AHEMDABAD",
    image: "assets/images/i-9.jpg",
  },
  {
    title: "STUDENT-6",
    fname: "FIRSTNAME: DOCTOR",
    lname: "LASTNAME: STRANGE",
    dob: "D.O.B: 10-11-1988",
    age: "AGE: 35 YEARS",
    add: "ADDRESS: JUNAGADH",
    image: "assets/images/i-10.jpg",
  },
];
console.log(student.length);
for (var i = 0; i < student.length; i++) {
  document.getElementById("row").innerHTML += `
            <div class="col-xl-4 col-md-6">
                <div class="card">
                    <div class="row px-1">
                        <div class="col-8">
                            <h2>${student[i].title}</h2>
                            <span>${student[i].fname}</span>
                            <span>${student[i].lname}</span>
                            <span>${student[i].dob}</span>
                            <span>${student[i].age}</span>
                            <span>${student[i].add}</span> 
                        </div>
                        <div class="col-4 p-0">
                            <img src=${student[i].image} alt=""> 
                        </div>
                    </div>                    
                </div>  
            </div>     
        `;
}
