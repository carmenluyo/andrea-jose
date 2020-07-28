
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
	    margin:10,
	    nav:true,
        items:1,
    })

    $(document).on('click', '.menu-toggler', function() {
        
    })

    const   body = 'body',
            openMenu = '.menu-toggler',
            closeMenu = '.close-menu',
            menuOverlay = '.menu-overlay',
            menuNav = '.menu-nav'


    toggleMenu(openMenu)
    toggleMenu(closeMenu)
    toggleMenu(menuOverlay)

    function toggleMenu(toggler) {
        $(document).find(toggler).each(function() {
            $(this).on("click", function(e){
                e.preventDefault();
                $(menuOverlay).toggleClass('active')
                $(menuNav).toggleClass('active')
                $(closeMenu).toggleClass('active')
                setTimeout(
                    function () {
                        $(body).toggleClass('overflow-y-hidden')
                    }, 300)
            });
        });
    }
});