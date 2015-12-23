/* hilight.js (http://highlightjs.org/) (2013/12/07)
 */
$(document).ready(function() {
  $('pre.prettyprint').each(function(i, e) {hljs.highlightBlock(e)});
});
/* facebook like button (2013/11/18)
 */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
