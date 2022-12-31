var form = document.getElementById("forms");
const vowels = ["e", "i", "a", "o", "u"];
const vowelsKeys = ["enter", "imes", "ai", "ober", "ufat"]

//We reset the form when reload the page.
document.body.onload = function () {
    form.reset();
}

//Valid that message has 140 number of characters
function messageValidator(msg) {
    if (msg.length <= 140) {
        return true
    } else {
        return false
    }
}

//replace letters in a word, the letter to be replaced, the value to be replaced and the word where it will be replaced are sent.
function replaceLetters(bfLetter, atLetter, word) {
    let re = new RegExp(bfLetter, 'g');
    let newWord = word.replace(re, atLetter);
    return newWord;
}

//Find the vowels in the word and apply the key corresponding tho the vowel
function encryptWord(word) {
    let newWord = "";
    let letterMatch = "";

    for (letter of word) {

        for (let i = 0; i < vowels.length; i++) {

            const element = vowels[i];
            const elementKey = vowelsKeys[i];

            if (letter == element) {
                letterMatch = replaceLetters(element, elementKey, letter);
                break;
            } else {
                letterMatch = letter;
            }

        }

        newWord += letterMatch;
    }
    return newWord;

}

//Gets the reference of the buttons with class .btn
const buttons = document.querySelectorAll(".btn");

//With this variable e control the actions of the application
var selectedOption;

//We ho through the buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("El texto que tiene es: ",);
        selectedOption = button.innerText;
    })
});

//Sends the resulting message to the DOM
function messageResult(message) {
    let encryptMessage = "";
    encryptMessage = message.toString().replace(/,/g, " ");
    console.log(encryptMessage);
    document.getElementById('message-result').innerHTML = '<textarea cols="1" rows="5" maxlength="140" class="message-result">' + encryptMessage + '</textarea>';
}


//Application trigger
form.onsubmit = function (e) {
    e.preventDefault();
    let message = document.getElementById("input-message").value;
    const wordArray = message.toLowerCase().split(" ");

    if (messageValidator) {

        if (selectedOption == "Encriptar") {
            let resultArray = [];
            for (word of wordArray) {
                resultArray.push(encryptWord(word));
            }
            messageResult(resultArray);
        }

        if (selectedOption == "Desencriptar") {
            console.log("work in progress...")
        }
    }
}
