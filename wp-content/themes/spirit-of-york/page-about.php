<?php

/*
	Template Name: About
*/

get_header();  ?>


<?php
  if( have_rows('about_section') ):
      while ( have_rows('about_section') ) : the_row();
      $aboutImage = get_sub_field('about_image');
      $primaryText = get_sub_field('primary_text');
      $secondaryText = get_sub_field('secondary_text');
      $aboutFooter = get_sub_field('about_footer');

      endwhile;
  endif;
?>

<section id="about">
	<div class="main">
	  	<div class="about-section">
	  		<div class="about-image" style="background-image: url(<?php echo $aboutImage['url'] ?>)"></div>
	  		
	  		<div class="about-text">
	  			<p class="primary"><?php echo $primaryText ?></p>
	  			<p class="secondary"><?php echo $secondaryText ?></p>
	  		</div>
	  	</div>

<!-- 	  	<div class="container">
		  	<ul class="team-menu">
		  		<li> 1 <span class="select"></span></li>
		  		<li> 2 <span></span></li>
		  		<li> 3 <span></span></li>
		  		<li> 4 <span></span></li>
		  		<li> 5 <span></span></li>
		  		<li> 6 <span></span></li>
		  		<li> 7 <span></span></li>
		  	</ul>
	  	<?php if( have_rows('about_section') ): ?>
	  	    <?php while ( have_rows('about_section') ) : the_row(); ?>

	  	  		
	  	    	<?php if( have_rows('about_team') ): ?>
	  	    	    <?php while ( have_rows('about_team') ) : the_row(); ?>
	  	    	    	<?php $teamImage = get_sub_field('team_image'); ?>

	  	    	    	<div class="team-section <?php the_sub_field('team_name') ?>">
	  	    	    		<div class="team-text">
		  	    	    		<h2><?php the_sub_field('team_name') ?></h2>
		  	    	    		<h3><?php the_sub_field('team_title') ?></h3>
		  	    	    		<p><?php the_sub_field('team_about') ?></p>
	  	    	    		</div>
	  	    	    		<img src="<?php echo $teamImage['url'] ?>">
	  	    	    	</div>

	  	    	   <?php endwhile; ?>
	  	    	<?php endif; ?>

	  	   <?php endwhile; ?>
	  	<?php endif; ?>
	  </div> <!-- /.container --> 
	</div> <!-- /.main -->
<!-- 	<div class="about-footer" style="background-image:url(<?php echo $aboutFooter['url'] ?>)"></div> -->
</section>

<?php get_footer(); ?>