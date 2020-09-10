var redirect_onCompletion = true;
var redirect_link = 'https://app.prolific.co/submissions/complete?cc=28A9F90D'
// Informed consent
var inf_consent = {
  type: 'image-keyboard-response',
  stimulus: 'img/ic.png',
  response_ends_trial: true,
  choices: ['space']
};

var prolific = {
  type: 'survey-text',
  questions: [
    {prompt: "Please turn off music, cell phone and other devices that might be distracting. Enter your prolific ID below: ", required: true}
  ],
  on_finish: function(data) {

    var responses = JSON.parse(data.responses);

    var code = responses.Q0;

    jsPsych.data.addProperties({

      participantID: code

    });
  }
};


var fatigue ={
  type: 'html-slider-response',
  stimulus: '<p>How mentally fatigued do you feel?</p>',
  slider_width: 400,
  labels: ['0% fatigued', '100% fatigued'],
  prompt: "<p>Please respond within 20 seconds</p>",
  require_movement: true,
  trial_duration: 20000,
};
var effort ={
  type: 'html-slider-response',
  stimulus: '<p>How much effort did it take to keep paying attention to the task?</p>',
  slider_width: 400,
  labels: ['0% effort', '100% effort'],
  prompt: "<p>Please respond within 20 seconds</p>",
  require_movement: true,
  trial_duration: 20000,
};
var difficult ={
  type: 'html-slider-response',
  stimulus: '<p>How difficult did you consider the previous task?</p>',
  slider_width: 400,
  labels: ['0% difficult', '100% difficult'],
  prompt: "<p>Please respond within 20 seconds</p>",
  require_movement: true,
  trial_duration: 20000,
};
var boredom ={
  type: 'html-slider-response',
  stimulus: '<p>How bored did you feel during the task?</p>',
  slider_width: 400,
  labels: ['0% bored', '100% bored'],
  prompt: "<p>Please respond within 20 seconds</p>",
  require_movement: true,
  trial_duration: 20000,
};

var mind_wandering ={
  type: 'html-slider-response',
  stimulus: '<p>How often did your mind wander during the task?</p>',
  slider_width: 400,
  labels: ['0% of the time', '100% of the time'],
  prompt: "<p>Please respond within 20 seconds</p>",
  require_movement: true,
  trial_duration: 20000,
};

var fullscreen_off = {
  type: 'fullscreen',
  fullscreen_mode: false,
  message: "This is the end of the experiment",
  button_label: "Exit the experiment"
};

//--------------------------------------------------------------------------------------------------------------------------------------------
/* Instructions */
//practice
var instructions_n_back = {
  type: 'image-keyboard-response',
  stimulus: 'img/inst_lett.jpg',
  response_ends_trial: true,
  choices: ['enter'],
  post_trial_gap:1000
};
var instructions_2_back = {
  type: 'image-keyboard-response',
  stimulus: 'img/inst_lett2.jpg',
  response_ends_trial: true,
  choices: ['enter'],
  post_trial_gap:1000
};
var instructions_numbers = {
  type: 'image-keyboard-response',
  stimulus:function(){
    if(key_LR == 'left'){
      return 'img/inst_num_LE.jpg'
    }else {
      return 'img/inst_num_RE.jpg'
    }
  },
  response_ends_trial: true,
  choices: ['enter'],
  post_trial_gap:1000
}

var intro_TloadDback = {
  type: 'image-keyboard-response',
  stimulus: 'img/inst_tl.jpg',
  response_ends_trial: true,
  choices: ['enter']
};
var intro_TloadDback2 = {
  type: 'image-keyboard-response',
  stimulus: 'img/inst_tl2.jpg',
  response_ends_trial: true,
  choices: ['enter']
};

var instructions_TloadDback = {
  type: 'image-keyboard-response',
  stimulus: 'img/inst_tl_pr1.jpg',
  response_ends_trial: true,
  choices: ['enter']
};

var instructions_TloadDback2 = {
  type: 'image-keyboard-response',
  stimulus:function(){
    if(key_LR == 'left'){
      return 'img/inst_tl_pr2_LE.jpg'
    }else {
      return 'img/inst_tl_pr2_RE.jpg'
    }
  },
  response_ends_trial: true,
  choices: ['enter'],
  post_trial_gap:1000
}
var instructions2_TloadDback2 = {
  type: 'image-keyboard-response',
  stimulus:function(){
    if(key_LR == 'left'){
      return 'img/inst_tl2_pr2_LE.jpg'
    }else {
      return 'img/inst_tl2_pr2_RE.jpg'
    }
  },
  response_ends_trial: true,
  choices: ['enter'],
  post_trial_gap:1000
}
/* Instruction Variables experimental */
var instructions = {
  type: 'image-keyboard-response',
  stimulus: 'img/inst.jpg',
  response_ends_trial: true,
  choices: ['enter'],
  trial_duration:20000,
  on_finish: function(){
    block_nr=1;
    trial_ind=0;
  }
};
var instructions_2 = {
  type: "image-keyboard-response",
  stimulus:function(){
    if(key_LR == 'left'){
      return 'img/inst_LE.jpg'
    }else {
      return 'img/inst_RE.jpg'
    }
  },
  choices: ['enter'],
  trial_duration:20000,
  post_trial_gap:1000,
  on_finish: function(){
    block_nr=1;
    trial_ind=0;
  }
}
var instructions_easy_2 = {
  type: "image-keyboard-response",
  stimulus:function(){
    if(key_LR == 'left'){
      return 'img/inst_easy_LE.jpg'
    }else {
      return 'img/inst_easy_RE.jpg'
    }
  },
  choices: ['enter'],
  trial_duration:20000,
  post_trial_gap:1000,
  on_finish: function(){
    block_nr=1;
    trial_ind=0;
  }
}
var break_screen = {// this one has a countdown
  type: "html-keyboard-response",
  trial_duration: 60000,
  choices:jsPsych.NO_KEYS,
  stimulus: function(){
    var count=(60000/1000);
    var counter;
    clearInterval(counter);
    counter=setInterval(timer, 1000); //1000 will run it every 1 second
    function timer(){
      count=count-1;
      if (count <= 0){
          clearInterval(counter);
      }
      document.getElementById("timer").innerHTML = count ;
    }
    var break_text = next_block_msg
    return [
      break_text
    ]
  }
}


//--------------------------
