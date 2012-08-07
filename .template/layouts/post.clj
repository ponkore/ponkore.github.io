; @layout  default
; @title   post default title

;;; 
(defn section
  "write an article section with section title"
  [section-title & contents]
  [:div {:class "section"}
   [:span {:class "section-title"} section-title]
   [:br] ;; TODO: <br> ではなく section-title の下余白を取るべき
   contents])

;;; disqus comment and thread
(defn disqus-comment
  [site]
  "disqus comment and thread"
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
   [:h1 (site :title)]
   ;; post date
   (post-date)
   ;; post tag
   (post-tags)]]

 ;; contents
 [:div {:class "post"} contents]

 ;; social buttons (TODO: css を調整して綺麗に並べる)
 [:div {:class "social-buttons"
        :style "float:right;overflow:hidden;margin-top:0px;text-align:right;height:32px;"}
  [:div {:style "float:left;width:51px;overflow:hidden;"}
   (hatena-bookmark-button site)]   ;; はてぶ
  [:div {:style "float:left;width:81px;overflow:hidden;"}
   ;; Tumblr
   (tumblr-share-button site)
   ; "<a href=\"http://www.tumblr.com/share\" title=\"Share on Tumblr\" style=\"display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('http://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;\"></a>"
   ]
  [:div {:style "float:left;overflow:hidden;"}
   (tweet-button :lang "ja" :label "ツイート")] ;; ツイッター
  [:div {:style "float:left;overflow:hidden;"}
   (facebook-like-button site)]] ;; いいね

 ;; disqus comment
 [:div {:style "float:left;"}
  (disqus-comment site)
  ]
 (js "http://embedtweet.com/javascripts/embed_v2.js")
]
