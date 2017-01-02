$(document).ready(function() {
  $('.petronas__slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots petronas__slick-dots'
  });

  $('.petronas__section-other-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots petronas__other-section-dots'
  });

  $('.petronas__other-quote-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev petronas__other-quote-arrow">Previous</button>',
    nextArrow: '<button type="button" class="slick-next petronas__other-quote-arrow">Next</button>',
    dots: false
  });

  // Work on the collapse icon
  $('#collapseSectionOne').on('show.bs.collapse', function () {
    $('.petronas__section-article-tag .petronas__collapse-control-btn .icon').removeClass('ion-plus-circled');
  });

  $('#collapseSectionOne').on('hidden.bs.collapse', function () {
    $('.petronas__section-article-tag .petronas__collapse-control-btn .icon').addClass('ion-plus-circled');
  });

  $('#collapseSectionTwo').on('show.bs.collapse', function () {
    $('.petronas__section-tools .petronas__collapse-control-btn .icon').removeClass('ion-plus-circled');
  });

  $('#collapseSectionTwo').on('hidden.bs.collapse', function () {
    $('.petronas__section-tools .petronas__collapse-control-btn .icon').addClass('ion-plus-circled');
  });

  $('#collapseFooter').on('show.bs.collapse', function () {
    $('.petronas__footer .petronas__collapse-control-btn .icon').removeClass('ion-android-expand');
  });

  $('#collapseFooter').on('hidden.bs.collapse', function () {
    $('.petronas__footer .petronas__collapse-control-btn .icon').addClass('ion-android-expand');
  });

  $('.petronas__nav-tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show');
  });
});
