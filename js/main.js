$(function () {
	let windowWidth = $(window).width();
    if (windowWidth>=768) {
    	$(".header_top_menu").appendTo(".header_top_left");
    	$(".header_top_search").appendTo(".header_top_inner");
    	$(".header_bottom_menu").appendTo(".header_bottom_left_flexItem");
    	$(".header_bottom_basket").appendTo(".header_bottom_inner");
    }
    if (windowWidth>=992) {
    	$("img[src='images/logo.png']").attr('src', 'images/logo2.png'); //переопределили src\\
    }
    //выпадающее меню slide toggle переключает дисплей нон-блок\\
    $('.header_burger_right').on("click", function () {
        $(".mobile_menu").stop().slideToggle("slow");
    });
});