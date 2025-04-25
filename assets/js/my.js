var containerEl = document.querySelector('.grid');
var mixer = mixitup(containerEl);
$('.filter-menu-items').on('click', 'a', function () {
    $('.filter-menu-items').find('a.active').removeClass('active');
    $(this).addClass('active')
});