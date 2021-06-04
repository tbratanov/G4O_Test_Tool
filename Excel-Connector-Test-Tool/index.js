// Instantiate glue 
Glue().then(glue => {
    window.glue = glue;
    handleGlueReady();
}).catch(console.error);

const g4oConfig = {
    application: "MS Office Interop",
    excel: true, 
    // enable Excel interop
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
  const excelStatusButton = document.getElementById("excelStatusButton");
  excelStatusButton.addEventListener("click", checkExcelStatus);

  const subscribeExcelStatus = document.getElementById("subscribeExcelStatus");
  subscribeExcelStatus.addEventListener("click", subscribeExcelStatusEvent);
  
  const sendDataToExcel = document.getElementById("sendDataToExcel");
  sendDataToExcel.addEventListener("click", openExportToExcelWindow);

  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click", goHome);

  const startExcelJPM = document.getElementById("startExcelJPM");
  startExcelJPM.addEventListener("click", startExcelJPMfunc);
};

// Functions
function checkExcelStatus() {
  if(g4o.excel.addinStatus === true) {
    window.alert("Excel is connected!")
  } else {
    window.alert("Excel is not conected!")
  }
};

function subscribeExcelStatusEvent() {
  window.alert("Subscribed to Excel onAddinStatusChanged()")
  g4o.excel.onAddinStatusChanged(connected => {
    if(connected) {
      window.alert("Excel has been connected!")
    } else {
      window.alert("Excel has been disconnected!")
    }
  });
};

function openExportToExcelWindow () {

  let myWin = glue.windows.my();

  glue.appManager.application("sendDataToExcel").start({}, {
    height: 320,
    width: 450,
    maxHeight: 320,
    maxWidth: 450,
    left: myWin.bounds.left+50,
    top: myWin.bounds.top+50
  });
};

function startExcelJPMfunc () {
  let excelApp = glue.appManager.application("excel")

  if(excelApp != null) {
    excepApp.start()
  } else {
    window.alert("Excel App is not detected." + "<br>" + "Check ENV/REG!")
  }
};

function goHome() {
  window.location.href="../index.html"
};