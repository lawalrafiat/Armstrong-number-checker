  const divBox = document.querySelector('#box');
  const theForm = document.forms['project'];

  theForm.addEventListener('submit', function(e){                         //event listener added here.
      e.preventDefault();
    
      const value = theForm.querySelector('input[type="number"]').value;       // value of user input is grabed here.

      divBox.textContent = value;                                       //the div box is set to output the value given in input box.


    
   if (value.length > 3 || value.length < 3){                  //value of input number set to only 3 here
    theForm.setAttribute('disabled', 'disabled');          //button disabled here
   alert('Your input should be a three digit integer');                   //alert message set here
  divBox.textContent = '';                                     //div content neutralised here
}


  function input(str = value) {
   
    let div = str.split("").map(function(s){
      Math.pow(s,3);
      return Math.pow(s,3); 
    });
    let sum = div.reduce((total, s)=> total + s);     //reduce function
    // console.log(sum);
     if(sum == str){
       alert('this is an armstrong number');
     }else{
       alert('number not an armstrong number');
     }

  } //function end
  input();
   
  

   });

