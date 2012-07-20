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
;;; facebook button
(defn facebook-like-button
  "facebook like button"
  [site]
  [:iframe {:src "http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fponkore.github.com%2Fi&layout=standard&show_faces=true&width=300&action=like&colorscheme=light&height=80"
            :scrolling "no"
            :frameborder "0"
            :style "border:none; overflow:hidden; width:300px; height:80px;"
            :allowTransparency "true"}])
;;; Tumblr+ ボタン
(defn tumblr-like-button
  "Tumblr like button"
  [site]
 [:a {:href "http://www.tumblr.com/share"
      :title "Share on Tumblr"
      :style "display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('http://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;"}
  "Share on Tumblr"])
;;; hatena bookmark button
(defn hatena-bookmark-button
  [site]
  "hatena bookmark button"
  [:a {:href (str "http://b.hatena.ne.jp/entry/" (:site-url site))
       :class "hatena-bookmark-button"
       :data-hatena-bookmark-title (site :title)
       :data-hatena-bookmark-layout "standard"
       :title "このエントリーをはてなブックマークに追加"}
   [:img {:href "http://b.st-hatena.com/images/entry-button/button-only.gif"
          :alt "このエントリーをはてなブックマークに追加"
          :width "20"
          :height "20"
          :style "border: none;"}]]
  [:script {:type "text/javascript"
            :src "http://b.st-hatena.com/js/bookmark_button.js"
            :charset "utf-8"
            :async "async"}])
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
 [:div {:class "social-buttons"}
  (tweet-button :lang "ja" :label "ツイート")
  (facebook-like-button site)
  (tumblr-like-button site)
  (hatena-bookmark-button site)]

 ;; disqus comment
 (disqus-comment site)
 (js "http://embedtweet.com/javascripts/embed_v2.js")
]
