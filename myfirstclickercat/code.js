$(function(){
  var init = function()
  {
    selectImages();
    selectShowArea();
    addListenerClick();
  };
  var selectImages = function()
  {
    $image1 = $('#cat-1');
    $image2 = $('#cat-2');
    $image3 = $('#cat-3');
    $image4 = $('#cat-4');
    $image5 = $('#cat-5');
    $show_area = $('#show-area');
  };
  var selectShowArea = function()
  {
    $select_area = $('#show_area');
  };
  var addListenerClick = function()
  {
    num_image1 = 0;
    num_image2 = 0;
    num_image3 = 0;
    num_image4 = 0;
    num_image5 = 0;
    $image1.click(function()
    {
      num_image1 += 1;
      $('#clicks-cat1').text(num_image1);
      appendCat($(this));
    });
    $image2.click(function()
    {
      num_image2 += 1;
      $('#clicks-cat2').text(num_image2);
      appendCat($(this));
    });
    $image3.click(function()
    {
      num_image3 += 1;
      $('#clicks-cat3').text(num_image3);
      appendCat($(this));
    });
    $image4.click(function()
    {
      num_image4 += 1;
      $('#clicks-cat4').text(num_image4);
      appendCat($(this));
    });
    $image5.click(function()
    {
      num_image5 += 1;
      $('#clicks-cat5').text(num_image5);
      appendCat($(this));
    });
  };
  var appendCat = function( cat )
  {
    $show_area.empty();
    $show_area.append( cat );
  };
  init();
})();