$(document).ready(function(){

	var elemenStore = "<a href='http://www.bradop.com/' class='btn'><span class='network-name'>Nové webové</span></a> </br>" + 					
	"<a href='http://www.bradop.cz/' class='btn'><span class='network-name'>Staré webové</span></a>";

	var elemnHome = "<a href='http://www.jablunkov-nabytek.cz' class='btn'><span class='network-name'>Jablunkovská prodejna</span></a> </br>" + 					
	"<a href='#' class='btn'><span class='network-name'>Bradop prodejna</span></a>";


	$('.popover-store').popover({
		trigger: 'trigger',
		container: 'body',
		content: elemenStore,
		html: true
	}); 

	$('.popover-home').popover({
		trigger: 'trigger',
		container: 'body',
		content: elemnHome,
		html: true
	}); 

});