{
 ;; directory setting
 :public-dir   "./"
 :tag-out-dir  "tag/"
 :template-dir "_template/"
 :post-dir     "_posts/"
 :layout-dir   "_layouts/"

 ;; site language
 ;;   default value: "en"
 :lang "ja"

 ;; default site data
 :site {:site-title "(life :with :-)"}

 ;; post file compile hook
 :compile-with-post ["index.html.clj" "atom.xml.clj"]

 ;; tag setting
 :tag-layout "tag"

 ;; post setting
 ;;   default value: #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"
 :post-filename-regexp #"(\d{4})[-_](\d{1,2})[-_](\d{1,2})[-_](.+)$"

 :post-filename-format "{{year}}-{{month}}/{{filename}}"

 ;; highlight setting
 :code-highlight {:CLJ "lang-clj", :CLOJURE "lang-clj"}
 }
