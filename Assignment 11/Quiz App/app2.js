// import {data} from './app';

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
var Time = 3
var info = document.getElementById('info');
info.innerHTML = "Total Number of Question :" + question_list.length + "<br>" + "Total Time :" + Time + "min";
