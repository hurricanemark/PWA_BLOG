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
      title: "Progressive Web Application",
      avatar: "images/coffee4.png",
		intro: "A full-stack, step-by-step development project: An Embedded Javascript (EJS) Progressive Web App using NodeJS-Express scaffolding to call weather API providers for weather reports.",
		ref: "https://hurricanemark.github.io/Weather_Report_NodeJS_EJS_Express_WeatherBit_API/",
    },
    {
      id: "6",
		title: "ASP.NET Core MVC WebApp",
      avatar: "images/coffee4.png",
		intro: "Project: Secrets Keeper -- a full-stack MVS web application in C#HTML (Razor) in the Microsoft Visual Studio 2020 IDE Community Edition and .NET 6.",
		ref: "https://hurricanemark.github.io/SecretsKeeper/",
    },
    {
      id: "7",
		title: "Scaffolding Your dev/test environment -- How Developers Done It ",
      avatar: "images/coffee4.png",
		intro: "Test-driven software solutions with chart-js client app uses datapoints from silmulated backend json-server.",
		ref: "https://hurricanemark.github.io/json-server/",
    },    {
      id: "8",
		title: "Text-to-Speech App",
      avatar: "images/coffee4.png",
		intro: "A small but fun piece of code: Transpose input text into computer synthesized speech. ",
		ref: "https://hurricanemark.github.io/text-transpose-speech/",
    },    {
      id: "9",
      title: "Tracking & Promoting Team talents",
      avatar: "images/coffee4.png",
		intro: "Full stack web application: ReactJS frontend + Django Python Backend + SQLite3 Database. This web application is an internal business tool that can be used by business management personel to plan, build, and track their work force.",
		ref: "https://hurricanemark.github.io/BusinessPersonelChronicler/",
    },
    {
      id: "10",
      title: "Node.JS Express Passport.js Template",
      avatar: "images/coffee4.png",
		intro: "Front-end working project implementing PassportJS with ExpressJS.",
		ref: " https://hurricanemark.github.io/NodeJS-Passport-Login/",
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