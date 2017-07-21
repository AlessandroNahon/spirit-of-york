<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'spirit-of-york');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'oXRQ>Qu:D%*d;o7Gz81y#*$&-0%x.fB&B&$1s#N~gT].X)rX@gb-x-hU?S?5zOSG');
define('SECURE_AUTH_KEY',  't]L/oVm_wQ/R}KIuaz6j~tZ&_(dE#.s*kY[j6etVY;ztBk&[BWv>;^?!]Roo@IP,');
define('LOGGED_IN_KEY',    'k(OdKOUGd*y3O%3E^|KB}acX1;m8zY&m3jeiPtm,%#,:hw,]3oo+yL)p-]$^_`*y');
define('NONCE_KEY',        '_rk8MgK<1cw8B1p9jb.@;4=`0y?and<H<J.z[CUC?j@>G[cV](EUO_pI[m66U@+6');
define('AUTH_SALT',        '7tx +~ Ko3bD>P_+L4Asn-K=BG.)j})]MMtRJ&`T*J|7]l|``id[A zd|z<?pASa');
define('SECURE_AUTH_SALT', '@#iHgyeq5jAT+o;z};Jw%##vSbJ^/Bgo[[y1stu*4OB]9`z`@I:/TdLqN>nxj<)K');
define('LOGGED_IN_SALT',   'pv{?158l_e3*D`<P7v%q_=1[-_{gmh8c#5#[UG1h%{@D]Z;5wgat_F3{-jmOZG~Z');
define('NONCE_SALT',       '<wPcz;7hLU_ybI:Hf^fB $; s7%en2[%X~kH/5:kseiaSI9enWCL1Wc{kQF2..iE');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
