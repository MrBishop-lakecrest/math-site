
var answers_radicals=[];
var questions_radicals=[];
//function creates questions and answers to simplify radicals
//searches for largest perfect square half the size of the number
//limited by speed to loop through half the numbers but not an issue
//since we control the size of the radical displayed
//possibly can loop high to low and quit when found

//Tested and functions March 13
//needs to be corrected for radicals that are perfect squares or not reducible for display purposes only (March 13)(corrected but minimal testing March 13

//works fine but often the root can not be reduced this should be addressed to improve functionality at some point
function radicalSimpQuestion (numQuestions, min, max)
{
    for (var j=0; j<numQuestions; j++)
    {
        var radican = randomNumber(min, max, 1);
        var greatestRoot = 1;
        var remainder = radican;
        //store question
        questions_radicals[j]="$$\\sqrt{"+radican+"}$$";
        for (var i=2;i<=(radican/2);i++)
            if ((radican%(i*i))==0)
            {
                greatestRoot=i;
                remainder = radican/(i*i);
            }
        //store answer formatted based on need to show each part
        if (remainder == 1)
            answers_radicals[j]="$$"+greatestRoot+"$$";
            
        
        if (greatestRoot == 1)
            answers_radicals[j]="$$\\sqrt{"+remainder+"}$$";
        
        if (greatestRoot !=1 && remainder !=1)
            answers_radicals[j]="$$"+greatestRoot+"\\sqrt{"+remainder+"}$$";
    }
    display("radicals",questions_radicals);
}
