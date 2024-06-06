//Get the current time and date
const now = new Date();
document.getElementById("datetime").innerHTML = now.toLocaleString();

const url = 'https://onlineprojectsgit.github.io/API/WDEndpoint.json';

//getdata() fn to fetch data
const getdata = async () => {
    try {
        const response = await fetch(url);
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(JSON.stringify(data, undefined, 2));
            displayData(data);
        }
    } catch (error) {
        console.log(error);
    }
}
getdata();

function displayData(data) {
    const container = document.querySelector('.info-container');
    container.innerHTML = '';
    const { id, cohort, Name, Start, End, instructor, students } = data.info;
    container.innerHTML = `
    <h1>Cohort Details</h1>
    <p>ID: ${id}</p>
    <p>Cohort: ${cohort}</p>
    <p>Name: ${Name}</p>
    <p>Start: ${Start}</p>
    <p>End: ${End}</p>
    <h2>Instructor Details</h2>
    <p>Name: ${instructor.name}</p>
    <p>Position: ${instructor.position}</p>
    <p>Cohorts: ${instructor.cohorts}</p>
    <h2>Student Details</h2>`
    let studentDetails = "<ol>"
    for (let i = 0; i < students.length; i++) {
        studentDetails += `<li>${students[i]}</li>`
    }
    studentDetails += "</ol>"
    container.innerHTML += studentDetails;
}


