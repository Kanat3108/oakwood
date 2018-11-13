jQuery(document).ready(function(){
	jQuery('.h-s1_carousel').owlCarousel({
    	loop:true,
   	 	nav:true,
   	 	items: 1,
   	 	animateOut: 'fadeOut',
   	 	animateIn: 'fadeIn',
      smartSpeed: 2000,
   	 	nav: true,
  		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
   	 	autoplay:false,
    	autoplayTimeout:4000
	});


  jQuery('.nav-button').click(function(){
    jQuery('.nav-mobile').toggleClass('nav-mobile-activ');
  });

	//init wow effects
	new WOW().init();

//main slider scroll bottom
  jQuery(".icon-scroll").click(function(event){     
        event.preventDefault();
        jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top - 100}, 500);
    });

    jQuery(".to-product-item").click(function(event){     
        event.preventDefault();
        jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top - 100}, 500);
    });

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    });

    jQuery('.scrollup').click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

  //header opacity 
  jQuery(window).bind('scroll', function () {
      if (jQuery(window).scrollTop() > 160) {
          jQuery('header').addClass('menu-opacity');
      } else {
          jQuery('header').removeClass('menu-opacity');
      }
  });


  

  function check_active(){
    jQuery('.home-s1 .owl-item:not(.active) h2').removeClass('s1_h1-anim');
    jQuery('.home-s1 .owl-item:not(.active) .h-s1_inner2 p').removeClass('s1_h1-anim_p');
    
      jQuery('.home-s1 .owl-item.active h2').addClass('s1_h1-anim');
    

    /*setTimeout(function(){
      jQuery('.home-s1 .owl-item.active h2.s1_h1-anim').removeClass('s1_h1-anim');
    },3000);*/

   
      jQuery('.home-s1 .owl-item.active .h-s1_inner2 p').addClass('s1_h1-anim_p');
   
  }

  setInterval(check_active,500);



  if(jQuery('body.page-template-product-page').length){
    jQuery(".p-s2 input[type=checkbox]" ).on( "click", function(){
      if( jQuery(this).is(':checked')) {
            jQuery(".p-s3").show('slow');
        } else {
            jQuery(".p-s3").hide('slow');
        }
        


        jQuery(".p-s3 input[type=checkbox]" ).on( "click", function(){
        if( jQuery(this).is(':checked')) {
              jQuery(".p-s4").show('slow');
          } else {
              jQuery(".p-s4").hide('slow');
          }
          

          jQuery(".p-s4 input[type=checkbox]" ).on( "click", function(){
          if( jQuery(this).is(':checked')) {
                jQuery(".p-s5").show('slow');
            } else {
                jQuery(".p-s5").hide('slow');
            }
            
        });
      });
    });

    jQuery('.p-s2 input[type="checkbox"]').on('change', function() {
        jQuery('.p-s2 input[type="checkbox"]').not(this).prop('checked', false);
        if(jQuery('.p-s2 input').is(':checked')){
          var checked = jQuery('.p-s2 input:checked').val();
          jQuery('#wpcf7-f119-o1 input[value="'+ checked +'"]').prop( "checked", true );
          //jQuery( ".result-width" ).html( 'Thickness:' +' ' + jQuery( ".p-s2 input:checked" ).val());
          //var img_result = jQuery('.p-s2 input:checked').siblings('img').attr('src');
          //jQuery('.result-width-img').css({'background':'url('+ img_result + ') no-repeat center / cover','height':'100px'});
        } else {
          jQuery('#wpcf7-f119-o1 input[value="'+ checked +'"]').prop( "checked", false );
          //jQuery( ".result-width" ).html( '');
          //jQuery('.result-width-img').css({'background':'url() no-repeat center / cover','height':'0'});
        }
        
    });
    jQuery('.p-s3 input[type="checkbox"]').on('change', function() {
        jQuery('.p-s3 input[type="checkbox"]').not(this).prop('checked', false);

        if(jQuery('.p-s3 input').is(':checked')){
          jQuery( ".result-color" ).html( 'Width:' +' ' + jQuery( ".p-s3 input:checked" ).val());
          var img_result = jQuery('.p-s3 input:checked').siblings('img').attr('src');
          jQuery('.result-color-img').css({'background':'url('+ img_result + ') no-repeat center / cover','height':'100px'});
          jQuery(this).parent().css({'border':'5px solid red'});
        } else {
          jQuery( ".result-color" ).html( '');
          jQuery('.result-color-img').css({'background':'url() no-repeat center / cover','height':'0'});
          jQuery(this).parent().css({'border':'0px solid red'});
        }
        //jQuery( ".result-color" ).html( jQuery( ".p-s3 input:checked" ).val() );
    });
    jQuery('.p-s4 input[type="checkbox"]').on('change', function() {
        jQuery('.p-s4 input[type="checkbox"]').not(this).prop('checked', false);

        if(jQuery('.p-s4 input').is(':checked')){
          jQuery( ".result-size" ).html('Package size:'+' '  + jQuery( ".p-s4 input:checked" ).val());
          var img_result = jQuery('.p-s4 input:checked').siblings('img').attr('src');
          jQuery('.result-size-img').css({'background':'url('+ img_result + ') no-repeat center / cover','height':'100px'});
        } else {
          jQuery( ".result-size" ).html( '');
          jQuery('.result-size-img').css({'background':'url() no-repeat center / cover','height':'0'});
        }
        //jQuery( ".result-size" ).html( jQuery( ".p-s4 input:checked" ).val()  );
    });
    jQuery('.p-s5 input[type="checkbox"]').on('change', function() {
        jQuery('.p-s5 input[type="checkbox"]').not(this).prop('checked', false);

        if(jQuery('.p-s5 input').is(':checked')){
          jQuery( ".result-quality" ).html('Quality:'+' '  + jQuery( ".p-s5 input:checked" ).val());
          var img_result = jQuery('.p-s5 input:checked').siblings('img').attr('src');
          
          jQuery('.result-quality-img').css({'background':'url('+ img_result + ') no-repeat center / cover','height':'100px'});
          jQuery('.done-choose').addClass('done-choose-block');
          //jQuery('.product-result').addClass('product-result-block');
        } else {
          jQuery( ".result-quality" ).html( '');
          jQuery('.result-quality-img').css({'background':'url() no-repeat center / cover','height':'0'});
        }
        //jQuery( ".result-quality" ).html( jQuery( ".p-s5 input:checked" ).val() );
    });
  }
  jQuery('#wpcf7-f119-o1 form.wpcf7-form').addClass('container').append('<div class="close-result"><i class="fa fa-times-circle-o" aria-hidden="true"></i></div>');
  jQuery('#wpcf7-f119-o1').wrapInner('<div><div></div></div>')
  jQuery('#wpcf7-f119-o1 form > p:nth-child(2)').wrapInner('<div class="col-md-7 inner-form"></div>');
  jQuery('#wpcf7-f119-o1 form > p:nth-child(3)').wrapInner('<div class="col-md-5 inner-form"></div>');
  jQuery('#wpcf7-f119-o1 form > p:nth-child(4)').wrapInner('<div class="col-md-12 inner-form header-button"></div>');
  jQuery('#wpcf7-f119-o1 form >p > .inner-form').unwrap();

  jQuery('.done-choose').click(function(){
    jQuery('#wpcf7-f119-o1').addClass('wpcf7-f119-o1-block');;
  });

  /*jQuery("form").submit(function() { //Change
      var th = jQuery(this);
      jQuery.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you! We will be in touch soon");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });*/

  jQuery(".header-button button").click(function () {
      jQuery(".error").hide();
      var valueX = jQuery(".email").val();
      var valueY = jQuery(".reemail").val();
      jQuery('.reemail').css('color','red');
      if (valueX != valueY) {
          alert("Emails do not match.");
      }
  });


  jQuery('.close-result i').click(function(){
    jQuery('#wpcf7-f119-o1 ').removeClass('wpcf7-f119-o1-block');
  });

  jQuery( "body.page-template-contact-page .cs1-bussines a" ).click(function() {     
    if(jQuery('body.page-template-contact-page .c-s2:visible').length)
        jQuery('body.page-template-contact-page .c-s2').hide("slide", { direction: "top" }, 1000);
    else
        jQuery('body.page-template-contact-page .c-s2').show("slide", { direction: "top" }, 1000); 

          
        
       
   


});
jQuery('body.page-template-contact-page .cs1-bussines .to-down').click( function(e){
  e.preventDefault();
    jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top - 100}, 500);
});


if(jQuery('body.faq-page').length > 0){
  jQuery("#accardion").accordion();
}

if(jQuery('body.page-template-product-page').length >0){
  jQuery('input[type="checkbox"]').click(function(){
            if(jQuery(this).prop("checked") == true){
                jQuery(this).parent('div').css({'border':'5px solid red'});
                jQuery(this).parent().parent().siblings('.type-p').children('div').css({'border':'0px solid red'});
            }
            else if(jQuery(this).prop("checked") == false){
                jQuery(this).parent('div').css({'border':'0px solid red'});
            }
        });
  
}

jQuery('button.view-img').click(function(){
  if(jQuery('.view-img_img:visible').length){
  jQuery('.view-img_img').hide(100);
}else{
  jQuery('.view-img_img').show(100);
}
});

	


});