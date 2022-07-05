//variable 
var ask = document.querySelector('.ask'),
    manBody = Array.from(document.querySelectorAll('.draw > div')),
    letterContainer = document.querySelector('.alphabet'),
    result = document.querySelector('.result'),
    showFinalResult = document.querySelector('.showFinalResult');

//option
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    allLetters,
    trueAnswer,
    findLetter,
    letterPlace = [],
    indexOfMan = -1,
    allSpaceOfAnswer,
    winArr =[];

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

function Game () {

    startGame ();

    allLetters.forEach (letter => {

        letter.onclick = function () {

            unAble (letter);
            chick (letter); 
            worngCase ();
            trueCase (letter);
        }
    })
}

Game ();
function startGame () {

    questionInfo ();
    alphabetInfo ()
}

function questionInfo () {

    let allKeys = Object.keys(words);
    let randomKey = Math.floor(Math.random () * allKeys.length);
    let question = allKeys[randomKey];
    let allValues= words[question];
    let randomValue = Math.floor(Math.random() * allValues.length);
    trueAnswer = Array.from(words[question][randomValue]);

    ask.innerHTML = question;

    for (var i = 0; i < trueAnswer.length; i++) {

        if (trueAnswer[i] == " ") {

            let myspanAnswer = document.createElement('span');
            myspanAnswer.classList.add('space');
            result.appendChild(myspanAnswer);
        }
        else {

            let myspanAnswer = document.createElement('span');
            result.appendChild(myspanAnswer);
        }
    }
    allSpaceOfAnswer = Array.from(document.querySelectorAll('.result > span'));
}

function alphabetInfo () {

    for (var i = 0; i < alphabet.length; i++) {

        let mySpan = document.createElement('span'),
            myText = document.createTextNode(alphabet[i]);
        
        mySpan.appendChild(myText);
        letterContainer.appendChild(mySpan);
    }
    allLetters = Array.from (document.querySelectorAll('.alphabet > span'));
}

function unAble (letter) {

    letter.classList.add('clicked');
}

function chick (letter) {

    let myLtr = letter.textContent.toLowerCase();
    let newArr = [];
    let index = 0;
    findLetter = false;
    letterPlace = [];

    for (var i = 0; i < trueAnswer.length; i++) {

        newArr[i] = trueAnswer[i].toLowerCase();

        if (myLtr == newArr[i]) {

            letterPlace[index] = i;
            findLetter = true;
            index ++;
        }
    }
}

function worngCase () {

    if (!findLetter) {

        indexOfMan ++;
        manBody[indexOfMan].classList.add('show');
        lose ();
    }
}

function trueCase (ltr) {

    if (findLetter) {

        for (var i = 0; i < letterPlace.length; i++) {

            allSpaceOfAnswer[letterPlace[i]].textContent = ltr.textContent;
        }
    }
    win (ltr);
}

function lose () {

    if (indexOfMan == manBody.length - 1) {

        showFinalResult.classList.add('show');
        showFinalResult.children[0].textContent = 'You Are a Loser';
    }
}
function putInfoWinArr () {

    for (var i = 0; i < trueAnswer.length; i++) {

        winArr[i] = trueAnswer[i].toLowerCase();
        
    }
}
putInfoWinArr ();

function win (ltr) {

    let z = ltr.textContent.toLowerCase();
    
    for (var i = 0; i < winArr.length; i++) {

        if (z == winArr[i]) {

            winArr.splice(i, 1);
        }
        
    }
   
    if (winArr.length == 0) {

        showFinalResult.classList.add('show');
        showFinalResult.children[0].textContent = 'Congratulations, you win';
    }
}