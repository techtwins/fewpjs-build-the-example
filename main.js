// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal')
modal.className = 'hidden'

const modalMessage = document.querySelector("#modal-message")

const likes = document.querySelectorAll('.like-glyph')

likes.forEach( e => {
  e.addEventListener('click', () => {
    mimicServerCall()
      
      .then(resp => {
        if (e.textContent === EMPTY_HEART) {
          e.textContent = FULL_HEART
          e.classList.toggle('activated-heart')
        } else if (e.textContent === FULL_HEART) {
          e.classList.toggle('activated-heart')
          e.textContent = EMPTY_HEART
      }
      })
      .catch(err => {
      modalMessage.textContent = err
        setTimeout(() => {
        
      }, 5000)
    })
  })
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
