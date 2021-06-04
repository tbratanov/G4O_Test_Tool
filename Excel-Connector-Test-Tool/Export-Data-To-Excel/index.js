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
    console.log('g4o version:', g4o.version);
};

// eventListener to ensure that functions are executed once domContent is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    handleDOMReady();
  });
  

// Functions to button assignments
function handleDOMReady() {
    const sendToExcel = document.getElementById("sendToExcel");
    sendToExcel.addEventListener("click", openSheet);

};

const openOptions = {
  columnConfig: [
    { header: "Symbol", fieldName: "symbol" },
    { header: "Price", fieldName: "price", validation: {type: "Decimal", alert: "Warning"} },
    { header: "Name", fieldName: "name" }
  ],
  data: [
    { price: 120.23, symbol: "AAPL",  name: "Apple Inc." },
    { price: 208.3, symbol: "GME", name: "GameStop Corp." },
    { price: 0.0529, symbol: "DOGE-USD", name: "Dogecoin USD" },
    { price: 83.73, symbol: "BMW.DE", name: "BMW" }
  ],
  options: {
    workbook: "testWorkBook",
    worksheet: "testWorkSheet"
  }
};

function openSheet() {
  g4o.excel.openSheet(openOptions)
  .then(sheet => {
    sheet.onChanged(
      (returnedData, validationError, doneCB, delta) => {
        validationError((a) => {
          console.log(a.description)
        })
        doneCB(() => {
          g4o.excel.ready()
        })
        document.getElementById("A2").innerHTML = returnedData[0].symbol;
        document.getElementById("B2").innerHTML = returnedData[0].price;
        document.getElementById("C2").innerHTML = returnedData[0].name;

        document.getElementById("A3").innerHTML = returnedData[1].symbol;
        document.getElementById("B3").innerHTML = returnedData[1].price;
        document.getElementById("C3").innerHTML = returnedData[1].name;

        document.getElementById("A4").innerHTML = returnedData[2].symbol;
        document.getElementById("B4").innerHTML = returnedData[2].price;
        document.getElementById("C4").innerHTML = returnedData[2].name;

        document.getElementById("A5").innerHTML = returnedData[3].symbol;
        document.getElementById("B5").innerHTML = returnedData[3].price;
        document.getElementById("C5").innerHTML = returnedData[3].name;
      }
    )
  });
};