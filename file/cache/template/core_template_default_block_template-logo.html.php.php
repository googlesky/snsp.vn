<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: July 26, 2015, 7:05 pm */ ?>
<?php 
/**
 * [NULLED BY DARKGOTH 2014]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond_Benc
 * @package 		Phpfox
 * @version 		$Id: template-logo.html.php 7042 2014-01-14 12:42:41Z Fern $
 */
 
 

?>
<?php if (! empty ( $this->_aVars['sStyleLogo'] )): ?>
						<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl(''); ?>" id="logo"><img src="<?php echo $this->_aVars['sStyleLogo']; ?>" alt="logo" class="v_middle" /></a>
<?php else: ?>
						<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl(''); ?>" id="logo"><?php echo Phpfox::getParam('core.site_title'); ?></a>
<?php endif; ?>

