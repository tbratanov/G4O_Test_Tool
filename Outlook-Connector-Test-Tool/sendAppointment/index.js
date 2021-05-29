// Instantiate glue 
Glue().then(glue => {
    window.glue = glue;
    handleGlueReady();
}).catch(console.error)

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
    console.log('g4o version:', g4o.version)
};

// eventListener to ensure that functions are executed once domContent is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    handleDOMReady();
  });
  

// Functions to button assignments
function handleDOMReady() {
    const sendAppointment = document.getElementById("sendAppointment");
    sendAppointment.addEventListener("click", sendAppointmentFunc)
};

function sendAppointmentFunc () {
    let priority = document.getElementById("priority").value;
    let dueDate = document.getElementById("dueDate").value;
    let subject = document.getElementById("subject").value;
    let body = document.getElementById("body").value;
    let attachment;

    if(document.getElementById("attachment").value != "") {
        attachment = document.getElementById("attachment").files[0].path;
    };

    g4o.outlook
    .newTask(
      {
        subject: subject,
        body: body,
        priority: priority,
        dueDate: new Date(dueDate),
        attachments: ["", attachment]
      },
      {
        onSaved: task => {
          task
            .show()
            .then(ids => console.log(ids))
            .catch(console.error);
        }
      }
    )
    .then(console.log)
    .catch(console.error);
}; 
