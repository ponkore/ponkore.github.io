; @layout  post
; @title   個人的な misaki TODO ああああああああああああああ
; @tag     tag1 tag3
; @summary 個人的なTODO をとりあえずメモっときます。

(p (:summary (meta contents)))

(section
 :h2 "read more ... (続きを読む) 記法の導入"
 (p "
具体的にどのような結果が望みなのか、自分でもわからない。Index ページ上
には (続きを読む...) というリンクがあり、それをクリックすると該当する
post ページに飛ぶ、という感じ。Index ページに表示される「あるべき姿」が
わからん。ので、とりあえずプレーンテキスト限定として、post のメタデータ
として@summary みたいに書いておいて、Index ページではそれを引っ張ってく
るような感じで運用しようかな。
"))

(section
 :h2 "footnote 記法の導入"
 (p "これはテンプレート内オレオレ関数でできるかも。"))

(section
 :h2 "misaki.html.conv/date->string で好みのフォーマットを指定"
 (p "config.clj に好みの日付フォーマットを指定できるようにしたい。")
 (p "
一旦、下記のようなコードで対処。_config.clj には、`:date-format \"yyyy-MM-dd\"`
のように記述しておく。デフォルト`:date-format`のデフォルト値は`:simple`。
")
#-CLJ
; =date->string
(defn date->string
  "Convert org.joda.time.DateTime to String

      (date->string (clj-time.core/now))
      ;=> \"01 Jan 2012\""
  [date]
  (if date
    (if (= (:date-format *site*) :simple)
      (str/join
       " "
       [(.toString date "dd")
        ; Joda: "MMM" is not worked in my environment
        (nth '(_ Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
             (t/month date))
        (.toString date "yyyy")])
      (.toString date (:date-format *site*)))))
CLJ
(p "
_config.clj には :site に設定した。がこれは美しくない(と思
う)。_config.clj の toplevel(?) に本当は設定すべきだと思うのだが、うま
くいかなかった...。
")
#-CLJ
 :site {
        ;; :
        ;; :
        :date-format "yyyy-MM-dd"
        }
CLJ
)

(section
 :h2 "Archive (年月別の一覧取得)"
 (p "サイドバーに年月別のリンクを設けることができるようにしたい。"))

(section
 :h2 "１ページ内の最大記事数指定と next/prev リンクの設定"
 (p "
read more が実現できた段階で、１Index ページ内の記事数を指定できるよう
にし、next/prev リンクを設けたい。
"))
