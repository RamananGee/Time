$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'ChowNow Discover',
      tag: 'FOOD ORDERING PLATFORM.',
      detail:
        'ChowNow Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners.',
      link: 'https://eat.chownow.com/'
    },
    ordering: {
      title: 'ChowNow Ordering Web',
      tag: 'WHITE-LABEL ONLINE ORDERING SOLUTION.',
      detail:
        'ChowNow is a commission-free online ordering system and food ordering app helping restaurants feed their hungry customers.',
      link: 'https://direct.chownow.com/direct/195/locations/260'
    },
    newrelic: {
      title: 'NewRelic.com',
      tag: 'APPLICATION PERFORMANCE MONITORING.',
      detail:
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      link: 'http://www.newrelic.com'
    },
    roambi: {
      title: 'Tracalorie',
      tag: 'Health is Wealth.',
      detail:
        'Meal and calories tracking application to maintain a diet. It will calculate the total calories consumed per day. It update our daily meal and calories.'
    },
    walker: {
      title: 'Micro-Post',
      tag: 'Series of personal blog',
      detail:
        '(Series of posts) to a personal blog on a microblogging Web site such as Twitter,because microposts are so breif (typically 140 200 characters), a microblogger can update his or her microblog often enough to keep readers informed as to whatever they are doing.'
    },
    powur: {
      title: 'Store locator API',
      tag: 'Discovering Store Location.',
      detail:
        'Application create a store location using unique ID based on the address of the store using Geo json it will convert them into a corresponding coordinates and using mapbox it will render the interactive maps.'
    },
    mystand: {
      title: 'Chat App',
      tag: 'Be Connected to the world.Anywhere.Anytime.',
      detail:
        'Socket.IO is a library that enables real-time,bidirectional and event-based communication between the browser and the server. This project was aimed to communication with each other and share their location to track them.In this user can login and create a group and make their chat.'
    },
    never: {
      title: 'Weather App',
      tag: 'Go around the world.Anywhere.Anytime.',
      detail:
        'Weather application fetches current weather based on their location and returns temperature,wind,humidity and pressure.'
    },
    themall: {
      title: 'GitHub Finder',
      tag: 'Search Everything makes the life easier.',
      detail:
        'GitHub Finder is an app that help to search GitHub user profiles with their respective latest repository,views,forks and stars.'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  // function dragPos() {
  //   return dragEnd - dragStart;
  // }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    // dragEnd = dragStart;
    $(document).off('mouseup');
    // carousel
    //   .off('mousemove')
    //   .addClass('transition')
    //   .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    // setTimeout(function() {
    //   if (direction === 1) {
    //     $('.slide:first').before($('.slide:last'));
    //   } else if (direction === -1) {
    //     $('.slide:last').after($('.slide:first'));
    //   }
    //   carousel.removeClass('transition');
    //   carousel.css('transform', 'translateX(0px)');
    // }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});

