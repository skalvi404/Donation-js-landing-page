
// For InputFiedl Function
function getInputElementById(id) {
    const inputvalue = document.getElementById(id).value;
    const inputvalueNumber = parseFloat(inputvalue);
    return inputvalueNumber;
}

// For toxid function

function FormateCurrency(amount) {
    return '${amount.fofixed(2)}';
}

// for TexttField function

function getTextFieldid(id) {
    const textinputvaleu = document.getElementById(id).innerText;
    const textinputvalueNumber = parseFloat(textinputvaleu);
    return textinputvalueNumber;
}

// hidden remove function
function hiddeRemove(id) {
    document.getElementById(id).classList.remove(id);
}
// hidden add function

function hiddenAdd(id) {
    document.getElementById(id).classList.add(id);
}

// // Histoy Details
// function showHistory(element name ){

// }

// function DonatenowButton(id)
// .addEventListener('click',function{

    
// })

// card-1-input-validation

function InputValidation(id){
    const inputvlaue=document.getElementById(id).value;
    const inputvalueNumber=parseFloat(inputvlaue);
    return inputvalueNumber;
}