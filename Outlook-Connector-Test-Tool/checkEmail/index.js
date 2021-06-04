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
    const subButton = document.getElementById("Sub");
    subButton.addEventListener("click", emailReceivedFunc);
};




function emailReceivedFunc () {
    const body = document.getElementsByTagName('body')[0]

    window.alert("Subscribed to .onEmailReceived()")

    g4o.outlook.onEmailReceived((receivedEmail) => {
        let email = document.createElement('div');
        email.className = 'container'
        body.appendChild(email)
        
        let subject = document.createElement('p')
        subject.id = 'subject'
        email.appendChild(subject)
        subject.appendChild(document.createTextNode("Subject: "+receivedEmail.subject))

        let from = document.createElement('p')
        from.id = 'from'
        email.appendChild(from)
        from.appendChild(document.createTextNode("From: "+receivedEmail.sender.emails[0]))

        let timeAndDate = document.createElement('span');
        timeAndDate.className = 'time-right'
        email.appendChild(timeAndDate)
        timeAndDate.appendChild(document.createTextNode(receivedEmail.date))

        let emailBodyButton = document.createElement('button')
        emailBodyButton.className = 'collapsible'
        emailBodyButton.type = 'button'
        emailBodyButton.appendChild(document.createTextNode("Expand:"))
        email.appendChild(emailBodyButton)
        emailBodyButton.onclick = function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            }
        let emailBody = document.createElement('div')
        emailBody.className = 'content'
        email.appendChild(emailBody)
        emailBody.appendChild(document.createTextNode(receivedEmail.body))
        console.log(receivedEmail)
    });
};