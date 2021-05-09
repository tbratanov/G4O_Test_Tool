// Instantiate glue 
Glue().then(glue => {
    window.glue = glue;
    handleGlueReady();
}).catch(console.error)

const g4oConfig = {
    application: "MS Office Interop",
    word: true, 
    // enable Word interop
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
    const sendToWord = document.getElementById("sendToWord");
    sendToWord.addEventListener("click", sendDataToWord);

};

function sendDataToWord () {

  let data = document.getElementById("inputField").value;

  var options = {
    name: "Test Word Document",
    data: data,
    isDocx: false
  }

  g4o.word.openDocument(options)
  .then((documentAPI) => {
    documentAPI.onChanged((returnedDocument) => {
      var iframe = document.getElementById('iframeID');
      iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(returnedDocument);
    })
  })

};

