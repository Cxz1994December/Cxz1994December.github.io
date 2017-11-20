$(function() {
    $('.nav li').click(function() {
        $(this).addClass('active_color').siblings().removeClass('active_color');
        $('.cent li').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });
});