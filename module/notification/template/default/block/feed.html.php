<?php 
/**
 * [NULLED BY DARKGOTH 2014]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: $
 */
 
defined('PHPFOX') or exit('NO DICE!'); 

?>
{foreach from=$aNotifications name=notifications item=aNotification}
	{template file='notification.block.entry'}
{/foreach}