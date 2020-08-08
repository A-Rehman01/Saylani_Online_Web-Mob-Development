// import {name} from 'app2.js';
var question_list = [
    {
        question: 'Who was the first batsman to score 10,000 runs in Test cricket?',
        answer: 'Sunil Gavaskar',
        options: [
            'Sunil Gavaskar',
            'Aaron Finch',
            'Sachin Tandulker',
            'Inzamam-ul-Haq'
        ]
    },
    {
        question: 'Which cricketer, with the nickname "punter", is the only player in the history of Test cricket to be a part of 100 Test match wins?',
        answer: 'Ricky Ponting',
        options: [
            'Ben Stokes',
            'Sachin Tendulkar',
            'Shaun Pollock',
            'Ricky Ponting'
        ]
    },
    {
        question: 'Which New Zealand cricketer was named Wisden Leading Cricketer in the World for 2015?',
        answer: 'Kane Williamson',
        options: [
            'Kane Williamson',
            'Martin Guptill',
            'Ross Tailor',
            'Trent Boult'
        ]
    },
    {
        question: 'Runnerup Team of 2019?',
        answer: 'Newsland',
        options: [
            'Newsland',
            'England',
            'Pakistan',
            'India'
        ]
    },
    {
        question: 'Which Bowler we missed in this Century?',
        answer: 'M Asif',
        options: [
            'M Asif',
            'Saeed Ajmal',
            'M Amir',
            'Sohail Tanveer'
        ]
    },
]
var no_Of_correct = 0;
var counter = 0;
function next() {
    if (!select()) {
        console.log(select())
        return
    }
    score(counter);
    counter++;
    if (counter === question_list.length) {

        showresult()
        return;
    }
    show(counter)

}
function show(e) {
    Update(e)
    emptyoption()
    //question
    var quest = document.querySelector('#quest');
    quest.innerHTML = question_list[e].question;

    //option
    var row = document.querySelector('#row');
    for (var i = 0; i < question_list[e].options.length; i++) {
        var div = document.createElement('option')
        div.setAttribute('class', 'col-lg-5 col-sm-12 option')
        div.setAttribute('onclick', 'checked(this)')
        var value = document.createTextNode(question_list[e].options[i]);
        div.appendChild(value);
        row.appendChild(div);

    }

}
function emptyoption() {
    var row = document.querySelector('#row');
    row.innerHTML = '';
}

function Update(e) {
    var total = document.getElementById('total');
    total.innerHTML = "Total Question : " + question_list.length + "<br>" + " Remaining Question : " + (question_list.length - e);
}

function select() {
    var check = 0;
    var row = document.querySelector('#row');
    var num = row.childElementCount;
    for (var i = 0; i < num; i++) {
        if (row.childNodes[i].classList.contains('active')) {
            check = 1
            return true;
        }
    }

    if (check === 0) {
        return false
    }

}

function checked(e) {
    removeactive(e);
    e.classList.add('active')
    console.log(e)
}

function removeactive(e) {
    var parent = e.parentNode
    var num = e.parentNode.childElementCount
    for (var i = 0; i < num; i++) {
        parent.childNodes[i].classList.remove('active');
    }
}
function score(question_num) {
    var row = document.querySelector('#row');
    console.log(question_num)
    var user = '';

    // console.log(e.textContent)
    var num = row.childElementCount;
    for (var i = 0; i < num; i++) {
        if (row.childNodes[i].classList.contains('active')) {
            user = row.childNodes[i].textContent;
            console.log(user)
        }
    }
    if (user == question_list[question_num].answer) {
        no_Of_correct++;
    }

}
function showresult() {

    
    var Maindiv = document.createElement('div')

    // var name = document.createElement('div')
    var div1 = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var div4 = document.createElement('div')
    var img = document.createElement('img')
    var btn = document.createElement('button')
    var href = document.createElement('a');

    href.href = 'index.html';

    // name.setAttribute('class', 'result')
    div1.setAttribute('class', 'result')
    div2.setAttribute('class', 'result')
    div3.setAttribute('class', 'result')
    div4.setAttribute('class', 'result')
    btn.setAttribute('class', 'home')
    img.setAttribute('class', 'Quizimg')

    // var Uname = document.createTextNode('AR');
    
    // name.appendChild(Uname);

    var text = document.createTextNode("No of Question: " + question_list.length)
    div1.appendChild(text);

    var text = document.createTextNode("No of Correct answer: " + no_Of_correct)
    div2.appendChild(text);

    var percentage = document.createTextNode('Percentage: ' + (no_Of_correct / question_list.length) * 100 + "%")
    div3.appendChild(percentage);

    var per = (no_Of_correct / question_list.length) * 100

    if ((+per) >= 60) {
        var grade = document.createTextNode('Grade: Pass')
    }
    else {
        var grade = document.createTextNode('Grade: fail')
    }
    div4.appendChild(grade)

    img.src = 'https://www.weeklyquiz.co.uk/wp-content/uploads/2017/11/GK-Quiz-June-2015.jpg';
    img.alt = 'Quiz Image';

    href.appendChild(btn)
    var textbtn = document.createTextNode('Restart')
    btn.appendChild(textbtn);

    Maindiv.appendChild(img);
    // Maindiv.appendChild(name);
    Maindiv.appendChild(div1);
    Maindiv.appendChild(div2);
    Maindiv.appendChild(div3);
    Maindiv.appendChild(div4);
    Maindiv.appendChild(href);
    var afterbody = document.getElementById('afterbody');
    var beforebody = document.getElementById('beforebody');
    beforebody.innerHTML = ''
    afterbody.append(Maindiv);
    console.log(href)
    clearInterval(interval);
    
}

//Timer
var min_Dom = document.getElementById('min');
var sec_Dom = document.getElementById('sec');
var min = 1;
var sec = 59;
var interval;
interval = setInterval((() => {
    sec--;
    sec_Dom.innerHTML = sec;
    if (sec === 0) {
        min--;
        min_Dom.innerHTML = min;
        sec = 59
        sec_Dom.innerHTML = sec;
        if (min === -1) {
            min=0;
            min_Dom.innerHTML = min;
            sec = 0
            sec_Dom.innerHTML = sec;
            stop();
        }
    }
}), 1000)

function stop() {
        clearInterval(interval);
        showresult()
    
}
