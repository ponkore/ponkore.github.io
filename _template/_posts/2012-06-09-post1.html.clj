; @layout  post
; @title   Sample components
; @tag     tag1 tag2

(section
 "Sample Components"
 (subsection
  "Link"
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

 (subsection
  "Unordered list"
#-CLJ
(ul (range 3))
CLJ
   (ul (range 3))
   )

 (subsection
  "Definition list"
#-CLJ
(dl {:a 1, :b 2})
(dl [:hello "world" :foo "`bar`"])
CLJ
   (dl {:a 1, :b 2})
   (dl [:hello "world" :foo "`bar`"])
   )

 (subsection
  "Block quote"
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

 (subsection
  "Inline code"
#-CLJ
(code "clojure.core/+")
CLJ
   (code "clojure.core/+")
   )

 (subsection
  "Source code"
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

 (subsection
  "Paragraph"
#-CLJ
(p "hello, world")
(p "paragraph with `inline` code")
CLJ
   (p "hello, world")
   (p "paragraph with `inline` code")
  )

 (subsection
  "JavaScript"
#-CLJ
(js "a.js" "b.js")
CLJ
  )

 (subsection
  "Style Sheet"
#-CLJ
(css "a.css" "b.css")
CLJ
  )
 ) ;; <!-- section -->
