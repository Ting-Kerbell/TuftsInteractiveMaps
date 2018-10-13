$(document).ready(function() {
  var url = window.location.href;
  var index = url.indexOf('?');
  queries = (index != -1 ? "&" + url.substring(index + 1) : "");

  $("a").click(function(e) {
    e.preventDefault();
    var href = event.currentTarget.getAttribute('href');
    window.location.replace(href + queries);
  });
});