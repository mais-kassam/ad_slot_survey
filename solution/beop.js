var beopPermutive = function(questiondata){
      window.permutive.track('BeopAnswer', {
        "question": questiondata.question_text,
        "answer": questiondata.choices[0]
    })
}