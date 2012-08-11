; @layout  post
; @title   サンプルコンポーネント
; @tag     tag1 tag2
; @summary misakiで使う記法について簡単に解説しています。

(p (:summary (meta contents)))

(section :h2 "Link"
#-CLJ
(link "label" "http://localhost/")
(link "http://localhost/")
(link "`code`" "http://localhost/" {:target "_blank"})
CLJ
   (link "label" "http://localhost/")
   [:br]
   (link "http://localhost/")
   [:br]
   (link "`code`" "http://localhost/" {:target "_blank"})
)

(section :h2 "Unordered list"
#-CLJ
(ul (range 3))
CLJ
   (ul (range 3))
)

(section :h2 "Definition list"
#-CLJ
(dl {:a 1, :b 2})
(dl [:hello "world" :foo "`bar`"])
CLJ
   (dl {:a 1, :b 2})
   (dl [:hello "world" :foo "`bar`"])
)

(section :h2 "Block quote"
#-CLJ
(blockquote
  "foo
  bar"
  [:a {:href "#"} "baz"])
CLJ
  (blockquote
    "foo
    bar"
    [:a {:href "#"} "baz"])
)

(section :h2 "Inline code"
#-CLJ
(code "clojure.core/+")
CLJ
   (code "clojure.core/+")
)

(section :h2 "Source code"
  [:p "Comment out following code."]
#-CLOJURE
#-CLJ
(let [msg "world"]
  (println "hello," msg))
CLJ
CLOJURE
#-CLJ
(let [msg "world"]
  (println "hello," msg))
CLJ
)

(section :h2 "Paragraph"
#-CLJ
(p "hello, world")
(p "paragraph with `inline` code")
CLJ
   (p "hello, world")
   (p "paragraph with `inline` code")
)

(section :h2 "JavaScript"
#-CLJ
(js "a.js" "b.js")
CLJ
)

(section :h2 "Style Sheet"
#-CLJ
(css "a.css" "b.css")
CLJ
)
