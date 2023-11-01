
function randomBackgroundColor () {
    
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    var bgColor = "rgb("+r+","+g+","+b+")";
    
    document.body.style.background = bgColor;
    }

    randomBackgroundColor();
//Use the "+" because in javascript the is the operator used to concatenate, or add things together to make a string. In this case we are adding together "rgb("+ r +","+ g +","+ b +")" to make a string that looks like "rgb(225, 34, 154)". When the browser's JS interpreter reads this code, "rgb("+ r +","+ g +","+ b +")", it will replace the r, g, and b with the values of those variables.


/*
function randomBackgroundColor = () => {
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    let bgColor = `rgb(${r}, ${g}, ${b})`;
    
    document.body.style.background = bgColor;
    }

    randomBackgroundColor();
    */