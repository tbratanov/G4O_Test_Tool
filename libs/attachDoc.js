// wait for window to load
window.addEventListener("load", windowLoad);

// open a dialog function
function openFileDialog (accept, multy = false, callback) { 
    var inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = accept; // Note Edge does not support this attribute
    if (multy) {
        inputElement.multiple = multy;
    }
    if (typeof callback === "function") {
         inputElement.addEventListener("change", callback);
    }
    inputElement.dispatchEvent(new MouseEvent("click")); 
}

// onload event
function windowLoad () {
    // add user click event to userbutton
    userButton.addEventListener("click", openDialogClick);
}

// userButton click event
function openDialogClick () {
    // open file dialog for text files
    openFileDialog(".txt,text/plain", true, fileDialogChanged);
}

// file dialog onchange event handler
function fileDialogChanged (event) {
    [...this.files].forEach(file => {
        var div = document.createElement("div");
        div.className = "fileList common";
        div.textContent = file.name;
        userSelectedFiles.appendChild(div);
    });
}