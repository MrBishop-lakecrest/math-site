
<div id="main_content">
<h3>Topics</h3>

<div class="w3-card">
    <div id="accordion-resizer" class="ui-widget-content">
	<div id="accordion">
	    <h3>Overview</h3>
	    <div>
		<p>
		    Instructions
		</p>
	    </div>

	    <h3>Fractions</h3>
	    <div>
		<p>
		    <input class="w3-check" type="checkbox" id="frac_sim">
		    <label>Simplify</label>

		    <input class="w3-check" type="checkbox"  id="frac_add">
		    <label>Addition</label>

		    <input class="w3-check" type="checkbox" id="frac_sub">
		    <label>Subtraction</label> 
		    
		    <input class="w3-check" type="checkbox" id="frac_mul">
		    <label>Multiplication</label> 

		    <input class="w3-check" type="checkbox" id="frac_div">
		    <label>Division</label> 
		</p>
	    </div>
	    <h3>Intergers</h3>
	    <div>
		<p>
		    <input class="w3-check" type="checkbox" id="int_add">
		    <label>Addition</label>

		    <input class="w3-check" type="checkbox" id="int_sub">
		    <label>Subtraction</label> 
		    
		    <input class="w3-check" type="checkbox" id="int_mul">
		    <label>Multiplication</label> 

		    <input class="w3-check" type="checkbox" id="int_div">
		    <label>Division</label> 
		</p>
	    </div>
	    <h3>Radicals</h3>
	    <div>
		<p>
		    <input class="w3-check" type="checkbox" id="rad_sim">
		    <label>Simplify</label>

		    <input class="w3-check" type="checkbox" id="rad_add_sub">
		    <label>Addition/Subtraction</label>
		    
		    <input class="w3-check" type="checkbox" id="rad_mul">
		    <label>Multiplication</label> 

		    <input class="w3-check" type="checkbox" id="rad_sim_div">
		    <label>Division</label> 
		</p>
	    </div>
	    <h3>Probability</h3>
	    <div>
		<p>
		    <input class="w3-check" type="checkbox">
		    <label>Independent Events</label>

		    <input class="w3-check" type="checkbox">
		    <label>Dependent Events</label>


		</p>
	    </div>
	</div>
    </div>
    
</div>

<div class="w3-row" id="start_questions">
    <div class="w3-half w3-padding">

	<p>
	<label>Total Questions:</label> 
<input style="width:200px;" class="w3-card w3-padding w3-border" type="text" name="qtotal" id="num_questions"/>
	</p>
	
    </div>

    <div class="w3-half">
	<input onclick="generate();" type="submit" class="w3-margin w3-button w3-green" value="Generate" />
    </div>

</div>
</div>
<div class="w3-card" id="main_content_questions" style="display:none">
    <form>
        <table class="w3-table-all w3-xlarge  w3-display-middle" id="display">

        </table>

    </form>
    <div class="w3-half">
        <input onclick="" type="submit" class="w3-margin w3-button w3-red" value="Check" />
    </div>
</div>




<script>
 $( function() {
     $( "#accordion" ).accordion({
	 heightStyle: "fill"
     });
     
     $( "#accordion-resizer" ).resizable({
	 minHeight: 140,
	 minWidth: 200,
	 resize: function() {
             $( "#accordion" ).accordion( "refresh" );
	 }
     });
 } );
</script>


