<?php 
/*
  Template Name: House
*/

?>

<?php get_header();  ?>

<?php 

  $splashText = get_field('landing_text');
  $headerLogo = get_field('header_logo');


?>

<div id="landing">
  <p><?php echo $splashText ?></p>
  <p>Open Monday to Sunday 11 – 9</p>
</div>

<div class="main main-home">
  <div class="container">
    <section id="home">
      <div class="links">
        <?php if(get_field('home_links')): ?>
            <?php while(has_sub_field('home_links')): ?>
              <?php $linkImage = get_sub_field('image'); ?>
              <?php  $linkLink = get_sub_field('url'); ?>
              <div class="link" id="<?php the_sub_field('text') ?>">
                  <!-- <img src="<?php echo $linkImage['url'] ?>" alt=""> -->
                  <a class="link-link" href="<?php echo $linkLink ?>">
                    <object id="svgObject" data="<?php echo $linkImage['url'] ?>" type="image/svg+xml">
                        Your browser doesn't support SVGs bud.
                    </object>
                  </a>
                  
                    <div class="link-text">
                      <div class="text <?php the_sub_field('text') ?>">
                        <a class="home-links" href="<?php echo $linkLink ?>"><p><?php the_sub_field('text') ?></p></a>
                      </div>
                      <div class="link-line"></div>
                      <div class="hover-text <?php the_sub_field('text') ?>">

                        <a class="home-links" href="<?php echo $linkLink ?>"><p><?php the_sub_field('text_hover') ?></p></a>
                      </div>
                    </div>
              </div>
            <?php endwhile; ?>
        <?php endif; ?>

      </div>
    </section>

    <section id="instagram">
      <?php // Start the loop ?>
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
      <?php endwhile; // end the loop?>
    </section>
  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>