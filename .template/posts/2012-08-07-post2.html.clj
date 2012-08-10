; @layout  post
; @title   Embed するものの例
; @tag     tag1 tag2
; @summary Webページに embed するものについての例を示します。

(section :h2 "Embed gist"
  (p "まずは Gist から。")
#-CLJ
(gist 3234115)
CLJ
(gist 3234115)

#-CLJ
(gist 3234115 "hoge.clj")
CLJ
(gist 3234115 "hoge.clj")
)

(section :h2 "Embed youtube, slideshare, etc"
  (p "Youtube, Slideshare 等のように、`embed` スクリプトのあるやつについて。")
  (p "こういうやつは、embed コードのダブルクオート '\"' を、バックスラッシュ '\\' でエスケープして、素直に貼っつけてしまいましょう。")

  "<iframe src=\"http://www.slideshare.net/slideshow/embed_code/13782976\" width=\"427\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px\" allowfullscreen> </iframe> <div style=\"margin-bottom:5px\"> <strong> <a href=\"http://www.slideshare.net/masa0kato/clojure-programmingchapter2-13782976\" title=\"Clojure programming-chapter-2\" target=\"_blank\">Clojure programming-chapter-2</a> </strong> from <strong><a href=\"http://www.slideshare.net/masa0kato\" target=\"_blank\">Masao Kato</a></strong> </div>"
)
