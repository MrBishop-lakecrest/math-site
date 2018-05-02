
    	var VarX = [];
      	var VarY = [];
       	var Questions = []; 		//defines variables
       	var Answers = [];
       	var min = -100;
      	var max = 100;
      	var displayArea = "<tr><th>Questions</th><th>Your Answer</th><th>Correct Answer</th><th>Result</th></tr>";

   function getStarted() {
   
	if($("input[name='maxSize']:checked").val()=="easy") {
				min = -10;
				max = 10;
	}
	else if($("input[name='maxSize']:checked").val()=="medium") { 			//checks to see if the questions will be on the easy, medium or hard setting, 										 
				min = -50;														//then defines what the minimum and maximum number for that will be
				max = 50;
	}
	else if($("input[name='maxSize']:checked").val()=="hard") {
				min = -100;
				max = 100;
	}
	if (document.getElementById("negative").checked ) { 		//checks to see if the negative checkbox is checked then forces it to have the minimum as 1
	   		min = 1;
	}
	
		NumQ = document.getElementById("NumQ").value //Determines hows many questions will be shown, chosen by the user input. 
		
		
		
      for (var i = 0; i < parseInt(NumQ); i++) {
      
      VarX[i] = [Math.floor(Math.random()*(max - min + 1) + min)]; 
	  VarY[i] = [Math.floor(Math.random()*(max - min + 1) + min)];
	  
	  if(VarX[i]==0) {
     VarX[i]=1;				//so that you are not dividing/multiplying/adding/subtracting by zero
     }
     if(VarY[i]==0) {
     VarY[i]=1;
     }
   
	  		//selecting whether to do addition, subtraction, multiplication, or division based off of the user choice. 
	  		
	if ($("input[type='radio']:checked").val() == "Add") {
	
   		 Answers[i] = parseInt(VarX[i]) + parseInt(VarY[i]);
 		Questions[i] = "(" + VarX[i] + ") + (" + VarY[i] + ")";	
}
	else if ($("input[type='radio']:checked").val() == "Sub") {
	
	Answers[i] = parseInt(VarX[i]) - parseInt(VarY[i]);
 		Questions[i] = "(" + VarX[i] + ")  -  (" + VarY[i] + ")";
	}
	
	else if ($("input[type='radio']:checked").val() == "Div") {
	
		var DivAns = [Math.floor(Math.random()*((max - min + 1) + min) + 1)]; // determines the answer before the question to allow all numbers to be integers 
	
		var Div1 = [Math.floor(Math.random()*((max - min + 1) + min) + 1)];
	
		var Div2 = DivAns * Div1; 
	
		Answers[i] = DivAns;
	
		Questions[i] = "(" + Div2 + ") / (" + Div1 + ")";		
		}
	
	else if ($("input[type='radio']:checked").val() == "Mul") {
	
	Answers[i] = parseInt(VarX[i]) * parseInt(VarY[i]);
		Questions[i] = "(" + VarX[i] + ") * (" + VarY[i] + ")";	 		
	}
	
  	  displayArea += "<tr><td id=Q"+i+"></td><td><input type=text name=number id=userAnswer"+i+"></input></td><td id = A"+i+"></td><td id = R"+i+"></td></tr>";  // creates a set table, then calls the necessary table rows
      }
      }
     
	  function randomQuestion ()
	{	
		getStarted();
		//displays the question
		
		// determines if the user input is a number or is less then zero. 
		if(isNaN(NumQ)||NumQ==""|| NumQ < 1) {
		window.alert("Please fill in the space provided with the amount of questions you would like to receive."); //tests to see if there was a user input
		} else {
		
		   document.getElementById("btn1").style.display = "none";


	 document.getElementById("DisplayArea").innerHTML = displayArea;
	 
	 }
	
      for (var i = 0; i < NumQ; i++) {
      
      document.getElementById("Q"+(i)).innerHTML = (i+1)+". <tr><td>" + Questions[i] + "</td></tr>";
  
      }
	}
	function Answer ()
	{
            document.getElementById("BtnA").style.display="none";

	var correct = 0;
	
	
	for (var i = 0; i<Answers.length; i++)
		{
			//determines whether or not the user answer is correct or incorrect
			if (document.getElementById("userAnswer"+i).value == Answers[i])
			{			
				document.getElementById("R"+(i)).innerHTML = "Correct";
				correct++;
			}
			else 
			document.getElementById("R"+(i)).innerHTML = "Incorrect";	
			document.getElementById("A"+(i)).innerHTML = (Answers[i]);
		}
			window.alert("You got " + (correct/NumQ)*100 + "% Correct!");
	}

   
