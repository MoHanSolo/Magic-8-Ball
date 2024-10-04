// Magic 8 Ball, What's Your Fortune?

let fortuneButton = document.querySelector('#fortuneButton');

fortuneButton.addEventListener('click', function() {
// get user question
  let userQuestion = document.querySelector('#userQuestion').value;
  if (!userQuestion) {
    userQuestion = 'You didn\'t ask anything? Are you okay?';
  }

// Generate random number for your fortune
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
switch (randomNumber) {
  case 0: 
    eightBall = 'It is certain'
  break
  
  case 1: 
    eightBall = 'It is decidely so'
  break
  
  case 2: 
    eightBall = 'Reply hazy, try again'
  break
  
  case 3: 
    eightBall = 'Cannot predict now'
  break
  
  case 4: 
    eightBall = 'Do not count on it'
  break
  
  case 5: 
    eightBall = 'My sources say no'
  break
  
  case 6: 
    eightBall = 'Outlook not so good'
  break
  
  case 7:  
    eightBall = 'Signs point to yes'
  break
  }

/* if / else if / else way 
if (randomNumber === 0) {
  console.log('It is certain')
} else if(randomNumber === 1) {
  console.log('It is decidedly so')
} else if(randomNumber === 2) {
  console.log('Reply hazy try again')
} else if(randomNumber === 3) {
  console.log('Cannot predict now')
} else if(randomNumber === 4) {
  console.log('Do not count on it')
} else if(randomNumber === 5) {
  console.log('My sources say no')
} else if(randomNumber === 6) {
  console.log('Outlook not so good')
} else {
  console.log('Signs point to yes')
}
*/

// Show results within the circle
let fortuneText = document.querySelector('#fortuneText');
fortuneText.innerHTML = `<strong>${eightBall}</strong>`;
});