function create_design(trial_n){
  stimArray = Array(trial_n).fill('different');//array van grootte aantal trials gevult met 'different'
  for (var i = 0; i < trial_n/3; i++) {stimArray[i] = 'same'}; //vervang er 10 met same
  //console.log(stimArray)
  var factors = {stimulus: stimArray}; // maak er een factor van stimulus different en stimulus same
  var design = jsPsych.randomization.factorial(factors, 1);// gooi ze random door elkaar
  console.log(factors)
  //console.log(design)
  for (var i = 0; i < design.length; i++) {// lengte van ntrials
    design[i].data = {}//waarom design.data?
    if ((design[i].stimulus == 'same')) {
      design[i].letter = 'same';
    }else {
      design[i].letter = 'diff';
    }

  };

  //for (i = 0; i < design.length; i++) {console.log(design[i].letter)};
    // set in appropriate order (i.e., max 3 'same' in a row)
  var ind = Array(trial_n)// array van ntrials lnag
  for (i = 0; i < stimArray.length; i++) { // voor ntrials lang
    if (design[i].letter == 'same') {stimArray[i] = 1}// is letter same dan stimArray[1] vervangen door 1?
      else {stimArray[i] = 0};
    ind[i] = i // vul ind met trial nummer?
  };

  function count_seqOnes(arr){ // dit is een functie die enen telt
    var n = nmax = 0;
    for (i = 0; i < arr.length; i++) {// lengte is afhankelijk input
      if (arr[i] == 1) {n += 1; if (n > nmax){nmax = n}} //+= betekend n=n+1 Zoekt het grootste aantal opeenvolgende enen
      else {n = 0};
    }
    return(nmax) // geef het grootste aantal enen
  };

  var nmax = count_seqOnes(stimArray);
  while(nmax >= 4){ // is het grootste aantal enen hoger dan 4
    tmp = stimArray.slice();// laad de array in nieuwe vraiabele
    console.log(stimArray.reduce((a, b) => a + b, 0))
    ind = jsPsych.randomization.shuffle(ind);//shuffle trials
    for (i = 0; i < stimArray.length; i++) {stimArray[i] = tmp[ind[i]]}//selecteer uit nieuwe variabele en store in array
    var nmax = count_seqOnes(stimArray);// opniew checken voor max aantal enen
  }; tmp = design.slice();// waarom stop desing in tmp?



  for (i = 0; i < design.length; i++) {design[i] = tmp[ind[i]]};// laatste goede volgorde in design
  //for (i = 0; i < design.length; i++) {console.log(design[i].letter)};  //print letter
  //console.log(nmax,"\n");//print nmax
  console.log(design)
  return(design)

};

function create_design_mult(trials,blocks){
  var design1=[];
  for (var i = 0; i < blocks; i++) {
    design = create_design(trials);
    design1=design1.concat(design)
    //console.log(design1)

  }

  return(design1)
}
