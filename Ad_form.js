document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        group: document.getElementById("group").value,
        sscResult: document.getElementById("ssc-result").value,
        hscResult: document.getElementById("hsc-result").value,
        Nationality: document.getElementById("nationality").value,
        Father: document.getElementById("fname").value,
        Mother: document.getElementById("mname").value,
        Sign: document.getElementById("sig").value,
        
    };

    // Store form data in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirect to formatted output page
    window.location.href = "viewAdmission_form.html";
});