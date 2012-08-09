; @title   Ponkore's Blog
; @format  html5

;;; sidebar
(defn _aside
  [site]
  [:aside {:class "aside clearfix"}
   [:h3 "Profile"]
   (img "/img/my-icon-64x64.png")
   [:div {:class "profile-info"}
    (link (str "@" (:twitter site)) (str "http://twitter.com/" (:twitter site)))
    (p (:profile-text site))
    ] ;; <!-- profile-info -->
   [:h3 "Links"]
   [:ul
    [:li (link "Tumblr" "http://tech-pon.tumblr.com")]
    [:li (link "Twitter" (str "http://twitter.com/" (:twitter site)))]]
   [:h3 "Tags"]
   (tag-list)
   [:h3 "Recent Posts"]
   (post-list)
   [:h3 "Feed"]
   (link (img "/img/feed/Blue (Custom).png") "/atom.xml")])

;;; banner
(defn misaki-banner
  "link to misaki official(?) banner."
  []
  (link (img "http://liquidz.github.com/img/misaki_banner.png") "https://github.com/liquidz/misaki" {:target "_blank"}))

;;; facebook button
(defn facebook-like-button
  "facebook like button"
  [site]
  (let [params ;; TODO: ぐだぐだなので、なんとかしなくちゃ
        {"href" "http%3A%2F%2Fponkore.github.com%2Fi",
         "layout" "standard",
         "show_faces" "true",
         "width" 300,
         "action" "like",
         "colorscheme" "light",
         "height" 80}
        param-str (clojure.string/join "&" (map (fn [[k v]] (str k "=" v)) params))]
    [:iframe {:src (str "http://www.facebook.com/plugins/like.php?" param-str)
              :scrolling "no"
              :frameborder "0"
              :style "border:none; overflow:hidden; height:41px;"
              :allowTransparency "true"}]))

;;; Tumblr+ ボタン
(defn tumblr-share-button
  "Tumblr share button"
  [site]
 [:a {:href "http://www.tumblr.com/share"
      :title "Share on Tumblr"
      :style "display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('http://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;"}
  ""]) ;;; Share on Tumblr

;;; hatena bookmark button
(defn hatena-bookmark-button
  [site]
  "hatena bookmark button"
  (list
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
             :async "async"}]))

;;; social buttons
(defn social-buttons
  "define social buttons"
  [site]
  [:div {:class "social-buttons"}
   [:div {:class "social-buttons-btn"}
    (hatena-bookmark-button site)]
   [:div {:class "social-buttons-btn"}
    (tumblr-share-button site)]
   [:div {:class "social-buttons-btn"}
    (tweet-button :lang "ja" :label "ツイート")]
   [:div {:class "social-buttons-btn"}
    (facebook-like-button site)]
   ])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Main layout starts here.
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
[:head
 [:meta {:charset (:charset site)}]
 [:meta {:name "viewport" :content "width=device-width"}]
 [:meta {:http-equiv "Content-Language" :content "ja"}]
 [:meta {:http-equiv "Content-Type" :content "text/html; charset=UTF-8"}]
 [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
 [:meta {:name "description" :content (:site-meta-description site)}]
 [:meta {:name "author" :content (:site-meta-author site)}]

 [:title (if (= (:title site) "home")
           (:site-title site)
           (str (:site-title site) " - " (:title site)))]

 [:link {:rel   "shortcut icon"
         :href  "/favicon.ico"}]
 [:link {:href  "/atom.xml"
         :rel   "alternate"
         :title (:title site)
         :type  "application/atom-xml"}]

 (absolute-css ["/css/style.css" "/css/sunburst.css" (:css site ())])
 (absolute-css {:media "only screen and (max-device-width:480px)"} (:device-css site))

 (js "/js/libs/modernizr-2.5.3-respond-1.1.0.min.js"
     "http://platform.tumblr.com/v1/share.js")
]

[:body
 ;; header
 [:div {:id "header-container"}
  [:header {:class "wrapper clearfix"}
   (link [:h1 {:id "title"} (:site-title site)] "/")
   ]]

 ;; main container
 [:div {:id "main-container"}
  [:div {:id "main" :class "wrapper clearfix"}
   ;; main contents
   contents
   ;; sidebar (right side bar)
   (_aside site)
   ] ;; <!-- #main -->
  ] ;; <!-- #main-container -->

 [:div {:id "footer-container"}
  [:footer {:class "wrapper clearfix"}
   [:div {:style "float:right;" }(misaki-banner)]]]

 (absolute-js ["/js/prettify.js"
               "/js/lang-clj.js"
               "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"
               "/js/script.js"
               (:js site ())])
]
