var counter=0;
    function countIt() {
    if(counter<2) {
    
    var randomColor = randomBackgroundColor();

        document.body.style.background = randomColor;
        counter++;

        var myButton = document.getElementById("button-size");
        var currWidth = myButton.clientWidth;
        var currHeight = myButton.clientHeight;
    
        myButton.style.width=currWidth + 60 + "px";
        myButton.style.height=currHeight + 10 + "px";
        }
    }

    
function randomBackgroundColor () {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var bgColor = "rgb("+r+","+g+","+b+")";

//Use the "+" because in javascript the is the operator used to concatenate, or add things together to make a string. In this case we are adding together "rgb("+ r +","+ g +","+ b +")" to make a string that looks like "rgb(225, 34, 154)". When the browser's JS interpreter reads this code, "rgb("+ r +","+ g +","+ b +")", it will replace the r, g, and b with the values of those variables.

    document.body.style.background = bgColor;
    }

    randomBackgroundColor();




/*
    function increaseSize(bigger) {


    var myButton = document.getElementById

    }
    */

    


/*
function increaseSize() {
    var myButton = document.getElementById("button-size");
    myButton.style.width = "150px";
    myButton.style.height = "90px";

    var button-size2 = ""

}

function increaseSize2() {
    var myButton = document.getElementById("button-size");
    myButton.style.width = "200px";
    myButton.style.height = "120px";

}
*/


/*
function increaseSize() {
    var myButton = document.getElementById("button-size");
    var currWidth = myButton.clientWidth;
    var currHeight = myButton.clientHeight;

    myButton.style.width=currWidth + 60 + "px";
    myButton.style.height=currHeight + 10 + "px";
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
