$(function() { 
 
	$('.miniatury img:first').css('opacity',0.5);
 
	$(".miniatury a").click(function(){
 
		$('.miniatury a img').css('opacity',1);
		$(this).children().css('opacity',0.5);
 
		var sciezka = $(this).attr("href");
		var tytul = $(this).attr("title");

		$(".duzy").attr({ src: sciezka, alt: tytul });
 		
 		
 		
 		$("div#opis").hide("500",loadContent)

 		function loadContent(){
 			$("div#opis").load("opisy/"+tytul+".html",showNewContent)
 		}
 		function showNewContent(){
 			$("div#opis").show('500')
 		}
	
		


		return false;
	});

});