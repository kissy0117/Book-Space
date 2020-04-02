$(function(){
  
  $('#searchBtn').on("click", function(){
    let title = $("#title").val();
    
    const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title ;


    $.getJSON(url, function(){
      console.log("実行");
      console.log(url);
    })

    .done(function(json) {
      $.each(json.items, function(index, item){

      console.log(item);
      console.log("タイトル：" + item.volumeInfo.title + "/発売日：" + item.volumeInfo.publishedDate + "/画像リンク" + item.volumeInfo.imageLinks.smallThumbnail);
      
      
      $("#sampleID").html('<img src="' + item.volumeInfo.imageLinks.smallThumbnail + '" />')
      
      


    })
  })

    .fail(function(){
      alert('error');
    });
  })
});
