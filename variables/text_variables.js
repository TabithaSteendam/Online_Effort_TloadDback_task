var welcome = [
  '<p> <span style="font-size:30px; font-weight: bold;">Welcome to the expermiment </span></p>'+ '<br>'+
  '<p> In this experiment, you will be asked to memorize letters and classify numers.</p>'
];
var welcome2 = [
  '<p> The experiment consists of a practice and a testing part.</p> '+'<br>'+
  '<p> In the practice part you will practice a memorization and classification tasks seperately as well as combined,</p>'+
  '<p> You will receive feedback on each task and can practice the tasks multiple times if you want</p>'+'<br>'+
  '<p> The testing phase consists of the 2 combined variations of the practiced memorization and classification tasks. </p>'+
  '<p> There will be a short break between the 2 tasks</p>'+
  '<p> You will not receive feedback about your performance on the task during the testing phase</p>'
];
// instructions page 1
var page1 = [
  '<p> The practice part of the experiment has ended.</p>'+'<br>'+
  '<p> In the next part, we ask you to perform two of the tasks you practiced before</p>'+
  '<p> For one variant, you have to indicate: 1) whether a digit is odd or even and 2) whether the current letter has appeared just before.</p>'+
  '<p> For the other  variant, you have to indicate: 1) whether a digit is odd or even and 2) whether the current letter has appeared 2 letters before.</p>'+
  '<p> There will be short a break between the two experiment variants </p>'
];
var page1_1 = [
  '<p> The experiment will no longer be self pased from now on.</p>'+
  '<p> Therefore, make sure you will not have to leave your screen for the next 40 minutes. </p>'+'<br>'+
  '<p> You will not be able to go back to the previous screen while reading instructions.</p>'+
  '<p> Read the instructions carefully.</p>'
  ];

var numbers = '123456789'.split('');

next_block_msg =["<p>You can take a short break. </p>"+
 "<p>Please stay seated in front of the screen and do not close the full screen</p>"+
 "<p>The next block starts in <span id='timer'>60</span> seconds </p>"];

 var end_message = "<p>Thank you for your participation.</p>" +
  "<p>Press space to finalize the experiment.</p>"
// trial by trial feedback messages
