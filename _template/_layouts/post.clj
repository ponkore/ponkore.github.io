; @layout  default
; @title   post default title

;;; ダサいのであとでちゃんと考えよう
(defn post-date [date]
  (str (conv/year date) "/" (conv/month date) "/" (conv/day date)))

(defn section [title & contents]
  [:div {:class "section"}
   [:span {:class "section-title"} title]
   contents])

(defn subsection [title & contents]
  [:div {:class "subsection"}
   [:span {:class "subsection-title"} title]
   contents])

(defn subsubsection [title & contents]
  [:div {:class "subsubsection"}
   [:span {:class "subsubsection-title"} title]
   contents])

[:article
 ; page header
 [:header
  [:div {:class "page-header"}
   ;; title
   [:h1 (site :title)]
   ;; post date
   [:span {:class "post-date"} (post-date (site :date))]
   ;; post tag
   [:div {:class "tag"}
    (ul #(link (str "[" (:name %) "]") (:url %))
        (:tag site))]
   ]
  ]

 ; contents
 [:div {:class "post"} contents]

(tweet-button :lang "ja" :label "ツイート")

;;; facebook ボタン
[:iframe {:src "http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fponkore.github.com%2Fi&layout=standard&show_faces=true&width=300&action=like&colorscheme=light&height=80"
          :scrolling "no"
          :frameborder "0"
          :style "border:none; overflow:hidden; width:300px; height:80px;"
          :allowTransparency "true"}]

;;; Tumblr+ ボタン
[:a {:href "http://www.tumblr.com/share"
     :title "Share on Tumblr"
     :style "display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('http://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;"}
 "Share on Tumblr"]

;;; はてなB! ボタン
[:a {:href "http://b.hatena.ne.jp/entry/http://ponkore.github.com/"
     :class "hatena-bookmark-button"
     :data-hatena-bookmark-title "(life with :-)"
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
          :async "async"}]
       
;;; disqus comment
"
<div id='disqus_thread'></div>
<script type='text/javascript'>
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'ponkoresblog'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href='http://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>
<a href='http://disqus.com' class='dsq-brlink'>comments powered by <span class='logo-disqus'>Disqus</span></a>
"

(js "http://embedtweet.com/javascripts/embed_v2.js")

]
