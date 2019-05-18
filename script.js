

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
        let randomIndex = Math.floor(Math.random() * optionsArray.length);
        return optionsArray[randomIndex];
    }
    //call the function and pass in the answerOptions array, store it in a variable that we can access later called answer 
    // let answer = randomAnswerIndex(answerOptions);

    //when the user clicks the submit button, prevent it from refreshing the page (default action)
    $('.ask').on('click', function(event) {
        event.preventDefault();
        let userQuestion = $('input[type=text]').val();
        //if userQuestion has no input, do the following
        if (userQuestion === '') {
            //this is making the warning text show up 
            $('.warning').addClass('opacity');
        }
        //only want these things to happen if the text input isn't empty
        if (userQuestion !== '') {
            $('.resultContainer').removeClass('visuallyHidden');
            //make the warning hidden again 
            $('.warning').removeClass('opacity');
            console.log(userQuestion);
            //*a mentor helped me get to this(window.location)* 
            //window.location is referring to the location I am in on the page, the split part is turning the url of the location into an array and splitting off everything after the # so that #resultContainer won't repeat appending everytime the button is clicked
            const location = window.location.href.split('#')[0];
            //this is appending the #resultContainer id to the url of where we are so that it takes us there
            window.location = `${location}#resultContainer`;
            //store the random index as a variable
            let answer = randomAnswerIndex(answerOptions);
            //when the user clicks the button, make the random answer show up as an h2 element and repeat their question in a p tag
            $('.answerAppears').html(`<p>you asked: "${userQuestion}"</p> <h2 class='answerShown'>${answer}</h2>`);
            // this is hiding the answer so that it can fade in 
            $('.answerShown').hide().fadeIn(3500)
        }
        //add a class of shake-top to the image div so that it shakes when the button is clicked
        $('div.image').addClass('shake-top');
    });

    //when the user clicks the try again button,
    $('.try-again').on('click', function (event) {
        //preventing default action of this button
        event.preventDefault();
        //this removes the animation class when try again is clicked so that it can add it back when ask button is clicked again
        $('div.image').removeClass('shake-top');
        //change the value of the input to an empty string (bring it back to the placeholder)
        $('input[type="text"]').val('');
        //bringing the window location back up to header
        const location = window.location.href.split('#')[0];
        //this is appending the #resultContainer id to the url of where we are so that it takes us there
        window.location = `${location}#header`;
        $('.resultContainer').addClass('visuallyHidden');
    })  


})






