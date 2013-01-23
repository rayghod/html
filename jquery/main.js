$(function() { 
        
        $("ul.podmenu").hide();
        $("li").hover(
            function(){
                  $(this).find(".podmenu").slideDown("500");
                  },
            function(){
                  $(this).find(".podmenu").slideUp();
                  });



        $("a").hover(
                function(){
             		$(this).css("color","white");
                	},
               	function(){
               		$(this).css("color","#999");
                	});
});		