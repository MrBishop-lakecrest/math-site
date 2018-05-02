
    	var VarX = [];
      	var MulX = [];
      	var AddX = [];
      	var EqlX = [];
       	var Questions = []; 		//defines variables
       	var Answers = [];
       	var min = 100;
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

	var BasicSymbol = ["Add", "Sub"];
	
	var ComplexSymbol = ["Mul", "Div"];

	
	
	
		NumQ = document.getElementById("NumQ").value //Determines hows many questions will be shown, chosen by the user input. 
		
      for (var i = 0; i < parseInt(NumQ); i++) {
      
      //randomly generates a number, which is then used to select an item in the arrays "BasicSymbol" and "ComplexSymbol" which are then used to randomly print out a question. in each if statement, it is 
      
       var RandomNumber1 = [Math.floor(Math.random()*2)];
       
       var RandomNumber2 = [Math.floor(Math.random()*2)];
       
       VarX[i] = [Math.floor(Math.random()*(max - min + 1) + min)];
             
        //MulX[i] = [Math.floor(Math.random()*(max - min + 1) + min)];
        
        MulX[i]==0;
       
        AddX[i] = [Math.floor(Math.random()*(max - min + 1) + min)];
        
        

		if (ComplexSymbol[RandomNumber2]=="Mul") {
	
			MulX[i] = (parseInt(MulX[i])==0) ? MulZero(MulX[i]) : [Math.floor(Math.random()*(max - min + 1) + min)];
			
			EqlX[i] = parseInt(VarX[i]) * parseInt(MulX[i]);

			Questions[i] = (parseInt(MulX[i])==1) ?  "x": (parseInt(MulX[i])==-1) ? "-x" : parseInt(MulX[i]) + "x";

		}
		
		else if (ComplexSymbol[RandomNumber2]=="Div") {
		
			EqlX[i] = [Math.floor((Math.random()*(max - min + 1) + min)+ 1)];
						
			VarX[i] = MulX[i];
			
			MulX[i] = (parseInt(MulX[i])==0) ? MulZero(MulX[i]) : [Math.floor(Math.random()*(max - min + 1) + min)];

						
			Questions[i] = (parseInt(MulX[i])==1) ?  "x": "x/" + parseInt(MulX[i]);

			
			Questions[i] = (parseInt(MulX[i])== -1) ? "-x" : "x/" + parseInt(MulX[i]);
	
		};

		if (BasicSymbol[RandomNumber1]=="Sub") {
			
			if(ComplexSymbol[RandomNumber2]=="Div") {
				VarX[i]= (parseInt(EqlX[i]) - parseInt(AddX[i])) * parseInt(MulX[i]);
			}
			else if(ComplexSymbol[RandomNumber2]=="Mul") { 
				EqlX[i] = parseInt(EqlX[i]) + parseInt(AddX[i]);
			}
			Questions[i] = (AddX[i]==0) ? Questions[i] + " = " + EqlX[i] : Questions[i] + " + (" + AddX[i] + ") = " + EqlX[i];

			
		} 
		
		else if(BasicSymbol[RandomNumber1]=="Add") {
		
			if(ComplexSymbol[RandomNumber2]=="Div") {
				VarX[i] = (parseInt(EqlX[i]) + parseInt(AddX[i])) * parseInt(MulX[i]);
			}
			else if (ComplexSymbol[RandomNumber2]=="Mul") {
					EqlX[i] = parseInt(EqlX[i]) - parseInt(AddX[i]);

			};
			
			Questions[i] = (AddX[i]==0) ? Questions[i] + " = " + EqlX[i] : Questions[i] + " - (" + AddX[i] + ") = " + EqlX[i];

		}

		 Answers[i] = VarX[i];
		 
		 function MulZero () {
		 	while (x==0) {
		 		x=[Math.floor(Math.random()*(max - min + 1) + min)];
		 		return x;
		 	}
		 };
		 
	
	 

 			
	
  	  displayArea += "<tr><td id=Q"+i+"></td><td><input type=text name=number id=userAnswer"+i+"></input></td><td id = A"+i+"></td><td id = R"+i+"></td></tr>";  // creates a set table, then calls the necessary table rows
      }
      
      }
     
	  function randomQuestion ()
	{	
		getStarted();
		//displays the question
		
	if(isNaN(NumQ)||NumQ==""||NumQ<=0) {
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

   
