$(document).ready(function(){

 

	var winHeight = $(window).height(); 

	var winWidth = $(window).innerWidth(); 



	//alert(winWidth);

	 

	if(winWidth < 1023){

		$("#mainMenu").css('width',winWidth+'px');

	}	

	 

	// Menu Open Link

    $("#mainMenuLink").click(function(){

		$(this).toggleClass('active');

		if($(this).hasClass('active')){

			$(this).find('label').text('CLOSE');

			if($(this).parents('body').hasClass('homePage')){

				$('html').addClass('overflowHidden');

			}

			else

			{

				$('html').addClass('overflowHiddenScroll');

			}

			$("#mainMenu").addClass('active');

			//$("#header").addClass('active'); 

			$("#headerLang .formField").removeClass('darkStyle');

		}

		else

		{

			$(this).find('label').text('MENU');

			if(!$(this).parents("#header").hasClass('headerWhite')){

				$("#headerLang .formField").addClass('darkStyle');

			}

			$('html').removeClass('overflowHiddenScroll');

			$("#mainMenu").removeClass('active');

			//$("#header").removeClass('active');

		}

		// $('#mainMenuNavIn #mCSB_1').focus(); 

		//$('#mainMenuNav ul li').toggleClass('menuFadeInLeft');

        return false;

	});



	 $("#menuchatbtn").click(function(){

		$("#mainMenuLink").click();

		 return false;

	});



	

 



	// Faqs Tabs

	$(".faqsSection h4, .faqsSection h5").click(function(e){

		$(this).toggleClass('active');

		$(this).next('.faqsContent').stop().slideToggle(300);

		return false;

	});



	// Asent Infographics Tabs

	$(".ascentInfographicsNav li").click(function(e){

		var dataID = $(this).attr('data-id');

		$(".ascentInfographicsNav li").removeClass('active')

		$(this).addClass('active');

		$('.ascentInfographicsContent').hide(0)

		$(dataID).show(0) 

		return false;

	});

 

	// Escape actions

	$(document).keyup(function(e) {

		if (e.key === "Escape") { 

			$("#mainMenu,#mainMenuLink").removeClass('active');

			$("#mainMenuLink").find('label').text('MENU');

			if(!$("#mainMenuLink").parents("#header").hasClass('headerWhite')){

				$("#headerLang .formField").addClass('darkStyle');

			}

			$("#mainMenu").removeClass('active');

			$("#header").removeClass('active');

			setTimeout(function(){

				$('html').removeClass('overflowHiddenScroll');

			},300)

			$('.model-window').stop().fadeOut(300); 

		}

	});

 



	// Menu Vectors 

	$("#mainMenuNew ul li a").hover(function(){

        var dataVector = $(this).attr('data-vector');

		$('.menuVector').stop().fadeOut(500); 

		$(dataVector).stop().fadeIn(500); 

		return false;

	});



	// AboutBoxSections 

	$(".newMainBoxNav ul li").click(function(){

		$(this).parents('.newMainBoxNav').find('li').removeClass('active');

		$(this).addClass('active'); 

        var dataVector = $(this).attr('data-id');

		// $('.newMaindBoxContent').stop().fadeOut(0); 

		// $(dataVector).stop().fadeIn(0); 

		$(this).parents('.newMainBox').find('.newMainBoxContent').removeClass('activeContent'); 

		$(dataVector).addClass('activeContent'); 

	});



	// Model Window Wrap in extra Div  

	$('.model-window').each(function(){

		$(this).find('.model-content').wrap('<div class="model-container"></div>')

	})



	// Model Window Open 

	$(".open-model-window").click(function(){

		var dataVector = $(this).attr('href');

		if($(dataVector).length){

			$('html').addClass('overflowHiddenScroll');

			var dataVector = $(this).attr('href');

			$(dataVector).stop().fadeIn(300);

		}

		return false;

	});



	// Model Window Close

	$(".close-window, .model-overlay").click(function(){

		

        var dataVector = $(this).attr('href');

		$('.model-window').stop().fadeOut(300); 

		setTimeout(function(){

			$('html').removeClass('overflowHiddenScroll');

		},300)

		return false;

	});





	// Contact Us Addresses

	$("#globalOffices a").click(function(){

		if($(this).hasClass('active')) return false;

		$("#globalOffices a").removeClass('active');

		$(this).addClass('active');

		$(".globalOfficesText").hide(0);

		var currentText = $(this).attr('href');

		$('.globalOfficesText[data-id="'+currentText+'"]').stop().fadeIn(300);

        return false;

	});

	



	// Form Fields Script

    $(".formField input,.formField textarea").each(function(index, element) {

    	if($(this).val()!=""){

			$(this).parents('.formField').addClass('filled')						

		} 				    

	});

	$(document).on("focus", ".formField input,.formField textarea", function(){	

		$(this).parents('.formField').addClass('focus')					

	});

	$(document).on("blur", ".formField input,.formField textarea", function(){	

		$(this).parents('.formField').removeClass('focus filled')	

		if($(this).val()!=""){

			$(this).parents('.formField').addClass('filled')						

		} 

	});	

	

	windowScrollBtns();

	// ScrollDown Icon

	$(window).scroll(function(){

		windowScrollBtns();

	});



	$("#windowScrollDown").click(function(){

		$("html,body").stop().animate({scrollTop:winHeight}, 500, function() { 

			$("#windowScrollDown").fadeOut(500);

		});

		return false;

	})



	// ScrollTop Icon

	$("#windowScrollUp").click(function(){

		$("html,body").stop().animate({scrollTop:0}, 1000, function() { });

		$("#windowScrollUp").fadeOut(500);

		return false;

	})



	// About US Load More

	$(".loadMoreBtn").click(function(){

		var showData = $(this).attr('data-load');

		$(showData).children('.aboutUsBoxListIn').addClass('fadeInUp animated');

		showDataClass = showData.replace(".", "");

		$(showData).removeClass(showDataClass);

		//$(showData).show(0);

		$(this).hide(0);

		return false;

	})

	 	

	//mainMenuManagement();

	 

	// Main Menu Scrtipt

	if( winWidth < 1100 ){

		$("#mainMenuNew ul > li.hasSubMenu").click(function(e){

			if(e.target.className.indexOf('hasSubMenu') != '-1'){	 

				$(this).toggleClass('openSubMenu');

				return false;

			} 

		});

	}





	//equalHeights('.innovationBoxes h3');

	equalHeights('.subProductsBoxes.digitalSelfService p');

	equalHeights('.subProductsBoxes.digitalDealership p');

	equalHeights('.subProductsBoxes.digitalFieldTeam p');

	equalHeights('.subProductsBoxes.digitalFloorplan p');

	

	// $(window).mousemove(function(e) {

	// 	parallax(e, '.pageTitleSection img',50,100);

	// 	parallaxMenu(e, '.menuVector',50,100);

	// 	parallax(e, '.round-box-text > img',50,100);

	// });

 

})

	function windowScrollBtns(){

		if($("#footer").length > 0){

			var winHeight = $(window).height(); 

			var scrollTop = $("html,body").scrollTop();

			if(scrollTop >= winHeight ){

				$("#windowScrollDown").stop().fadeOut(400); 

				$("#windowScrollUp").stop().fadeIn(400);

			}else{

				$("#windowScrollUp").stop().fadeOut(400);

				$("#windowScrollDown").stop().fadeIn(400);	 

			}

		}

	}

	function equalHeights(selector){

		var maxHeight = 0;

		$(selector).each(function(){

			if($(this).height() > maxHeight) {

				maxHeight = $(this).height(); 

			}

		});  

		$(selector).css('min-height', maxHeight);

	}

 
