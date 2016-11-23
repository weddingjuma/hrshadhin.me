function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
  c, i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

jQuery(document).ready(function($) {
  color = ColorLuminance('#8acb82', -0.15);

  var styleCss = '<style type="text/css">' +

  '.section-title h2:after, .section-title h2:before { background-color: ' + color + '; }' +

  '</style>';

  $('body').append(styleCss);
});

jQuery(document).ready(function($) {
  $('.one-page-layout .site-main > section:nth-of-type(1)').toggleClass('light-text');
});

jQuery(document).ready(function($) {
  $('.one-page-layout .site-main > section:nth-of-type(6)').toggleClass('light-text');
});
jQuery(document).ready(function($) {
  var menu_html = "";

  $('#main').find('section').each(function() {
    var id = $(this).attr('id');
    var icon = $(this).find('.page-title  i').attr('class');
    var title = $(this).find('.page-title').text();
    var menu_item = '<li><a href="#/' + id + '"><i class="' + icon + '"></i>' + title + '</a></li>';

    menu_html += menu_item;

    $('.menu-auto').html(menu_html);
  });
});
