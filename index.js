(function() {
  'use strict';
  
  //make a variable for each button: 'stop, slow, go' that referencs the DOM element
  //these methods both do the same thing. why?
  let stopButton = document.getElementById("stopButton");
  let slowButton = document.querySelector("#slowButton");
  let goButton = document.querySelector("#goButton");

  //make a reference for each light on DOM
  let stopLight = document.querySelector("#stopLight");
  let slowLight = document.querySelector("#slowLight");
  let goLight = document.querySelector("#goLight");

  //setup light variable for each color to false since all lights start in off position
  let isStopOn = false;
  let isSlowOn = false;
  let isGoOn = false;

  //Add event listener click to each button variable
    //For the event listener functions (3)
      //set isStopOn to !isStopOn, if true, set false.
                                    //if false, set true.
      //use a ternary operator to, based on 'isStopOn' set the stop light dom element background color to red or black.
      
      stopButton.addEventListener('click', () => {
        isStopOn = !isStopOn; //set isStopOn to NOT isStopOn (so the opposite of what it currently is)
        //! means NOT, Not true === false; Not False === true
        /*
        isStopOn ? stopLight.style.backgroundColor = 'red' : stopLight.style.backgroundColor = 'black';

        if (isStopOn) {
          stopLight.style.backgroundColor = 'red'
        }
        else {
          stopLight.style.backgroundColor = 'black';
        }
        */

        stopLight.style.backgroundColor = isStopOn ? 'red' : 'black';

      });

      slowButton.addEventListener('click', () => {
        isSlowOn = !isSlowOn; 

        slowLight.style.backgroundColor = isSlowOn ? 'orange' : 'black';

      });

      goButton.addEventListener('click', () => {
        isGoOn = !isGoOn; 

        goLight.style.backgroundColor = isGoOn ? 'green' : 'black';

      });

      stopButton.addEventListener('mouseenter', function () {
        console.log('Entered stop button', this);
      });
    
      stopButton.addEventListener('mouseleave', function () {
        console.log('Left stop button', this);
      });

      slowButton.addEventListener('mouseenter', function () {
        console.log('Entered slow button', this);
      });
    
      slowButton.addEventListener('mouseleave', function () {
        console.log('Left slow button', this);
      });

      goButton.addEventListener('mouseenter', function () {
        console.log('Entered go button', this);
      });
    
      goButton.addEventListener('mouseleave', function () {
        console.log('Left go button', this);
      });
    
  // YOUR CODE HERE
})();
