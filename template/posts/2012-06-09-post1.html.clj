; @layout  post
; @title   Sample components
; @tag     tag1 tag2

(section
 "Sample Components"
 [:div {:class "subsection"}
  [:h2 "Link"]
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
 ]

 [:div {:class "subsection"}
  "Unordered list"
#-CLJ
(ul (range 3))
CLJ
   (ul (range 3))
 ]

 [:div {:class "subsection"}
  "Definition list"
#-CLJ
(dl {:a 1, :b 2})
(dl [:hello "world" :foo "`bar`"])
CLJ
   (dl {:a 1, :b 2})
   (dl [:hello "world" :foo "`bar`"])
 ]

 [:div {:class "subsection"}
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
 ]

 [:div {:class "subsection"}
  "Inline code"
#-CLJ
(code "clojure.core/+")
CLJ
   (code "clojure.core/+")
 ]

 [:div {:class "subsection"}
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
 ]

 [:div {:class "subsection"}
  "Paragraph"
#-CLJ
(p "hello, world")
(p "paragraph with `inline` code")
CLJ
   (p "hello, world")
   (p "paragraph with `inline` code")
 ]

 [:div {:class "subsection"}
  "JavaScript"
#-CLJ
(js "a.js" "b.js")
CLJ
 ]

 [:div {:class "subsection"}
  "Style Sheet"
#-CLJ
(css "a.css" "b.css")
CLJ
 ]
) ;; <!-- section -->
