; @layout  default
; @title   post default title

;;; 
(defn section
  "write an article section with title
(section :h1 \"Chapter 1. hoge\"
  [:p \"This is Chapter 1.\"]
  (section :h2 \"1.1 hoge1\" \"This is Chapter 1. section 1.\" \"fuga fuga\"))
=>
<div class=\"section\"><section><h1>Chapter 1. hoge</h1><p>This is Chapter 1.</p>
<div class=\"section\"><section><h2>1.1 hoge1</h2>This is Chapter 1. section 1. fuga fuga</section>
</div></section></div>
"
  [key title & contents]
;  {:pre (contains? key #{:h1 :h2 :h3 :h4 :h5 :h6})}
  [:div {:class "section"}
   [:section
    [key title]
    contents]])

[:article
 ;; page header
 [:page-header
  [:div {:class "page-header"}
   ;; title
   [:h1 (link (:title site) "#" ; {:style "text-decoration:none;color:black;"}
              )]
   ;; post date and tags
   [:div {:class "tag-and-date"}
    [:p {:class "date"} (-> site :date my-date->string)] ; (post-date)
    (post-tags)]]]

 ;; contents
 [:div {:class "post"} contents]

 ;; social buttons
 [:div {:class "clearfix"} (social-buttons site)]
 
 ;; disqus comment
 [:div {:class "clearfix"} (disqus-comment site)]

 (js "http://embedtweet.com/javascripts/embed_v2.js")
]
