var bisbas_preamble = "Now you will read 20 statements that people may normally either agree with or disagree with .<br>"+
                    "For each statement, indicate how much you agree or disagree with what the statement says by choosing one of the four response options. There are not correct or wrong answers: please be as accurate and honest as you can be.<br><br>"

var bisbas_options = ['Very true for me', 'Somewhat true for me', 'Somewhat false for me','Very false for me']

var bisbas_questions = [
  {prompt: "Even if something bad is about to happen to me, I rarely experience fear or nervousness.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I go out of my way to get things I want.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "When I'm doing well at something I love to keep at it.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I'm always willing to try something new if I think it will be fun.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "When I get something I want, I feel excited and energized.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "Criticism or scolding hurts me quite a bit.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "When I want something I usually go all-out to get it.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I will often do things for no other reason than that they might be fun.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "If I see a chance to get something I want I move on it right away.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I feel pretty worried or upset when I think or know somebody is angry at me.", options: bisbas_options, required: true, horizontal: false},

  {prompt: "When I see an opportunity for something I like I get excited right away.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I often act on the spur of the moment.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "If I think something unpleasant is going to happen I usually get pretty 'worked up'.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "When good things happen to me, it affects me strongly.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I feel worried when I think I have done poorly at something important.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I crave excitement and new sensations.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "When I go after something I use a 'no holds barred' approach.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I have very few fears compared to my friends.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "It would excite me to win a contest.", options: bisbas_options, required: true, horizontal: false},
  {prompt: "I worry about making mistakes.", options: bisbas_options, required: true, horizontal: false},

]

var nfc_preamble = "Now you will read 18 statements that can be more or less characteristic of you or of what you believe.<br>"+
                    "Rate each statement by choosing one of the five response options. There are not correct or wrong answers: please be as accurate and honest as you can be.<br><br>"

var nfc_options = ['Extremely uncharacteristic of me', 'Somewhat uncharacteristic of me', 'Uncertain', 'Somewhat characteristic of me', 'Extremely characteristic of me']

var nfc_questions = [
  {prompt: "I prefer complex to simple problems.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I like to have the responsibility of handling a situation that requires a lot of thinking.", options: nfc_options, required: true, horizontal: false},
  {prompt: "Thinking is not my idea of fun.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I try to anticipate and avoid situations where there is a likely chance I will have to think in depth about something.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I find satisfaction in deliberating hard and for long hours.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I only think as hard as I have to.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I prefer to think about small daily projects to long term ones.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I like tasks that require little thought once I have learned them.", options: nfc_options, required: true, horizontal: false},

  {prompt: "The idea of relying on thought to make my way to the top appeals to me.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I really enjoy a task that involves coming up with new solutions to problems.", options: nfc_options, required: true, horizontal: false},
  {prompt: "Learning new ways to think does not excite me very much.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I prefer my life to be filled with puzzles I must solve.", options: nfc_options, required: true, horizontal: false},
  {prompt: "The notion of thinking abstractly is appealing to me.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I feel relief rather than satisfaction after completing a task that requires a lot of mental effort.", options: nfc_options, required: true, horizontal: false},
  {prompt: "It is enough for me that something gets the job done; I do not care how or why it works.", options: nfc_options, required: true, horizontal: false},
  {prompt: "I usually end up deliberating about issues even when they do not affect me personally.", options: nfc_options, required: true, horizontal: false},
]

var asrs5_preamble = "Finally, here are 6 questions about your concentration.<br>"+
                    "Rate each statement by choosing the option that corresponds best to how you have felt over the past 6 months.<br><br>"

var asrs5_options = ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']

var asrs5_questions = [
  {prompt: "How often do you have difficulty concentrating on what people are saying to you even when they are speaking to you directly?",
   options: asrs5_options, required: true, horizontal: false},
  {prompt: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
   options: asrs5_options, required: true, horizontal: false},
  {prompt: "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
   options: asrs5_options, required: true, horizontal: false},
  {prompt: "When you are in a conversation, how often do you find yourself finishing the sentences of the people you are talking to before they can finish them themselves?",
   options: asrs5_options, required: true, horizontal: false},
  {prompt: "How often do you put things off until the last minute?",
   options: asrs5_options, required: true, horizontal: false},
  {prompt: "How often do you depend on others to keep your life in order and attend to details?",
   options: asrs5_options, required: true, horizontal: false}
 ]