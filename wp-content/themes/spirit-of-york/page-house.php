<?php

/*
	Template Name: House
*/

get_header();  ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>



	<?php

	if( have_rows('contact_repeater') ):
	    while ( have_rows('contact_repeater') ) : the_row();
	    $splashImage = get_sub_field('contact_image');
	    $otherImage = get_sub_field('contact_picture');
	    $ContactPrimaryText = get_sub_field('primary_text');
	    $ContactSecondaryText = get_sub_field('secondary_text');

	    endwhile;
	endif;

	?>


<section id="our-home" style="background-image:url(<?php echo $splashImage['url']; ?>);"></section>

<div class="main">
  <div class="container">
  	<div class="top">
	  <div class="contact-image">
	  	<div style="background-image:url(<?php echo $otherImage['url']; ?>);" class="contact-pic"></div>
	  </div>
	  <div class="contact-text">
	  	<p class="primary"><?php echo $ContactPrimaryText ?></p>
	  	<p class="secondary"><?php echo $ContactSecondaryText ?></p>
	  </div>
	</div> 

  <div class="contact-page">
	  <div class="contact-section">

	   
	  <?php if( have_rows('contact_repeater') ):?>
	    <?php  while ( have_rows('contact_repeater') ) : the_row();?>


	     <?php if( have_rows('contact_tabs') ):?>
	       <?php   while ( have_rows('contact_tabs') ) : the_row();?>
	         <?php $primaryText = get_sub_field('primary_text'); ?>
	         <?php $secondaryText = get_sub_field('secondary_text'); ?>


	         <div class="contact-tab <?php the_sub_field('tab_name') ?>" >
	         <ul>
	         	<li id="experience" class="active-tab">Experience</li>
	         	<li id="book">Book an event</li>
	         </ul>
		          <p class="primary"><?php echo $primaryText ?></p>
		          <p class="secondary"><?php echo $secondaryText ?></p>
	          </div>
	        <?php  endwhile;?>
	     <?php endif;?>

	     <?php endwhile;?>
	 <?php endif; ?>
	 <div class="right">
	 	<div class="address">
	 		<h3>SPIRIT OF YORK DISTILLERY Co.</h3>
	 		<p><a target="_blank" href="https://goo.gl/maps/eRJMjYnewWv">12 Trinity Street,</a></p>
	 		<p><a target="_blank" href="https://goo.gl/maps/eRJMjYnewWv">Toronto, ON M5A 3C4</a></p>

	 		<p><a href="tel:4167770001">416.777.0001</a></p>
	 		<p><a href="mailto:info@spiritofyork.com" class="email">info@spiritofyork.com</a></p>
	 	</div>
	 	<?php the_content(); ?>
	 </div>
	  </div>

  </div>

  <?php endwhile; // end the loop?>
  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>