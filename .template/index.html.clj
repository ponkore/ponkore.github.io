;; Define template options here
; @layout  default
; @title   home

;; You can define your function in template
(defn page-header [[fs & rs]]
  [:div {:class "page-header"}
   [:h1 [:span fs] rs]])

(defn post-list2
  "Make default all posts unordered list."
  [site]
  (ul
    #(list
       (misaki.html.conv/date->string (:date %))
       "&nbsp;-&nbsp;"
       (link (str (:title %)) (:url %))
       "&nbsp;-&nbsp;"
       (:summary %))
    (:posts site)))

;;; TODO: site に各ページのサマリ(read more より前の部分)を持つ必要あり
;;; そうすると、記事一覧を思ったとおりに出来る。

[:article
 (post-list2 site)]
