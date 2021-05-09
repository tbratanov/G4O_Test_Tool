// Instantiate glue 
Glue().then(glue => {
    window.glue = glue;
    handleGlueReady();
}).catch(console.error)

const g4oConfig = {
    application: "MS Office Interop",
    word: true, 
    // enable word interop
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
  const wordStatusButton = document.getElementById("wordStatusButton");
  wordStatusButton.addEventListener("click", checkwordStatus)

  const subscribewordStatus = document.getElementById("subscribeWordStatus");
  subscribewordStatus.addEventListener("click", subscribeWordStatusEvent);
  
  const sendDataToword = document.getElementById("sendDataToWord");
  sendDataToword.addEventListener("click", openExportToWordWindow);

  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click", goHome);

  const startWordJPM = document.getElementById("startWordJPM");
  startWordJPM.addEventListener("click", startWordJPMfunc)

};

// Functions
function checkwordStatus() {
  if(g4o.word.addinStatus === true) {
    window.alert("Word is connected!")
  } else {
    window.alert("Word is not conected!")
  }
};

function subscribeWordStatusEvent() {
  window.alert("Subscribed to word onAddinStatusChanged()")
  g4o.word.onAddinStatusChanged(connected => {
    if(connected) {
      window.alert("Word has been connected!")
    } else {
      window.alert("Word has been disconnected!")
    }
  })
};

function openExportToWordWindow () {

  let myWin = glue.windows.my();

  glue.appManager.application("sendDataToWord").start({}, {
    height: 480,
    width: 920,
    maxHeight: 480,
    maxWidth: 920,
    left: myWin.bounds.left+50,
    top: myWin.bounds.top+50
  }) 
}

function startWordJPMfunc () {
  let wordApp = glue.appManager.application("WordStarter")

  if(wordApp != null) {
    wordApp.start()
  } else {
    window.alert("Word App is not detected." + "<br>" + "Check ENV/REG!")
  }
}

function goHome() {
  window.location.href="../index.html"
}