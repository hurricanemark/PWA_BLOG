let blogs = [
    {
      id: "1",
      title: "SHA-1 Password Cracker",
      avatar: "images/coffee1.png",
      intro: "hashlib.sha1 and hashlib.md5 are inherently weak. In fact, hackers have compiled several lists of frequently guessed passwords called the Rainbow Tables. One can convert each of these passwords into hash.sha1 and use it to compare with the hash objects stored in password database. Often with surprisingly high match rate.",
      ref: "https://hurricanemark.github.io/SHA-1-Password-Cracker/",
    },
    {
      id: "2",
      title: "Server side Pagination",
      avatar: "images/coffee2.png",
      intro: "Given a structured data source, create a middleware function generalized enough to call on with various data models and returning a diced and sliced data layout with { previous, next, results } of whole of subset of the passed-in data object along with additional calculated statistics such as average, total, median, etc.",
      ref: "https://hurricanemark.github.io/Pagination/",
    },
    {
      id: "3",
      title: "Relational Database Certification",
      avatar: "images/coffee3.png",
      intro: "A relational database organizes data into tables that are linked together through relationships. In this 165-lesson course, you will learn the basics of a relational database by creating a PostgreSQL database filled with video game characters.  You must go through this exercise with the intend to learn. This is the foundation refresher lesson.",
      ref: "https://hurricanemark.github.io/relational_database/",
    },
    {
      id: "4",
      title: "Solutions for Daily Coding Challenge",
      avatar: "images/coffee4.png",
      intro: "Test-driven software solutions to the daily coding challenge recieved in my mail box. Apparently, these are interview questions. New addition is usually pushed as file denoted 'codechallenge-###.py' , where ### is the sequential digits. Each file should contain a date, the original problem description in the comment section, and my attempted solution below it.",
      ref: "https://hurricanemark.github.io/DailyCodingChallenge/",
    },
    {
      id: "5",
      title: "Future article 1",
      avatar: "images/coffee4.png",
      intro: "Test-driven software solutions to the daily coding challenge recieved in my mail box. Apparently, these are interview questions. New addition is usually pushed as file denoted 'codechallenge-###.py' , where ### is the sequential digits. Each file should contain a date, the original problem description in the comment section, and my attempted solution below it.",
      ref: "https://hurricanemark.github.io/DailyCodingChallenge/",
    },
    {
      id: "6",
      title: "Future article 2",
      avatar: "images/coffee4.png",
      intro: "Test-driven software solutions to the daily coding challenge recieved in my mail box. Apparently, these are interview questions. New addition is usually pushed as file denoted 'codechallenge-###.py' , where ### is the sequential digits. Each file should contain a date, the original problem description in the comment section, and my attempted solution below it.",
      ref: "https://hurricanemark.github.io/DailyCodingChallenge/",
    },
    {
      id: "7",
      title: "Future article 3",
      avatar: "images/coffee4.png",
      intro: "Test-driven software solutions to the daily coding challenge recieved in my mail box. Apparently, these are interview questions. New addition is usually pushed as file denoted 'codechallenge-###.py' , where ### is the sequential digits. Each file should contain a date, the original problem description in the comment section, and my attempted solution below it.",
      ref: "https://hurricanemark.github.io/DailyCodingChallenge/",
    },    {
      id: "8",
      title: "Future article 4",
      avatar: "images/coffee4.png",
      intro: "Test-driven software solutions to the daily coding challenge recieved in my mail box. Apparently, these are interview questions. New addition is usually pushed as file denoted 'codechallenge-###.py' , where ### is the sequential digits. Each file should contain a date, the original problem description in the comment section, and my attempted solution below it.",
      ref: "https://hurricanemark.github.io/DailyCodingChallenge/",
    },    {
      id: "9",
      title: "Future article 5",
      avatar: "images/coffee4.png",
      intro: "Test-driven software solutions to the daily coding challenge recieved in my mail box. Apparently, these are interview questions. New addition is usually pushed as file denoted 'codechallenge-###.py' , where ### is the sequential digits. Each file should contain a date, the original problem description in the comment section, and my attempted solution below it.",
      ref: "https://hurricanemark.github.io/DailyCodingChallenge/",
    },
    {
      id: "10",
      title: "Future article 6",
      avatar: "images/coffee4.png",
      intro: "Test-driven software solutions to the daily coding challenge recieved in my mail box. Apparently, these are interview questions. New addition is usually pushed as file denoted 'codechallenge-###.py' , where ### is the sequential digits. Each file should contain a date, the original problem description in the comment section, and my attempted solution below it.",
      ref: "https://hurricanemark.github.io/DailyCodingChallenge/",
    },    
    ];

  let users = [{
    "username": "john",
    "firstName": "John",
    "lastName": "Doe",
    "gender": "Male",
    "profileURL": "img/male.png",
    "email": "john.doe@example.com"
},
{
    "username": "jane",
    "firstName": "Jane",
    "lastName": "Doe",
    "gender": "Female",
    "profileURL": "img/female.png",
    "email": "jane.doe@example.com"
}
];
  
 module.exports = { blogs, users };