
function open_chat() {
    var openLink = document.getElementById("open-link");
    var questions = document.getElementById("questions");
    var notification = document.getElementById("showNotification");
    questions.style.display = "block";
    questions.style.transition ="display 2s"
    openLink.style.display = "none";
    notification.style.display = "none";
}


function close_chat() {
    var openLink = document.getElementById("open-link");
    var questions = document.getElementById("questions");
    var notification = document.getElementById("showNotification");

    questions.style.display = "none";
    openLink.style.display = "block";
    notification.style.display = "none";
}

function back() {
    var questions = document.getElementById("questions");
    var answers = document.getElementById("answers");
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");

    questions.style.display = "block";
    answers.style.display = "none";
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
}

function showNotification() {
    var showNotification = document.getElementById("showNotification");
    showNotification.style.opacity = "1";
}


function openLastCards() {
    const question = document.getElementById('questions');
    const contact = document.getElementById('contact');
    contact.style.display = "block";
    question.style.display = 'none';
}

function closeLastcard() {
    var question = document.getElementById("questions");
    var contact = document.getElementById("contact");
    contact.style.display = "none";
    question.style.display = "block";
}



/* duvidas */
function duvida1() {
    var questions = document.getElementById("questions");
    var answers = document.getElementById("answers");
    var c1 = document.getElementById("c1");

    questions.style.display = "none";
    answers.style.display = "block";
    c1.style.display = "block";
}

function duvida2() {
    var questions = document.getElementById("questions");
    var answers = document.getElementById("answers");
    var c2 = document.getElementById("c2");

    questions.style.display = "none";
    answers.style.display = "block";
    c2.style.display = "block";
}

function duvida3() {
    var questions = document.getElementById("questions");
    var answers = document.getElementById("answers");
    var c3 = document.getElementById("c3");

    questions.style.display = "none";
    answers.style.display = "block";
    c3.style.display = "block";
}

function duvida4() {
    var questions = document.getElementById("questions");
    var answers = document.getElementById("answers");
    var c4 = document.getElementById("c4");

    questions.style.display = "none";
    answers.style.display = "block";
    c4.style.display = "block";
}




