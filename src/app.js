/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoPerson = Math.floor(Math.random() * who.length);
  let actionVerb = Math.floor(Math.random() * action.length);
  let whatPlace = Math.floor(Math.random() * what.length);
  let whenThing = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoPerson] +
    " " +
    action[actionVerb] +
    " " +
    what[whatPlace] +
    " " +
    when[whenThing];

  document.getElementById("excuse").innerHTML = excuse;
};
