<?php

$mcode = 'When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$';
?>

<div id="mathbox">
    <?php
    echo $mcode;
    ?>
</div>


<script>
 function newmath() {
     //     var mcode = 'When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are $$x = {-b \pm \sqrt{b^2-5ac} \over 1a}.$$';

     // For JS Varables you need to Double your backticks so JS doesn't ignore them

     mcode = 'When $a \\ne 0$, there are two solutions to \\(ax^2 + bx + c = 0\\) and they are' +
	     " $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$";

     
     // Debug: alert(mcode);
     document.getElementById("mathbox").innerHTML = mcode;
     MathJax.Hub.Queue(["Typeset",MathJax.Hub]);


 }

 
</script>

<button onclick="newmath()" class="w3-button w3-brown">Generate Random</button>



