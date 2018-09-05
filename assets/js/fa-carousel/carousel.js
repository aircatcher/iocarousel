/**
 * A custom carousel with right side navigations
 *
 * Made by @aircatcher
 * https://github.com/aircatcher
 */

 carousel = (function()
{
    var box = document.querySelector('.carousel-container');
    var next = box.querySelector('.c-next');
    var prev = box.querySelector('.c-prev');
    var items = box.querySelectorAll('.carousel-content li');
    var counter = 0;
    var amount = items.length;
    var current = items[0];
    box.classList.add('active');

    function directNavigate(item)
    {
        current.classList.remove('current');
        current = items[item];
        current.classList.add('current');
    }

    var dncount = 0;
    window.setInterval(function()
    {
        directNavigate(dncount);
        $('button.c-hr').css({ 'width': '45px' });
        $('#hr'+(dncount+1)).css({ 'width': '70px' });
        $('button.c-hr > hr').css({ 'border-top': '2px solid #333' });
        $('#hr'+(dncount+1)+' > hr').css({ 'border-top': '2px solid white' });
        if( dncount!=3 ) dncount++;
        else dncount=0;
    }, 7000);

    for(var i=1; i<=4; i++)
    {
        $('#hr'+i+':not(.active)').hover(function()
        {
            $('#hr'+i+':not(.active)').css({ 'width': '55px' });
            $('#hr'+i+':not(.active) > hr').css({ 'border-top': '2px solid white' });
        },
        function()
        {
            $('#hr'+i+':not(.active)').css({ 'width': '45px' });
            $('#hr'+i+':not(.active) > hr').css({ 'border-top': '2px solid #333' });
        })
    }

    $('#hr1').click(function()
    {
        $('#hr1').addClass('active');
        $('#hr2').removeClass('active');
        $('#hr3').removeClass('active');
        $('#hr4').removeClass('active');
        $('#hr1').css({ 'width': '70px' }); $('#hr1 > hr').css({ 'border-top': '2px solid white' });
        $('#hr2').css({ 'width': '45px' }); $('#hr2 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr3').css({ 'width': '45px' }); $('#hr3 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr4').css({ 'width': '45px' }); $('#hr4 > hr').css({ 'border-top': '2px solid #333' });
        directNavigate(0);
    });
    $('#hr2').click(function()
    {
        $('#hr1').removeClass('active');
        $('#hr2').addClass('active');
        $('#hr3').removeClass('active');
        $('#hr4').removeClass('active');
        $('#hr1').css({ 'width': '45px' }); $('#hr1 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr2').css({ 'width': '70px' }); $('#hr2 > hr').css({ 'border-top': '2px solid white' });
        $('#hr3').css({ 'width': '45px' }); $('#hr3 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr4').css({ 'width': '45px' }); $('#hr4 > hr').css({ 'border-top': '2px solid #333' });
        directNavigate(1);
    });
    $('#hr3').click(function()
    {
        $('#hr1').removeClass('active');
        $('#hr2').removeClass('active');
        $('#hr3').addClass('active');
        $('#hr4').removeClass('active');
        $('#hr1').css({ 'width': '45px' }); $('#hr1 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr2').css({ 'width': '45px' }); $('#hr2 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr3').css({ 'width': '70px' }); $('#hr3 > hr').css({ 'border-top': '2px solid white' });
        $('#hr4').css({ 'width': '45px' }); $('#hr4 > hr').css({ 'border-top': '2px solid #333' });
        directNavigate(2);
    });
    $('#hr4').click(function()
    {
        $('#hr1').removeClass('active');
        $('#hr2').removeClass('active');
        $('#hr3').removeClass('active');
        $('#hr4').addClass('active');
        $('#hr1').css({ 'width': '45px' }); $('#hr1 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr2').css({ 'width': '45px' }); $('#hr2 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr3').css({ 'width': '45px' }); $('#hr3 > hr').css({ 'border-top': '2px solid #333' });
        $('#hr4').css({ 'width': '70px' }); $('#hr4 > hr').css({ 'border-top': '2px solid white' });
        directNavigate(3);
    });
})();