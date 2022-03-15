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
    console.log('g4o version:', g4o.version)
};

// eventListener to ensure that functions are executed once domContent is loaded
document.addEventListener('DOMContentLoaded', (event) => {
  handleDOMReady();
});

// Functions to button assignments
function handleDOMReady() {
  const outlookStatusButton = document.getElementById("outlookStatusButton");
  outlookStatusButton.addEventListener("click", checkOutlookStatus);

  const subscribeOutlookStatus = document.getElementById("subscribeOutlookStatus");
  subscribeOutlookStatus.addEventListener("click", subscribeOutlookStatusEvent);

  const sendEmail = document.getElementById("sendEmail");
  sendEmail.addEventListener("click", sendEmailFunc);

  const sendAppointment = document.getElementById("sendAppointment");
  sendAppointment.addEventListener("click", sendAppointmentFunc);

  const checkEmails = document.getElementById("CheckEmailFolder");
  checkEmails.addEventListener("click", checkEmailsFunc);

  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click", goHome);

};

// Functions
function checkOutlookStatus() {
  if(g4o.outlook.addinStatus === true) {
    window.alert("Outlook is connected!")
  } else {
    window.alert("Outlook is not connected!")
  }
};

function subscribeOutlookStatusEvent() {
  window.alert("Subscribed to Outlook onAddinStatusChanged()")
  g4o.outlook.onAddinStatusChanged(({ connected }) => {
    if(connected) {
      window.alert(`Outlook has been connected!`)
    } else {
      window.alert("Outlook has been disconnected!")
    }
  })
};

function sendAppointmentFunc () {
  let myWin = glue.windows.my();

  glue.appManager.application("sendAppointment").start({}, {
    height: 410,
    width: 400,
    maxHeight: 410,
    maxWidth: 400,
    left: myWin.bounds.left+50,
    top: myWin.bounds.top+50
  });

};

function checkEmailsFunc () {
  let myWin = glue.windows.my();

  glue.appManager.application("checkEmails").start({}, {
    height: 410,
    width: 400,
    maxHeight: 410,
    maxWidth: 400,
    left: myWin.bounds.left+50,
    top: myWin.bounds.top+50
  });
};

function sendEmailFunc () {
  let myWin = glue.windows.my();

  glue.appManager.application("sendEmail").start({}, {
    height: 410,
    width: 400,
    maxHeight: 410,
    maxWidth: 400,
    left: myWin.bounds.left+50,
    top: myWin.bounds.top+50
  });
};

function goHome() {
  window.location.href="../index.html"
};
