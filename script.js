

//Creating an array of all the potential answers, storing it in a variable called answerOptions
const answerOptions = [
    "ask again later",
    "that's classified information",
    "I don't even know",
    "try me again",
    "you'll find out",
    "probs not",
    "nah",
    "def not",
    "my sources say no",
    "nope",
    "I'm thinking yes",
    "yup",
    "all signs point to YES",
    "I think so",
    "you can count on it!",
    "absofruitly",
    "without a doubt",
    "100%",
    "fo sho",
    "yassss"
]

//doc ready function
$(function(){
  
    //creating a function that produces a random index from an array, the argument we pass into the function has to be an array
    function randomAnswerIndex(optionsArray) {
        const randomIndex = Math.floor(Math.random() * optionsArray.length);
        return optionsArray[randomIndex];
    }
    //call the function and pass in the answerOptions array, store it in a variable that we can access later called answer 
   const answer = randomAnswerIndex(answerOptions);

    //when the user clicks the submit button, prevent it from refreshing the page (default action)
    $('button[type=submit]').on('click', function(event) {
        event.preventDefault();
        let userQuestion = $('input[type=text]').val();
        console.log(userQuestion);
        //when the user clicks the button, make the random answer show up as an h2 element
        $('.answerAppears').html(`<p>You asked: "${userQuestion}"</p> <h2>${answer}</h2>`)


    })

})






