<?php

/*
	Template Name: Spirits
*/

get_header();  ?>

<div class="main">
  <section id="spirits">
    <div class="container">
      <?php if(get_field('spirits_repeater')): ?>
          <?php while(has_sub_field('spirits_repeater')): ?>

          <div class="spirit">
            <?php $spiritsImage = get_sub_field('spirit_image'); ?>  

            <div class="liquor">
              <img src="<?php echo $spiritsImage['url'] ?>">
            </div>

            <div class="liquor-text">
              <p class="primary"><?php  the_sub_field('primary_text'); ?></p>
              <div class="liquor-mobile">
                <img src="<?php echo $spiritsImage['url'] ?>">
              </div>
              <p class="secondary"><?php  the_sub_field('secondary_text'); ?></p>
            </div>

          </div>  

          <?php endwhile; ?>
      <?php endif; ?>

    </div> <!-- /.container -->
  </section>
</div> <!-- /.main -->



<?php get_footer(); ?>