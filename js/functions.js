const answers = ['blue','green','red','black','grey','yellow','purple''white' ,'orange','cyan']
const questions = ['id1','id2','id3','id4','id5','id6','id7','id8','id9','id10']
const input=[""]
const userAnswer=questions.concat(input)
const correctAnswers=questions.concat(answers)
const score = [0]


function grading(userAnswer,correctAnswers)
if(userAnswer==correctAnswers)
{console.log("CORRECT");
    score.push(score+1);
    this.style.backgroundColor='green'
} else {console.log("INCORRECT");
this.style.backgroundColor = 'red'}





