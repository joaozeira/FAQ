/* função voltar para tela inicial */
function back(){
    var back = document.getElementById('questions');
    var clean = document.getElementById('answers');
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3');
    var c4 = document.getElementById('c4');
    back.style.display = 'block';
    clean.style.display = 'none';
    c1.style.display = 'none';
    c2.style.display = 'none';
    c3.style.display = 'none';
    c4.style.display = 'none';

}

/* duvidas */

function duvida1(){
    var back = document.getElementById('questions');
    var clean = document.getElementById('answers');
    var c1 = document.getElementById('c1');
    back.style.display = 'none';
    clean.style.display = 'block';    
    c1.style.display = 'block';
}

function duvida2(){
    var back = document.getElementById('questions');
    var clean = document.getElementById('answers');
    var c2 = document.getElementById('c2');
    back.style.display = 'none';
    clean.style.display = 'block';    
    c2.style.display = 'block';
}

function duvida3(){
    var back = document.getElementById('questions');
    var clean = document.getElementById('answers');
    var c3 = document.getElementById('c3');
    back.style.display = 'none';
    clean.style.display = 'block';    
    c3.style.display = 'block';
}

function duvida4(){
    var back = document.getElementById('questions');
    var clean = document.getElementById('answers');
    var c4 = document.getElementById('c4');
    back.style.display = 'none';
    clean.style.display = 'block';    
    c4.style.display = 'block';
}

/* perfil */

/* function profile(){
    var show = document.getElementById('answers');
    var profile = document.getElementById("profile");
    show.style.display = 'none';    
    profile.style.display = 'block';
} */
    
/* link open chat*/

function open_chat(){
    var link = document.getElementById('open-link');
    var back = document.getElementById('questions');
    back.style.display = 'block';
    link.style.display = 'none';
}

function close_chat(){
    var link = document.getElementById('open-link');
    var back = document.getElementById('questions');
    back.style.display = 'none';
    link.style.display = 'block';
}

function showNotification(){
   var showNotification = document.getElementById('showNotification');
   showNotification.style.opacity = '1';
}

function lastCards(){    
    var question = document.getElementById('questions');
    var contact = document.getElementById('contact');
    question.style.display = 'none';
    contact.style.display = 'block';
}

function closeLastcard(){
    var question = document.getElementById('questions');
    var contact = document.getElementById('contact');
    question.style.display = 'block';
    contact.style.display = 'none';
}