<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: July 26, 2015, 7:05 pm */ ?>
<?php if (! PHPFOX_IS_AJAX_PAGE): ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="<?php echo $this->_aVars['sLocaleDirection']; ?>" lang="<?php echo $this->_aVars['sLocaleCode']; ?>">
	<head>
		<title><?php echo $this->getTitle(); ?></title>	
<?php echo $this->getHeader(); ?>
	</head>
	<body class="<?php if ($this->_aVars['bUseFullSite']): ?>bb_is_full_page <?php endif;  if (Phpfox ::getUserId()): ?>bb_body_member<?php else: ?>bb_body_guest<?php endif; ?> bb_page_<?php echo $this->_aVars['sFullControllerName'];  if (Phpfox ::getUserBy('profile_page_id')): ?> bb_is_page_pages_view<?php endif;  if (defined ( 'PHPFOX_IS_USER_PROFILE' )): ?> bb_is_user_profile<?php endif;  if (defined ( 'PHPFOX_IS_USER_PROFILE' ) && ! Phpfox ::getService('profile')->timeline()): ?> bb_is_user_profile_no_timeline<?php else: ?> bb_is_user_profile_yes_timeline<?php endif;  if (defined ( 'PHPFOX_IS_USER_PROFILE' ) && Phpfox ::getService('profile')->timeline()): ?> bb_profile_timeline<?php endif;  if (! $this->_aVars['bUseFullSite'] && ! defined ( 'PHPFOX_IN_DESIGN_MODE' ) && ! Phpfox ::getService('profile')->timeline() && ! defined ( 'PHPFOX_IS_USER_PROFILE' ) && ! defined ( 'PHPFOX_IS_PAGES_VIEW' ) && Phpfox ::isUser()): ?> bb_is_favorites_menu<?php endif; ?>">
	                
	                <div<?php if (! Phpfox ::isUser()): ?> id="nb_body_holder_guest"<?php elseif (defined ( 'PHPFOX_IN_DESIGN_MODE' )): ?> id="nb_in_design"<?php endif; ?>>
