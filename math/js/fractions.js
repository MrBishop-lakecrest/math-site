//script to control fraction questions


var answers_fractions=[];
var questions_fractions=[];
//function to make fraction questions takes whole number argument to tell number of 
//desired questions as well as min and max for range of numbers
//As of March 8 only generates questions not answers fixed as of March 10
//to prevent negative subtraction we could change - operation to * or + if answer is -ve.
function fractionQuestion (numQuestions, min, max)
{

	//for each question get 4 random numbers and an operation then store the question in the array
	//this will only generate positive fractions works to get correct answers as of March 12
	for (var i=0; i<numQuestions; i++)
	{
		var a = randomNumber(0, max+1, 1);
		var b = randomNumber(0, max+1, 1);
		var operation = randomOperation();
		var c = randomNumber(0, max+1, 1);
		var d = randomNumber(0, max+1, 1);
		
		questions_fractions[i]="$$\\frac{" + a + "}{" +b +"} "+operation +" \\frac{"+ c + "}{" +d +"}$$";
		var numerator = 0; //store numerator
		var denominator = b*d; //store denominator only needs to be changed for division 
		switch (operation)
		{
			case "+":
				numerator=(a*d+c*b);
				break;
			case "-":
				numerator=(a*d-c*b);
				break;
			case "\\times":
				numerator=(a*c);
				break;
			case "\\div":
				numerator=a*d;
				denominator = b*c;
				break;	
		}
		answers_fractions[i]=reduceFraction(numerator, denominator);
        
		//window.alert(questions_fractions[i]);
		//window.alert(answers_fractions[i]);
		
	}
    display("fractions",questions_fractions);

}
