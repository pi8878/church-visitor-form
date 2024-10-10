document.addEventListener("DOMContentLoaded", () => {
    const collegeYes = document.getElementById("college-yes");
    const collegeNo = document.getElementById("college-no");
    const studentStatusContainer = document.getElementById("student-status-container");

    // Toggle the student dropdown visibility based on selection
    collegeYes.addEventListener("change", () => {
        if (collegeYes.checked) {
            studentStatusContainer.style.display = "block";
        }
    });

    collegeNo.addEventListener("change", () => {
        if (collegeNo.checked) {
            studentStatusContainer.style.display = "none";
        }
    });
});

// Form submission logic
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
    })
    .catch(error => console.error("Error submitting form:", error));
}