$(window).resize(function(){

	//mainMenuManagement(); 

	var winWidth = $(window).width(); 
 

	$("#mainMenu").css('width',winWidth+'px');
 
	if( winWidth < 1100 ){

		$("#mainMenuNew ul > li.hasSubMenu").click(function(e){

			if(e.target.className.indexOf('hasSubMenu') != '-1'){	 

				$(this).toggleClass('openSubMenu');

				return false;

			} 

		});

	}
 

})
 


function setfilename(obj)

{

	var val = obj.value;  

    filename = val.split('\\').pop().split('/').pop();

    //filename = filename.substring(0, filename.lastIndexOf('.'));

	$(obj).siblings('.fileFieldText').text(filename);

}

 
 

$(window).on("load",function(){

	$("#mainMenu").removeClass('hideWhileReady');

	$("#privacyPolicy").addClass('active');

	$('#hidePrivacyPolicy').click(function() {

		$("#privacyPolicy").removeClass('active');

	});	

});





 

	var x, i, j, selElmnt, a, b, c;

	/*look for any elements with the class "selectField":*/

	x = document.getElementsByClassName("selectField");

	for (i = 0; i < x.length; i++) {

		selElmnt = x[i].getElementsByTagName("select")[0];

		/*for each element, create a new DIV that will act as the selected item:*/

		a = document.createElement("DIV");

		a.setAttribute("class", "select-selected");

		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

		x[i].appendChild(a);

		/*for each element, create a new DIV that will contain the option list:*/

		b = document.createElement("DIV");

		b.setAttribute("class", "select-items select-hide");

		for (j = 0; j < selElmnt.length; j++) {

			/*for each option in the original select element,

			create a new DIV that will act as an option item:*/

			c = document.createElement("DIV");

			c.innerHTML = selElmnt.options[j].innerHTML;

			c.addEventListener("click", function(e) {

				/*when an item is clicked, update the original select box,

				and the selected item:*/

				var y, i, k, s, h;

				s = this.parentNode.parentNode.getElementsByTagName("select")[0];

				h = this.parentNode.previousSibling;

				for (i = 0; i < s.length; i++) {

				if (s.options[i].innerHTML == this.innerHTML) {

					s.selectedIndex = i;

					h.innerHTML = this.innerHTML;

					y = this.parentNode.getElementsByClassName("same-as-selected");

					for (k = 0; k < y.length; k++) {

					y[k].removeAttribute("class");

					}

					this.setAttribute("class", "same-as-selected");

					break;

				}

				}

				h.click();

			});

			b.appendChild(c);

		}

		x[i].appendChild(b);

		a.addEventListener("click", function(e) {

			/*when the select box is clicked, close any other select boxes,

			and open/close the current select box:*/

			e.stopPropagation();

			closeAllSelect(this);

			this.nextSibling.classList.toggle("select-hide");

			this.classList.toggle("select-arrow-active");

		});

	}

	function closeAllSelect(elmnt) {

		var x, y, i, arrNo = [];

		x = document.getElementsByClassName("select-items");

		y = document.getElementsByClassName("select-selected");

		for (i = 0; i < y.length; i++) {

			if (elmnt == y[i]) {

			arrNo.push(i)

			} else {

			y[i].classList.remove("select-arrow-active");

		}

	}

	for (i = 0; i < x.length; i++) {

		if (arrNo.indexOf(i)) {

		x[i].classList.add("select-hide");

	}

}

}

document.addEventListener("click", closeAllSelect);

 