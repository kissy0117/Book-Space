$(function(){
  
  $('#searchBtn').on("click", function(){
    let title = $("#title").val();
    let author = $("#author").val();

    if(title == "" && author == ""){
      alert("検索条件を入力してください");
    }else{

      if(title == ""){
        const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`;
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

      }else if(author == ""){
        const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`;
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
      }else{
        const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`;
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
      }
    }
  })
});
