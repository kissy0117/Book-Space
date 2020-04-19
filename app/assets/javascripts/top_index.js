$(function(){

  $('#searchBtn').on("click", function(){
    let title  = $("#title").val();
    let author = $("#author").val();
    const url       = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`;
    const authorUrl = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`;
    const titleUrl  = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`;
    if(title == "" && author == ""){
      alert("検索条件を入力してください");
    }else{

      if(title == ""){

        $.getJSON(authorUrl, function(){
          console.log("実行");
          console.log(authorUrl);
        })
        .done(function(json) {
          $.each(json.items, function(index, item){
          console.log(item);
          console.log("タイトル：" + item.volumeInfo.title + "/発売日：" + item.volumeInfo.publishedDate + "/画像リンク" + item.volumeInfo.imageLinks.smallThumbnail);
          $("#post_title").val(item.volumeInfo.title);
          $("#post_author").val(item.volumeInfo.authors);
          $("#post_infomation").val(item.volumeInfo.publishedDate);
          $("#post_image").val(item.volumeInfo.imageLinks.smallThumbnail);
          $("#sampleID").html('<img src="' + item.volumeInfo.imageLinks.smallThumbnail + '" />')
          })
        })
        .fail(function(){
          alert('error');
        });

      }else if(author == ""){
        
        $.getJSON(titleUrl, function(){
          console.log("実行");
          console.log(titleUrl);
        })
        .done(function(json) {
          $.each(json.items, function(index, item){
          console.log(item);
          console.log("タイトル：" + item.volumeInfo.title + "/発売日：" + item.volumeInfo.publishedDate + "/画像リンク" + item.volumeInfo.imageLinks.smallThumbnail + '.jpg');
          $("#post_title").val(item.volumeInfo.title);
          $("#post_author").val(item.volumeInfo.authors);
          $("#post_infomation").val(item.volumeInfo.publishedDate);
          $("#post_image").val(item.volumeInfo.imageLinks.smallThumbnail + '.jpg/');
          $("#sampleID").html('<img src="' + item.volumeInfo.imageLinks.smallThumbnail + '" />');
          })
        })
        .fail(function(){
          alert('error');
        });
      }else{

        $.getJSON(url, function(){
          console.log("実行");
          console.log(url);
        })
        .done(function(json) {
          $.each(json.items, function(index, item){
          console.log(item);
          console.log("タイトル：" + item.volumeInfo.title + "/発売日：" + item.volumeInfo.publishedDate + "/画像リンク" + item.volumeInfo.imageLinks.smallThumbnail);
          $("#post_title").val(item.volumeInfo.title);
          $("#post_author").val(item.volumeInfo.authors);
          $("#post_infomation").val(item.volumeInfo.publishedDate);
          $("#post_image").val(item.volumeInfo.imageLinks.smallThumbnail);
          $("#sampleID").html('<img src="' + item.volumeInfo.imageLinks.smallThumbnail + '" />')
          })
        })
        .fail(function(){
          alert('error');
        });
      }
    }
  })
});
