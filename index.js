// Instantiate glue 
Glue().then(glue => {
    window.glue = glue;
    handleGlueReady();
}).catch(console.error)

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
    const excelTestToolButton = document.getElementById("Excel-Test-Tool");
    excelTestToolButton.addEventListener("click", goToExcelTool)

    const wordTestToolButton = document.getElementById("Word-Test-Tool");
    wordTestToolButton.addEventListener("click", goToWordTool)

    const outlookTestToolButton = document.getElementById("Outlook-Test-Tool");
    outlookTestToolButton.addEventListener("click", goToOutlookTool)
  

  };

function goToExcelTool() {
    window.location.href = "./Excel-Connector-Test-Tool/index.html"
};

function goToWordTool() {
    window.location.href = "./Word-Connector-Test-Tool/index.html"
};

function goToOutlookTool() {
    window.location.href = "./Outlook-Connector-Test-Tool/index.html"
};