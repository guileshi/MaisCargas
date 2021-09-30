
let cel = window.matchMedia('(max-width: 576px)');
let tablet = window.matchMedia('(min-width: 768px)');
let pc = window.matchMedia('(min-width: 992px)');

// if (pc.matches) {
//     $(function () {
//         $('.sideBar').hover(function () {
//             $(this).toggleClass('noCollapse')
//         })
//     })
//     console.log("Parou no IF")
// } else {
//     console.log("Parou no Else")
// }


$(function () { 
    $('.mobile-arrow').click(function(){
        $('.sideBar').toggleClass('noCollapse')
        $('#rotate-arrow').toggleClass('rotate')
    })
 })