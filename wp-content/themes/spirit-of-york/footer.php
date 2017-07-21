<?php 
	$footerLogo = get_field('footer_icon');
	$footerAddress = get_field('footer_address')
?>

<footer>
  <div class="container">

  	<div class="address">
      <div class="logo">
          <img src="<?php echo $footerLogo['url'] ?>" alt="">
      </div>
      <div>
        <h3>Spirit Of York Distillery CO.</h3>
        <p><?php echo $footerAddress ?></p>
      </div>
  	</div>

    <div class="footer-connect">
      <div class="footer-menu">
        <h3>Menu</h3>
        <?php wp_nav_menu( array(
          'container' => false,
          'theme_location' => 'secondary'
        )); ?>
      </div>

      <div class="footer-social">
        <h3>Connect</h3>
        <?php if(get_field('footer_social')): ?>

          <ul>

          <?php while(has_sub_field('footer_social')): ?>

           <a href="<?php the_sub_field('url')?>" target="_blank"> <li><?php the_sub_field('name')?></li></a>

          <?php endwhile; ?>

          </ul>

        <?php endif; ?>
      </div>

      <div class="subscribe">
        <h3>Subscribe</h3>
        <?php es_subbox( $namefield = "NO", $desc = "", $group = "" ); ?>
        <p>&copy; <?php echo date('Y'); ?> Spirit of York Distillery. All rights reserved. </p>
        <p class="biography"><a href="http://biographydesign.com/" target="_blank">Made by Biography Design.</a></p>
      </div>
    </div>

  </div>
</footer>



<script>
// scripts.js, plugins.js and jquery are enqueued in functions.php
/* Google Analytics! */
 var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]]; // Change UA-XXXXX-X to be your site's ID
 (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
 g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
 s.parentNode.insertBefore(g,s)}(document,"script"));
</script>

<!-- <script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAF2pspP2CjGr5MPKYMNr5r_9dapOY-jmk&callback=initMap">
</script> -->

<?php wp_footer(); ?>
</body>
</html>