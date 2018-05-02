<?php

class View {


    // Modal Boxes

    function modalStart($name) {

	echo '<div id="',$name,'" class="w3-modal">
	        <div class="w3-modal-content">
	          <div class="w3-container w3-padding">
	            <span onclick="document.getElementById(\'',$name,'\').style.display=\'none\'"';
	echo '            class="w3-button w3-display-topright">&times;</span>';
	
    }
    
    function modalEnd() {

	echo '    </div>
                </div>
             </div>';
	
    }

    function modalShow($name) {
	echo '<script>';
	echo 'document.getElementById(\'',$name,'\').style.display=\'block\'';
        echo '</script>';
    }

    
    function modalButton($name, $label) {
	
	if(empty($label)) {
	    $label = $name;
	}
	echo '<button onclick="document.getElementById(\'',$name,'\').style.display=\'block\'"
	class="w3-button w3-black">',$label,'</button>';
	
    }
}



?>
