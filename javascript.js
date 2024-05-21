function faqRectangles(FAQ) {
    const questions = document.querySelector('#questions');
    
    let answerDiv;

    for(let i = 0; i < FAQ.length; i++) {
        const rectangle = document.createElement('div');
        let rectangleName = `rectangle${i + 1}`;
        rectangle.setAttribute('id', rectangleName);
        questions.appendChild(rectangle);

        //get the question and answer you want to showcase
        let questionAndAnswer = FAQ[i];
        const theRectangleToAppendTo = document.querySelector(`#rectangle${i+1}`);

        //the arrow button and the question are in the same div
        const buttonAndQuestionDiv = document.createElement('div');
        buttonAndQuestionDiv.setAttribute('id', 'buttonAndQuestionDiv');
        theRectangleToAppendTo.appendChild(buttonAndQuestionDiv);

        //the arrow button creation
        const arrowButton = document.createElement('button');

        if(i == 0) {
            arrowButton.innerHTML = "&#9662";
        } else {
            arrowButton.innerHTML = "&#9656";
        }
        
        //let buttonId = `button${i + 1}`;
        arrowButton.setAttribute('id', 'arrowButton');
        buttonAndQuestionDiv.appendChild(arrowButton);

        //the question creation
        const questionDiv = document.createElement('div');
        let questionId = `question`;
        questionDiv.innerHTML = questionAndAnswer.question;
        questionDiv.setAttribute('id', questionId);
        buttonAndQuestionDiv.appendChild(questionDiv);

        //the answer creation, the answer is another div it is a sibling to buttonAndQuestionDiv
        answerDiv = document.createElement('div');
        let answerId = `answer${i + 1}`;
        answerDiv.innerHTML = questionAndAnswer.answer;

        if(i != 0) {
            answerDiv.style.display = "none";
        }

        answerDiv.setAttribute('id', answerId);
        theRectangleToAppendTo.appendChild(answerDiv);
    }

    const buttons = document.querySelectorAll('#arrowButton');

    for (const button of buttons) {
        button.addEventListener("click", (event) => {
            const currentContent = button.textContent.trim().charCodeAt(0);
        
            if (currentContent === 9656) {  //answer is hidden now we make it display
                button.textContent = String.fromCharCode(9662);

                button.parentElement.nextSibling.style.display = "block";
            } else if (currentContent === 9662) { //answer is open now we make it hidden
                button.textContent = String.fromCharCode(9656);

                button.parentElement.nextSibling.style.display = "none";
            }
        });
    }

    

    

}

const FAQ = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live?",
      answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];

faqRectangles(FAQ)