{
 ;; directory setting
 :public-dir   "./"
 :tag-out-dir  "tag/"
 :template-dir ".template/"
 :post-dir     "posts/"
 :layout-dir   "layouts/"

 ;; posts and tags url setting
 ;;   default value: "/"
 ;;   ex)
 ;;     "/"    => "/YYYY-MM/POST.html"
 ;;     "/foo" => "/foo/YYYY-MM/POST.html"
 :url-base     "/"

 ;; dev server port
 ;;   default value: 8080
 :port 8080

 ;; site language
 ;;   default value: "en"
 :lang "ja"

 ;; default site data
 :site {:charset    "utf-8"
        :site-title "括弧錬金術師"
        :site-subtitle "S式を錬成してます"
        :site-meta-description "This is @ponkore's blog"
        :site-meta-author "@ponkore"
        :site-url "http://ponkore.github.com"
        :twitter    "ponkore"
        :disqus-shortname "ponkoresblog"
        :profile-text "Programmingが好きなおっさんSE。最近特にClojureがイイ。時折マイコンでも遊んでみたり。おっさんだけど人生まだこれからだ。"
        :css ["/css/main.css"]
        :device-css ["/css/smartphone.css"]
        ; :js ["/js/main.js"]

        ;; date format string for html.conv/date->string
        ;;   default value: :simple (:simple means "dd MMM yyyy" (ex. "01 Jan 2012"))
        ;; :date-format :simple
        :date-format "yyyy-MM-dd"
        }

 ;; post file compile hook
 :compile-with-post ["index.html.clj" "atom.xml.clj"]

 ;; tag setting
 :tag-layout "tag"

 ;; post setting
 ;;   default value: #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"
 :post-filename-regexp #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"
 :post-filename-format "{{year}}-{{month}}/{{filename}}"

 ;; post sort type (:date :name :title :date-desc :name-desc :title-desc)
 ;;   default value: :date-desc
 :post-sort-type :date-desc

 ;; clojurescript compile options
 ;; src-dir base is `:template-dir`
 ;; output-dir base is `:public-dir`
 ;:cljs {:src-dir       "cljs"
 ;       :output-to     "js/main.js"
 ;       :optimizations :simple
 ;       :pretty-print  true}

 ;; highlight setting
 :code-highlight {:CLJ     "lang-clj"
                  :CLOJURE "lang-clj"
                  :LISP    "lang-lisp"
                  :SCALA   "lang-scala"
                  :SQL     "lang-sql"
                  :VB      "lang-vb"
                  :CSS     "lang-css"
                  :JAVA    "lang-java"
                  :HTML    "lang-html"
                  :RUBY    "lang-ruby"
                  :SH      "lang-sh"}
 }
