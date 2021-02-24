var Name = document.getElementById('formName').value;
var EmailName = document.getElementById('formEmail').value;
var form = document.getElementById('form');



// // form.addEventListener('submit', function (event) {
// //     event.preventDefault();

// //     EmailName = document.getElementById('formEmail').value;

// //     alert(EmailName)

// //     Email.send({
// //         SecureToken: "0a778f3f-ecf2-4332-ae36-eef80aa74917",
// //         To: "sukarthacharya@gmail.com",
// //         From: "sukarthacharya@gmail.com",
// //         Subject: 'Cool Stuff',
// //         Body: 'Hello, ' + Name.value + 'Here is an email about cool stuff' + '                                                                                                                                                                                                                                                                                                        ' + 'Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
// //             'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
// //             'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in' +
// //             'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur' +
// //             'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id' +
// //             'est laborum'
// //     }).then(
// //         message => alert(message)
// //     );

// // });

// var myform = $("form#myform");
// myform.submit(function (event) {
//     event.preventDefault();

//     // Change to your service ID, or keep using the default service
//     var service_id = "gmail";
//     var template_id = "cool_stuff";

//     myform.find("button").text("Sending...");
//     emailjs.sendForm(service_id, template_id, myform[0])
//         .then(function () {
//             alert("Sent!");
//             myform.find("button").text("Send");
//         }, function (err) {
//             alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//             myform.find("button").text("Send");
//         });
//     return false;
// });

var service_id = "default_service";
var template_id = "cool_stuff";

form.addEventListener('submit', function (event) {

    EmailName = document.getElementById('formEmail').value;
    Name = document.getElementById('formName').value;

    if (!EmailName || !Name) {
        event.preventDefault();
        console.error("Please enter values in the field")
        alert("Please enter values in the field")
    } else {
        event.preventDefault();
        EmailName = document.getElementById('formEmail').value;
        Name = document.getElementById('formName').value;

        String(EmailName)
        String(Name)



        var templateParams = {
            to_email: EmailName,
            name: Name

        };
        emailjs.send(service_id, template_id, templateParams).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('An Email has been sent to the given email-address, please check your spam folder also.')
         }, function(error) {
            console.log('FAILED...', error);
            alert('Error Sending Email')
         });
        
               

    }

});

























// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'sukarthacharya@gmail.com',
//         pass: 'sukarth.2008'
//     }
// });

// var mailOptions = {
//     from: 'sukarth',
//     to: Email,
//     subject: 'Cool Stuff',
//     text: 'Hello, ' + Name.value + 'Here is an email about cool stuff' + '                                                                                                                                                                                                                                                                                                        ' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
//         'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
//         'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in' +
//         'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur' +
//         'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id' +
//         'est laborum'
// };