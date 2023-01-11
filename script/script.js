$(function(){
    // NAV
    $('.nav').mouseenter(function(){
        $('.subnav').stop(true).slideDown(200)
        $('.subnav-bg').stop(true).slideDown(200)
    }).mouseleave(function(){
        $('.subnav').stop(true).slideUp(200)
        $('.subnav-bg').stop(true).slideUp(200)
    })
    $('.subnav-bg').mouseenter(function(){
        $('.subnav').stop(true).slideDown(200)
        $('.subnav-bg').stop(true).slideDown(200)
    }).mouseleave(function(){
        $('.subnav').stop(true).slideUp(200)
        $('.subnav-bg').stop(true).slideUp(200)
    })

    // SLIDER
    $('.slide:gt(0)').hide()
    setInterval(function(){
        $('.slide:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.slides')
    },3000)

    // POPUP
    $('.notice>ul>li:first').click(function(){
        $('#popup').stop(true).fadeIn(200)
    })
    $('.btn').click(function(){
        $('#popup').stop(true).fadeOut(200)

    })
})