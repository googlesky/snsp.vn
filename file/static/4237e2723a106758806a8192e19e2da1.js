
 /* static\jscript\common.js */var sClientInfo=navigator.userAgent.toLowerCase();var bIsIE=(sClientInfo.indexOf("msie")!=-1);var bIsWin=((sClientInfo.indexOf("win")!=-1)||(sClientInfo.indexOf("16bit")!=-1));function getParam(sParam)
{return oParams[sParam];}
function getPhrase(sParam)
{return oTranslations[sParam];}
function isModule(sModule)
{return(typeof(oModules[sModule])!='undefined'?true:false);}
function debug(sMessage)
{if(getCookie('js_console'))
{if($('#firebug_no_console').length<=0)
{var $sConsole='';$sConsole+='<div id="firebug_no_console" style="position:fixed; bottom:0px; left:0px; z-index:9000; border-top:2px #000 solid; width:100%; text-align:left;">';$sConsole+='<div style="background:#5F5F5F; color:#fff; padding:4px; font-size:14px; font-weight:bold;">Javascript Console</div>';$sConsole+='<div style="background:#5F5F5F; color:#fff; padding:4px; font-size:12px; font-weight:bold; border-top:1px #3F3F3F solid;"><a href="#" onclick="$(\'#firebug_no_console_content\').html(\'\'); return false;">Clear</a></div>';$sConsole+='<div id="firebug_no_console_content" style="height:200px; overflow:auto; background:#0F0F0F; color:#fff;"></div>';$sConsole+='</div>';$('body').prepend($sConsole);}
$('#firebug_no_console_content').prepend('<div style="border-bottom:1px #4F4F4F solid; padding:5px 0px 5px 10px;">'+sMessage+'</div>');}
if(typeof console==='undefined'||typeof console.log=='undefined')
{return false;}
console.log(sMessage);}
function p(sMessage)
{debug(sMessage);}
function d(aArray)
{p(print_r(aArray,true));}
function setCookie(name,value,expires)
{var today=new Date();today.setTime(today.getTime());if(expires)
{expires=expires*1000*60*60*24;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=getParam('sJsCookiePrefix')+name+"="+escape(value)+
((expires)?";expires="+expires_date.toGMTString():"")+
((getParam('sJsCookiePath'))?";path="+getParam('sJsCookiePath'):"")+
((getParam('sJsCookieDomain'))?";domain="+getParam('sJsCookieDomain'):"");debug('Adding Cookie: '+name+' -> '+value);}
function deleteCookie(name)
{if(this.getCookie(name))
{document.cookie=getParam('sJsCookiePrefix')+name+"="+
((getParam('sJsCookiePath'))?";path="+getParam('sJsCookiePath'):"")+
((getParam('sJsCookieDomain'))?";domain="+getParam('sJsCookieDomain'):"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";debug('Deleting Cookie: '+name);}}
function getCookie(check_name)
{var a_all_cookies=document.cookie.split(';');var a_temp_cookie='';var cookie_name='';var cookie_value='';var b_cookie_found=false;var check_name=getParam('sJsCookiePrefix')+check_name;for(var i=0;i<a_all_cookies.length;i++)
{a_temp_cookie=a_all_cookies[i].split('=');cookie_name=a_temp_cookie[0].replace(/^\s+|\s+$/g,'');if(cookie_name==check_name)
{b_cookie_found=true;if(a_temp_cookie.length>1)
{cookie_value=unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g,''));}
return cookie_value;break;}
a_temp_cookie=null;cookie_name='';}
if(!b_cookie_found)
{return null;}}
function parse(strInputCode)
{strInputCode=strInputCode.replace(/&(lt|gt);/g,function(strMatch,p1)
{return(p1=="lt")?"<":">";});return strInputCode.replace(/<\/?[^>]+(>|$)/g,"");}
function substr(sString,iStart,iLength)
{if(iStart<0)
{iStart+=sString.length;}
if(iLength==undefined)
{iLength=sString.length;}
else if(iLength<0)
{iLength+=sString.length;}
else
{iLength+=iStart;}
if(iLength<iStart)
{iLength=iStart;}
return sString.substring(iStart,iLength);}
function str_repeat(str,repeat)
{var output='';for(var i=0;i<repeat;i++)
{output+=str;}
return output;}
function print_r(array,return_val)
{var output="",pad_char=" ",pad_val=4;var formatArray=function(obj,cur_depth,pad_val,pad_char)
{if(cur_depth>0)
{cur_depth++;}
var base_pad=repeat_char(pad_val*cur_depth,pad_char);var thick_pad=repeat_char(pad_val*(cur_depth+1),pad_char);var str="";if(obj instanceof Array||obj instanceof Object){str+="Array\n"+base_pad+"(\n";for(var key in obj){if(obj[key]instanceof Array){str+=thick_pad+"["+key+"] => "+formatArray(obj[key],cur_depth+1,pad_val,pad_char);}else{str+=thick_pad+"["+key+"] => "+obj[key]+"\n";}}
str+=base_pad+")\n";}else if(obj==null||obj==undefined){str='';}else{str=obj.toString();}
return str;};var repeat_char=function(len,pad_char){var str="";for(var i=0;i<len;i++){str+=pad_char;};return str;};output=formatArray(array,0,pad_val,pad_char);if(return_val!==true){document.write("<pre>"+output+"</pre>");return true;}else{return output;}}
function isset()
{var a=arguments;var l=a.length;var i=0;if(l==0){throw new Error('Empty isset');}
while(i!=l){if(typeof(a[i])=='undefined'||a[i]===null){return false;}else{i++;}}
return true;}
function empty(mixed_var){var key;if(mixed_var===""||mixed_var===0||mixed_var==="0"||mixed_var===null||mixed_var===false||mixed_var===undefined||trim(mixed_var)==""){return true;}
if(typeof mixed_var=='object'){for(key in mixed_var){if(typeof mixed_var[key]!=='function'){return false;}}
return true;}
return false;}
function trim(str,charlist){var whitespace,l=0,i=0;str+='';if(!charlist){whitespace=" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";}else{charlist+='';whitespace=charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'\$1');}
l=str.length;for(i=0;i<l;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break;}}
l=str.length;for(i=l-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break;}}
return whitespace.indexOf(str.charAt(0))===-1?str:'';}
function ltrim(str,charlist){charlist=!charlist?' \s\xA0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'\$1');var re=new RegExp('^['+charlist+']+','g');return(str+'').replace(re,'');}
function rtrim(str,charlist){charlist=!charlist?' \s\xA0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'\$1');var re=new RegExp('['+charlist+']+$','g');return(str+'').replace(re,'');}
function function_exists(function_name){if(typeof function_name=='string'){return(typeof window[function_name]=='function');}else{return(function_name instanceof Function);}}
function explode(delimiter,string,limit){var emptyArray={0:''};if(arguments.length<2||typeof arguments[0]=='undefined'||typeof arguments[1]=='undefined')
{return null;}
if(delimiter===''||delimiter===false||delimiter===null)
{return false;}
if(typeof delimiter=='function'||typeof delimiter=='object'||typeof string=='function'||typeof string=='object')
{return emptyArray;}
if(delimiter===true){delimiter='1';}
if(!limit){return string.toString().split(delimiter.toString());}else{var splitted=string.toString().split(delimiter.toString());var partA=splitted.splice(0,limit-1);var partB=splitted.join(delimiter.toString());partA.push(partB);return partA;}}
function in_array(needle,haystack,strict){var found=false,key,strict=!!strict;for(key in haystack){if((strict&&haystack[key]===needle)||(!strict&&haystack[key]==needle)){found=true;break;}}
return found;}
function getResizedWindow()
{var myWidth=0;var myHeight=0;if(typeof(window.innerWidth)=='number')
{myWidth=window.innerWidth;myHeight=window.innerHeight;}
else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))
{myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight;}else if(document.body&&(document.body.clientWidth||document.body.clientHeight))
{myWidth=document.body.clientWidth;myHeight=document.body.clientHeight;}
return myHeight;}
function htmlspecialchars(string,quote_style,charset,double_encode){var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'||quote_style===null){quote_style=2;}
string=string.toString();if(double_encode!==false){string=string.replace(/&/g,'&amp;');}
string=string.replace(/</g,'&lt;').replace(/>/g,'&gt;');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true;}
if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true;}
else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]];}}
quote_style=optTemp;}
if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/'/g,'&#039;');}
if(!noquotes){string=string.replace(/"/g,'&quot;');}
return string;}
function getPageScroll(){var xScroll;var yScroll;if(self.pageYOffset){yScroll=self.pageYOffset;xScroll=self.pageXOffset;}else if(document.documentElement&&document.documentElement.scrollTop){yScroll=document.documentElement.scrollTop;xScroll=document.documentElement.scrollLeft;}else if(document.body){yScroll=document.body.scrollTop;xScroll=document.body.scrollLeft;}
return new Array(xScroll,yScroll);}
function getPageHeight(){var windowHeight;if(self.innerHeight){windowHeight=self.innerHeight;}else if(document.documentElement&&document.documentElement.clientHeight){windowHeight=document.documentElement.clientHeight;}else if(document.body){windowHeight=document.body.clientHeight;}
return windowHeight;}
function htmlentities(str){return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function parse_url(str,component){var o={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var m=o.parser[o.strictMode?"strict":"loose"].exec(str),uri={},i=14;while(i--){uri[o.key[i]]=m[i]||"";}
switch(component){case'PHP_URL_SCHEME':return uri.protocol;case'PHP_URL_HOST':return uri.host;case'PHP_URL_PORT':return uri.port;case'PHP_URL_USER':return uri.user;case'PHP_URL_PASS':return uri.password;case'PHP_URL_PATH':return uri.path;case'PHP_URL_QUERY':return uri.query;case'PHP_URL_FRAGMENT':return uri.anchor;default:var retArr={};if(uri.protocol!==''){retArr.scheme=uri.protocol;}
if(uri.host!==''){retArr.host=uri.host;}
if(uri.port!==''){retArr.port=uri.port;}
if(uri.user!==''){retArr.user=uri.user;}
if(uri.password!==''){retArr.pass=uri.password;}
if(uri.path!==''){retArr.path=uri.path;}
if(uri.query!==''){retArr.query=uri.query;}
if(uri.anchor!==''){retArr.fragment=uri.anchor;}
return retArr;}}
function isScrolledIntoView(elem)
{if(!$Core.exists(elem)){return;}
var docViewTop=$(window).scrollTop();var docViewBottom=docViewTop+$(window).height();var elemTop=$(elem).offset().top;var elemBottom=elemTop+$(elem).height();return((docViewTop<elemTop)&&(docViewBottom>elemBottom));}
 /* static\jscript\main.js */var $Cache={};var $oEventHistory={};var $oStaticHistory={};var $bDocumentIsLoaded=false;if(typeof window.console=='undefined')
{window.console={log:function(sTxt){}};}
if(typeof window.console.log=='undefined')
{window.console.log=function(sTxt){};}
$.fn.message=function(sMessage,sType)
{switch(sType)
{case'valid':sClass='valid_message';break;case'error':sClass='error_message';break;case'public':sClass='public_message';break;}
this.html(this.html()+'<div class="'+sClass+'">'+sMessage+'</\div>');return this;};$.getParams=function(sUrl)
{var aArgs=sUrl.split('#');var aArgsFinal=aArgs[1].split('?');var aFinal=aArgsFinal[1].split('&');var aUrlParams=Array();for(count=0;count<aFinal.length;count++)
{var aArg=aFinal[count].split('=');aUrlParams[aArg[0]]=aArg[1];}
return aUrlParams;};$.ajaxProcess=function(sMessage,sSize)
{sMessage=(sMessage?sMessage:getPhrase('core.processing'));if(empty(sSize))
{sSize='small';}
return'<span style="margin-left:4px; margin-right:4px; font-size:9pt; font-weight:normal;"><img src="'+eval('oJsImages.ajax_'+sSize+'')+'" class="v_middle" /> '+(sMessage==='no_message'?'':sMessage+'...')+'</span>';};$Behavior.imageHoverHolder=function()
{$('body').click(function(){$('.image_hover_menu_link').each(function(){if($(this).hasClass('image_hover_active'))
{$(this).removeClass('image_hover_active');$(this).parent().find('.image_hover_menu:first').hide();$(this).hide();}});});$('.image_hover_holder').mouseover(function()
{if(!empty($(this).find('.image_hover_menu:first').html()))
{$(this).addClass('image_hover_holder_hover').find('.image_hover_menu_link:first').show();}});$('.image_hover_holder').mouseout(function()
{if(!$(this).find('.image_hover_menu_link').hasClass('image_hover_active'))
{$(this).removeClass('image_hover_holder_hover').find('.image_hover_menu_link:first').hide();}});$('.image_hover_menu_link').click(function(){var oMenu=$(this).parent().find('.image_hover_menu:first');if($(this).hasClass('image_hover_active'))
{$(this).removeClass('image_hover_active');oMenu.hide();return false;}
$('.image_hover_menu_link').each(function(){if($(this).hasClass('image_hover_active'))
{$(this).removeClass('image_hover_active');$(this).parent().find('.image_hover_menu:first').hide();$(this).hide();}});$(this).addClass('image_hover_active');oMenu.show();return false;});};$Behavior.targetBlank=function()
{$('.targetBlank').click(function()
{window.open($(this).get(0).href);return false;});};var bCacheIsHover=false;$Behavior.dropDown=function()
{$('.sJsDropMenu').click(function()
{$(this).blur();$('.dropContent').hide();$('.sub_menu_bar li a').removeClass('is_already_open');if($(this).hasClass('is_already_open'))
{$(this).parent().find('.dropContent:first').hide();$(this).removeClass('is_already_open');}
else
{$(this).parent().find('.dropContent:first').show();$(this).addClass('is_already_open');}
return false;});$('.dropContent').mouseover(function(){bCacheIsHover=true;});$('.dropContent').mouseout(function(){bCacheIsHover=false;});$('body').click(function()
{if(!bCacheIsHover){$('.dropContent').hide();$('.sub_menu_bar li a').each(function(){if($(this).hasClass('is_already_open')){$(this).removeClass('is_already_open');}});}});};$Behavior.goJump=function()
{$('.goJump').change(function()
{if($(this).get(0).value=="")
{return false;}
if($(this).get(0).value.search(/delete/i)!=-1&&!confirm(getPhrase('core.are_you_sure')))
{return false;}
window.location.href=$(this).get(0).value;});};$Behavior.inlinePopup=function()
{$('.inlinePopup').click(function()
{var $aParams=$.getParams($(this).get(0).href);var sParams='&tb=true';for(sVar in $aParams)
{sParams+='&'+sVar+'='+$aParams[sVar]+'';}
sParams=sParams.substr(1,sParams.length);tb_show($(this).get(0).title,$.ajaxBox($aParams['call'],sParams));return false;});};$Behavior.blockClick=function()
{$('.block .menu ul li a').click(function()
{$(this).parents('.block:first').find('li').removeClass('active');$(this).parent().addClass('active');if(this.href.match(/#/))
{var aParts=explode('#',this.href);var aParams=explode('?',aParts[1]);var aParamParts=explode('&',aParams[1]);var aRequest=Array();for(count in aParamParts)
{var aPart=explode('=',aParamParts[count]);aRequest[aPart[0]]=aPart[1];}
$('.js_block_click_lis_cache').remove();$(this).parents('.menu:first').find('ul').append('<li class="js_block_click_lis_cache" style="margin-top:2px;">'+$.ajaxProcess('no_message')+'</li>');$.ajaxCall(aParams[0],aParams[1]+'&js_block_click_lis_cache=true','GET');}
return false;});};$Behavior.deleteLink=function()
{$('.delete_link').click(function()
{if(confirm(getPhrase('core.are_you_sure')))
{$aParams=$.getParams($(this).get(0).href);var sParams='';for(sVar in $aParams)
{sParams+='&'+sVar+'='+$aParams[sVar]+'';}
sParams=sParams.substr(1,sParams.length);$.ajaxCall($aParams['call'],sParams);}
return false;});};$Behavior.globalToolTip=function()
{if($('#js_global_tooltip').length<=0)
{$('body').prepend('<div id="js_global_tooltip" style="display:none;"></div>');}
$('.js_hover_title').mouseover(function()
{var offset=$(this).offset();var sContent='';if(isset($(this).find('.js_hover_info'))&&$(this).find('.js_hover_info').html()!==null&&$(this).find('.js_hover_info').html().length<1)
{}
else
{$('#js_global_tooltip').css('display','block');$('#js_global_tooltip').css('left',(offset.left-10)+'px');if($(this).find('.js_hover_info').length>0)
{sContent=$(this).find('.js_hover_info').html();}
else
{var oParent=$(this).parent();if(!empty(oParent.attr('title')))
{oParent.data('title',oParent.attr('title')).removeAttr('title');}
sContent=oParent.data('title');}
$('#js_global_tooltip').html('<div id="js_global_tooltip_display">'+sContent+'</div>');$('#js_global_tooltip').css('top',(offset.top-($('#js_global_tooltip_display').height()+10))+'px');}});$('.js_hover_title').mouseout(function()
{$('#js_global_tooltip').hide().html('').css('top','0px').css('left','0px');});};$Behavior.clearTextareaValue=function()
{$('.js_comment_text_area #text').focus(function()
{if($(this).val()==$('#js_comment_write_phrase').html())
{$(this).val('');}});};$Behavior.loadEditor=function()
{if((!getParam('bWysiwyg')||typeof(bForceDefaultEditor)!='undefined')&&typeof(Editor)=='object')
{Editor.getEditors();}};var sMoreFeedIds={};$Core.loadMoreFeeds=function()
{$Core.bRebuiltActivityFeed=false;$.ajaxCall('feed.appendMore','ids='+sMoreFeedIds,'GET');return false;};$Core.bRebuiltActivityFeed=false;$Core.rebuildActivityFeedCount=function(iTotal,sIds)
{sMoreFeedIds=sIds;$('.activity_feed_updates_link').hide();if(iTotal&&$Core.bRebuiltActivityFeed==true)
{$('#activity_feed_updates_link_holder').show();if(iTotal==1)
{$('#activity_feed_updates_link_single').show();}
else
{$('#activity_feed_updates_link_plural').show();$('#js_new_update_view').html(iTotal);}}
else
{$('#activity_feed_updates_link_holder').hide();$Core.bRebuiltActivityFeed=true;}};$Core.reloadActivityFeed=function(){if($('#sHashTagValue').length<1)
{setTimeout("$.ajaxCall('feed.reloadActivityFeed', 'reload-ids=' + $Core.getCurrentFeedIds(), 'GET');",2000);}};$Core.getCurrentFeedIds=function()
{var sMoreFeedIds='';$('.js_parent_feed_entry').each(function(){sMoreFeedIds+=$(this).attr('id').replace('js_item_feed_','')+',';});return sMoreFeedIds;};$Core.processForm=function(sSelector,bReset)
{if(bReset===true)
{$(sSelector).find('.button:first').removeClass('button_off').attr('disabled',false);$(sSelector).find('.table_clear_ajax').hide();}
else
{$(sSelector).find('.button:first').addClass('button_off').attr('disabled',true);$(sSelector).find('.table_clear_ajax').show();}};$Core.exists=function(sSelector)
{return($(sSelector).length>0?true:false);};$Core.searchFriends=function($aParams)
{if(typeof($Core.searchFriendsInput)=='undefined'){return;}
$Core.searchFriendsInput.init($aParams);};$Core.loadStaticFile=function($aFiles)
{$Core.loadStaticFiles($aFiles);};var sCustomHistoryUrl='';$Core.loadStaticFiles=function($aFiles)
{if(typeof($aFiles)=='string')
{$aFiles=new Array($aFiles);}
if(!$bDocumentIsLoaded)
{if(!isset($Cache['post_static_files']))
{$Cache['post_static_files']=new Array();}
$Cache['post_static_files'].push($aFiles);return;}
$Core.dynamic_js_files=0;$($aFiles).each(function($sKey,$sFile){if(substr($sFile,-3)=='.js'&&!isset($oStaticHistory[$sFile]))
{$Core.dynamic_js_files++;}});$($aFiles).each(function($sKey,$sFile)
{if(!isset($oStaticHistory[$sFile]))
{$oStaticHistory[$sFile]=true;if(substr($sFile,-3)=='.js')
{$.ajax($sFile).always(function(){$Core.dynamic_js_files--;});}
else if(substr($sFile,-4)=='.css')
{var sCustomId='';if(substr($sFile,-10)=='custom.css'){sCustomHistoryUrl=$sFile;sCustomId='js_custom_css_loader';}
$('head').append('<link '+sCustomId+' rel="stylesheet" type="text/css" href="'+$sFile+'?v='+getParam('sStaticVersion')+'" />');}
else
{eval($sFile);}}
else
{if(substr($sFile,-10)=='custom.css'){sCustomHistoryUrl=$sFile;}}});if(!empty(sCustomHistoryUrl)){$('#js_custom_css_loader').remove();$('head').append('<link id="js_custom_css_loader" rel="stylesheet" type="text/css" href="'+sCustomHistoryUrl+'?v='+getParam('sStaticVersion')+'" />');}};$Behavior.globalInit=function()
{$('.sJsConfirm').click(function()
{if(confirm(getPhrase('core.are_you_sure')))
{return true;}
return false;});$('#select_lang_pack').click(function()
{tb_show(oTranslations['core.language_packages'],$.ajaxBox('language.select','height=300&amp;width=300'));return false;});if(!oCore['core.is_admincp'])
{if($('#country_iso').length>0&&!empty(oCore['core.country_iso']))
{if(empty($('#country_iso').val()))
{$('#js_country_iso_option_'+oCore['core.country_iso']).attr('selected',true);}}}
$('.js_item_active').click(function()
{$(this).parent().find('.js_item_active input').attr('checked',false);if($(this).hasClass('item_is_active'))
{$(this).parent().find('.item_is_active input').attr('checked',true);}
else
{$(this).parent().find('.item_is_not_active input').attr('checked',true);}});if($('.moderate_link').length>0)
{$('.moderation_drop').click(function()
{if(parseInt($('.js_global_multi_total').html())===0)
{return false;}
if($(this).hasClass('is_clicked'))
{$('.moderation_holder ul').hide();$(this).removeClass('is_clicked');}
else
{$('.moderation_holder ul').show();$('.moderation_holder ul').css({'margin-top':'-'+($(this).height()+$('.moderation_holder ul').height()+4)+'px'});$(this).addClass('is_clicked');}
return false;});var iEmptyModLinks=0;$('.moderate_link').each(function()
{var sName='js_item_m_'+$(this).attr('rel')+'_'+$(this).attr('href').replace('#','');if(getCookie(sName))
{$(this).addClass('moderate_link_active');}
else
{iEmptyModLinks++;}});if(iEmptyModLinks===0)
{$('.moderation_action_unselect').show();$('.moderation_action_select').hide();}}
$('.moderation_process_action').click(function()
{if($(this).attr('rel')=='mail.mailThreadAction'&&$(this).attr('href').replace('#','')=='forward'){var sGlobalModeration='';$('.js_global_item_moderate').each(function(){sGlobalModeration+=','+parseInt($(this).val());});$Core.box('mail.compose',500,'forward_thread_id='+$('#js_forward_thread_id').val()+'&forwards='+sGlobalModeration);$Core.moderationLinkClear();}
else if($(this).attr('rel')=='mail.archive'&&$(this).attr('href').replace('#','')=='export'){$(this).parents('form:first').submit();$Core.moderationLinkClear();}
else if($(this).attr('rel')=='mail.moderation'&&$(this).attr('href').replace('#','')=='move'){$Core.box('mail.listFolders',400);}
else{$('.moderation_process').show();$('#js_global_multi_form_holder').ajaxCall($(this).attr('rel'),'action='+$(this).attr('href').replace('#',''));$Core.moderationLinkClear();}
return false;});$('.moderation_clear_all').click(function()
{$Core.moderationLinkClear();return false;});$('.moderation_action').click(function()
{var sType=$(this).attr('rel');$(this).hide();if(sType=='select')
{$('.moderation_action_unselect').show();}
else
{$('.moderation_action_select').show();}
$('.moderate_link').each(function()
{$Core.moderationLinkClick(this,sType);});return false;});$('.moderate_link').click(function()
{return $Core.moderationLinkClick(this);});$('.page_section_menu ul li a').click(function()
{var sRel=$(this).attr('rel');if(empty(sRel))
{return true;}
$('.page_section_menu ul li').removeClass('active');$('.page_section_menu_holder').hide();$('#'+sRel).show();$(this).parent().addClass('active');if($('#page_section_menu_form').length>0)
{$('#page_section_menu_form').val(sRel);}
return false;});if($('.js_date_picker').length>0)
{var sFormat=oParams['sDateFormat'];sFormat=sFormat.charAt(0)+'/'+sFormat.charAt(1)+'/'+sFormat.charAt(2);sFormat=sFormat.replace('D','d').replace('M','m').replace('Y','yy');$('.js_date_picker').datepicker('destroy');$('.js_date_picker').datepicker({dateFormat:sFormat,onSelect:function(dateText,inst)
{var aParts=explode('/',dateText);var sMonth;var sDay;var sYear;switch(oParams['sDateFormat']){case'YMD':sMonth=ltrim(aParts[1],'0');sDay=ltrim(aParts[2],'0');sYear=aParts[0];break;case'DMY':sMonth=ltrim(aParts[1],'0');sDay=ltrim(aParts[0],'0');sYear=aParts[2];break;default:sMonth=ltrim(aParts[0],'0');sDay=ltrim(aParts[1],'0');sYear=aParts[2];break;}
$(this).parents('.js_datepicker_holder:first').find('.js_datepicker_month').val(sMonth);$(this).parents('.js_datepicker_holder:first').find('.js_datepicker_day').val(sDay);$(this).parents('.js_datepicker_holder:first').find('.js_datepicker_year').val(sYear);}});$('.js_datepicker_image').each(function(){$(this).click(function(){$(this).parent().find('.js_date_picker').datepicker('show');});});}
$('#js_login_as_page').click(function(){$Core.box('pages.login',500);return false;});$('.mobile_view_options').click(function(){$('#js_mobile_form_holder').toggle();return false;});if(typeof $.browser!='undefined'&&$.browser.msie&&parseInt($.browser.version,10)<8&&!getParam('bJsIsMobile')){$('#js_update_internet_explorer').show();}};$Core.pageSectionMenuShow=function(sId)
{$('.page_section_menu_holder').hide();$('.page_section_menu ul li').removeClass('active');$(sId).show();$('.page_section_menu ul li a').each(function()
{if($(this).attr('rel')==sId.replace('#',''))
{$(this).parent().addClass('active');return false;}});};$Core.moderationLinkClear=function()
{var aCookies=document.cookie.split(';');$(aCookies).each(function(sKey,sValue)
{if(sValue.match(/js_item_m/i))
{var aParts=explode('=',sValue);deleteCookie(trim(aParts[0].replace(getParam('sJsCookiePrefix'),'')));}});$('.moderate_link').removeClass('moderate_link_active');$('#js_global_multi_form_ids').html('');$('.js_global_multi_total').html('0');$('.moderation_drop').addClass('not_active');$('.moderation_holder ul').hide();$('.moderation_action_unselect').hide();$('.moderation_action_select').show();};$Core.moderationLinkClick=function(oObj,sType)
{var sName='js_item_m_'+$(oObj).attr('rel')+'_'+$(oObj).attr('href').replace('#','');var iTotalItems=parseInt($('.js_global_multi_total').html());if(($(oObj).hasClass('moderate_link_active')&&sType!='select')||sType=='unselect')
{$(oObj).removeClass('moderate_link_active');$('#js_global_multi_form_ids').find('.'+sName).remove();deleteCookie(sName);iTotalItems--;}
else
{if(!$(oObj).hasClass('moderate_link_active'))
{$(oObj).addClass('moderate_link_active');$('#js_global_multi_form_ids').append('<div class="'+sName+'"><input class="js_global_item_moderate" type="hidden" name="item_moderate[]" value="'+$(oObj).attr('href').replace('#','')+'" /></div>');setCookie(sName,$(oObj).attr('rel')+'_'+$(oObj).attr('href').replace('#',''),1);iTotalItems++;}}
iTotalItems=$('.moderate_link_active').length;$('.js_global_multi_total').html(iTotalItems);if(iTotalItems)
{$('.moderation_drop').removeClass('not_active');}
else
{$('.moderation_drop').addClass('not_active');}
return false;};$Behavior.privacySettingDropDown=function()
{$('body').click(function()
{$('.privacy_setting_active').each(function()
{if($(this).hasClass('is_active'))
{$(this).parent().find('.privacy_setting_holder').hide();$(this).removeClass('is_active');}});});$('.privacy_setting_active').click(function()
{var $oParent=$(this).parent().find('.privacy_setting_holder');if($(this).hasClass('is_active'))
{$oParent.hide();$(this).removeClass('is_active');}
else
{$('.privacy_setting_active').each(function()
{if($(this).hasClass('is_active'))
{$(this).parent().find('.privacy_setting_holder').hide();$(this).removeClass('is_active');}});$oParent.show();$(this).addClass('is_active');}
$('#js_global_tooltip').hide().html('').css('top','0px').css('left','0px');return false;});$('.privacy_setting_holder ul li a').click(function()
{var $oParent=$(this).parents('.privacy_setting_div:first').find('.privacy_setting_active');var $sContent=$(this).html();if($sContent.toLowerCase().indexOf('<span>')>-1)
{var $aParts=explode('<span>',$sContent);if(!isset($aParts[1]))
{$aParts=explode('<SPAN>',$sContent);}
$sContent=$aParts[0];}
$oParent.html(''+$sContent+'<span class="js_hover_info">'+$sContent+'</span>');$(this).parents('.privacy_setting_div:first').find('.privacy_setting_holder').hide();$oParent.removeClass('is_active');$(this).parents('.privacy_setting_div:first').find('input').val($(this).attr('rel'));$('.privacy_setting_holder ul li a').removeClass('is_active_image');$(this).addClass('is_active_image');return false;});};var cacheShadownInfo=false;var shadow=null;var minHeight=null;$Core.resizeTextarea=function(oObj)
{if(cacheShadownInfo===false)
{var lineHeight=oObj.css('lineHeight');minHeight=oObj.height();cacheShadownInfo=true;shadow=$('<div></div>').css({position:'absolute',top:-10000,left:-10000,width:oObj.width(),fontSize:oObj.css('fontSize'),fontFamily:oObj.css('fontFamily'),lineHeight:oObj.css('lineHeight'),resize:'none'}).appendTo(document.body);}
var val=oObj.val().replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&/g,'&amp;').replace(/\n/g,'<br/>');shadow.html(val);oObj.css('height',Math.max(shadow.height()+20,minHeight));};$Core.getObjectPosition=function(sId)
{if($('#'+sId).length<=0)
{return false;}
var curleft=0;var curtop=0;var obj=document.getElementById(sId);if(obj.offsetParent)
{do
{curleft+=obj.offsetLeft;curtop+=obj.offsetTop;}while(obj=obj.offsetParent);}
return{left:curleft,top:curtop};};$Core.getFriends=function(aParams)
{tb_show('',$.ajaxBox('friend.search','height=410&width=600&input='+aParams['input']+'&type='+(isset(aParams['type'])?aParams['type']:'')+''));};$Core.browseUsers=function(aParams)
{tb_show('',$.ajaxBox('user.browse','height=410&width=600&input='+aParams['input']+''));};$Core.composeMessage=function(aParams)
{if(aParams===undefined)
{aParams=new Array();}
tb_show('',$.ajaxBox('mail.compose','height=300&width=500'+(!isset(aParams['user_id'])?'':'&id='+aParams['user_id'])+'&no_remove_box=true'));};$Core.addAsFriend=function(iUserId)
{tb_show('',$.ajaxBox('friend.request','width=420&user_id='+iUserId+''));return false;};$Core.getParams=function(sHref)
{var aParams=new Array();var aUrlParts=explode('/',sHref);var iRequest=0;for(count in aUrlParts)
{if(empty(aUrlParts[count]))
{continue;}
aUrlParts[count]=aUrlParts[count].replace('#','');if(aUrlParts[count].match(/_/i))
{var aUrlParams=explode('_',aUrlParts[count]);aParams[aUrlParams[0]]=aUrlParams[1];}
else
{iRequest++;aParams['req'+iRequest]=aUrlParts[count];}}
return aParams;};$Core.getRequests=function(sHref,bReturnPath)
{var sParams='';var sUrlString='';var sModuleName=oCore['core.section_module'];switch(oCore['core.url_rewrite'])
{case'1':if(getParam('sHostedVersionId')==''){var oReq=new RegExp(""+getParam('sJsHome')+"(.*?)$","i");var aMatches=oReq.exec(sHref+(getParam('sHostedVersionId')==''?'':getParam('sHostedVersionId')+'/'));var aParts=explode('/',aMatches[1]);sUrlString='/'+aMatches[1];}
else{var aParts=explode('/',ltrim(sHref.pathname,'/'));sUrlString=sHref.pathname;}
break;case'3':if(oCore['profile.is_user_profile'])
{var aProfileMatches=sHref.match(/http:\/\/(.*?)\.(.*?)/i);sModuleName=aProfileMatches[1];}
var oReq=new RegExp(""+oParams['sJsHome']+"(.*?)$","i");var aMatches=oReq.exec(sHref);sUrlString=sModuleName+'/'+(aMatches!=null&&isset(aMatches[1])?aMatches[1]:'');break;default:var oReq=new RegExp("(.*?)=\/(.*?)$","i");var aMatches=oReq.exec(sHref);if(aMatches!==null)
{var aParts=explode('/',aMatches[2]);sUrlString=aMatches[2];}
break;}
if(bReturnPath===true)
{return'/'+ltrim(sUrlString,'/');}
return $Core.parseUrlString(sUrlString);};$Core.parseUrlString=function(sUrlString)
{var sParams='';var aUrlParts=explode('/',sUrlString);var iRequest=0;var iLoadCount=0;for(count in aUrlParts)
{if(empty(aUrlParts[count])||aUrlParts[count]=='#')
{continue;}
iLoadCount++;if(iLoadCount!=1&&aUrlParts[count].match(/_/i))
{var aUrlParams=explode('_',aUrlParts[count]);sParams+='&'+aUrlParams[0]+'='+aUrlParams[1];}
else
{iRequest++;sParams+='&req'+iRequest+'='+aUrlParts[count];}}
return sParams;};$Core.reverseUrl=function(sForm,aSkip)
{var aForms=explode('&',sForm);var sUrlParam='';for(count in aForms)
{var aFormParts=aForms[count].match(/(.*?)=(.*?)$/i);if(aFormParts!==null)
{if(isset(aSkip))
{if(in_array(aFormParts[1],aSkip))
{continue;}}
sUrlParam+=aFormParts[1]+'_'+encodeURIComponent(aFormParts[2])+'/';}}
return sUrlParam;};$Core.getHashParam=function(sHref)
{var sParams='';var aParams=$.getParams(sHref);for(var sKey in aParams)
{sParams+='&'+sKey+'='+aParams[sKey];}
sParams=ltrim(sParams,'&');return sParams;};$Core.box=function($sRequest,$sWidth,$sParams)
{tb_show('',$.ajaxBox($sRequest,'width='+$sWidth+($sParams?'&'+$sParams:'')));return false;};$Core.ajax=function(sCall,$oParams)
{var sParams='&'+getParam('sGlobalTokenName')+'[ajax]=true&'+getParam('sGlobalTokenName')+'[call]='+sCall;if(!sParams.match(/\[security_token\]/i))
{sParams+='&'+getParam('sGlobalTokenName')+'[security_token]='+oCore['log.security_token'];}
if(isset($oParams['params']))
{if(typeof($oParams['params'])=='string')
{sParams+=$oParams['params'];}
else
{$.each($oParams['params'],function($sKey,$sValue)
{sParams+='&'+$sKey+'='+encodeURIComponent($sValue)+'';});}}
$.ajax({type:(isset($oParams['type'])?$oParams['type']:'GET'),url:getParam('sJsStatic')+"ajax.php",dataType:'html',data:sParams,success:$oParams['success']});};$Core.popup=function(sUrl,aParams)
{oDate=new Date();iId=oDate.getTime();var sParams='';var iCount=0;var bCenter=false;for(count in aParams)
{if(count=='center')
{bCenter=true;continue;}
iCount++;if(iCount!=1)
{sParams+=',';}
sParams+=count+'='+aParams[count];}
if(bCenter===true)
{sParams+=',left='+(($(window).width()-aParams['width'])/2)+',top='+(($(window).height()-aParams['height'])/2)+'';}
window.open(sUrl,iId,sParams);};$Core.ajaxMessage=function()
{$('#global_ajax_message').html(getPhrase('core.saving')).animate({opacity:0.9}).slideDown();};$Core.toggleCategory=function(sName,iId)
{$('.'+sName).toggle();$('#show_more_'+iId).toggle();$('#show_less_'+iId).toggle();};if(substr(window.location.hash,0,2)=='#!')
{if(oCore['core.url_rewrite']=='1')
{var sUrl=trim(getParam('sJsHome'),'/');}
else
{var sUrl=getParam('sJsHome')+'index.php?'+getParam('sGetMethod')+'=';}
window.location=sUrl+window.location.hash.replace('#!','');}
$Core.page=function($aParams)
{if(typeof CorePageAjaxBrowsingStart=='function')
{CorePageAjaxBrowsingStart($aParams);}
if(isset($aParams['phrases']))
{for(sKey in $aParams['phrases'])
{if(!isset(oTranslations[sKey]))
{oTranslations[sKey]=$aParams['phrases'][sKey];}}}
$('.js_user_tool_tip_holder').remove();$('#js_user_profile_css').remove();if(isset($aParams['profilecss'])){$('body').append($aParams['profilecss']);}
if(!empty($aParams['files']))
{$Core.loadStaticFiles($aParams['files']);}
if(isset($aParams['customcss'])){var sCustomCss='';$('#js_global_custom_css').remove();for(sKey in $aParams['customcss']){sCustomCss+=$aParams['customcss'][sKey];}
if(!empty(sCustomCss)){}}
if(isset($aParams['nebula_current_menu'])){$('#nb_features_holder .menu_is_selected').removeClass('menu_is_selected');$('a[href="'+$aParams['nebula_current_menu']+'"]').addClass('menu_is_selected');$('#nb_features_link').removeClass('nb_is_clicked');$('#nb_features_holder').slideUp('fast');}
else
{$('#nb_features_holder .menu_is_selected').removeClass('menu_is_selected');$('a[href="'+oParams['sJsHome']+'"]').addClass('menu_is_selected');$('#nb_features_link').removeClass('nb_is_clicked');$('#nb_features_holder').slideUp('fast');}
document.title=$aParams['title'];$('#main_content_holder').html(''+$aParams['content']+'');$('body').css('cursor','auto');$oEventHistory[($Core.hasPushState()?$Core.getRequests(window.location,true):window.location.hash.replace('#!',''))]=$aParams['content'];$Core.loadInit();scroll(0,0);$Behavior.loadTinymceEditor=function(){};};$Core.updatePageHistory=function()
{var $sLocation=window.location.hash.replace('#!','');if(empty($sLocation))
{$sLocation='/';}
$oEventHistory[$sLocation]=$('#main_content_holder').html();};$Behavior.janRainLoader=function(){if(!getParam('bJsIsMobile')&&$('#janrainEngageEmbedHolder').length<1)
{$('body').prepend('<div style="position:absolute; z-index:5000; display:none;" id="janrainEngageEmbedHolder"><a href="#" style="position:absolute; bottom:5px; right:5px; z-index:1000000;" onclick="$(this).parent().hide(); return false;">Close</a><div id="janrainEngageEmbed"></div></div>');}
$('.rpxnow').click(function(){if(getParam('bJsIsMobile')){$.ajaxCall('janrain.login');return false;}
janrain.engage.signin.widget.init();$('#janrainEngageEmbedHolder').show();$('#janrainEngageEmbedHolder').css({top:getPageScroll()[1]+(getPageHeight()/5),left:'50%','margin-left':'-'+(($('#janrainEngageEmbed').width()/2)+12)+'px'});return false;});}
var bAjaxLinkIsClicked=false;var bCanByPassClick=false;var sClickProfileName='';$Behavior.linkClickAll=function()
{if(typeof $.browser!='undefined'&&$.browser.msie&&$.browser.version=='7.0')
{return false;}
if(!oCore['core.site_wide_ajax_browsing'])
{return false;}
$('a').click(function()
{var $sLink=$(this).attr('href');if(!$sLink)
{return;}
if((substr($sLink,0,7)!='http://'&&substr($sLink,0,8)!='https://')||substr($sLink,-1)=='#')
{return;}
if($(this).hasClass('photo_holder_image')&&!getParam('bPhotoTheaterMode')){}
else{if($(this).hasClass('no_ajax_link')||$(this).hasClass('thickbox')||$(this).hasClass('sJsConfirm'))
{return;}}
$('.js_box_image_holder_full').remove();var $aUrlParts=parse_url($sLink);if($aUrlParts['host']!=getParam('sJsHostname'))
{return;}
if(!isset($aUrlParts['query']))
{var sTempHost=$aUrlParts['scheme']+'://'+$aUrlParts['host']+$aUrlParts['path'];$aUrlParts['query']=sTempHost.replace(getParam('sJsHome'),'/');}
if(isset($aUrlParts['query']))
{var aUrlParts=explode('/',$aUrlParts['query']);var sAdminPath='admincp';if(getParam('sAdminCPLocation')!=''){sAdminPath=getParam('sAdminCPLocation');}
if(aUrlParts[1]==sAdminPath)
{return;}
if(aUrlParts[1]=='user'&&aUrlParts[2]=='logout')
{return;}}
if(bCanByPassClick===true&&aUrlParts[1]!=sClickProfileName){bCanByPassClick=false;return;}
if($('#noteform').length>0)
{$('#noteform').hide();}
if($('#js_photo_view_image').length>0)
{$('#js_photo_view_image').imgAreaSelect({hide:true});}
if($('#user_profile_photo').length>0)
{$('#user_profile_photo').imgAreaSelect({hide:true});}
$('.ajax_link_reset').hide();bAjaxLinkIsClicked=true;$('body').css('cursor','wait');$('.js_user_tool_tip_holder').hide();$('#js_global_tooltip').hide();$(this).addClass('is_built');$Core.addUrlPager(this);if(typeof BehaviorlinkClickAllAClick=='function')
{var bReturn=BehaviorlinkClickAllAClick($aUrlParts);if(bReturn==true)
{return false;}}
var sPattern='/core/redirect/';var rPattern=new RegExp(sPattern,'i');if(rPattern.test($Core.getRequests(this,true)))
{return true;}
$.ajaxCall('core.page','ajax_page_display=true'+$Core.getRequests(this)+'&do='+$Core.getRequests(this,true),'GET');return false;});};$Core.loadInit=function()
{if($Core.dynamic_js_files>0)
{setTimeout(function(){$Core.loadInit();},20);return false;}
debug('$Core.loadInit() Loaded');$('*:not(.star-rating, .dont-unbind)').unbind();$.each($Behavior,function()
{this(this);});};$Core.init=function()
{if(!$Core.hasPushState()&&oCore['core.disable_hash_bang_support'])
{oCore['core.site_wide_ajax_browsing']=false;}
$bDocumentIsLoaded=true;$(document).ready(function()
{$.each($Behavior,function()
{this(this);});});$('script,link').each(function()
{if(!empty(this.src))
{var $sVar=this.src;if(this.src.indexOf('f=')!==-1)
{var $aFiles=explode('f=',$sVar);var $aParts=explode('&v=',$aFiles[1]);var $aGetFiles=explode(',',$aParts[0]);$($aGetFiles).each(function($sKey,$sFile)
{if(substr($sFile,0,7)=='module/')
{$oStaticHistory[getParam('sJsHome')+$sFile]=true;}
else
{$oStaticHistory[getParam('sJsStatic')+'jscript/'+$sFile]=true;}});return;}}
else if(!empty(this.href))
{var $sVar=this.href;if(this.href.indexOf('f=')!==-1)
{var $aFiles=explode('f=',$sVar);var $aParts=explode('&v=',$aFiles[1]);var $aGetFiles=explode(',',$aParts[0]);$($aGetFiles).each(function($sKey,$sFile)
{$oStaticHistory[getParam('sJsHome')+$sFile]=true;});return;}}
if(!empty($sVar))
{var $aParts=explode('?',$sVar);$oStaticHistory[$aParts[0]]=true;}});if(isset($Cache['post_static_files']))
{$($Cache['post_static_files']).each(function($sKey,$mValue)
{$Core.loadStaticFiles($mValue);});}
if(oCore['core.site_wide_ajax_browsing'])
{if($.browser.msie&&$.browser.version=='7.0')
{}
else
{if($Core.hasPushState()){$oEventHistory[$Core.getRequests(window.location,true)]=$('#main_content_holder').html();var $iTotalCount=0;$(window).bind('popstate',function(event){$iTotalCount++;if($.browser.safari&&$iTotalCount==1){return}
$Core.changeHistoryState({path:$Core.getRequests(window.location,true)});});}
else{$.address.change(function(event)
{$Core.changeHistoryState(event);});}}}};$Core.hasPushState=function(){return(typeof(window.history.pushState)=='function'?true:false);};$Core.addUrlPager=function(oObject,bShort)
{if($Core.hasPushState()){window.history.pushState('','',oObject.href);}
else{window.location='#!'+(bShort?oObject.href:$Core.getRequests(oObject.href,true));}};$Core.changeHistoryState=function(event){$('.js_box').each(function()
{if(!$(this).hasClass('js_box_no_remove'))
{var $sLink=$(this).find('.js_box_history:first').html();if(isset($aBoxHistory[$sLink]))
{delete $aBoxHistory[$sLink];}
$(this).remove();}});if($Core.hasPushState()){bAjaxLinkIsClicked=false;}
if(isset($oEventHistory[event.path])&&!bAjaxLinkIsClicked)
{$('#main_content_holder').html($oEventHistory[event.path].replace('$Core.loadInit();','').replace('$Core.updatePageHistory();',''));$Core.loadInit();scroll(0,0);}
else
{if(empty($oEventHistory))
{if(event.path=='/')
{if(isset($oEventHistory[$Core.getRequests(window.location,true)]))
{$('#main_content_holder').html($oEventHistory[$Core.getRequests(window.location,true)].replace('$Core.loadInit();','').replace('$Core.updatePageHistory();',''));$Core.loadInit();scroll(0,0);}
else
{$oEventHistory[$Core.getRequests(window.location,true)]=$('#main_content_holder').html();}}}
else
{if(event.path=='/')
{if(isset($oEventHistory[$Core.getRequests(window.location,true)]))
{$('#main_content_holder').html($oEventHistory[$Core.getRequests(window.location,true)].replace('$Core.loadInit();','').replace('$Core.updatePageHistory();',''));$Core.loadInit();scroll(0,0);}}}}
if(bAjaxLinkIsClicked)
{bAjaxLinkIsClicked=false;}};$Core.reloadPage=function()
{if(typeof window.location.reload=='function')window.location.reload();else if(typeof history!='undefined'&&history.go=='function')history.go(0);};$Behavior.addModerationListener=function()
{$(window).on('moderation_ended',function(){if($('.moderation_row:visible').length<1)
{if($('a.pager_previous_link').length>0&&$('a.pager_previous_link:first').attr('href')!='#')
{window.location.href=$('a.pager_previous_link:first').attr('href');return;}
if(window.location.href.indexOf('page_1')>(-1))
{window.location.href=window.location.href.replace('/page_1','');return;}
return $Core.reloadPage();if($('a.pager_next_link').length>0)
{if(isset($Core.Pager)&&isset($Core.Pager.count)&&($Core.Pager.count-$Core.Pager.size)>20)
{window.location.href=$('a.pager_next_link:first').attr('href');return;}
window.location.href=$('a.pager_next_link:first').attr('href');}
else
{wndow.location.href=window.location.href;}}
else if($('.moderation_row:first').is(':animated'))
{setTimeout('$(window).trigger("moderation_ended");',1000);}
else
{}});};$Behavior.loadDelayedBlocks=function()
{if(isset($Core.delayedBlocks)&&Object.prototype.toString.call($Core.delayedBlocks).indexOf('Array')>(-1))
{$.ajaxCall('core.loadDelayedBlocks','locations='+$Core.delayedBlocks.join(','));}
if($('#delayed_block').length>0)
{if((oParams['sController']=='core.index-member')||(oCore['sController']=='pages.view'))
{console.log('Behavior.loadDelayedBlock, Dont load the content');}
else
{var sContent=$('#delayed_block').html();var sUrl=$Core.getRequests(window.location.href,true);var aUrl=sUrl.split('/');var oUrlParams={};var aTemp=[];for(var count in aUrl)
{if(aUrl[count].indexOf('_')>(-1))
{aTemp=aUrl[count].split('_');oUrlParams[aTemp[0]]=aTemp[1];}
oUrlParams['req'+j]=aUrl[count];}
var sParams=$.param({params:oUrlParams});$.ajaxCall('core.loadDelayedBlocks','loadContent='+sContent+'&'+sParams,'GET');}}
if($('.load_delayed').length>0)
{var oGet={};$('.load_delayed').each(function(){if($(this).attr('id')==undefined||$(this).attr('id').length<1)
{$(this).attr('id','load_delayed_'+Math.floor(Math.random()*999));}
oGet[$(this).find('.block_id').html()]={block_id:$(this).find('.block_id').html(),block_name:$(this).find('.block_name').html(),block_param:$(this).find('.block_param').html()};});var sParams=encodeURIComponent(JSON.stringify(oGet));console.log(sParams);$.ajaxCall('core.loadDelayedBlocks','delayedTemplates='+sParams,'GET');}};if(!Array.prototype.map){Array.prototype.map=function(callback,thisArg){var T,A,k;if(this==null){throw new TypeError(" this is null or not defined");}
var O=Object(this);var len=O.length>>>0;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function");}
if(thisArg){T=thisArg;}
A=new Array(len);k=0;while(k<len){var kValue,mappedValue;if(k in O){kValue=O[k];mappedValue=callback.call(T,kValue,k,O);A[k]=mappedValue;}
k++;}
return A;};}
if(!Array.prototype.filter)
{Array.prototype.filter=function(fun)
{"use strict";if(this==null)
throw new TypeError();var t=Object(this);var len=t.length>>>0;if(typeof fun!="function")
throw new TypeError();var res=[];var thisp=arguments[1];for(var count=0;count<len;count++)
{if(count in t)
{var val=t[count];if(fun.call(thisp,val,j,t))
res.push(val);}}
return res;};}
 /* static\jscript\ajax.js */$.ajaxBox=function(sCall,sExtra)
{var sParams=getParam('sJsAjax')+'?'+getParam('sGlobalTokenName')+'[ajax]=true&'+getParam('sGlobalTokenName')+'[call]='+sCall;if(sExtra)
{sParams+='&'+sExtra;}
if(!sParams.match(/\[security_token\]/i))
{sParams+='&'+getParam('sGlobalTokenName')+'[security_token]='+oCore['log.security_token'];}
return sParams;};var oCacheAjaxRequest=null;var aCacheAjaxLastCall={};window.onbeforeunload=function()
{if(oCacheAjaxRequest!==null)
{oCacheAjaxRequest.abort();}};$.fn.ajaxCall=function(sCall,sExtra,bNoForm,sType)
{if(empty(sType))
{sType='POST';}
switch(sCall){case'share.friend':case'share.email':case'share.bookmark':case'share.post':sType='POST';break;default:break;}
var sUrl=getParam('sJsAjax');if(typeof oParams['im_server']!='undefined'&&sCall.indexOf('im.')>(-1))
{sUrl=getParam('sJsAjax').replace(getParam('sJsHome'),getParam('im_server'));}
var sParams='&'+getParam('sGlobalTokenName')+'[ajax]=true&'+getParam('sGlobalTokenName')+'[call]='+sCall+''+(bNoForm?'':this.getForm());if(sExtra)
{sParams+='&'+ltrim(sExtra,'&');}
if(!sParams.match(/\[security_token\]/i))
{sParams+='&'+getParam('sGlobalTokenName')+'[security_token]='+oCore['log.security_token'];}
sParams+='&'+getParam('sGlobalTokenName')+'[is_admincp]='+(oCore['core.is_admincp']?'1':'0');sParams+='&'+getParam('sGlobalTokenName')+'[is_user_profile]='+(oCore['profile.is_user_profile']?'1':'0');sParams+='&'+getParam('sGlobalTokenName')+'[profile_user_id]='+(oCore['profile.user_id']?oCore['profile.user_id']:'0');if(getParam('bJsIsMobile')){sParams+='&js_mobile_version=true';}
oCacheAjaxRequest=$.ajax({type:sType,url:sUrl,dataType:"script",data:sParams});return oCacheAjaxRequest;};$.ajaxCall=function(sCall,sExtra,sType)
{return $.fn.ajaxCall(sCall,sExtra,true,sType);};$.fn.getForm=function()
{var objForm=this.get(0);var prefix="";var submitDisabledElements=false;if(arguments.length>1&&arguments[1]==true)
{submitDisabledElements=true;}
if(arguments.length>2)
{prefix=arguments[2];}
var sXml='';if(objForm&&objForm.tagName=='FORM')
{var formElements=objForm.elements;for(var i=0;i<formElements.length;i++)
{if(!formElements[i].name)
{continue;}
if(formElements[i].name.substring(0,prefix.length)!=prefix)
{continue;}
if(formElements[i].type&&(formElements[i].type=='radio'||formElements[i].type=='checkbox')&&formElements[i].checked==false)
{continue;}
if(formElements[i].disabled&&formElements[i].disabled==true&&submitDisabledElements==false)
{continue;}
var name=formElements[i].name;if(name)
{sXml+='&';if(formElements[i].type=='select-multiple')
{for(var j=0;j<formElements[i].length;j++)
{if(formElements[i].options[j].selected==true)
{sXml+=name+"="+encodeURIComponent(formElements[i].options[j].value)+"&";}}}
else
{sXml+=name+"="+encodeURIComponent(formElements[i].value);}}}}
if(!sXml&&objForm)
{sXml+="&"+objForm.name+"="+encodeURIComponent(objForm.value);}
return sXml;};
 /* static\jscript\thickbox/thickbox.js */var $iBoxTotalOpen=0;var $iCurrentZIndex=1;var $aBoxHistory={};var iImageIterationCount=0;var iCurrentImageIterationCount=0;var $sCurrentId=null;var sLastOpenUrl=null;var bIsPhotoImage=false;$Behavior.addDraggableToBoxes=function()
{if($('.js_box').length>0&&!$.ui)
{$Core.loadStaticFile(getParam('sJsHome')+'static/jscript/jquery/ui.js');}
$('.js_box').each(function()
{$(this).draggable('destroy');tb_draggable(this);});$('a.thickbox').click(function()
{var aExtra=$(this).html().match(/userid="([0-9a-z]?)"/i);var sHref=this.href;if(aExtra!=null&&isset(aExtra[1]))
{sHref+='userid_'+aExtra[1]+'/';}
var bReturn=tb_show('',sHref,this);if(bReturn===true){return true;}
return false;});};function js_box_remove($oObj)
{$('#main_core_body_holder').show();$('.imgareaselect-outer').remove();$('#noteform').remove();$('.imgareaselect-border1').remove();$('.imgareaselect-border2').remove();$('.imgareaselect-border3').remove();$('.imgareaselect-border4').remove();$('.feed_share_on_item a').removeClass('active');var $oParent=$($oObj).parents('.js_box:first');var $oBoxParent=$($oObj).parents('.js_box_image_holder_full:first');var $sLink=$oParent.find('.js_box_history:first').html();if(isset($aBoxHistory[$sLink]))
{delete $aBoxHistory[$sLink];}
$oBoxParent.fadeOut(100,function()
{$(this).remove();});$oParent.fadeOut(100,function()
{$(this).remove();});$('#global_attachment_list_inline').hide();if(bIsPhotoImage){bIsPhotoImage=false;}
return false;}
function tb_show_new_image(thisObject,sSrc,imageWidth,imageHeight,iCurrentIte)
{$('.js_box_image_gallery img').removeClass('is_active');$(thisObject).find('img').addClass('is_active');iCurrentImageIterationCount=iCurrentIte;$('#js_thickbox_core_image').attr({'src':sSrc,'width':imageWidth,'height':imageHeight});}
function js_box_next_image()
{iCurrentImageIterationCount++;var thisObject=$('#js_next_image_thumb_'+iCurrentImageIterationCount);if(thisObject.length<=0)
{iCurrentImageIterationCount=0;return js_box_next_image();}
var aParts=explode('|',thisObject.attr('rel'));tb_show_new_image('#js_next_image_thumb_'+iCurrentImageIterationCount,''+thisObject.attr('href')+'',aParts[0],aParts[1],iCurrentImageIterationCount);return false;}
function tb_show(caption,url,thisObject,sForceMessage,bForceNoCilck,sType)
{var baseURL;if(url.indexOf("?")!==-1)
{baseURL=url.substr(0,url.indexOf("?"));}
else
{baseURL=url;}
var urlString=/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;var urlType=baseURL.toLowerCase().match(urlString);if(urlType=='.jpg'||urlType=='.jpeg'||urlType=='.png'||urlType=='.gif'||urlType=='.bmp')
{imgPreloader=new Image();imgPreloader.onload=function()
{imgPreloader.onload=null;var pagesize=tb_getPageSize();var x=pagesize[0]-150;var y=pagesize[1]-150;var imageWidth=imgPreloader.width;var imageHeight=imgPreloader.height;if(imageWidth>x)
{imageHeight=imageHeight*(x/imageWidth);imageWidth=x;if(imageHeight>y)
{imageWidth=imageWidth*(y/imageHeight);imageHeight=y;}}
else if(imageHeight>y)
{imageWidth=imageWidth*(y/imageHeight);imageHeight=y;if(imageWidth>x)
{imageHeight=imageHeight*(x/imageWidth);imageWidth=x;}}
TB_WIDTH=imageWidth+30;TB_HEIGHT=imageHeight+60;$('.js_box_image_holder').remove();$('.js_box_image_holder').unbind('click');var sHtml='';sHtml+='<div class="js_box_image_holder"><div class="js_box '+(oParams['bJsIsMobile']?'mobile_js_box':'')+' js_box_image" style="display:block;"><div class="js_box_content">';if($(thisObject).parents('.js_box_thumbs_holder').length>0)
{var sCurrentSource=$(thisObject).find('img:first').attr('src');var sNewSource='';var SubimgPreloaderImageWidth='';var SubimgPreloaderImageHeight='';var SubArrayWidth=new Array();var SubArrayHeight=new Array();var sSubHtml='';var aUrlParts=new Array();var aUrlPartsNew=new Array();iImageIterationCount=0;iCurrentImageIterationCount=0;sHtml+='<div>';$(thisObject).parents('.js_box_thumbs_holder').find('.js_box_image_holder_thumbs').find('.thickbox').each(function()
{iImageIterationCount++;sNewSource=$(this).find('img').attr('src');aUrlParts=explode('_',sCurrentSource);aUrlPartsNew=explode('_',sNewSource);if(aUrlParts[0]==aUrlPartsNew[0])
{iCurrentImageIterationCount=iImageIterationCount;}
{SubimgPreloader=new Image();SubimgPreloader.src=$(this).attr('href');SubimgPreloaderImageWidth=SubimgPreloader.width;SubimgPreloaderImageHeight=SubimgPreloader.height;if(SubimgPreloaderImageWidth>x)
{SubimgPreloaderImageHeight=SubimgPreloaderImageHeight*(x/SubimgPreloaderImageWidth);SubimgPreloaderImageWidth=x;if(imageHeight>y)
{SubimgPreloaderImageWidth=SubimgPreloaderImageWidth*(y/SubimgPreloaderImageHeight);imageHeight=y;}}
else if(imageHeight>y)
{SubimgPreloaderImageWidth=SubimgPreloaderImageWidth*(y/SubimgPreloaderImageHeight);SubimgPreloaderImageHeight=y;if(SubimgPreloaderImageWidth>x)
{SubimgPreloaderImageHeight=SubimgPreloaderImageHeight*(x/SubimgPreloaderImageWidth);SubimgPreloaderImageWidth=x;}}
SubArrayWidth.push(SubimgPreloaderImageWidth);SubArrayHeight.push(SubimgPreloaderImageHeight);sSubHtml+='<a rel="'+SubimgPreloaderImageWidth+'|'+SubimgPreloaderImageHeight+'" id="js_next_image_thumb_'+iImageIterationCount+'" href="'+$(this).attr('href')+'" onclick="tb_show_new_image(this, \''+$(this).attr('href')+'\', '+SubimgPreloaderImageWidth+', '+SubimgPreloaderImageHeight+', '+iImageIterationCount+'); return false;"><img src="'+sNewSource+'" alt="" '+(aUrlParts[0]==aUrlPartsNew[0]?' class="is_active" ':'')+' /></a>';}});TB_WIDTH=((Math.max.apply(Math,SubArrayWidth))+30);TB_HEIGHT=((Math.max.apply(Math,SubArrayHeight)));sHtml+='<div class="js_box_image_holder_browse">';sHtml+='<div class="js_box_image_gallery_display" style="height:'+TB_HEIGHT+'px; line-height:'+TB_HEIGHT+'px;">';sHtml+='<a href="#" onclick="return js_box_next_image();"><img src="'+url+'" width="'+imageWidth+'" height="'+imageHeight+'" alt="" id="js_thickbox_core_image" /></a>';sHtml+='</div>';sHtml+='<div class="js_box_image_gallery">'+sSubHtml+'</div>';sHtml+='</div>';sHtml+='</div>';}
else
{sHtml+='<a href="#" onclick="$(\'.js_box_image_holder\').remove(); return false;"><img src="'+url+'" width="'+imageWidth+'" height="'+imageHeight+'" alt="" id="js_thickbox_core_image" /></a>';}
sHtml+='</div><div class="js_box_close"><a href="#" onclick="return js_box_remove(this);">'+oTranslations['core.close']+'</a></div></div></div>';$('body').prepend(sHtml);$('.js_box_image').css({top:(($(window).height()-$('.js_box_image').outerHeight())/2)+"px",left:(($(window).width()-$('.js_box_image').outerWidth())/2)+"px",display:'block'});var bCanCloseImageBox=true;$('.js_box').click(function()
{bCanCloseImageBox=false;});$('.js_box_image_holder').click(function()
{if(!bCanCloseImageBox)
{bCanCloseImageBox=true;}
else
{$(this).remove();}});if($.browser.msie&&$.browser.version=='7.0')
{$Behavior.ie7FixZindex();}};imgPreloader.src=url;return false;}
var bIsAlreadyOpen=false;if($(thisObject).hasClass('photo_holder_image')&&!empty($(thisObject).attr('rel')))
{if(!getParam('bPhotoTheaterMode')){return true;}
if(getParam('bJsIsMobile')){return true;}
if($Core.exists('.js_box_image_holder_full')){$('#photo_view_ajax_loader').show();}
sLastOpenUrl=(empty(window.location.hash)?$Core.getRequests(window.location,true):'/'+window.location.hash);var sUserId=url.match(/userid_([0-9]+)/);var sAlbumId=url.match(/albumid_([0-9]+)/);var queryString=''+getParam('sGlobalTokenName')+'[call]=photo.view&width=940'+(typeof sPhotoCategory!='undefined'?'&category='+sPhotoCategory:'')+'&req2='+$(thisObject).attr('rel')+'&theater=true&no_remove_box=true'+(sUserId!=null&&isset(sUserId[1])?'&userid='+sUserId[1]:'')+(sAlbumId!=null&&isset(sAlbumId[1])?'&albumid='+sAlbumId[1]:'');var params=tb_parseQuery(queryString);bIsPhotoImage=true;if(isset($aBoxHistory[params[''+getParam('sGlobalTokenName')+'[call]']]))
{bIsAlreadyOpen=true;}
if($('#noteform').length>0)
{$('#noteform').hide();}
if($('#js_photo_view_image').length>0)
{$('#js_photo_view_image').imgAreaSelect({hide:true});}}
else
{if($Core.exists('.js_box_image_holder_full')){js_box_remove($('.js_box_image_holder_full').find('.js_box_content:first'));}
if(url.indexOf('#')!=-1)
{var aParams=url.split('#');url='#'+aParams[1];}
var queryString=url.replace(/^[^\?]+\??/,'');var params=tb_parseQuery(queryString);}
if(!bIsPhotoImage&&isset($aBoxHistory[params[''+getParam('sGlobalTokenName')+'[call]']]))
{return false;}
if(!bIsAlreadyOpen)
{$iBoxTotalOpen++;$iCurrentZIndex++;$aBoxHistory[params[getParam('sGlobalTokenName')+'[call]']]=true;$sCurrentId='js_box_id_'+$iBoxTotalOpen;}
if(caption===null)
{caption='';}
var bIsFullMode=false;if(params['width']=='full')
{params['width']=($(window).width());params['height']=($(window).height());bIsFullMode=true;}
else if(params['width']=='scan')
{params['width']=($(window).width()-(oCore['core.is_admincp']?100:150));params['height']=($(window).height()-(oCore['core.is_admincp']?100:150));}
TB_WIDTH=(!empty(params['width'])?((params['width']*1)+30):630);TB_HEIGHT=(params['height']*1)+40||440;var pagesize=tb_getPageSize();if(TB_HEIGHT>pagesize[1])
{TB_HEIGHT=(pagesize[1]-75);}
if(TB_WIDTH>pagesize[0])
{TB_WIDTH=(pagesize[0]-75);}
ajaxContentW=TB_WIDTH-30;ajaxContentH=TB_HEIGHT-45;if(!bIsAlreadyOpen)
{var sHtml='';if(bIsPhotoImage){$('.js_box_image_holder').remove();$('.js_box_image_holder').unbind('click');sHtml+='<div class="js_box_image_holder_full">';sHtml+='<div class="js_box_image_holder_full_loader" style="position:absolute; top:50%; left:50%;"><img src="'+oJsImages['loading_animation']+'" alt="" /></div>';sHtml+='<div style="display:none;" id="'+$sCurrentId+'" class="js_box'+(oParams['bJsIsMobile']?' mobile_js_box':' ')+(isset(params['no_remove_box'])?' js_box_no_remove':'')+'" style="width:'+ajaxContentW+'px;">';sHtml+='<div class="js_box_content"></div>';sHtml+='<div class="js_box_close"><a href="#" onclick="return js_box_remove(this);">'+oTranslations['core.close']+'</a><span class="js_box_history">'+params[getParam('sGlobalTokenName')+'[call]']+'</span></div>';sHtml+='</div>';sHtml+='</div>';}
else{if(bIsPhotoImage)
{$('.js_box_image_holder').remove();$('.js_box_image_holder').unbind('click');sHtml+='<div class="js_box_image_holder_full">';}
if(bForceNoCilck){sHtml+='<div class="js_box_image_holder">';}
sHtml+='<div id="'+$sCurrentId+'" class="js_box'+(oParams['bJsIsMobile']?' mobile_js_box':' ')+(isset(params['no_remove_box'])?' js_box_no_remove':'')+'" style="width:'+ajaxContentW+'px;">';if(!bIsPhotoImage)
{sHtml+='<div class="js_box_title">'+caption+'</div>';}
sHtml+='<div class="js_box_content"><span class="js_box_loader">'+oTranslations['core.loading']+'...</span></div>';{sHtml+='<div class="js_box_close"><a href="#" onclick="return js_box_remove(this);">'+oTranslations['core.close']+'</a><span class="js_box_history">'+params[getParam('sGlobalTokenName')+'[call]']+'</span></div>';}
sHtml+='</div>';if(bIsPhotoImage)
{sHtml+='</div>';}
if(bForceNoCilck){sHtml+='</div>';}}
$('body').prepend(sHtml);var $oNew=$('#'+$sCurrentId+'');tb_position($oNew,(bIsFullMode?bIsFullMode:''));if(!bIsPhotoImage){$oNew.show();}else{$('.js_box_image_holder_full_loader').css({'margin-left':'-'+($('.js_box_image_holder_full_loader').find('img:first').width()/2)+'px','margin-top':'-'+($('.js_box_image_holder_full_loader').find('img:first').height()/2)+'px'});}}
else
{$oNew=$('.js_box_image_holder_full').find('.js_box:first');}
if(getParam('bJsIsMobile')){queryString+='&js_mobile_version=true';}
if(url.indexOf('TB_inline')!=-1){if(params['type'])
{switch(params['type'])
{case'delete':var sHtml='';sHtml+='<div id="js_inline_delete">';if(!params['call'])
{sHtml+='<form method="post" action="'+sMainUrl+'">';sHtml+='<div><input type="hidden" name="'+getParam('sGlobalTokenName')+'[security_token]" value="'+getParam('sSecurityToken')+'" />';}
sHtml+='<div>';sHtml+=getPhrase('core.are_you_sure');sHtml+='<div class="t_center p_4">';sHtml+=' <input type="hidden" name="item_id" value="'+params['itemId']+'" id="js_inline_delete_id" /> ';if(!params['call'])
{sHtml+=' <input type="submit" value="'+getPhrase('core.yes')+'" class="button" /> ';}
else
{sHtml+=' <input type="button" value="'+getPhrase('core.yes')+'" class="button" onclick="$(\'#js_inline_delete_id\').ajaxCall(\''+params['call']+'\', \''+queryString+'\'); tb_remove();" /> ';}
sHtml+=' <input type="button" value="'+getPhrase('core.no')+'" class="button" onclick="tb_remove();" /> ';sHtml+='</div>';sHtml+='</div>';if(!params['call'])
{sHtml+='</form>';}
sHtml+='</div>';break;}
$oNew.find('.js_box_content').html('');$oNew.find('.js_box_content').html(sHtml);}
else
{var sHtml=$('#'+params['inlineId']).children();}
$oNew.find('.js_box_content').html('');$oNew.find('.js_box_content').html(sHtml);return;}
else if(isset(params['TB_iframe'])){var sIframe='';$oNew.find('.js_box_content').html('');$oNew.find('.js_box_content').html(sIframe);}
else{if(!empty(sForceMessage)){$oNew.find('.js_box_content').html('');$oNew.find('.js_box_content').html(sForceMessage);return;}
var sAjaxType='GET';if((params[''+getParam('sGlobalTokenName')+'[call]']=='share.popup')||sType=='POST'){sAjaxType='POST';}
$.ajax({type:sAjaxType,dataType:'html',url:getParam('sJsAjax'),data:queryString,success:function(sMsg)
{$oNew.find('.js_box_content').html('');$oNew.find('.js_box_content').html(sMsg);if(!empty($oNew.find('.js_box_title_store:first').html()))
{$oNew.find('.js_box_title:first').html($oNew.find('.js_box_title_store:first').html());}
$oNew.find('.js_box_title:first').show();$oNew.find('.js_box_close:first').show();if(bIsFullMode){$oNew.find('.js_box_content').height(ajaxContentH);}
if(bIsPhotoImage)
{var thisHeight=$(window).height();var thisBodyHeight=$('body').height();var newHeight=(thisHeight>thisBodyHeight?thisHeight:thisBodyHeight);$('.js_box_image_holder_full').css({'top':'0px','height':(newHeight+50)+'px'});var bCanCloseImageBox=true;$Behavior.onCloseThickbox=function()
{$('.js_box').click(function()
{bCanCloseImageBox=false;});$('.js_box a').click(function()
{bCanCloseImageBox=false;});$('.js_box_image_holder_full').click(function()
{if(!bCanCloseImageBox)
{bCanCloseImageBox=true;}
else
{$('#main_core_body_holder').show();if($('#noteform').length>0)
{$('#noteform').hide();}
if($('#js_photo_view_image').length>0)
{$('#js_photo_view_image').imgAreaSelect({hide:true});}
bIsPhotoImage=false;$(this).remove();delete $aBoxHistory[params[getParam('sGlobalTokenName')+'[call]']];}});}
$Behavior.onCloseThickbox();}}});}}
$Behavior.thickboxBrowser=function(){if($Core.exists('.js_box_image_holder_full')){$(document).keyup(function(e){if(e.keyCode==27){js_box_remove($('.js_box_image_holder_full').find('.js_box_content'));}});}};function tb_get_active()
{var $aAllBoxIndex=new Array();var $aAllBoxIndexHolder=new Array();$('.js_box').each(function()
{$aAllBoxIndex[parseInt($(this).css('z-index'))]=$(this).attr('id');$aAllBoxIndexHolder.push(parseInt($(this).css('z-index')));});var $iFocusBox=parseInt(Math.max.apply(Math,$aAllBoxIndexHolder));if(isset($aAllBoxIndex[$iFocusBox])&&$('#'+$aAllBoxIndex[$iFocusBox]).length>0)
{return $aAllBoxIndex[$iFocusBox];}
return null;}
function tb_remove()
{$('#main_core_body_holder').show();var $aAllBoxIndex=new Array();var $aAllBoxIndexHolder=new Array();$('.js_box').each(function()
{$aAllBoxIndex[parseInt($(this).css('z-index'))]=$(this).attr('id');$aAllBoxIndexHolder.push(parseInt($(this).css('z-index')));});var $iFocusBox=parseInt(Math.max.apply(Math,$aAllBoxIndexHolder));if(isset($aAllBoxIndex[$iFocusBox])&&$('#'+$aAllBoxIndex[$iFocusBox]).length>0)
{var $sLink=$('#'+$aAllBoxIndex[$iFocusBox]).find('.js_box_history:first').html();$('#'+$aAllBoxIndex[$iFocusBox]).fadeOut('fast');$('#'+$aAllBoxIndex[$iFocusBox]).parent('.js_box_image_holder').fadeOut('fast');delete $aBoxHistory[$sLink];}
$('#global_attachment_list_inline').hide();return false;}
function tb_draggable($oObj)
{if($($oObj).parent().hasClass('js_box_image_holder_full'))
{return false;}
$($oObj).draggable({handle:'.js_box_title',opacity:0.35,zIndex:3000,start:function(event,ui)
{if($('#global_attachment_list_inline').length>0)
{$('#global_attachment_list_inline').hide();}},stop:function(event,ui)
{if($('#global_attachment_list_inline').length>0)
{$Core.updateInlineBox();$('#global_attachment_list_inline').show();}}});}
function tb_position($oObj,bFull)
{if(bFull!==true)
{if(!$.ui)
{$Core.loadStaticFile(getParam('sJsHome')+'static/jscript/jquery/ui.js');}
tb_draggable('.js_box');}
var $aAllBoxIndex=new Array();$('.js_box').each(function()
{$aAllBoxIndex.push(parseInt($(this).css('z-index')));});$('.js_box').unbind('click');$('.js_box').click(function()
{var $aAllBoxIndexInner=new Array();$('.js_box').each(function()
{$aAllBoxIndexInner.push(parseInt($(this).css('z-index')));});$(this).css({'z-index':(parseInt(Math.max.apply(Math,$aAllBoxIndexInner))+1)});});if(bFull===true)
{$($oObj).css({top:getPageScroll()[1],left:'50%','margin-left':'-'+(($($oObj).width()/2)+12)+'px','z-index':(parseInt(Math.max.apply(Math,$aAllBoxIndex))+1)});}
else
{$($oObj).css({top:getPageScroll()[1]+(getPageHeight()/5),left:'50%','margin-left':'-'+(($($oObj).width()/2)+12)+'px','z-index':(parseInt(Math.max.apply(Math,$aAllBoxIndex))+1)});}
if($.browser.msie&&$.browser.version=='7.0')
{$Behavior.ie7FixZindex();}}
function tb_parseQuery(query)
{var Params={};if(!query)
{return Params;}
var Pairs=query.split(/[;&]/);for(var i=0;i<Pairs.length;i++)
{var KeyVal=Pairs[i].split('=');if(!KeyVal||KeyVal.length!=2)
{continue;}
var key=unescape(KeyVal[0]);var val=unescape(KeyVal[1]);val=val.replace(/\+/g,' ');Params[key]=val;}
return Params;}
function tb_getPageSize()
{var de=document.documentElement;var w=window.innerWidth||self.innerWidth||(de&&de.clientWidth)||document.body.clientWidth;var h=window.innerHeight||self.innerHeight||(de&&de.clientHeight)||document.body.clientHeight;arrayPageSize=[w,h];return arrayPageSize;}
 /* module/friend/static/jscript/search.js */$Core.searchFriendsInput={aParams:{},iCnt:0,aFoundUsers:{},aLiveUsers:{},sId:'',bNoSearch:false,aFoundUser:{},sHtml:'',init:function($aParams)
{this.aParams=$aParams;if(!isset(this.aParams['search_input_id']))
{this.aParams['search_input_id']='search_input_name_'+Math.round(Math.random()*10000);}
if(this._get('no_build')){this.sId=$aParams['id'].replace('#','');}
else{this.sId=$aParams['id'].replace('#','').replace('.','')+'__tmp__';}
this.build();},build:function()
{var $sHtml='';if(!this._get('no_build')){$sHtml+='<div style="width:'+this._get('width')+'; position:relative;" class="js_friend_search_form" id="'+this.sId+'">';$sHtml+='<input type="text" id="'+this._get('search_input_id')+'" name="null" value="'+this._get('default_value')+'" autocomplete="off" onfocus="$Core.searchFriendsInput.buildFriends(this);" onkeyup="$Core.searchFriendsInput.getFriends(this);" style="width:100%;" class="js_temp_friend_search_input" />';$sHtml+='<div class="js_temp_friend_search_form" style="display:none;"></div>';$sHtml+='</div>';$(this._get('id')).html($sHtml);}
else{$sHtml+='<div class="js_temp_friend_search_form js_temp_friend_search_form_main" style="display:none;"></div>';$('#'+this.sId).find('form:first').append($sHtml);}
$('#'+this.sId).find('.js_temp_friend_search_input').keypress(function(e)
{switch(e.keyCode)
{case 9:case 40:case 38:var $iNextCnt=0;$('.js_friend_search_link').each(function()
{$iNextCnt++;if($(this).hasClass('js_temp_friend_search_form_holder_focus'))
{$(this).removeClass('js_temp_friend_search_form_holder_focus');return false;}});if(!$iNextCnt)
{return false;}
$Core.searchFriendsInput.bNoSearch=true;var $iNewCnt=0;var $iActualFocus=0;$('.js_friend_search_link').each(function()
{$iNewCnt++;if((e.keyCode==38?($iNextCnt-1)==$iNewCnt:($iNextCnt+1)==$iNewCnt))
{$iActualFocus++;$(this).addClass('js_temp_friend_search_form_holder_focus');return false;}});if(!$iActualFocus)
{$('.js_friend_search_link').each(function()
{$(this).addClass('js_temp_friend_search_form_holder_focus');return false;});}
return false;break;case 13:$Core.searchFriendsInput.bNoSearch=true;$('.js_friend_search_link').each(function()
{if($(this).hasClass('js_temp_friend_search_form_holder_focus'))
{$Core.searchFriendsInput.processClick(this,$(this).attr('rel'));}});break;default:break;}});},buildFriends:function($oObj)
{$($oObj).val('');if(empty($Cache.friends)&&!isset(this.aParams['is_mail']))
{$.ajaxCall('friend.buildCache',(this._get('allow_custom')?'&allow_custom=1':''),'GET');}},getFriends:function($oObj)
{if(empty($oObj.value))
{this.closeSearch($oObj);return;}
if(this.bNoSearch)
{this.bNoSearch=false;return;}
if(isset(this.aParams['is_mail'])&&this.aParams['is_mail']==true)
{$.ajaxCall('friend.getLiveSearch','parent_id='+$($oObj).attr('id')+'&search_for='+$($oObj).val()+'&width='+this._get('width')+'&total_search='+$Core.searchFriendsInput._get('max_search'),'GET');return;}
var $iFound=0;var $sHtml='';$($Cache.friends).each(function($sKey,$aUser)
{var $mRegSearch=new RegExp($oObj.value,'i');if($aUser['full_name'].match($mRegSearch))
{if(isset($Core.searchFriendsInput.aLiveUsers[$aUser['user_id']]))
{return;}
$iFound++;$Core.searchFriendsInput.storeUser($aUser['user_id'],$aUser);$sHtml+='<li><a rel="'+$aUser['user_id']+'" class="js_friend_search_link '+(($iFound===1&&!$Core.searchFriendsInput._get('global_search'))?'js_temp_friend_search_form_holder_focus':'')+'" href="#" onclick="return $Core.searchFriendsInput.processClick(this, \''+$aUser['user_id']+'\');"><img src="'+$aUser['user_image']+'" alt="" style="width:25px; height:25px;" />'+$aUser['full_name']+'<div class="clear"></div></a></li>';if($iFound>$Core.searchFriendsInput._get('max_search'))
{return false;}}});if($iFound)
{if(this._get('global_search')){$sHtml+='<li><a href="#" class="holder_notify_drop_link" onclick="$(this).parents(\'form:first\').submit(); return false;">'+oTranslations['friend.show_more_results_for_search_term'].replace('{search_term}',htmlspecialchars($oObj.value))+'</a></li>';}
$($oObj).parent().find('.js_temp_friend_search_form').html('<div class="js_temp_friend_search_form_holder" style="width:'+this._get('width')+';"><ul>'+$sHtml+'</ul></div>').show();}
else
{$($oObj).parent().find('.js_temp_friend_search_form').html('').hide();}},storeUser:function($iUserId,$aData)
{this.aFoundUsers[$iUserId]=$aData;},removeSelected:function($oObj,$iUserId)
{if(isset(this.aLiveUsers[$iUserId]))
{delete this.aLiveUsers[$iUserId];}
$($oObj).parents('li:first').remove();},processClick:function($oObj,$iUserId)
{if(!isset(this.aFoundUsers[$iUserId]))
{return false;}
if(isset(this.aLiveUsers[$iUserId]))
{return false;}
this.aLiveUsers[$iUserId]=true;$Behavior.reloadLiveUsers=function(){$Core.searchFriendsInput.aLiveUsers={};$Behavior.reloadLiveUsers=function(){}}
this.bNoSearch=false;var $aUser=this.aFoundUser=this.aFoundUsers[$iUserId];var $oPlacement=$(this._get('placement'));$($oObj).parents('.js_friend_search_form:first').find('.js_temp_friend_search_form').html('').hide();var $sHtml='';$sHtml+='<li>';$sHtml+='<a href="#" class="friend_search_remove" title="Remove" onclick="$Core.searchFriendsInput.removeSelected(this, '+$iUserId+');  return false;">Remove</a>';if(!this._get('inline_bubble'))
{$sHtml+='<div class="friend_search_image"><img src="'+$aUser['user_image']+'" alt="" style="width:25px; height:25px;" /></div>';}
$sHtml+='<div class="friend_search_name">'+$aUser['full_name']+'</div>';if(!this._get('inline_bubble'))
{$sHtml+='<div class="clear"></div>';}
$sHtml+='<div><input type="hidden" name="'+this._get('input_name')+'[]" value="'+$aUser['user_id']+'" /></div>';$sHtml+='</li>';this.sHtml=$sHtml;if(empty($oPlacement.html()))
{$oPlacement.html('<div class="js_custom_search_friend_holder"><ul'+(this._get('inline_bubble')?' class="inline_bubble"':'')+'></ul>'+(this._get('inline_bubble')?'<div class="clear"></div>':'')+'</div>');}
if(this._get('onBeforePrepend'))
{this._get('onBeforePrepend')(this._get('onBeforePrepend'));}
$oPlacement.find('ul').prepend(this.sHtml);if(this._get('onclick'))
{this._get('onclick')(this._get('onclick'));}
if(this._get('global_search')){window.location.href=$aUser['user_profile'];$($oObj).parents('.js_temp_friend_search_form:first').hide();}
this.aFoundUsers={};if(this._get('inline_bubble')){$('#'+this._get('search_input_id')+'').val('').focus();}
return false;},closeSearch:function($oObj)
{$($oObj).parent().find('.js_temp_friend_search_form').html('').hide();},_get:function($sParam)
{return(isset(this.aParams[$sParam])?this.aParams[$sParam]:'');}}
 /* static\jscript\quick_edit.js */$Behavior.quickEdit=function()
{$('.sJsQuickEdit').dblclick(function()
{$(this).createQuickEditForm($(this).find('.quickEdit').get(0).href);return false;});$('.quickEdit').click(function()
{$(this).createQuickEditForm($(this).get(0).href);return false;});};$.fn.createQuickEditForm=function(sUrl)
{$aParams=$.getParams(sUrl);eval('var sTempVar = \'js_cache_quick_edit'+$aParams['id']+'\';');$(this).blur();if(document.getElementById(sTempVar))
{return;}
var sParams='';for(sVar in $aParams)
{sParams+='&'+sVar+'='+$aParams[sVar]+'';}
sParams=sParams.substr(1,sParams.length);var sProcessing='<span style="margin-left:4px; margin-right:4px; display:none; font-size:9pt; font-weight:normal;" id="js_quick_edit_processing'+$aParams['id']+'">'+getPhrase('core.processing')+'...</span>';switch($aParams['type'])
{case'input':$('body').append('<div id="js_cache_quick_edit'+$aParams['id']+'" style="display:none;">'+$('#'+$aParams['id']).html(sHtml)+'</div>');var sValue=$('#'+$aParams['content']).html();sValue=sValue.replace(/"/g,"&quot;").replace(/'/g,"&#039;");var sHtml;sHtml=' <input style="vertical-align:middle;" size="20" type="text" name="quick_edit_input" value="'+sValue+'" id="js_quick_edit'+$aParams['id']+'" /> ';sHtml+=' <input style="vertical-align:middle;" type="button" value="'+getPhrase('core.save')+'" class="button" onclick="$(\'#js_quick_edit_processing'+$aParams['id']+'\').show(); $(\'#js_cache_quick_edit'+$aParams['id']+'\').remove(); $(\'#js_quick_edit'+$aParams['id']+'\').ajaxCall(\''+$aParams['call']+'\', \''+sParams+'\');" /> ';sHtml+=' <input style="vertical-align:middle;" type="button" value="'+getPhrase('core.cancel')+'" class="button button_off" onclick="$(\'#'+$aParams['id']+'\').html($(\'#js_cache_quick_edit'+$aParams['id']+'\').html()); $(\'#js_cache_quick_edit'+$aParams['id']+'\').remove(); $Core.loadInit();" /> ';sHtml+=sProcessing;$('#'+$aParams['id']).html(sHtml);$('#js_quick_edit'+$aParams['id']).focus();break;case'text':$('#'+$aParams['id']).hide();$('body').append('<div id="js_cache_quick_edit'+$aParams['id']+'" style="display:none;">'+$('#'+$aParams['id']).html(sHtml)+'</div>');var sHtml;$.ajaxCall($aParams['data'],''+sParams+'');sHtml='<div id="js_quick_edit_id'+$aParams['id']+'">'+$.ajaxProcess(getPhrase('core.loading_text_editor'))+'</div>';sHtml+='<div class="t_right" style="padding:4px 0 4px 0;">';sHtml+=sProcessing;sHtml+=' <input type="button" value="'+getPhrase('core.save')+'" class="button" onclick="if (function_exists(\'js_quick_edit_callback\')){js_quick_edit_callback();} $(\'#js_quick_edit_processing'+$aParams['id']+'\').show(); $(\'#js_cache_quick_edit'+$aParams['id']+'\').remove(); $(\'#js_quick_edit'+$aParams['id']+'\').ajaxCall(\''+$aParams['call']+'\', \''+sParams+'\');" /> ';sHtml+=' <input type="button" value="'+getPhrase('core.cancel')+'" class="button button_off" onclick="$(\'#'+$aParams['id']+'\').html($(\'#js_cache_quick_edit'+$aParams['id']+'\').html()); $(\'#js_cache_quick_edit'+$aParams['id']+'\').remove()" /> ';if(isset($aParams['main_url']))
{if(function_exists('quickSubmit'))
{sHtml+=' <input type="button" onclick="quickSubmit(\''+$aParams['id']+'\', \''+$aParams['main_url']+'\')" value="'+getPhrase('core.go_advanced')+'" class="button button_off" /> ';}
else
{sHtml+=' <input type="button" value="'+getPhrase('core.go_advanced')+'" class="button button_off" onclick="window.location.href=\''+$aParams['main_url']+'\';" /> ';}}
sHtml+='</div>';$('#'+$aParams['id']).html(sHtml);$('#'+$aParams['id']).show();$('#js_quick_edit'+$aParams['id']).focus();break;}};
 /* module/photo/static/jscript/view.js */$Behavior.photoView=function()
{$('#js_update_photo_form').submit(function()
{$('#js_updating_photo').html($.ajaxProcess(oTranslations['photo.updating_photo']));$(this).ajaxCall('photo.updatePhoto');$('#js_photo_edit_form').hide();$('#js_photo_outer_content').show();return false;});$('#js_photo_cancel_edit').click(function()
{$('#js_photo_edit_form').hide();$('#js_photo_outer_content').show();return false;});}
var bLoadedKeyBrowser=false;var bByPassLoadedKeyBrowser=false;$Behavior.eventKeyboard=function()
{$('.comment_mini_end textarea').focus(function(){bByPassLoadedKeyBrowser=true;});$('.comment_mini_end textarea').blur(function(){bByPassLoadedKeyBrowser=false;});if(bLoadedKeyBrowser==true)
{return;}
$(document).keydown(function(e){if(!bByPassLoadedKeyBrowser){if(e.keyCode==37)
{$('#photo_view_theater_mode .previous a:first').click();}
else if(e.keyCode==39)
{$('#photo_view_theater_mode .next a:first').click();}}});bLoadedKeyBrowser=true;}
 /* module/photo/static/jscript/photo.js */function plugin_completeProgress()
{if($('#js_photo_upload_failed').hasClass('js_photo_upload_failed'))
{alert(oTranslations['photo.none_of_your_files_were_uploaded_please_make_sure_you_upload_either_a_jpg_gif_or_png_file']);return false;}
if($('#js_photo_action').val()=='upload')
{$('#js_upload_form_outer').show();}
iCnt=0;sHtml='';$('.js_uploaded_image').each(function()
{iCnt++;if(iCnt==1)
{$(this).addClass('row_first');}
else
{$(this).removeClass('row_first');}
sHtml+='<div id="js_uploaded_photo_'+this.id.replace('js_photo_','')+'"><input type="hidden" name="val[photo_id][]" value="'+this.id.replace('js_photo_','')+'" /></div>';});$('#js_post_form_content').html(sHtml);switch($('#js_photo_action').val())
{case'process':$('#js_post_form').submit();break;default:iNewInputBars=0;$('.js_uploader_files').remove();sInput='';if(typeof oProgressBar!="undefined")
{for(i=1;i<=oProgressBar['total'];i++)
{sInput+='<div class="js_uploader_files"><input type="file" name="'+oProgressBar['file_id']+'" size="30" class="js_uploader_files_input" disabled="disabled" onchange="addMoreToProgressBar();" /></div>'+"\n";}}
$('#js_uploader_files_outer').append(sInput);break;}}
function plugin_startProgress(sProgressKey)
{$('#js_upload_form_outer').hide();}
function deleteNewPhoto(iId)
{if(confirm(getPhrase('core.are_you_sure')))
{$('#js_photo_'+iId).remove();$('#js_uploaded_photo_'+iId).remove();iCnt=0;$('.js_uploaded_image').each(function()
{iCnt++;});if(!iCnt)
{$('#js_uploaded_images').hide();}
$.ajaxCall('photo.deleteNewPhoto','id='+iId);return false;}
return false;}
function plugin_addFriendToSelectList()
{$('#js_allow_list_input').show();}
function plugin_cancelFriendSelection()
{$('#js_allow_list_input').hide();}
$Behavior.photoCategoryDropDownBuild=function()
{if($('.js_photo_active_items').length>0)
{$('.js_photo_active_items').each(function()
{var aParts=explode(',',$(this).html());for(i in aParts)
{if(empty(aParts[i]))
{continue;}
$(this).parents('.js_category_list_holder:first').find('.js_photo_category_'+aParts[i]+':first').attr('selected',true);}});}}
$Behavior.photoCategoryDropDown=function()
{$('.js_photo_category').click(function()
{iId=this.id.replace('js_photo_category_','');iItemId=$(this).parents('div:first').parent().parent().parent().find('.js_photo_item_id').html();if($(this).hasClass('selected'))
{$(this).removeClass('selected');$('#js_photo_category_id_'+(iItemId===null?'':iItemId)+iId).remove();}
else
{$(this).addClass('selected');$(this).prepend('<div id="js_photo_category_id_'+(iItemId===null?'':iItemId)+iId+'"><input type="hidden" name="val'+(iItemId===null?'':'['+iItemId+']')+'[category_id][]" value="'+iId+'" /></div>');}
return false;});$('.js_photo_category_done').click(function()
{$('.select_clone').hide();return false;});$('.select_clone_select').click(function()
{$(this).next('.select_clone').toggle();return false;});$(document).click(function()
{$('.select_clone').hide();});$('.hover_action').each(function()
{$(this).parents('.js_outer_photo_div:first').css('width',this.width+'px');});$('#js_photo_album_select').change(function()
{if(empty(this.value))
{$('#js_photo_view_this_album').remove();}
else
{if($('#js_photo_view_this_album').length>0)
{$('#js_photo_view_this_album').show();}
else
{$('#js_photo_action').append('<option value="view_album" id="js_photo_view_this_album">'+oTranslations['photo.view_this_album']+'</option>');}}});}
function uploadComplete()
{if(typeof swfu!='undefined')
{var oStats=swfu.getStats();if(oStats.in_progress>0||oStats.files_queued>0)
{}
else
{var sPhotos="";for(var i in window.aImagesUrl)
{sPhotos+='photos[]='+window.aImagesUrl[i]+'&';}
sPhotos=sPhotos.substr(0,sPhotos.length-1);window.parent.$.ajaxCall('photo.process','js_disable_ajax_restart=true&'+sPhotos+'&action='+$('#js_photo_action').val());}}}
if(typeof $Core.Photo=='undefined')$Core.Photo={};$Core.Photo.setCoverPhoto=function(iPhotoId,iItemId)
{$.ajaxCall('pages.setCoverPhoto','photo_id='+iPhotoId+'&page_id='+iItemId);}
 /* static\jscript\switch_legend.js */$Behavior.switchLegends=function()
{$('.legend').click(function()
{var sNextDisplay=$(this).next().get(0).style.display;var sId=$(this).get(0).id;if(sNextDisplay==''||sNextDisplay=='block')
{$($(this).next()).hide('fast');$(this).addClass('legendClosed');if(!getCookie(sId))
{setCookie(sId,true,365);}}
else
{$($(this).next()).show('fast');$(this).removeClass('legendClosed');deleteCookie(sId);}});$('.legend').each(function()
{if(getCookie($(this).get(0).id))
{$(this).addClass('legendClosed');$(this).next().hide();}});};
 /* static\jscript\switch_menu.js */$Behavior.switchLabelMenu=function()
{$('.label_flow_menu a').click(function()
{$(this).blur();if($(this).parent().hasClass('label_flow_menu_active'))
{return false;}
var aArgs=$(this).get(0).href.split('#');var aArgsFinal=aArgs[1].split('?');$(this).switchMenu('label_flow_menu_active',aArgsFinal[0],aArgsFinal[1]);return false;});};$.fn.switchMenu=function(sMenu,sAjaxCall,sParams)
{$(this).parent().parent().find('li').removeClass(sMenu);$(this).parent().addClass(sMenu);$(this).parents().next('.labelFlowContent').html('<div class="label_flow" style="height:'+($(this).parents().next('.labelFlowContent').height())+'px; text-align:center;"><img src="'+oJsImages['ajax_large']+'" alt="" style="vertical-align:middle;" /></div>');if(sAjaxCall)
{this.ajaxCall(sAjaxCall,sParams,null,'GET');}
return this;};
 /* module/feed/static/jscript/feed.js */var $sFormAjaxRequest=null;var $bButtonSubmitActive=true;var $ActivityFeedCompleted={};var $sCurrentSectionDefaultPhrase=null;var $sCssHeight='40px';var $sCustomPhrase=null;var $sCurrentForm=null;var $sStatusUpdateValue=null;var $iReloadIteration=0;var $oLastFormSubmit=null;var bCheckUrlCheck=false;var bCheckUrlForceAdd=false;$Core.isInView=function(elem)
{if(!$Core.exists(elem)){return false;}
var docViewTop=$(window).scrollTop();var docViewBottom=docViewTop+$(window).height();var elemTop=$(elem).offset().top;var elemBottom=elemTop+$(elem).height();return((docViewTop<elemTop)&&(docViewBottom>elemBottom));}
$Core.resetActivityFeedForm=function()
{$('.activity_feed_form_attach li a').removeClass('active');$('.activity_feed_form_attach li a:first').addClass('active');$('.global_attachment_holder_section').hide();$('#global_attachment_status').show();$('.global_attachment_holder_section textarea').val($('#global_attachment_status_value').html()).css({height:$sCssHeight});$('.activity_feed_form_button_status_info').hide();$('.activity_feed_form_button_status_info textarea').val('');$Core.resetActivityFeedErrorMessage();$sFormAjaxRequest=$('.activity_feed_form_attach li a.active').find('.activity_feed_link_form_ajax').html();$Core.activityFeedProcess(false);$('.js_share_connection').val('0');$('.feed_share_on_item a').removeClass('active');$.each($ActivityFeedCompleted,function()
{this(this);});$('#js_add_location, #js_location_input, #js_location_feedback').hide();$('.activity_feed_form_button_position').show();$('#hdn_location_name, #val_location_name ,#val_location_latlng').val('');$('#btn_display_check_in').removeClass('is_active');}
$Core.resetActivityFeedErrorMessage=function()
{$('#activity_feed_upload_error').hide();$('#activity_feed_upload_error_message').html('');}
$Core.resetActivityFeedError=function(sMsg)
{$('.activity_feed_form_share_process').hide();$('.activity_feed_form_button .button').removeClass('button_not_active');$bButtonSubmitActive=true;$('#activity_feed_upload_error').show();$('#activity_feed_upload_error_message').html(sMsg);}
$Core.activityFeedProcess=function($bShow)
{if($bShow)
{$bButtonSubmitActive=false;$('.activity_feed_form_share_process').show();$('.activity_feed_form_button .button').addClass('button_not_active');}
else
{$bButtonSubmitActive=true;$('.activity_feed_form_share_process').hide();$('.activity_feed_form_button .button').removeClass('button_not_active');$('.egift_wrapper').hide();}}
$Core.addNewPollOption=function(iMaxAnswers,sLimitReached)
{if(iMaxAnswers>=($('#js_poll_feed_answer li').length+1))
{$('.js_poll_feed_answer').append('<li><input type="text" name="val[answer][][answer]" value="" size="30" class="js_feed_poll_answer v_middle" /></li>');}
else
{alert(oTranslations['poll.you_have_reached_your_limit']);}
return false;}
$Core.forceLoadOnFeed=function()
{if($iReloadIteration>=2){return;}
if(!$Core.exists('#js_feed_pass_info')){return;}
$iReloadIteration++;$('#feed_view_more_loader').show();$('.global_view_more').hide();setTimeout("$.ajaxCall('feed.viewMore', $('#js_feed_pass_info').html().replace(/&amp;/g, '&') + '&iteration="+$iReloadIteration+"', 'GET');",1000);}
$Core.handlePasteInFeed=function(oObj)
{if((substr($(oObj).val(),0,7)=='http://'||substr($(oObj).val(),0,8)=='https://'||(substr($(oObj).val(),0,4)=='www.')))
{bCheckUrlCheck=true;$('#activity_feed_submit').attr("disabled","disabled");$('.activity_feed_form_share_process').show();$(oObj).parent().append('<div id="js_preview_link_attachment_custom_form_sub" class="js_preview_link_attachment_custom_form" style="margin-top:5px;"></div>');$Core.ajax('link.preview',{type:'POST',params:{'no_page_update':'1',value:$(oObj).val()},success:function($sOutput){$('.activity_feed_form_share_process').hide();if(substr($sOutput,0,1)=='{'){}
else{$('#js_global_attach_value').val($(oObj).val());bCheckUrlForceAdd=true;$('#js_preview_link_attachment_custom_form_sub').html($sOutput);}}});}}
$Core.loadCommentButton=function()
{$('.feed_comment_buttons_wrap div input.button_set_off').show().removeClass('button_set_off');};$Behavior.activityFeedProcess=function(){if(!$Core.exists('#js_feed_content')){$iReloadIteration=0;return;}
if($Core.exists('.global_view_more')){if($Core.isInView('.global_view_more')){$Core.forceLoadOnFeed();}
$(window).scroll(function(){if($Core.isInView('.global_view_more')){$Core.forceLoadOnFeed();}});}
$('.like_count_link').each(function(){var sHtml=$(this).parent().find('.like_count_link_holder:first').html();});$sFormAjaxRequest=$('.activity_feed_form_attach li a.active').find('.activity_feed_link_form_ajax').html();if(typeof Plugin_sFormAjaxRequest=='function')
{Plugin_sFormAjaxRequest();}
if($Core.exists('.profile_timeline_header')){$(window).scroll(function(){if(isScrolledIntoView('.profile_timeline_header')){$('.timeline_main_menu').removeClass('timeline_main_menu_fixed');$('#timeline_dates').removeClass('timeline_dates_fixed');}
else{if(!$('.timeline_main_menu').hasClass('timeline_main_menu_fixed')){$('.timeline_main_menu').addClass('timeline_main_menu_fixed');if($('#content').height()>600){$('#timeline_dates').addClass('timeline_dates_fixed');}}}});}
$('#global_attachment_status textarea').keyup(function(){$Core.handlePasteInFeed($(this));}).bind('paste',function()
{var that=this;setTimeout(function(){$Core.handlePasteInFeed(that);},0);});$('#global_attachment_status textarea').keydown(function(){$Core.resizeTextarea($(this));});$('.activity_feed_form_button_status_info textarea').keydown(function(){$Core.resizeTextarea($(this));});$('#global_attachment_status textarea').focus(function()
{if($(this).val()==$('#global_attachment_status_value').html())
{$(this).val('');$(this).css({height:'50px'});$('.activity_feed_form_button').show();$(this).addClass('focus');$('.activity_feed_form_button_status_info textarea').addClass('focus');}});$('.activity_feed_form_button_status_info textarea').focus(function()
{var $sDefaultValue=$(this).val();var $bIsDefault=true;$('.activity_feed_extra_info').each(function()
{if($(this).html()==$sDefaultValue)
{$bIsDefault=false;return false;}});if(($('#global_attachment_status textarea').val()==$('#global_attachment_status_value').html()&&empty($sDefaultValue))||!$bIsDefault)
{$(this).val('');$(this).css({height:'50px'});$(this).addClass('focus');$('#global_attachment_status textarea').addClass('focus');}});$('#js_activity_feed_form').submit(function()
{if($sCurrentForm=='global_attachment_status'){var oStatusUpdateTextareaFilled=$('#global_attachment_status textarea');if($sStatusUpdateValue==oStatusUpdateTextareaFilled.val()){oStatusUpdateTextareaFilled.val('');}}
else{var oCustomTextareaFilled=$('.activity_feed_form_button_status_info textarea');if($sCustomPhrase==oCustomTextareaFilled.val()){oCustomTextareaFilled.val('');}}
if($bButtonSubmitActive===false)
{return false;}
$Core.activityFeedProcess(true);if($sFormAjaxRequest===null)
{return true;}
$('.js_no_feed_to_show').remove();if(bCheckUrlForceAdd){$('.activity_feed_form_button_status_info textarea').val($('#global_attachment_status textarea').val());$sFormAjaxRequest='link.addViaStatusUpdate';}
$(this).ajaxCall($sFormAjaxRequest);if(bCheckUrlForceAdd){$('#js_preview_link_attachment_custom_form_sub').remove();}
return false;});$('.activity_feed_form_attach li a').click(function()
{$sCurrentForm=$(this).attr('rel');if($sCurrentForm=='view_more_link'){$('.view_more_drop').toggle();return false;}
else{$('.view_more_drop').hide();}
if($sCurrentForm=='global_attachment_status'){$('#btn_display_check_in').show();}else{$('#btn_display_check_in').hide();$('#hdn_location_name, #val_location_name ,#val_location_latlng').val('');$('#btn_display_check_in').removeClass('is_active');}
$('#js_preview_link_attachment_custom_form_sub').remove();$('#activity_feed_upload_error').hide();$('.global_attachment_holder_section').hide();$('.activity_feed_form_attach li a').removeClass('active');$(this).addClass('active');if($(this).find('.activity_feed_link_form').length>0)
{$('#js_activity_feed_form').attr('action',$(this).find('.activity_feed_link_form').html()).attr('target','js_activity_feed_iframe_loader');$sFormAjaxRequest=null;if(empty($('.activity_feed_form_iframe').html()))
{$('.activity_feed_form_iframe').html('<iframe id="js_activity_feed_iframe_loader" name="js_activity_feed_iframe_loader" height="200" width="500" frameborder="1" style="display:none;"></iframe>');}}
else
{$sFormAjaxRequest=$(this).find('.activity_feed_link_form_ajax').html();}
$('#'+$(this).attr('rel')).show();$('.activity_feed_form_holder_attach').show();$('.activity_feed_form_button').show();var $oStatusUpdateTextarea=$('#global_attachment_status textarea');var $sStatusUpdateTextarea=$oStatusUpdateTextarea.val();$sStatusUpdateValue=$('#global_attachment_status_value').html();var $oCustomTextarea=$('.activity_feed_form_button_status_info textarea');var $sCustomTextarea=$oCustomTextarea.val();$sCustomPhrase=$(this).find('.activity_feed_extra_info').html();var $bHasDefaultValue=false;$('.activity_feed_extra_info').each(function()
{if($(this).html()==$sCustomTextarea)
{$bHasDefaultValue=true;return false;}});if($(this).attr('rel')!='global_attachment_status')
{$('.activity_feed_form_button_status_info').show();if((empty($sCustomTextarea)&&($sStatusUpdateTextarea==$sStatusUpdateValue||empty($sStatusUpdateTextarea)))||($sStatusUpdateTextarea==$sStatusUpdateValue&&$bHasDefaultValue)||(!$bButtonSubmitActive&&$bHasDefaultValue))
{$oCustomTextarea.val($sCustomPhrase).css({height:$sCssHeight});}
else if($sStatusUpdateTextarea!=$sStatusUpdateValue&&$bButtonSubmitActive&&!empty($sStatusUpdateTextarea))
{$oCustomTextarea.val($sStatusUpdateTextarea);}
$('.activity_feed_form_button .button').addClass('button_not_active');$bButtonSubmitActive=false;}
else
{$('.activity_feed_form_button_status_info').hide();$('.activity_feed_form_button .button').removeClass('button_not_active');if(!$bHasDefaultValue&&!empty($sCustomTextarea))
{$oStatusUpdateTextarea.val($sCustomTextarea);}
else if($bHasDefaultValue&&empty($sStatusUpdateTextarea))
{$oStatusUpdateTextarea.val($sStatusUpdateValue).css({height:$sCssHeight});}
$bButtonSubmitActive=true;}
if($(this).hasClass('no_text_input'))
{$('.activity_feed_form_button_status_info').hide();}
$('.activity_feed_form_button .button').show();$('#js_piccup_upload').hide();return false;});}
$Behavior.activityFeedLoader=function()
{if(empty($('.view_more_drop').html())){$('.timeline_view_more').parent().hide();}
$('.js_feed_entry_add_comment').click(function()
{$('.js_comment_feed_textarea').each(function()
{if($(this).val()==$('.js_comment_feed_value').html())
{$(this).removeClass('js_comment_feed_textarea_focus');$(this).val($('.js_comment_feed_value').html());}
$(this).parents('.comment_mini').find('.feed_comment_buttons_wrap').hide();});$(this).parents('.js_parent_feed_entry:first').find('.comment_mini_content_holder').show();$(this).parents('.js_parent_feed_entry:first').find('.feed_comment_buttons_wrap').show();if($(this).parents('.js_parent_feed_entry:first').find('.js_comment_feed_textarea').val()==$('.js_comment_feed_value').html())
{$(this).parents('.js_parent_feed_entry:first').find('.js_comment_feed_textarea').val('');}
$(this).parents('.js_parent_feed_entry:first').find('.js_comment_feed_textarea').focus().addClass('js_comment_feed_textarea_focus');$(this).parents('.js_parent_feed_entry:first').find('.comment_mini_textarea_holder').addClass('comment_mini_content');$(this).parents('.js_parent_feed_entry:first').find('.js_feed_comment_form').find('.comment_mini_image').show();var iTotalComments=0;$(this).parents('.js_parent_feed_entry:first').find('.js_mini_feed_comment').each(function()
{iTotalComments++;});if(iTotalComments>2)
{$.scrollTo($(this).parents('.js_parent_feed_entry:first').find('.js_comment_feed_textarea_browse:first'),340);}
return false;});$('.js_comment_feed_textarea').focus(function()
{$Core.commentFeedTextareaClick(this);});$('#js_captcha_load_for_check_submit').submit(function(){if(function_exists(''+Editor.sEditor+'_wysiwyg_feed_comment_form'))
{eval(''+Editor.sEditor+'_wysiwyg_feed_comment_form(this);');}
$oLastFormSubmit.parent().parent().find('.js_feed_comment_process_form:first').show();$(this).ajaxCall('comment.add',$oLastFormSubmit.getForm());return false;});$('.js_comment_feed_form').submit(function()
{if($Core.exists('#js_captcha_load_for_check')){$('#js_captcha_load_for_check').css({top:getPageScroll()[1]+(getPageHeight()/5),left:'50%','margin-left':'-'+(($('#js_captcha_load_for_check').width()/2)+12)+'px',display:'block'});$oLastFormSubmit=$(this);return false;}
if(function_exists(''+Editor.sEditor+'_wysiwyg_feed_comment_form'))
{eval(''+Editor.sEditor+'_wysiwyg_feed_comment_form(this);');}
$(this).parent().parent().find('.js_feed_comment_process_form:first').show();$(this).ajaxCall('comment.add');$(this).find('.error_message').remove();return false;});$('.js_comment_feed_new_reply').click(function(){var oParent=$(this).parents('.js_mini_feed_comment:first').find('.js_comment_form_holder:first');if((Editor.sEditor=='tiny_mce'||Editor.sEditor=='tinymce')&&isset(tinyMCE)&&isset(tinyMCE.activeEditor)){$('.js_comment_feed_form').find('.js_feed_comment_parent_id:first').val($(this).attr('rel'));tinyMCE.activeEditor.focus();if(typeof($.scrollTo)=='function'){$.scrollTo('.js_comment_feed_form',800);}
return false;}
var sCommentForm=$(this).parents('.js_feed_comment_border:first').find('.js_feed_comment_form:first').html();oParent.html(sCommentForm);oParent.find('.js_feed_comment_parent_id:first').val($(this).attr('rel'));oParent.find('.js_comment_feed_textarea:first').focus();$Core.commentFeedTextareaClick(oParent.find('.js_comment_feed_textarea:first'));$('.js_feed_add_comment_button .error_message').remove();oParent.find('.button_set_off:first').show().removeClass('button_set_off');$Core.loadInit();return false;});$('.comment_mini').hover(function(){$('.feed_comment_delete_link').hide();$(this).find('.feed_comment_delete_link:first').show();},function(){$('.feed_comment_delete_link').hide();});}
$Core.commentFeedTextareaClick=function($oObj)
{$($oObj).keydown(function()
{if($(this).hasClass('no_resize_textarea')){return;}
$Core.resizeTextarea($(this));});if($($oObj).val()==$('.js_comment_feed_value').html())
{$($oObj).val('');}
$($oObj).addClass('js_comment_feed_textarea_focus').addClass('is_focus');$($oObj).parents('.comment_mini').find('.feed_comment_buttons_wrap:first').show();$($oObj).parent().parent().find('.comment_mini_textarea_holder:first').addClass('comment_mini_content');$($oObj).parent().parent().find('.comment_mini_image:first').show();}
$Behavior.activityFeedAttachLink=function()
{$('#js_global_attach_link').click(function()
{$Core.activityFeedProcess(true);$Core.ajax('link.preview',{params:{'no_page_update':'1',value:$('#js_global_attach_value').val()},type:'POST',success:function($sOutput)
{$('#js_global_attachment_link_cancel').show();if(substr($sOutput,0,1)=='{'){var $oOutput=$.parseJSON($sOutput);$Core.resetActivityFeedError($oOutput['error']);$bButtonSubmitActive=false;$('.activity_feed_form_button .button').addClass('button_not_active');}
else{$Core.activityFeedProcess(false);$('#js_preview_link_attachment').html($sOutput);$('#global_attachment_link_holder').hide();}}});});$('#js_global_attachment_link_cancel').click(function()
{$('#js_global_attachment_link_cancel').hide();});}
$ActivityFeedCompleted.link=function()
{$bButtonSubmitActive=true;$('#global_attachment_link_holder').show();$('.activity_feed_form_button .button').removeClass('button_not_active');$('#js_preview_link_attachment').html('');$('#js_global_attach_value').val('http://');}
$ActivityFeedCompleted.photo=function()
{$bButtonSubmitActive=true;$('#global_attachment_photo_file_input').val('');}
var sToReplace='';function attachFunctionTagger(sSelector)
{$(sSelector).data('selector',sSelector).keyup(function(eventObject,sSelector){var sInput=$($(this).data('selector')).val();var iInputLength=sInput.length;var iAtSymbol=sInput.lastIndexOf('@');if(sInput=='@'||empty(sInput)||iAtSymbol<0||iAtSymbol==(iInputLength-1))
{$($(this).data('selector')).siblings('.chooseFriend').hide(function(){$(this).remove();});return;}
var sNameToFind=sInput.substring(iAtSymbol+1,iInputLength);var aFoundFriends=[],sOut='';for(var i in $Cache.friends)
{if($Cache.friends[i]['full_name'].toLowerCase().indexOf(sNameToFind.toLowerCase())>=0)
{var sNewInput=sInput.substr(0,iAtSymbol).replace(/\'/g,'&#39;').replace(/\"/g,'&#34;');sToReplace=sNewInput;aFoundFriends.push({user_id:$Cache.friends[i]['user_id'],full_name:$Cache.friends[i]['full_name'],user_image:$Cache.friends[i]['user_image']});sOut+='<div class="tagFriendChooser" onclick="$(\''+$(this).data('selector')+'\').val(sToReplace + \'\' + (getParam(\'bEnableMicroblogSite\') ? \'@'+$Cache.friends[i]['user_name']+'\' : \'[x='+$Cache.friends[i]['user_id']+']'+$Cache.friends[i]['full_name'].replace(/\&#039;/g,'\\\'')+'[/x]\') + \' \').putCursorAtEnd();$(\''+$(this).data('selector')+'\').siblings(\'.chooseFriend\').remove();"><div class="tagFriendChooserImage"><img style="vertical-align:middle;width:25px; height:25px;" src="'+$Cache.friends[i]['user_image']+'"> </div><span>'+(($Cache.friends[i]['full_name'].length>25)?($Cache.friends[i]['full_name'].substr(0,25)+'...'):$Cache.friends[i]['full_name'])+'</span></div>';sOut=sOut.replace("\n",'').replace("\r",'');}}
$($(this).data('selector')).siblings('.chooseFriend').remove();if(!empty(sOut)){$($(this).data('selector')).after('<div class="chooseFriend" style="width: '+$(this).parent().width()+'px;">'+sOut+'</div>');}}).focus(function(){if(typeof $Cache=='undefined'||typeof $Cache.friends=='undefined')
{$.ajaxCall('friend.buildCache','','GET');}});}
$Behavior.tagger=function()
{var aSelectors=['#js_activity_feed_form > .activity_feed_form_holder > #global_attachment_status > textarea','.js_comment_feed_textarea','.js_comment_feed_textarea_focus'];for(var i in aSelectors)
{if($(aSelectors[i]).length>=1)
{var bChanged=false;$.each($(aSelectors[i]),function(key,value)
{if($(value).attr('id')!=undefined)
{aSelectors.push('#'+$(value).attr('id'));bChanged=true;}});if(bChanged)
{aSelectors.splice(i,1);}}}
for(var i in aSelectors)
{var sSelector=aSelectors[i];if(sSelector=='#pageFeedTextarea'||sSelector=='#eventFeedTextarea'||sSelector=='#profileFeedTextarea')
{continue;}
if($(sSelector).length>1)
{$.each($(sSelector),function(key,value)
{if($(value).attr('id')!=undefined)
{attachFunctionTagger('#'+$(value).attr('id'));}});continue;}
attachFunctionTagger(sSelector);}};
 /* module/photo/static/jscript/index.js */$Behavior.showSpecialInfo=function()
{$('.photo_hover_info').hide();$('.photo_row').hover(function()
{if($(this).hasClass('photo_hover_info_shown'))
{return;}
$(this).addClass('photo_hover_info_shown');$(this).find('.photo_hover_info').show().css('z-index','199');},function()
{$(this).find('.photo_hover_info').hide().css('z-index','1');$(this).removeClass('photo_hover_info_shown');});if(!isset($Core.Photo))$Core.Photo={};$Core.Photo.inlineAction=function(item_id,counter_holder,action,toggle)
{$('.'+toggle).toggle();$.ajaxCall('like.'+action,'item_type_id=photo&module_name=photo&type_id=photo&item_id='+item_id+'&counterholder='+counter_holder+'&action_type_id=2');};$Core.Photo.albumInlineAction=function(item_id,counter_holder,action,toggle)
{console.log(counter_holder);$('.'+toggle).toggle();$.ajaxCall('like.'+action,'item_type_id=photo&module_name=photo&type_id=photo_album&item_id='+item_id+'&counterholder='+counter_holder+'&action_type_id=2');};};
 /* module/user/static/jscript/register.js */$Core.registration={iStep:1,iTotalSteps:2,submitForm:function()
{$('#core_js_messages').html('');$('#js_signup_error_message').html('');$('#js_register_accept').hide();$('#js_registration_holder').hide();$('#js_registration_process').css('height',$('#js_registration_holder').height()+'px');$('#js_registration_process').show();$('#js_form').ajaxCall('user.getRegistrationStep','step='+this.iStep+'&last='+(this.iStep==this.iTotalSteps?'1':'0')+'&next='+((this.iStep+1)==this.iTotalSteps?'1':'0')+'');},updateForm:function(sHtml)
{$('#js_register_step'+this.iStep).hide();$('#js_signup_block').append(sHtml);$('#js_registration_process').hide();$('#js_registration_process').css('height',$('#js_registration_holder').height()+'px');$('#js_registration_holder').show();this.iStep++;},showCaptcha:function()
{$('#js_register_capthca_image').show();},useSuggested:function(oObj)
{$('#user_name').val($(oObj).html());$('#js_verify_username').hide();$('#js_signup_user_name').html('<span style="color:green; font-weight:bold;">'+$(oObj).html()+'</span>');}}
$Behavior.user_register_init=function()
{$('#js_submit_register_form').click(function()
{return $Core.registration.submitForm();});};
 /* module/core/static/jscript/country.js */$Behavior.countryIsoChange=function()
{$('#country_iso').change(function()
{var sChildValue=$('#js_country_child_id_value').val();var sExtra='';$('#js_country_child_id').html('');$('#country_iso').after('<span id="js_cache_country_iso">'+$.ajaxProcess('no_message')+'</span>');if($('#js_country_child_is_search').length>0)
{sExtra+='&country_child_filter=true';}
$.ajaxCall('core.getChildren','country_iso='+this.value+'&country_child_id='+sChildValue+sExtra,'GET');});}
 /* static\jscript\editor.js */$Behavior.putCursorAtEnd=function()
{jQuery.fn.putCursorAtEnd=function()
{return this.each(function()
{$(this).focus();if(this.setSelectionRange)
{var len=$(this).val().length*2;this.setSelectionRange(len,len);}
else
{$(this).val($(this).val());}
this.scrollTop=999999;});};};if(typeof(oEditor)=='undefined')
{debug('oEditor not defined.');}
var bAllowEditor=true;if(oEditor['wysiwyg']===false)
{bAllowEditor=false;}
var Editor={sVersion:'1.0',sEditorId:'text',sImagePath:getParam('sJsStaticImage')+'editor/',sEditor:getParam('sEditor'),aEditors:new Array(),setId:function(sId)
{this.sEditorId=sId;this.aEditors[sId]=true;return this;},getId:function()
{return this.sEditorId;},getEditors:function()
{for(sEditor in this.aEditors)
{this.sEditorId=sEditor;this.getEditor();}},fullScreen:function(sEditorId)
{tb_show(oTranslations['core.full_screen_editor'],'#?TB_inline=true&type=textarea&parent_id='+sEditorId);return false;},getEditor:function(bReturn)
{var sHtml;if(this.sEditor=='tinymce'&&typeof(tinyMCE)=='object'&&tinyMCE.getInstanceById(this.sEditorId)==null)
{this.sEditor='default';}
if(!bAllowEditor)
{this.sEditor='default';}
sHtml='';$(oEditor['images']).each(function($iKey,$aValue)
{if(isset($aValue[0])&&$aValue[0]=='separator')
{sHtml+=Editor.getSeparator();}
else
{if(isset($aValue['command']))
{sHtml+=Editor.getBBCode($aValue['image'],$aValue['command'],$aValue['phrase']);}
else
{sHtml+='<div class="editor_button_holder">';sHtml+='<a href="#" class="editor_button" onclick="'+(isset($aValue['js'])?$aValue['js']:'Editor.ajaxCall(this, \''+$aValue['ajax']+'\');')+' return false;">'+Editor.getImage($aValue['image'],$aValue['phrase'])+'</a>';sHtml+='<div class="editor_drop_holder"><div class="editor_drop_content"></div></div>';sHtml+='</div>';}}});sHtml+='<div class="clear"></div>';if(bReturn)
{return sHtml;}
$('#js_editor_menu_'+this.getId()).html(sHtml);$('#js_editor_menu_'+this.getId()).show();$('#editor_toggle').blur();return true;},getList:function($sType)
{var $sList=($sType=='bullet'?'ul':'ol');this.sLastListType=$sList;Editor.createBBtag("["+$sList+"]",'',this.sEditorId);this.getListReply();},getListReply:function()
{var $sReply=prompt('Enter text to build your list. Once you are done click cancel.','');if(!empty($sReply))
{Editor.createBBtag("\n[*]","",this.sEditorId,$sReply);this.getListReply();}
else
{Editor.createBBtag("\n[/"+this.sLastListType+"]\n",'',this.sEditorId);}},ajaxCall:function($oObject,$sCall)
{if(!empty($($oObject).parent().find('.editor_drop_content').html()))
{$($oObject).parent().find('.editor_drop_holder').toggle();return;}
var $sQuery='';$sQuery=getParam('sGlobalTokenName')+'[ajax]=true&'+getParam('sGlobalTokenName')+'[call]='+$sCall+'&editor_id='+this.getId();$.ajax({type:'GET',dataType:'html',url:getParam('sJsAjax'),data:$sQuery,success:function($sOutput)
{$($oObject).parent().find('.editor_drop_content').html($sOutput);$($oObject).parent().find('.editor_drop_holder').show();}});},getAttachments:function(sEditorId)
{tb_show(''+getPhrase('attachment.attach_files')+'',$.ajaxBox('attachment.add','height=500&width=600&category_id='+Attachment['sCategory']+'&attachments='+$('#js_attachment').val()+'&item_id='+Attachment['iItemId']+'&editor_id='+sEditorId));return false;},promptUrl:function(sEditorId)
{tb_show('',$.ajaxBox('core.prompt','height=200&width=300&type=url&editor='+sEditorId));return false;},promptImg:function(sEditorId)
{tb_show('',$.ajaxBox('core.prompt','height=200&width=300&type=img&editor='+sEditorId));return false;},toggle:function(sEditorId)
{if(tinyMCE.getInstanceById(sEditorId)==null)
{this.sEditor='tinymce';if(oEditor['toggle'])
{customTinyMCE_init(sEditorId);}
tinyMCE.execCommand('mceAddControl',false,sEditorId);$('#js_editor_menu_'+sEditorId).hide();debug('Enabled WYSIWYG text editor');deleteCookie('editor_wysiwyg');}
else
{tinyMCE.execCommand('mceRemoveControl',false,sEditorId);if(oEditor['toggle'])
{$('#layer_text').html('<div id="layer_text"><textarea name="val[text]" rows="12" cols="50" class="w_95" id="text">'+tinyMCE.activeEditor.getContent()+'</textarea></div>');}
debug('Disabled WYSIWYG text editor');setCookie('editor_wysiwyg',true,360);if($('#js_editor_menu_'+sEditorId).html()!='')
{$('#js_editor_menu_'+sEditorId).show();$('#editor_toggle').blur();return false;}
this.getEditor();}
return false;},getSeparator:function()
{return'<div class="editor_separator"></div>';},getBBCode:function(sName,sCode,sTitle)
{sHtml='<div class="editor_button_holder">';sHtml+='<a href="#" class="editor_button" onclick="return Editor.createBBtag(\'['+sCode+']\', \'[/'+sCode+']\', \''+this.sEditorId+'\');">'+this.getImage(sName,sTitle)+'</a>';sHtml+='</div>';return sHtml;},getImage:function(sName,sTitle)
{return'<img class="editor_button" src="'+sName+'" alt="'+sTitle+'" title="'+sTitle+'" />';},setContent:function(mValue)
{eval('var sContent = '+this.sEditor+'_wysiwyg_setContent(mValue);');},getContent:function()
{eval('var sContent = '+this.sEditor+'_wysiwyg_getContent();');return sContent;},insert:function(mValue)
{eval(this.sEditor+'_wysiwyg_insert(mValue);');$('.editor_drop_holder').hide();return true;},remove:function(mValue)
{eval(this.sEditor+'_wysiwyg_remove(mValue);');return true;},createBBtag:function(openerTag,closerTag,areaId,sEmptyValue)
{if(bIsIE&&bIsWin)
{this.createBBtag_IE(openerTag,closerTag,areaId,sEmptyValue);}
else
{this.createBBtag_nav(openerTag,closerTag,areaId,sEmptyValue);}
$('#'+areaId).putCursorAtEnd();return false;},createBBtag_IE:function(openerTag,closerTag,areaId,sEmptyValue)
{var txtArea=document.getElementById(areaId);var aSelection=document.selection.createRange().text;var range=txtArea.createTextRange();if(aSelection)
{document.selection.createRange().text=openerTag+aSelection+closerTag;txtArea.focus();range.move('textedit');range.select();}
else
{if(!empty(sEmptyValue))
{openerTag=openerTag+sEmptyValue;}
var oldStringLength=range.text.length+openerTag.length;txtArea.value+=openerTag+closerTag;txtArea.focus();range.move('character',oldStringLength);range.collapse(false);range.select();}
return;},createBBtag_nav:function(openerTag,closerTag,areaId,sEmptyValue)
{var txtArea=document.getElementById(areaId);if(txtArea.selectionEnd&&(txtArea.selectionEnd-txtArea.selectionStart>0))
{var preString=(txtArea.value).substring(0,txtArea.selectionStart);var newString=openerTag+(txtArea.value).substring(txtArea.selectionStart,txtArea.selectionEnd)+closerTag;var postString=(txtArea.value).substring(txtArea.selectionEnd);txtArea.value=preString+newString+postString;txtArea.focus();}
else
{if(!empty(sEmptyValue))
{openerTag=openerTag+sEmptyValue;}
var offset=txtArea.selectionStart;var preString=(txtArea.value).substring(0,offset);var newString=openerTag+closerTag;var postString=(txtArea.value).substring(offset);txtArea.value=preString+newString+postString;txtArea.selectionStart=offset+openerTag.length;txtArea.selectionEnd=offset+openerTag.length;txtArea.focus();}
return;}};if(!bAllowEditor)
{var bForceDefaultEditor=true;}
 /* static\jscript\wysiwyg/default/core.js */function default_wysiwyg_getContent()
{return $('#'+Editor.getId()).val();}
function default_wysiwyg_insert(mValue)
{switch(mValue['type'])
{case'emoticon':sValue=''+mValue['text']+'';break;case'image':sValue='[img]'+mValue['path']+'[/img]';break;case'attachment':sValue='[attachment="'+mValue['id']+'"]'+mValue['name']+'[/attachment]';break;case'video':sValue='[video]'+mValue['id']+'[/video]';break;}
if(mValue['editor_id'])
{Editor.setId(mValue['editor_id']);}
var myField=document.getElementById(Editor.getId());if(document.selection)
{myField.focus();sel=document.selection.createRange();sel.text=sValue;}
else if(myField.selectionStart||myField.selectionStart=='0')
{var startPos=myField.selectionStart;var endPos=myField.selectionEnd;myField.value=myField.value.substring(0,startPos)
+sValue
+myField.value.substring(endPos,myField.value.length);myField.focus();}
else
{myField.value+=sValue;}
return false;}
function default_wysiwyg_remove(mValue)
{switch(mValue['type'])
{case'attachment':break;}}
function default_wysiwyg_setContent(mValue)
{$('#'+Editor.getId()).val(mValue);}
 /* theme/frontend/default/style/default/jscript/main.js */var $aMailOldHistory={};var $aNotificationOldHistory={};var $bNoCloseNotify=false;var bCloseShareHolder=true;var bCloseChangeCover=true;var bCloseViewMoreFeed=true;$Behavior.globalThemeInit=function()
{$('#holder_notify ul li').click(function()
{$bNoCloseNotify=true;});$('.feed_share_on_item a').click(function()
{bCloseShareHolder=false;});$('#js_change_cover_photo').click(function(){bCloseChangeCover=false;});$((getParam('bJsIsMobile')?'#content':'body')).click(function()
{$('.action_drop_holder').hide();$('.header_bar_drop').removeClass('is_clicked');$('.item_bar_action').parent().find('ul:first').hide();$('.item_bar_action').removeClass('item_bar_action_clicked');$('.row_edit_bar_holder').hide();$('.row_edit_bar_action').removeClass('row_edit_bar_action_clicked');$('#header_menu_holder ul li ul').removeClass('active');$('#header_menu_holder ul li a').removeClass('active');if(!$bNoCloseNotify)
{$('#holder_notify ul li').removeClass('is_active');$('#holder_notify ul li').find('.holder_notify_drop').hide();}
$bNoCloseNotify=false;bCloseShareHolder=true;$('#section_menu_drop').hide();$('.welcome_info_holder').hide();$('.welcome_quick_link ul li a').removeClass('is_active');$('.moderation_drop').removeClass('is_clicked');$('.moderation_holder ul').hide();$('#header_sub_menu_search_input').parent().find('.js_temp_friend_search_form:first').hide();$('.feed_sort_holder').hide();if(bCloseChangeCover){$('#cover_section_menu_drop').hide();}
if(bCloseViewMoreFeed){$('.view_more_drop').hide();}
bCloseChangeCover=true;bCloseViewMoreFeed=true;});$('.feed_sort_order_link').click(function(){$('.feed_sort_holder').toggle();return false;});$('.feed_sort_holder ul li a').click(function(){$('.feed_sort_holder ul li a').removeClass('active');$('.feed_sort_holder ul li a').removeClass('process');$(this).addClass('active');$(this).addClass('process');$.ajaxCall('user.updateFeedSort','order='+$(this).attr('rel'));return false;});$('.activity_feed_share_this_one_link').click(function(){var sRel=$(this).attr('rel');if($(this).hasClass('is_active')){$('.'+sRel).hide();$(this).removeClass('is_active');}
else
{$('.timeline_date_holder').hide();$('.activity_feed_share_this_one_link').removeClass('is_active');$('.'+sRel).show();$(this).addClass('is_active');}
if(sRel=='timeline_date_holder_share'){$.ajaxCall('feed.loadDropDates','','GET');}
return false;});$('#header_menu_holder li a.has_drop_down').click(function()
{$('#holder_notify ul li').removeClass('is_active');$('#holder_notify ul li').find('.holder_notify_drop').hide();if($(this).hasClass('active'))
{$(this).parent().find('ul').removeClass('active');$(this).removeClass('active');}
else
{$('#header_menu_holder').find('ul').removeClass('active');$('#header_menu_holder').find('ul li a').removeClass('active');$(this).parent().find('ul').addClass('active');$(this).addClass('active');}
return false;});$('#header_menu_holder ul li ul li a').click(function()
{$('#header_menu_holder ul li ul').removeClass('active');$('#header_menu_holder ul li a').removeClass('active');});if(oCore['core.site_wide_ajax_browsing'])
{$('.holder_notify_drop_link').click(function()
{$(this).parents('.holder_notify_drop:first').hide();$(this).parents('.is_active:first').removeClass('is_active');return true;});}
$('#holder_notify ul li a').click(function()
{if($(this).attr('rel')==undefined)
{return false;}
var $oParent=$(this).parent();var $oChild=$oParent.find('.holder_notify_drop');$('#header_menu_holder ul li ul').removeClass('active');$('#header_menu_holder ul li a').removeClass('active');if($oParent.hasClass('is_active'))
{$oParent.removeClass('is_active');$oChild.hide();}
else
{$('#holder_notify ul li').removeClass('is_active');$('#holder_notify ul li').find('.holder_notify_drop').hide();$oParent.addClass('is_active');$oChild.show();$Core.ajax($(this).attr('rel'),{params:{'no_page_update':true},success:function($sData)
{$oChild.find('.holder_notify_drop_data').html($sData);if(oCore['core.site_wide_ajax_browsing'])
{$Core.loadInit();}}});}
return false;});if(empty($('#left').html()))
{$('#main_content').addClass('no_sidebar');if(empty($('#right').html()))
{$('#content').removeClass('content_float');}
else
{if(typeof oParams['keepContent4']=='undefined'||oParams['keepContent4']==true)
{$('#content').addClass('content4');}
$('#content').removeClass('content2');$('#content').removeClass('content3');}
$('#left').remove();}
if(empty($('#right').html()))
{$('#content').removeClass('content3');$('#right').remove();}
$('#section_menu_more').click(function()
{$('#section_menu_drop').toggle();return false;});$('#header_sub_menu_search_input').before('<div id="header_sub_menu_search_input_value" style="display:none;">'+$('#header_sub_menu_search_input').val()+'</div>');$('#header_sub_menu_search_input').focus(function(){if(getParam('bJsIsMobile')){$(this).parent().find('#header_sub_menu_search_input').addClass('focus');$(this).val('');return;}
$(this).parent().find('#header_sub_menu_search_input').addClass('focus');if($(this).val()==$('#header_sub_menu_search_input_value').html()){$(this).val('');if((isset(oModules['friend'])))
{$Core.searchFriendsInput.init({'id':'header_sub_menu_search','max_search':(getParam('bJsIsMobile')?5:10),'no_build':true,'global_search':true,'allow_custom':true});$Core.searchFriendsInput.buildFriends(this);}}});$('#header_sub_menu_search_input').blur(function(){$(this).parent().find('#header_sub_menu_search_input').removeClass('focus');});if((isset(oModules['friend'])))
{$('#header_sub_menu_search_input').keyup(function(){$Core.searchFriendsInput.getFriends(this);});}
$('.header_bar_search .txt_input').focus(function()
{$(this).parent().find('.header_bar_search_input').addClass('focus');$(this).addClass('input_focus');if($('.header_bar_search_default').html()==$(this).val())
{$(this).val('');}}).blur(function()
{$(this).parent().find('.header_bar_search_input').removeClass('focus');if(empty($(this).val()))
{$(this).val($('.header_bar_search_default').html());$(this).removeClass('input_focus');}});$('.header_bar_drop').click(function()
{$('.header_bar_drop').each(function()
{if(!$(this).hasClass('is_clicked'))
{$(this).parents('.header_bar_drop_holder').find('.action_drop_holder').hide();}});if($(this).hasClass('is_clicked'))
{$(this).parents('.header_bar_drop_holder').find('.action_drop_holder').hide();$(this).removeClass('is_clicked');}
else
{$(this).parents('.header_bar_drop_holder').find('.action_drop_holder').show();$('.header_bar_drop').removeClass('is_clicked');$(this).addClass('is_clicked');}
return false;});$('.item_bar_action').click(function()
{$(this).parent().find('ul:first').toggle();$(this).blur();if($(this).hasClass('item_bar_action_clicked'))
{$(this).removeClass('item_bar_action_clicked');}
else
{$(this).addClass('item_bar_action_clicked');}
return false;});$('.row_edit_bar_action').click(function()
{$(this).parents('.row_edit_bar_parent:first').find('.row_edit_bar_holder:first').toggle();$(this).blur();if($(this).hasClass('row_edit_bar_action_clicked'))
{$(this).removeClass('row_edit_bar_action_clicked');}
else
{$(this).addClass('row_edit_bar_action_clicked');}
return false;});$('#js_comment_form_holder #text').keydown(function(){$Core.resizeTextarea($(this));});$('#js_compose_new_message #message').keydown(function(){$Core.resizeTextarea($(this));});$('.welcome_quick_link ul li a').click(function(e)
{if($(this).hasClass('is_active'))
{$(this).parent().find('.welcome_info_holder:first').hide();$(this).removeClass('is_active');return false;}
if(oCore['core.site_wide_ajax_browsing']==false)
{if(this.href.indexOf('#')<0)
{window.location=this.href;return false;}
else
{}}
else
{if(this.href.indexOf('#')>(-1))
{}
else
{return false;}}
var aParts=explode('#',this.href);var sTempCacheId=aParts[1].replace('.','_');$('.welcome_info_holder').hide();$('.welcome_quick_link ul li a').removeClass('is_active');$(this).addClass('is_active');$(this).addClass('is_cached');var sRel=$(this).attr('rel');sCustomClass='';if(!empty(sRel)){sCustomClass=' welcome_info_holder_custom';}
$(this).parent().append('<div class="welcome_info_holder'+sCustomClass+'"><div class="welcome_info" id="'+sTempCacheId+'"></div></div>');$.ajaxCall(aParts[1],'temp_id='+sTempCacheId,'GET');return false;});$('.profile_image').mouseover(function()
{$(this).find('.p_4:first').show();});$('.profile_image').mouseout(function()
{$(this).find('.p_4:first').hide();});};
 /* theme/frontend/bookbulk/style/bookbulk/jscript/custom.js */$Behavior.customNebula=function(){$('#nb_features_link').click(function(){if($(this).hasClass('nb_is_clicked')){$(this).removeClass('nb_is_clicked');$('#nb_features_holder').slideUp('fast');}else{$(this).addClass('nb_is_clicked');$('#nb_features_holder').slideDown('fast');}
return false;});$('.js_view_more_features').click(function(){if($(this).attr('rel')=='more'){$('#nb_main_menu ul li').each(function(){if($(this).is(':hidden')&&!$(this).hasClass('is_force_hidden')){$(this).show().addClass('was_hidden');}});$(this).hide();$('.js_view_less').show();}else{$('#nb_main_menu ul li.was_hidden').hide();$(this).hide();$('.js_view_more').show();}
return false;});$('.nb_edit_block_title').click(function(){$('#nb_main_menu ul li').each(function(){if($(this).is(':hidden')&&!$(this).hasClass('is_force_hidden')){$(this).show().addClass('was_hidden');}
if($(this).hasClass('is_force_hidden')){$(this).find('a:first').append('<span class="nb_menu_add">Add</span>');}else{$(this).find('a:first').append('<span class="nb_menu_remove">Delete</span>');}
$(this).addClass('is_edit_mode');});$('.js_done_edit_mode').show();$('.js_view_more_features').hide();if($('.is_force_hidden').length>0)
{$('.js_add_more_menus').show();}
$('.js_add_more_menus').click(function(){$('.is_force_hidden').show();return false;});$('.is_edit_mode a').click(function(){return false;});$('.nb_menu_remove').click(function(){$.ajaxCall('theme.deleteMenu','id='+$(this).parents('li:first').attr('rel').replace('menu',''),'GET');$(this).parents('li:first').remove();return false;});$('.nb_menu_add').click(function(){$.ajaxCall('theme.deleteMenu','add=true&id='+$(this).parents('li:first').attr('rel').replace('menu',''),'GET');$(this).parents('li:first').removeClass('is_force_hidden');return false;});return false;});$('.js_done_edit_mode').click(function(){$(this).hide();$('.js_done_edit_mode').hide();$('.js_view_more_features').hide();$('.js_add_more_menus').hide();$('.js_view_more').show();$('#nb_main_menu ul li.was_hidden').hide();$('#nb_main_menu ul li.is_force_hidden').hide();$('.nb_menu_remove').remove();$('.nb_menu_add').remove();$('.is_edit_mode a').click(function(){window.location.href=$(this).attr('href');return true;});$('#nb_main_menu li').removeClass('is_edit_mode');return false;});$('.js_comment_feed_textarea').focus(function(){$(this).parents('.comment_mini:first').find('.button_set_off:first').removeClass('button_set_off');});fixHeightForFooter();setTimeout(fixHeightForFooter,1000);};function fixHeightForFooter()
{$('#main_content_padding').ready(function(){$('#main_content_padding').css('min-height',$('#left').height());});}
$Behavior.bookbulktemplate=function(){$('.bookbulk_aside').find('.open_aside').live('click',function(){$('.bookbulk_aside').addClass('bookbulk_aside_full');$('.bookbulk_core_body').addClass('bookbulk_core_body_aside');$('.bookbulk_header').addClass('bookbulk_header_aside');$('.open_aside').addClass('close_aside').removeClass('open_aside');$('.sub_active').next('.bookbulk_main_extra').css('display','block');$.ajaxCall('bookbulktemplate.updateSetting','asideStatus=1');});$('.bookbulk_aside_full').find('.close_aside').live('click',function(){$('.bookbulk_aside').removeClass('bookbulk_aside_full');$('.bookbulk_core_body').removeClass('bookbulk_core_body_aside');$('.bookbulk_header').removeClass('bookbulk_header_aside');$('.close_aside').addClass('open_aside').removeClass('close_aside');$('.sub_active').next('.bookbulk_main_extra').css('display','none');$.ajaxCall('bookbulktemplate.updateSetting','asideStatus=0');});$('.bookbulk_search_img').click(function(){$('.bookbulk_aside').addClass('bookbulk_aside_full');$('.bookbulk_core_body').addClass('bookbulk_core_body_aside');$('.bookbulk_header').addClass('bookbulk_header_aside');$('.open_aside').addClass('close_aside').removeClass('open_aside');$.ajaxCall('bookbulktemplate.updateSetting','asideStatus=1');});$('.bookbulk_menu_img').click(function(){$('.bookbulk_aside').addClass('bookbulk_aside_full');$('.bookbulk_core_body').addClass('bookbulk_core_body_aside');$('.bookbulk_header').addClass('bookbulk_header_aside');$('.open_aside').addClass('close_aside').removeClass('open_aside');$.ajaxCall('bookbulktemplate.updateSetting','asideStatus=1');});};
 /* static/jscript/player/flowplayer/core.js */$Core.player={aParams:{},supportsVideo:function(){return!!document.createElement('video').canPlayType;},canPlayVideo:function(){var bCanPlay=false;if(this.supportsVideo()){var v=document.createElement('video');if(v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')){bCanPlay=true;p('Supports: video/mp4');}
else if(v.canPlayType('video/ogg; codecs="theora, vorbis"')){bCanPlay=true;p('Supports: video/ogg');}
else if(v.canPlayType('video/webm; codecs="vp8, vorbis"')){bCanPlay=true;p('Supports: video/webm');}}
return bCanPlay;},load:function(aParams)
{if(document.getElementById(aParams['id'])===null)
{return false;}
this.aParams=aParams;if(getParam('bUseHTML5Video')&&this.aParams['type']=='video'&&this.canPlayVideo()){var sHtml='';sHtml+='<video width="600" height="366" preload="auto" controls autoplay>';sHtml+='<source type="video/webm" src="'+aParams['play'].replace('.flv','.webm')+'">';sHtml+='<source type="video/mp4" src="'+aParams['play'].replace('.flv','.mp4')+'">';sHtml+='<source type="video/ogg" src="'+aParams['play'].replace('.flv','.ogg')+'">';sHtml+='</video>';$('#'+this.aParams['id']+'').html(sHtml);return this;}
var sCall='$f(\''+this.aParams['id']+'\', {src: \''+getParam('sJsStatic')+'jscript/player/flowplayer/flowplayer.swf\', wmode: \'transparent\', zIndex: -1},{';switch(this.aParams['type'])
{case'video':sCall+='clip: {';sCall+='url: \''+(getParam('bUseHTML5Video')?this.aParams['play'].replace('.flv','.mp4'):this.aParams['play'])+'\',';sCall+='autoBuffering: true,';if(isset(this.aParams['auto']))
{sCall+='autoPlay: '+this.aParams['auto'];}
sCall=rtrim(sCall,',');sCall+='}';break;case'music':sCall+='clip: {';if(!empty(this.aParams['play']))
{sCall+='url: \''+this.aParams['play']+'\',';}
if(isset(this.aParams['on_finish']))
{sCall+='onFinish: '+this.aParams['on_finish']+',';}
else
{if(this.aParams['playlist']!=undefined)
{sCall+='onFinish: function(clip){\n';sCall+='debug("Event onFinish triggered");';sCall+='var aPlaylist = {\n';for(oPlay in this.aParams['playlist'])
{sCall+='"'+this.aParams['playlist'][oPlay]+'" : \n{"iNext" : '+this.aParams['aNextSong'][oPlay]+', "sNextPath" : "'+this.aParams['playlist'][this.aParams['aNextSong'][oPlay]]+'"},';}
sCall=rtrim(sCall,',');sCall+='};';sCall+='\n$(".isSelected").removeClass("isSelected");';sCall+='\n$("#js_music_track_" + aPlaylist[clip.originalUrl]["iNext"]).addClass("isSelected");';sCall+='$f().unload();';sCall+='\n$Core.player.play("'+this.aParams['id']+'",aPlaylist[clip.originalUrl]["sNextPath"]);';sCall+='$.ajaxCall(\'music.play\', \'id=\' + aPlaylist[clip.originalUrl]["iNext"], \'GET\');';sCall+='},';}}
if(isset(this.aParams['on_start']))
{sCall+='onStart: '+this.aParams['on_start']+','}
sCall=rtrim(sCall,',');sCall+='},';sCall+='plugins: {';sCall+='controls: {fullscreen: false, height: 30, autoHide: false},';sCall+='audio: {';sCall+='url: \''+getParam('sJsStatic')+'jscript/player/flowplayer/flowplayer.audio.swf\'';sCall+='}';sCall+='}';break;default:p('Not a valid call.');break;}
sCall+='});';if(this.aParams['playlist']!=undefined)
{for(var iSong in this.aParams['playlist'])
{if(iSong!=undefined)
{sCall+='\n $Core.player.play("'+this.aParams['id']+'","'+this.aParams['playlist'][iSong]+'");';sCall+='\n$.ajaxCall(\'music.play\',"id='+iSong+'", "GET");';break;}}}
eval(sCall);return this;},play:function(sId,sPath)
{p('#'+sId+' Playing song: '+sPath);$('#'+sId).show();$f(sId).play(sPath);return false;}};
$Core.init();