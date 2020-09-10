
// PRACTICE VARIABLES
var n_back_practice_set = ['Z','X','C','V','B','N','A','T','R'];/*to pick letters from*/
var sequence = []; /*to store letters in*/
var safe_number_sequence = [];/*to store numbers in*/
var how_many_back = 1;//store n-back
var how_many_back2 = 2;//
var trials_per_practiceblock_number = 25;
var trials_per_practiceblock_letter = 24;
var trials_per_practiceblock = 30;
/* Experiment Variables */
var n_back_set = ['Z','X','C','V','B','N','A','T','R'];
var n_back_set_easy = ['Z','X','C','V','B','N','A','T','R']; /* This one lacks the X */
var full_sequence = [];
var full_number_sequence = [];
var trials_per_block = 30;
var number_of_blocks = 8;
var easy_hard = ['easy','hard'];/* to determine the order of easy and heard */
var difficulty = jsPsych.randomization.sampleWithoutReplacement(easy_hard, 1)[0];/* shuffle to randomize */
var key = ['left','right'];// for randomizing pressing lefto or right button number task
var key_LR = jsPsych.randomization.sampleWithoutReplacement(key, 1)[0];/* shuffle to randomize */
var block_nr =1;// to keep track of blocks
var trial_ind = 0;//to keep track of trials
var nieuw = trials_per_block*2
