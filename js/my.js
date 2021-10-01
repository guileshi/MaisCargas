let cel = window.matchMedia('(max-width: 576px)');
let tablet = window.matchMedia('(min-width: 768px)');
let pc = window.matchMedia('(min-width: 992px)');

$(function () {
    $('.toggler-icon').click(function () {
        $('.sideBar').toggleClass('noCollapse')
        $('#rotate-toggler').toggleClass('rotate noRotate')
    })
})

$(function () {
    $('.main-content').click(function () {
        $('.sideBar').removeClass('noCollapse')
        $('#rotate-toggler').removeClass('rotate')
        $('#rotate-toggler').addClass('noRotate')
    })
})

$(function(){
    $('#item-create').click(function(){
        $('#form-create').removeClass('hide')
        $('#form-create').addClass('unHide')
    })
})
