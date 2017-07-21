<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <link rel="shortcut icon" href="wp-content/themes/spirit-of-york/images/YorkIcon.png" type="image/x-icon">
  <!-- stylesheets should be enqueued in functions.php -->
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<?php 

  $headerLogo = get_field('header_logo');

?>

<header>
  <div class="container">

      <span class="empty"></span>

      <a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home" class="header-logo">
        <img src="<?php echo $headerLogo['url'] ?>">
<!--         <?php bloginfo( 'name' ); ?> -->
      </a>

<!--     <h2>Distillery Co.</h2> -->

  <p class="hamburger">Menu</p>
  <div class="navigation">
    <span class="nav-line"></span>
    <?php 
      wp_nav_menu( array(
        'container' => false,
        'theme_location' => 'primary'
      )); 
    ?>
  </div>
  
  </div> <!-- /.container -->


</header><!--/.header-->






