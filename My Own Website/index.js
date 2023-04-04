function sendMail(){
    var params = {
        firstname: document.getElementById("First Name").value,
        lastname: document.getElementById("Last Name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
  const serviceID = "service_2fe3b09";
  const templateID = "template_fog6ic1";

  emailjs
  .send(serviceID,templateID,params)
  .then((res) => {
        document.getElementById("First Name").value = "";
        document.getElementById("Last Name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");

    })
    .catch((err) => console.log(err));
}
