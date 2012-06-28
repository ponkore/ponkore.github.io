; @title   Ponkore's Blog
; @format  html5

(comment
(defn _nav []
   [:nav
    [:ul
     [:li (link "About" "#") ]
     [:li (link "Blog" "#") ]
     ]
    ])
)

;;; sidebar
(defn _aside [site]
  [:aside {:class "aside clearfix"}
   [:h3 "Profile"]
   (img "/img/my-icon-64x64.png")
   [:div {:class "profile-info"}
    (p "@ponkore")
    (p "Programmingが好きなおっさんSE。最近特にClojureがイイ。時折マイコンでも遊んでみたり。おっさんだけど人生まだこれからだ。")
    ] ; <!-- profile-info -->
   [:h3 "Links"]
   [:ul
    [:li (link "Tumblr" "http://tech-pon.tumblr.com")]
    [:li (link "Twitter" "http://twitter.com/ponkore")]
    ]
   [:h3 "Tags"]
   (ul
    #(link (str (:name %) " (" (:count %) ")")
           (:url %))
    (:tags site))
   [:h3 "Archive"]
   (ul
    #(link (:title %) (:url %))
    (:posts site))
   [:h3 "Feed"]
   (link (img "/img/feed/Blue (Custom).png") "/atom.xml")
   ]
  )

[:head
 [:meta {:charset "UTF-8"}]
 [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]

 [:title (if (= (:title site) "home")
           (:site-title site)
           (str (:site-title site) " - " (:title site)))]

 [:meta {:name "description" :content "This is @ponkore's blog."}]
 [:meta {:name "author" :content "@ponkore"}]

 [:meta {:name "viewport" :content "width=device-width"}]

 [:link {:rel   "shortcut icon"
         :href  "/favicon.ico"}]

 [:link {:href  "/atom.xml"
         :rel   "alternate"
         :title (:title site)
         :type  "application/atom-xml"}]

 (css
;  "http://fonts.googleapis.com/css?family=Inconsolata"
  "/css/style.css"
  "/css/sunburst.css"
  )

 (js "/js/libs/modernizr-2.5.3-respond-1.1.0.min.js"
     "http://platform.tumblr.com/v1/share.js")
]

[:body
 ;;; header
 [:div {:id "header-container"}
  [:header {:class "wrapper clearfix"}
   (link [:h1 {:id "title"} (:site-title site)] "/")
   ;;; (_nav)
   ]]

 ;;; main container
 [:div {:id "main-container"}
  [:div {:id "main" :class "wrapper clearfix"}
   ;;; main contents
   contents
   ;;; sidebar (right side bar)
   (_aside site)
   ] ;;; <!-- #main -->
  ] ;;; <!-- #main-container -->

 [:div {:id "footer-container"}
  [:footer {:class "wrapper right"}
   [:p [:I "generated by " (link (img "http://liquidz.github.com/img/misaki_banner.png") "https://github.com/liquidz/misaki")]]]
  ]
 (js
  "/js/prettify.js"
  "/js/lang-clj.js"
  "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"
  "/js/script.js"
  )
]
