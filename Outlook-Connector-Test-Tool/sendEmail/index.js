// Instantiate glue 
Glue().then(glue => {
    window.glue = glue;
    handleGlueReady();
}).catch(console.error);

const g4oConfig = {
    application: "MS Office Interop",
    outlook: true, 
    // enable Outlook interop
  };

// Instantiate g4o 
Glue4Office(g4oConfig)
.then(g4o => {
window.g4o = g4o;
handleG4oReady();
})
.catch(console.error);

// Basic check for g4o and glue API
function handleGlueReady() {
    console.log(`glue version:`,glue.version);
};

function handleG4oReady () {
    console.log('g4o version:', g4o.version);
};

// eventListener to ensure that functions are executed once domContent is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    handleDOMReady();
  });
  

// Functions to button assignments
function handleDOMReady() {
    // const sendToExcel = document.getElementById("sendToExcel");
    // sendToExcel.addEventListener("click", openSheet);
    const sendEmail = document.getElementById("sendEmail");
    sendEmail.addEventListener("click", sendEmailFunc);
};

function sendEmailFunc () {
    let recipientsTo = document.getElementById("recipientTo").value;
    let recipientsCC = document.getElementById("recipientCC").value;
    let subject = document.getElementById("subject").value;
    let body = document.getElementById("body").value;
    let attachment;

    if(document.getElementById("attachment").value != "") {
        attachment = document.getElementById("attachment").files[0].path;
    } else {
        attachment = "";
    };

    g4o.outlook.newEmail({
        subject: subject,
        to: recipientsTo,
        cc: recipientsCC,
        body: body,
        attachments: [attachment]
    },
    {
        onSent: email => {
            email
            .show()
            .then((ids) => {
                console.log(ids)
                alert("Email sent!")
            })
            .catch(console.error)
        }
    })
    .then(console.log)
    .catch(console.error);
}; 
