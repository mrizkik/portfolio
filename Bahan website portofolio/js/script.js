//event pada saat link di klik
// untuk menyimpan paralax
$(window).scroll(function()
{
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.portfolio').offset().top -120)
    {
      $('.portfolio .card').each(function(i) 
      {
        setTimeout(function() 
          {
           $('.portfolio .card').eq(i).addClass('muncul');
          }, 300 * (i+1));
      });
    }

    if(wScroll > $('.about').offset().top -200)
    {
        $('.about .pkanan').addClass('pmuncul');
        $('.about .pkiri').addClass('pmuncul');
    }
    
    if(wScroll > $('.skill').offset().top -200)
    {
        $('.skill .table').addClass('tmuncul');

    }
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.contact').offset().top -120)
    {
      $('.contact .formgroup').each(function(i) 
      {
        setTimeout(function() 
          {
           $('.contact .formgroup').eq(i).addClass('fmuncul');
          }, 300 * (i));
      });
    }

    if(wScroll > $('.contact').offset().top -120)
    {
      $('.contact .list-group').each(function(i) 
      {
        setTimeout(function() 
          {
           $('.contact .list-group').eq(i).addClass('lmuncul');
          }, 300 * (i));
      });
    }
});


//fungsi landing 
