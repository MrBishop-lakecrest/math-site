var TOPIC_SELECTED = [];
var TOPIC_NOT_SELECTED = [];



//Function to return the G.C.D of a and b
function gcd(a, b)
{
	if (!b)
		return a;
	return gcd(b, a%b);	
}
	
//takes a min, max and nonZero boolean (entered as 0 for false and 1 for true 
//to return a random integer between min and max (inclusive of min not max)
function randomNumber(min, max, nonZero)
{
	number = min + Math.floor(Math.random()*Math.floor(max));
	
	if (min <0) //if min is negative need to randomize to get a positive sometimes.
		if (Math.floor(Math.random()*Math.floor(2))==1)
			return -1*number; //returns a positive integer randomly based on even odd
	//returns the max if non-zero is requested and random produces 0
	
	if (nonZero && number==0)
		return number + max;
	//window.alert(number);
	return number;	
}

//Will return a random operation (+, -, \times or \div) as a string coded for latex
function randomOperation()
{
	var operation = "";
	switch(randomNumber(0, 4))
	{
		case 0:
			operation = "+";
			break;
		case 1:
			operation = "-";
			break;
		case 2:
			operation = "\\times";
			break;
		case 3:
			operation = "\\div";
			break;
	}
	return operation;
}

//return the string of a reduced fraction
function reduceFraction(numerator, denominator)
{
	var common = gcd(numerator, denominator);
	numerator = numerator/common;
	denominator = denominator/common;
	var reduced = "$$";
	if (denominator == 1)
	{
		reduced = reduced + numerator +"$$";
		return reduced;
	}
	reduced = reduced + "\\frac{" + numerator +"}{"+denominator+"}$$";   //only gets here if denominator is not 1
	return (reduced);
	



}

//function to check Answers takes the root of the input id
//as of March 14 works to read entered values but does not work for multiple topics due to need to take id needs to be generalized for each topic
function checkAnswers(id)
{
    
    var s = $("input[type=text]").length;
 
    for (var i =0; i<s; ++i)
    {
        var ans;
        //this will require each input to have an id of "topic_#"
        if (document.getElementById((id+"_"+(i+1))) !== null)
            ans = document.getElementById((id+"_"+(i+1))).value;
        else
            ans = "";
        window.alert(ans);
    }
}

function display(topic, questions)
{
    //window.alert(questions);
    //define question to hold questions and enter a heading
    var question ="<tr id=topic_title><td style=font-size:160%; colspan=3 >"+topic+"</td></tr>";
    $("#display").append(question);
    for(var i=0; i<questions.length; i++)
    {
        question = "<tr><td>"+(i+1)+".</td><td>"+ questions[i]+"</td>"
        + "<td id=cell"+(i+1)+"><input type=text id="+topic+"_"+(i+1)+"></td>"
        $("#display").append(question);
    }
    
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

}
//function to begin process of displaying questions
function generate()
{
    
    
    getTopics();
    displayQuestions();
    //window.alert(TOPIC_SELECTED[1]);
	
	$("#main_content").hide();
//reload mathjax and display
	//MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	$("#main_content_questions").toggle();
	
}

function getTopics()
{
    
    $("input:checkbox").each(function(){
                             var $this = $(this);
                             
                             if($this.is(":checked")){
                             TOPIC_SELECTED.push($this.attr("id"));
                             }else{
                             TOPIC_NOT_SELECTED.push($this.attr("id"));
                             }
                             });
    
}

//main control for choosing the correct questions
function displayQuestions()
{
    //the min and max are for testing and will need to be determined and likely passed here
    var min = -10;
    var max = 10;
    
    
    var HOWMANYQ = document.getElementById("num_questions").value;
    //loop through selected topics making required questions for each
    for (var i=0; i<TOPIC_SELECTED.length; i++)
    {
        //window.alert("Entered the loop");
        switch (TOPIC_SELECTED[i])
        {
            case "int_add":
                integerQuestion(HOWMANYQ, min, max, 0);
                break;
            case "int_sub":
                integerQuestion(HOWMANYQ, min, max, 1);
                break;
            case "int_mul":
                integerQuestion(HOWMANYQ, min, max, 2);
                break;
            case "int_div":
                integerQuestion(HOWMANYQ, min, max, 3);
                break;
            
            case "rad_sim":
                radicalSimpQuestion (HOWMANYQ, min, max);
                break;
            case "rad_add_sub":
                integerQuestion(HOWMANYQ, min, max, 1);
                break;
            case "rad_mul":
                integerQuestion(HOWMANYQ, min, max, 2);
                break;
            case "rad_div":
                integerQuestion(HOWMANYQ, min, max, 3);
                break;
            case "frac_sim":
            	fractionQuestion(HOWMANYQ, min, max);
            	break;
            case "frac_add":
                fractionQuestion(HOWMANYQ, min, max);
                break;
            case "frac_sub":
                fractionQuestion(HOWMANYQ, min, max);
                break;
            case "frac_mul":
                fractionQuestion(HOWMANYQ, min, max);
                break;
            case "frac_div":
                fractionQuestion(HOWMANYQ, min, max);
                break;
            
            default:
                window.alert("NOT A VALID ID");
                break;
        }
        
        
        
    }
    
}

function setOperation(operation)
{
    switch (operation)
    {
        case 0:
            return "+";
            break;
        case 1:
            return "-";
        case 2:
            return "\\times";
        case 3:
            return "\\div";
        case 4:
            return(randomOperation());
    }
}
