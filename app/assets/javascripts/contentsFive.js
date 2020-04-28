$(document).ready(function(){
  　$("p.question").on("click", function() {
  　　$(this).next().slideToggle(200);
  　});
  });