<div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-round w3-animate-zoom" style="max-width:500px">

	<div class="w3-center"><br>
            <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>

	    <?php 
	    // <img src="/sharon/img/img_avatar4.png" alt="Avatar" style="width:30%" class="w3-circle w3-margin-top">
	    ?>
	    <div class="w3-panel w3-pale-yellow w3-leftbar w3-border-yellow">For testing purposes: User:student Password:math</div>
	    
	</div>

	<form class="w3-container" action="" method="post">
            <div class="w3-section">
	
		<label><b>Username</b></label>
		<input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="username" required>
		<label><b>Password</b></label>
		<input class="w3-input w3-border" type="password" placeholder="Enter Password" name="password" required>
		<button name="signin" class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Login</button>
		<input class="w3-check w3-margin-top" type="checkbox" checked="checked"> Remember me
            </div>
	</form>

	<div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-red">Cancel</button>
            <span class="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
	</div>

    </div>
</div>

<script>
 document.getElementById('id01').style.display='block';
</script>