<?php Phpfox::getBlock('core.template-body'); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 9)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('9'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 9<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("9"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 9)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('9');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('9', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_9"> <div class="block js_sortable dnd_block_info">Position '9'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('9', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_9">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('9', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '9'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('9', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 9));  endif;  endif; ?>
		
			<div id="header" <?php if (PHPFOX ::isUser()): ?>class="bookbulk_header <?php if ($this->_aVars['asideStatus']): ?> bookbulk_header_aside<?php endif; ?>" <?php endif; ?>>
			
<?php if (! Phpfox ::isUser()): ?>
<?php if (Phpfox ::getParam('user.hide_main_menu')): ?>

<?php else: ?>
				<div id="nb_header_menu">
					<div class="holder">
<?php Phpfox::getBlock('core.template-menu'); ?>
						<div class="clear"></div>
					</div>
				</div>
<?php endif; ?>
<?php endif; ?>
			
				<div class="holder">
						
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 10)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('10'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 10<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("10"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 10)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('10');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('10', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_10"> <div class="block js_sortable dnd_block_info">Position '10'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('10', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_10">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('10', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '10'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('10', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 10));  endif;  endif; ?>
					<div id="header_holder" <?php if (! Phpfox ::isUser()): ?> class="header_logo"<?php endif; ?>>				
						<div id="header_left">
<?php Phpfox::getBlock('core.template-logo'); ?>
						</div>
						<div id="header_right">
							<div id="header_top">
<?php if (Phpfox ::isUser() && ! Phpfox ::getUserBy('profile_page_id')): ?>
								<div id="holder_notify">																	
<?php Phpfox::getBlock('core.template-notification'); ?>
									<div class="clear"></div>
								</div>
<?php endif; ?>
<?php if (Phpfox ::isUser() && ! Phpfox ::getUserBy('profile_page_id')): ?>
								<div id="nb_features">
									<a href="#" id="nb_features_link">Features</a>
									<div id="nb_features_holder">
<?php $this->assign('bNoAppsMenu', true); ?>
<?php Phpfox::getBlock('core.template-menu'); ?>
									</div>								
								</div>
<?php endif; ?>
								<div id="header_menu_holder">
<?php if (Phpfox ::isUser()): ?>
<?php Phpfox::getBlock('core.template-menuaccount'); ?>
									<div class="clear"></div>	
<?php else: ?>
<?php Phpfox::getBlock('user.login-header', array()); ?>
<?php endif; ?>
								</div>							
<?php if (Phpfox ::isUser() && ! Phpfox ::getUserBy('profile_page_id') && Phpfox ::isModule('search')): ?>
								<div id="header_search">	
									<div id="header_menu_space">
										<div id="header_sub_menu_search">
											<form method="post" id='header_search_form' action="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('search'); ?>">
<?php echo '<div><input type="hidden" name="' . Phpfox::getTokenName() . '[security_token]" value="' . Phpfox::getService('log.session')->getToken() . '" /></div>'; ?>
												<input type="text" name="q" value="<?php echo Phpfox::getPhrase('core.search_for_people_places_and_things'); ?>" placeholder="<?php echo Phpfox::getPhrase('core.search_for_people_places_and_things'); ?>"  id="header_sub_menu_search_input" autocomplete="off" class="js_temp_friend_search_input" />											
												<div id="header_sub_menu_search_input"></div>
												<a href="#" onclick='$("#header_search_form").submit(); return false;' id="header_search_button"><?php echo Phpfox::getPhrase('core.search'); ?></a>											
											
</form>

										</div>
									</div>
								</div>	
<?php endif; ?>
							</div>					
						</div>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 6)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('6'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 6<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("6"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 6)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('6');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('6', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_6"> <div class="block js_sortable dnd_block_info">Position '6'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('6', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_6">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('6', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '6'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('6', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 6));  endif;  endif; ?>
					</div>
				</div>		
			</div>
			
			<div id="nb_body">		
				<div id="<?php if (Phpfox ::isUser()): ?>main_core_body_holder<?php else: ?>main_core_body_holder_guest<?php endif; ?>" <?php if (PHPFOX ::isUser()): ?>class="bookbulk_core_body <?php if ($this->_aVars['asideStatus']): ?> bookbulk_core_body_aside<?php endif; ?>" <?php endif; ?> >
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 11)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('11'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 11<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("11"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 11)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('11');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('11', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_11"> <div class="block js_sortable dnd_block_info">Position '11'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('11', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_11">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('11', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '11'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('11', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 11));  endif;  endif; ?>
					<div id="main_content_holder">	
<?php endif; ?>
						<div <?php Phpfox::getBlock('core.template-holdername'); ?>>		
							<div <?php echo (defined('PHPFOX_IS_PAGES_VIEW') ? 'id="js_is_page"' : ''); ?> class="holder<?php if (( defined ( 'PHPFOX_IS_USER_PROFILE_INDEX' ) || defined ( 'PHPFOX_IS_PAGES_IS_INDEX' ) ) && Phpfox ::getService('profile')->timeline()): ?> js_is_profile_timeline<?php endif; ?>">	
								
<?php Phpfox::getBlock('profile.logo', array()); ?>
								
								<div id="content_holder"<?php if (isset ( $this->_aVars['sMicroPropType'] )): ?> itemscope itemtype="http://schema.org/<?php echo $this->_aVars['sMicroPropType']; ?>"<?php endif; ?>>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 13)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('13'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 13<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("13"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 13)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('13');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('13', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_13"> <div class="block js_sortable dnd_block_info">Position '13'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('13', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_13">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('13', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '13'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('13', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 13));  endif;  endif; ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 7)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('7'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 7<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("7"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 7)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('7');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('7', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_7"> <div class="block js_sortable dnd_block_info">Position '7'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('7', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_7">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('7', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '7'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('7', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 7));  endif;  endif; ?>
<?php if (! defined ( 'PHPFOX_IS_USER_PROFILE' ) && ! defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
									
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 12)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('12'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 12<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("12"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 12)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('12');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_12"> <div class="block js_sortable dnd_block_info">Position '12'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_12">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('12', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '12'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 12));  endif;  endif; ?>
<?php endif; ?>
		
<?php if (! $this->_aVars['bUseFullSite']): ?>
<?php if (defined ( 'PHPFOX_IN_DESIGN_MODE' ) && Phpfox ::getService('profile')->timeline()): ?>
									
<?php else: ?>
									<div id="left" class="content_column">
									
<?php if (defined ( 'PHPFOX_IS_USER_PROFILE' ) || defined ( 'PHPFOX_IS_PAGES_VIEW' ) || ! Phpfox ::isUser()): ?>
<?php Phpfox::getBlock('core.template-menusub'); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('1'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 1<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("1"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('1');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_1"> <div class="block js_sortable dnd_block_info">Position '1'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_1">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('1', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '1'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 1));  endif;  endif; ?>
<?php else: ?>
										<div id="nb_name">
											<div class="nb_name_image">
<?php echo Phpfox::getLib('phpfox.image.helper')->display(array('user' => $this->_aVars['aGlobalUser'],'suffix' => '_50_square','max_width' => 40,'max_height' => 40)); ?>
											</div>
											<div class="nb_name_info">
												<a href="<?php echo $this->_aVars['sUserProfileUrl']; ?>" class="nb_name_link"><?php echo $this->_aVars['sCurrentUserName']; ?></a>
												<div class="nb_name_edit">
													<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('user.profile'); ?>"><?php echo Phpfox::getPhrase('theme.edit_profile'); ?></a>
												</div>
											</div>
										</div>
										<div class="global_apps_title title"><?php echo Phpfox::getPhrase('favorite.welcome_favorites'); ?></div>
<div class="sub_section_menu global_apps_title_padding"><ul>
<li class="active"><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl(''); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/news_feed.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('feed.news_feed'); ?></span><span id="js_menu_loader" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('mail'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader2').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/mail.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('mail.messages_notify'); ?></span><span id="js_menu_loader2" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('event'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader3').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/events.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('event.events'); ?></span><span id="js_menu_loader3" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('photo'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader4').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/photos.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('user.photos'); ?></span><span id="js_menu_loader4" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
</ul></div>

<div class="global_apps_title title"><?php echo Phpfox::getPhrase('user.custom_interests'); ?></div>
<div class="sub_section_menu global_apps_title_padding"><ul>
<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('user.browse'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader5').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/find_friends.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('invite.find_friends'); ?></span><span id="js_menu_loader5" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
<!--<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('listing'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader6').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/marketplace.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('search.listings'); ?></span><span id="js_menu_loader6" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>-->
<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('video'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader7').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/videos.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('video.videos'); ?></span><span id="js_menu_loader7" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('music'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader8').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/music.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('music.music'); ?></span><span id="js_menu_loader8" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
</ul></div>

<table border=0 width=100%><tr>
<td><div align="left"><div class="global_apps_title title"><?php echo Phpfox::getPhrase('apps.apps'); ?></div></div></td>
<td><?php if (count ( $this->_aVars['aInstalledApps'] ) > $this->_aVars['iPageLimit']): ?><div align="right"><div class="global_apps_title2 title"><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('apps', array('view' => 'installed')); ?>"><?php echo Phpfox::getPhrase('core.welcome_more'); ?></a></div></div><?php endif; ?></td>
</tr></table>
<div class="sub_section_menu global_apps_title_padding">
<ul>
<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('apps'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader9').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/create_an_app.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('apps.create_an_app'); ?></span><span id="js_menu_loader9" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
<?php if (is_array ( $this->_aVars['aInstalledApps'] ) && count ( $this->_aVars['aInstalledApps'] )): ?>
<?php if (count((array)$this->_aVars['aInstalledApps'])):  foreach ((array) $this->_aVars['aInstalledApps'] as $this->_aVars['aInstalledApp']): ?>
<li><a href="<?php echo Phpfox::permalink('apps', $this->_aVars['aInstalledApp']['app_id'], $this->_aVars['aInstalledApp']['app_title'], false, null, (array) array (
)); ?>" title="<?php echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aInstalledApp']['app_title']); ?>"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('server_id' => 0,'path' => 'app.url_image','file' => $this->_aVars['aInstalledApp']['image_path'],'suffix' => '_square','max_width' => 16,'max_height' => 16,'title' => $this->_aVars['aInstalledApp']['app_title'],'class' => 'v_middle')); ?><span class="mntitle"><?php echo Phpfox::getLib('phpfox.parse.output')->shorten(Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aInstalledApp']['app_title']), 22, '...'); ?></span></a></li>
<?php endforeach; endif;  endif; ?>
</ul>
</div>

<table border=0 width=100%>
<tr>
<td><div align="left"><div class="global_apps_title title"><?php echo Phpfox::getPhrase('pages.module_pages'); ?></div></div></td>
<td><?php if (count ( $this->_aVars['aInstalledPages'] ) > $this->_aVars['iPageLimit']): ?><div align="right"><div class="global_apps_title2 title" style="margin-right:5px;"><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('pages', array('view' => 'my')); ?>"><?php echo Phpfox::getPhrase('pages.more'); ?></a></div></div><?php endif; ?></td>
</tr>
</table>
<div class="sub_section_menu global_apps_title_padding">
<ul><li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('pages.add'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader10').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/create_a_page.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('pages.create_a_page'); ?></span><span id="js_menu_loader10" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li>
<li><a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('pages'); ?>" onclick="$('#js_menu').hide(); $.ajaxCall('core.event_page'); $('#js_menu_loader11').show();"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'favorites/pages.png','class' => 'v_middle')); ?><span class="bar_menu_title"><?php echo Phpfox::getPhrase('pages.module_pages'); ?></span><span id="js_menu_loader11" class="menu_title_float"><?php echo Phpfox::getLib('phpfox.image.helper')->display(array('theme' => 'ajax/add_menu.gif')); ?></span></a></li></ul></div>
										<div id="nb_favorites" class="block">
											<div class="title">
												<a href="#" class="nb_edit_block_title"><?php echo Phpfox::getPhrase('theme.edit'); ?></a>
<?php echo Phpfox::getPhrase('theme.favorites'); ?>
											</div>
											<div id="nb_main_menu">
<?php $this->assign('iTotalHide', 4); ?>
<?php Phpfox::getBlock('core.template-menu'); ?>
											</div>		
										</div>
										
<?php if (Phpfox ::getLib('module')->getFullControllerName() == 'core.index-member'): ?>
<?php Phpfox::getBlock('core.template-menusub'); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('1'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 1<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("1"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('1');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_1"> <div class="block js_sortable dnd_block_info">Position '1'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_1">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('1', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '1'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 1));  endif;  endif; ?>
										
										<a href="<?php echo Phpfox::getLib('phpfox.url')->makeUrl('core.index-member.customize'); ?>" class="no_ajax_link nb_customize_dash"><?php echo Phpfox::getPhrase('core.customize_dashboard'); ?></a>
										
<?php endif; ?>
															
<?php endif; ?>
										
									</div>	
<?php endif; ?>
<?php endif; ?>
		
									<div id="main_content">
												
<?php if (! defined ( 'PHPFOX_IS_USER_PROFILE' ) && ! defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
<?php if (!$this->bIsSample):  $this->getLayout('breadcrumb');  endif; ?>
<?php if (!$this->bIsSample):  $this->getLayout('search');  endif; ?>
<?php endif; ?>
										<div id="main_content_padding">
		
<?php if (defined ( 'PHPFOX_IS_USER_PROFILE' ) || defined ( 'PHPFOX_IS_PAGES_VIEW' ) || ( isset ( $this->_aVars['aPage'] ) && isset ( $this->_aVars['aPage']['use_timeline'] ) && $this->_aVars['aPage']['use_timeline'] )): ?>
<?php if ($this->_aVars['bLoadedProfileHeader'] = true):  endif; ?>
<?php Phpfox::getBlock('profile.header', array()); ?>
<?php endif; ?>
<?php if (defined ( 'PHPFOX_IS_PAGES_VIEW' ) && ! isset ( $this->_aVars['bLoadedProfileHeader'] )): ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 12)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('12'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 12<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("12"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 12)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('12');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_12"> <div class="block js_sortable dnd_block_info">Position '12'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_12">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('12', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '12'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('12', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 12));  endif;  endif; ?>
<?php Phpfox::getBlock('pages.header', array()); ?>
<?php endif; ?>
		
											<div id="content_load_data">
<?php if (isset ( $this->_aVars['bIsAjaxLoader'] ) || defined ( 'PHPFOX_IS_USER_PROFILE' ) || defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
<?php if (!$this->bIsSample):  $this->getLayout('search');  endif; ?>
<?php endif; ?>
		
<?php if (isset ( $this->_aVars['aBreadCrumbTitle'] ) && count ( $this->_aVars['aBreadCrumbTitle'] )): ?>
												<h1><a href="<?php echo $this->_aVars['aBreadCrumbTitle'][1]; ?>"><?php echo Phpfox::getLib('phpfox.parse.output')->split(Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aBreadCrumbTitle'][0]), 30); ?></a></h1>
<?php endif; ?>
		
												<div id="content" <?php Phpfox::getBlock('core.template-contentclass'); ?>>
													
<?php if (!$this->bIsSample):  $this->getLayout('error');  endif; ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 2)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('2'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 2<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("2"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 2)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('2');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_2"> <div class="block js_sortable dnd_block_info">Position '2'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_2">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('2', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '2'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('2', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 2));  endif;  endif; ?>
<?php if (!$this->bIsSample): ?><div id="site_content"><?php if (isset($this->_aVars['bSearchFailed'])): ?><div class="message">Unable to find anything with your search criteria.</div><?php else:  $sController = "core.index-member";  if ( Phpfox::getLib("template")->shouldLoadDelayed("core.index-member") == true ): ?>
<div id="delayed_block_image" style="text-align:center; padding-top:20px;"><img src="http://snsp.vn/theme/frontend/bookbulk/style/bookbulk/image/ajax/add.gif" alt="" /></div>
<div id="delayed_block" style="display:none;"><?php echo Phpfox::getLib('phpfox.module')->getFullControllerName(); ?></div>
<?php else:  Phpfox::getLib('phpfox.module')->getControllerTemplate();  endif;  endif; ?></div><?php endif; ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 4)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('4'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 4<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("4"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 4)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('4');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_4"> <div class="block js_sortable dnd_block_info">Position '4'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_4">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('4', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '4'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('4', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 4));  endif;  endif; ?>
															
												</div>
		
<?php if (! $this->_aVars['bUseFullSite']): ?>
												
												<div id="right" class="content_column">
<?php if (! Phpfox ::isUser() || Phpfox ::getLib('module')->getFullControllerName() == 'core.index-member' || defined ( 'PHPFOX_IS_USER_PROFILE' ) || defined ( 'PHPFOX_IS_PAGES_VIEW' )): ?>
													
<?php else: ?>
<?php Phpfox::getBlock('core.template-menusub'); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('1'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 1<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("1"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 1)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('1');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_1"> <div class="block js_sortable dnd_block_info">Position '1'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_1">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('1', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '1'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('1', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 1));  endif;  endif; ?>
<?php endif; ?>
<?php unset($this->_aVars['aMenu']); ?>
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 3)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('3'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 3<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("3"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 3)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('3');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('3', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_3"> <div class="block js_sortable dnd_block_info">Position '3'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('3', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_3">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('3', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '3'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('3', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 3));  endif;  endif; ?>
												</div>
												
<?php endif; ?>
		
												<div class="clear"></div>							
											</div>												
										</div>				
									</div>
									<div class="clear"></div>			
								</div>		
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 8)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('8'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 8<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("8"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 8)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('8');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('8', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_8"> <div class="block js_sortable dnd_block_info">Position '8'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('8', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_8">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('8', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '8'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('8', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 8));  endif;  endif; ?>
								
								<div class="holder<?php if ($this->_aVars['bUseFullSite']): ?> nb_footer_full<?php else:  if (defined ( 'PHPFOX_IS_USER_PROFILE_INDEX' ) && Phpfox ::getService('profile')->timeline()): ?> js_is_profile_timeline<?php endif;  endif; ?>">
									<div id="nb_footer">
<?php Phpfox::getBlock('core.template-menufooter'); ?>
									<div id="nb_copyright">
<?php Phpfox::getBlock('core.template-copyright'); ?>
									</div>				
<?php if ($this->bIsSample):  if (defined('PHPFOX_NO_WINDOW_CLICK')):  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 5)); endif;  else: ?><div class="sample"<?php echo (!defined('PHPFOX_NO_WINDOW_CLICK') ? " onclick=\"window.parent.$('#location').val('5'); window.parent.tb_remove();\"" : ' style="cursor:default;"'); ?>><?php echo Phpfox::getPhrase('core.block') ; ?> 5<?php if (defined('PHPFOX_IS_AD_SAMPLE')): echo Phpfox::getService('ad')->getSizeForBlock("5"); endif;  if (defined('PHPFOX_IS_AD_SAMPLE')): Phpfox::getBlock('ad.sample', array('block_id' => 5)); endif; ?></div><?php endif;  else:  $aBlocks = Phpfox::getLib('phpfox.module')->getModuleBlocks('5');  $aUrl = Phpfox::getLib('url')->getParams();  $bDesigning = Phpfox::getService("theme")->isInDnDMode();  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('5', array(1, 2, 3))))):?> <div class="js_can_move_blocks js_sortable_empty" id="js_can_move_blocks_5"> <div class="block js_sortable dnd_block_info">Position '5'</div></div><?php endif;  foreach ((array)$aBlocks as $sBlock):  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('5', array(1, 2, 3))))):?>
<div class="js_can_move_blocks" id="js_can_move_blocks_5">
<?php endif;  if (is_array($sBlock) && (!defined('PHPFOX_CAN_MOVE_BLOCKS') || !in_array('5', array(1, 2, 3, 4)))):  eval(' ?>' . $sBlock[0] . '<?php ');  else:  Phpfox::getBlock($sBlock, array('location' => '5'));  endif;  if (!Phpfox::isAdminPanel() && ( (defined('PHPFOX_DESIGN_DND') && PHPFOX_DESIGN_DND) || $bDesigning || (defined("PHPFOX_IN_DESIGN_MODE") && PHPFOX_IN_DESIGN_MODE && in_array('5', array(1, 2, 3))))):?></div><?php endif;  endforeach;  if (!Phpfox::isAdminPanel()):  Phpfox::getBlock('ad.display', array('block_id' => 5));  endif;  endif; ?>
									</div>				
								</div>
							</div>							
						</div>			
<?php if (! PHPFOX_IS_AJAX_PAGE): ?>
					</div>				
                                        
<?php Phpfox::getBlock('core.template-footer'); ?>
				</div>		
			</div>		
		</div>		
	

</body>
</html>
<?php endif; ?>
