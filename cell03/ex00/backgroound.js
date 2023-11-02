var counter=0;
    function countIt() {
    if(counter<2) {
        counter++;  
        
        var randomColor = randomBackgroundColor();
            document.body.style.background = randomColor;
        
       
        
        var myButton = document.getElementById("button-size");
        var currWidth = myButton.clientWidth;
        var currHeight = myButton.clientHeight;
        
        myButton.style.width=currWidth + 100 + "px";
        myButton.style.height=currHeight + 20 + "px";
        
    
//rubbish, do not use this solution :-)
        if (counter==1) {
            myButton.style.fontSize = "24px";
        } else if (counter==2) {
            myButton.style.fontSize = "30px"; 
        } else {
            myButton.style.fontSize = "36px";
        }
         
        
    }
}

function randomBackgroundColor () {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var bgColor = "rgb("+r+","+g+","+b+")";

    document.body.style.background = bgColor;
    }

//Use the "+" because in javascript the is the operator used to concatenate, or add things together to make a string. In this case we are adding together "rgb("+ r +","+ g +","+ b +")" to make a string that looks like "rgb(225, 34, 154)". When the browser's JS interpreter reads this code, "rgb("+ r +","+ g +","+ b +")", it will replace the r, g, and b with the values of those variables.


// old ideas and useless stuff 
//------------------------------------------------------------------------------------------------------------
        /*
        var buttonText = document.getElementById("font");
        var step = 10;
    
        buttonText.style.fontSize = parseInt(buttonText.style.fontSize) + step + "px";
        */
      

        /*
       var biggerFont = incrementFont();
            document.style.fontSize = biggerFont;
        */
        
      




   
 /*   
function incrementFont(){
    
        var buttonFont = document.getElementById("font");
        var step = 10;
    
        buttonFont.style.fontSize = parseInt(buttonFont.style.fontSize) + step + "px"; 
     */   
        
          
  /* 
        var myButton = document.getElementById("font");
        var step = 10;
        var increment = document.getElementById("button-size");
    
        myButtonButton.style.fontSize = "18px";
    
        increment.onclick = function(){
            myButton.style.fontSize =  parseInt(myButton.style.fontSize) + step + "px"; 
            }



/*
function increaseSize() {
   
    var myButton = document.getElementById("button-size");
    var step = 10;
    var increment = document.getElementById("button-size");
    
    muButton.style.fontSize = '18px';
    
    increment.onclick = function(){
  myButton.style.fontSize =  parseInt(myButton.style.fontSize) + step + 'px'; 
};
        
    
    /*
    var style = window.getComputedStyle(size, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
    size.style.fontSize = (fontSize + 1) + 'px';
    
    */
    /*
    var myButton = document.getElementById("button-size");
    
    var currFont = myButton.style.fontSize;

    var newFont = currFont + 30 + "px"; 
    
    document.style.fontSize = newFont;
         */   

    
    /*
    document.getElementById("utton-size").style.fontSize = biggerFont + 40 + "px";
*/

/*
function fontSizeBigger () {
    
    var biggerFont = document.getElementById("button-size").style.fontSize = + 60 + "px";
    }
}
*/





/*
function randomBackgroundColor = () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256)
    let bgColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.background = bgColor;
    }

    randomBackgroundColor();
    */
    */
