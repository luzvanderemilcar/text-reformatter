import rearranger from '/rearranger.js';
import copyContent from '/clipboard.js';

let processingText = "";

let formElement = document.getElementById("reformation");
let textAreaElement = document.getElementById("original-text");

let resultElement = document.getElementById("result");
let copyButton = document.getElementById("copy-clipboard");

textAreaElement.addEventListener("focus", () => {
  resultElement.innerText = "";
});

textAreaElement.addEventListener("blur", (e) => {
  let textValue = e.target.value;
  processingText = rearranger(textValue);
  resultElement.innerHTML = processingText;
});

copyButton.addEventListener("click", ()=>{
  copyContent(processingText);
})

function handleReformation(e) {
e.preventDefault();

let currentForm =e.target;

let { originalText} = formElement.elements;

let reformatted = rearranger(originalText?.value.trim());

// set the reformatted text
if (reformatted) resultElement.innerHTML = reformatted;


}

function copyContentFromHTML(text) {
  let caracterDict = {
    "&lt;br&gt;" : "\b"
  }
  let processed = text;
  
  for (let caracter of caracterDict) {
    processed = processed.replace(new RegExp(caracter, "g"), caracterDict[caracter]);
  }

  copyContent(processed);
}