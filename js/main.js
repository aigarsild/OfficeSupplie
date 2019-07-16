;(function($) {

    //Show hide toggle
    $('body').on('click','.toggle, .active-cart', function () {
    	$(this).toggleClass('active');
    	$(this).next('.content').toggleClass('active');
    });


    //Install slider
    $(function () {
        $('.rslides').responsiveSlides({
            pager: true
        });
    });
    
    //Cart update
    $('.product-addtocart-button').on('click', function () {
        var cartAmount = $('.cart-number').data('number');

        if (!cartAmount) {
            $('.cart-number').removeClass('hidden').parent('.cart').addClass('active-cart');
        }

        var updateAmount = cartAmount + 1;
        $('.cart-number').data('number', updateAmount).text(updateAmount);
    })

})(jQuery);