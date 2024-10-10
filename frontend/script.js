document.addEventListener("DOMContentLoaded", () => {
    const collegeYes = document.getElementById("college-yes");
    const collegeNo = document.getElementById("college-no");
    const studentStatusDropdown = document.getElementById("student-status-dropdown");

    // Toggle the student dropdown visibility based on selection
    collegeYes.addEventListener("change", () => {
        if (collegeYes.checked) {
            studentStatusDropdown.style.display = "block";
        }
    });

    collegeNo.addEventListener("change", () => {
        if (collegeNo.checked) {
            studentStatusDropdown.style.display = "none";
        }
    });
});


function submitForm() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        collegeStudent: document.querySelector('input[name="college"]:checked')?.value,
        studentStatus: document.getElementById("student-status").value,
        howHeard: document.getElementById("how-heard").value,
        membership: document.querySelector('input[name="membership"]:checked')?.value,
        prayer: document.getElementById("prayer").value,
        pastorVisit: document.querySelector('input[name="pastor-visit"]:checked')?.value,
        moreInfo: document.querySelector('input[name="more-info"]:checked')?.value
    };

    // Make a POST request to the backend server
    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        console.log("Server Response:", data);
        document.getElementById("visitorForm").reset();  // Optional: Reset form
    })
    .catch(error => console.error("Error submitting form:", error));
}






// Form submission logic
// function submitForm() {
//     const formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         address: document.getElementById("address").value,
//         collegeStudent: document.querySelector('input[name="college"]:checked')?.value,
//         studentStatus: document.getElementById("student-status").value,
//         howHeard: document.getElementById("how-heard").value,
//         membership: document.querySelector('input[name="membership"]:checked')?.value,
//         prayer: document.getElementById("prayer").value,
//         pastorVisit: document.querySelector('input[name="pastor-visit"]:checked')?.value,
//         moreInfo: document.querySelector('input[name="more-info"]:checked')?.value
//     };

//     fetch('http://localhost:3000/submit-form', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message);
//         console.log("Server Response:", data);
//     })
//     .catch(error => console.error("Error submitting form:", error));
// }
