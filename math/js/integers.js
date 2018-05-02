
var answers_integer=[];
var questions_integer=[];
//function to make integer questions takes whole number argument to tell number of 
//desired questions as well as min and max for range of numbers
//need to address issue of decimal division otherwise tested fine on March 7
//operation added on March 26 to allow selection of operation
// 0 - add, 1 - sub, 2 -mul, 3 - div, 4 - random
function integerQuestion (numQuestions, min, max, operation)
{
	//for each question get 2 random numbers and an operation then store the question in the array
    operation=setOperation(operation);
	for (var i=0; i<numQuestions; i++)
	{
		var a = randomNumber(min, max+1, 0);
		var b = randomNumber(min, max+1, 0);
		//mixed operations
        

		
		questions_integer[i]="$$" + a + " " +operation +" "+b +"$$";
		var c = 0; //temp spot for answers
		switch (operation)
		{
            case 0:
            case "+":
				c=a+b;
				break;
            case 1:
            case "-":
				c=a-b;
				break;
            case 2:
			case "\\times":
				c=a*b;
				break;
            case 3:
			case "\\div":
				c=a/b;
				break;	
		}
		answers_integer[i]="$$"+c+"$$";
       
        
		//window.alert(questions_integer[i]);
		//window.alert(answers_integer[i]);
        
		
	}
    display("integer",questions_integer);
    //window.alert(questions_integer);

}
