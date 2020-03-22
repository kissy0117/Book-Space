$(function(){
  
  $('#searchBtn').on("click", function(){
    let intitle = $("#post_title").val();
    let inauthor = $("#post_author").val();
    const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + intitle + inauthor;


    $.getJSON(url, function(){
      console.log("実行");
      console.log(url);
    })

    .done(function(json) {
      $.each(json.items, function(index, val){

      console.log(val);
      console.log("タイトル：" + val.volumeInfo.title + "/発売日：" + val.volumeInfo.publishedDate + "/画像リンク" + val.volumeInfo.imageLinks.smallThumbnail);

      $("#post_image").attr('src',val.volumeInfo.imageLinks.smallThumbnail)
      $("#post_content").append('<br>' + index + '<br>' + 'TITLE：' + val.volumeInfo.title + '<br>' + 'INFO：' + val.volumeInfo.publishedDate + '<br>' + '<img src="' + val.volumeInfo.imageLinks.smallThumbnail + '" />');


    })
  })

    .fail(function(){
      alert('error');
    });
  })
});
