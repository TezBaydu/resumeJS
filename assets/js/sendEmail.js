// console.log("Hello");

function sendMail(contactForm) {
    emailjs.send("service_8tumlwn", "testforcodepro2", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value, 
        "project_request": contactForm.projectsummary.value,
    }, "user_jtbYcTDIFOX4Z8NAmbqq3")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
