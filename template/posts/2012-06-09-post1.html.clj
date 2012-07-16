; @layout  post
; @title   Sample components
; @tag     tag1 tag2

(section "Link"
#-CLJ
(link "label" "http://localhost/")
(link "http://localhost/")
(link "`code`" "http://localhost/")
CLJ
   (link "label" "http://localhost/")
   [:br]
   (link "http://localhost/")
   [:br]
   (link "`code`" "http://localhost/")
)

(section "Unordered list"
#-CLJ
(ul (range 3))
CLJ
   (ul (range 3))
)

(section "Definition list"
#-CLJ
(dl {:a 1, :b 2})
(dl [:hello "world" :foo "`bar`"])
CLJ
   (dl {:a 1, :b 2})
   (dl [:hello "world" :foo "`bar`"])
)

(section "Block quote"
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

(section "Inline code"
#-CLJ
(code "clojure.core/+")
CLJ
   (code "clojure.core/+")
)

(section "Source code"
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

(section "Paragraph"
#-CLJ
(p "hello, world")
(p "paragraph with `inline` code")
CLJ
   (p "hello, world")
   (p "paragraph with `inline` code")
)

(section "JavaScript"
#-CLJ
(js "a.js" "b.js")
CLJ
)

(section "Style Sheet"
#-CLJ
(css "a.css" "b.css")
CLJ
)
