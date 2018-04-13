$(function () {
	let windowWidth = $(window).width();
    if (windowWidth>=992) {
    	$(".header_top_menu").appendTo(".header_top_left");
    	$(".header_top_search").appendTo(".header_top_inner");
    	$(".header_bottom_menu").appendTo(".header_bottom_left_flexItem");
    	$(".header_bottom_basket").appendTo(".header_bottom_inner");
    }
    if (windowWidth>=1170) {
    	$("img[src='images/logo.png']").attr('src', 'images/logo2.png'); //переопределили src\\
    }
    //выпадающее меню slide toggle переключает дисплей нон-блок\\
    $('.header_burger_right').on("click", function () {
        $(".mobile_menu").stop().slideToggle("slow");
    });
    $(function() {
  $('.select').niceSelect();
});
        $(".acordion_item_title").on("click",function(){
            var acordionItem = $(this).closest(".acordion_item");
            var acordionItemSiblings = $(acordionItem).siblings(".acordion_item");
            var accordionCheckboxWrap = $(acordionItemSiblings).children(".acordion_checkbox_wrap");
            $(accordionCheckboxWrap).hide();
            $(this).siblings(".acordion_checkbox_wrap").slideToggle();

        });

    $('.select_filters').on("click", function () {
        $(".main_filtres, .overlay").addClass("active");
    });
    $('.cross').on("click", function () {
        $(".main_filtres, .overlay").removeClass("active")
    });
});