$(function()  {
  let tabs = $(".tab-link");
  function tabSwitch() {
    $(".active").removeClass("active");

    $(this).addClass("active");
    const index = tabs.index(this);

    $(".contents").removeClass("show").eq(index).addClass("show");
  }

  tabs.click(tabSwitch);
});