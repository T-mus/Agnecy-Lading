$(function(){

    /* Header
    _________________________*/

    let header = $('#header');
    let intro = $('#Home');
    let intro_h = intro.innerHeight();
    let scroll_pos = $(window).scrollTop();

    function checkScroll(scroll_pos, intro_h){
        if(scroll_pos > intro_h){
            header.addClass('fixed');
        }
        else{
            header.removeClass('fixed');
        }
    }
    checkScroll(scroll_pos, intro_h);

    $(window).on('scroll', function(){
        scroll_pos = $(this).scrollTop();

        checkScroll(scroll_pos, intro_h);
    });

    /* Smooth scroll
    _________________________*/

    $('[data-scroll]').on('click',function(e){
        e.preventDefault();

        let elm_id = $(this).data('scroll');
        let elm_offset = $(elm_id).offset().top;

        $('html, body').animate({
            scrollTop: elm_offset - 90
        },900);
    });

    /* Switch pages(Team)
    _________________________*/

    // Image change
    $('#other_members a').click(function(e){
        e.preventDefault();

        $('#member_img img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
    });

    // Name change
    $('#other_members #Sokina_Jue').click(function(){
        $('#memeber_content #member_title').fadeTo(0, 0).text('Sokina Jue').fadeTo(1000, 1);
    });
    $('#other_members #Victoria_Valdez').click(function(){
        $('#memeber_content #member_title').fadeTo(0, 0).text('Victoria Valdez').fadeTo(1000, 1);
    });
    $('#other_members #Mark_Waugh').click(function(){
        $('#memeber_content #member_title').fadeTo(0, 0).text('Mark Waugh').fadeTo(1000, 1);
    });
    $('#other_members #Ruth_Woods').click(function(){
        $('#memeber_content #member_title').fadeTo(0, 0).text('Ruth Woods').fadeTo(1000, 1);
    });

    /* Filter by category
    _________________________*/

    let filter__ctg = $('[data-filter]');
    filter__ctg.on('click', function(e){
        e.preventDefault();

        let link__ctg = $(this).data('filter');
        let works = $('[data-works]');
        
        if(link__ctg == 'all'){
            works.removeClass('hide');
        }
        else{            
            works.each(function(){
                let works_ctg = $(this).data('works');
                if(works_ctg != link__ctg){
                    $(this).addClass('hide');
                }
                else{
                    $(this).removeClass('hide');
                }
            });
        }
    });
});

