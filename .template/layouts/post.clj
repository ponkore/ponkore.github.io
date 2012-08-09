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

;;; disqus comment and thread
(defn disqus-comment
  "disqus comment and thread"
  [site]
  [:div
   [:div {:id "disqus_thread"}]
   [:script {:type "text/javascript"}
   "(function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + '" (:disqus-shortname site)"' + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();"]
   [:noscript
    "Please enable JavaScript to view the "
    (link "comments powered by Disqus." "http://disqus.com/?ref_noscript")]
   [:a {:href "http://disqus.com" :class "dsq-brlink"}
    "comments powered by " [:span {:class "logo-disqus"} "Disqus"]]
   ])

[:article
 ;; page header
 [:page-header
  [:div {:class "page-header"}
   ;; title
   [:h1 (link (:title site) "#")]
   ;; post date and tags
   [:div {:class "tag-and-date"}
    (post-date)
    (post-tags)]]]

 ;; contents
 [:div {:class "post"} contents]

 ;; social buttons
 [:div {:class "clearfix"}
  (social-buttons site)]
 
 ;; disqus comment
 [:div {:class "clearfix"}
  (disqus-comment site)]

 (js "http://embedtweet.com/javascripts/embed_v2.js")
]
