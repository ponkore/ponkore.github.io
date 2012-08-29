; @layout  post
; @title   個人的な misaki TODO 
; @tag     tag1 tag3
; @summary 個人的なTODO をとりあえずメモっときます。

(p (:summary (meta contents)))

(section
 :h2 "read more ... (続きを読む) 記法の導入"
 (p "
そもそもは、Index ページに post のタイトルと日付しか並ばない、というの
が寂しく思えた、というのが発端です。Index ページに各 post の先頭いくら
かを表示、というのが簡単そうで難しい。ブログエンジンによっては、read
more ... を記述するための記法があったりするのですが、結構めんどくさそ
う。なので、さしあったっては、各 post の内容を簡単にあらわす情報を、
post のメタデータとして(つまり post の先頭のコメント欄に @summary とし
て) 記載し、その内容を Index ページから見る、という方式でとりあえず運
用してみよう。
"))

(section
 :h2 "footnote 記法の導入"
 (p "
これはテンプレート内オレオレ関数でできるかも。`(defn footnote [s]...)` 
みたいな関数を定義し、グローバルな変数 **footnotes** とかに順次突っ込
んでいき、section の終わりの部分で **footnotes** の内容をレンダリング
する、という感じでよいかと。こんどやってみよう。
")
 )

(section
 :h2 "misaki.html.conv/date->string で好みのフォーマットを指定"
 (p "config.clj に好みの日付フォーマットを指定できるようにしたい。")
 (p "→とりあえず保留。というか date->string している箇所が少なく、そこ
だけオレオレ関数で置き換えるだけにした。")
)

(section
 :h2 "Archive (年月別の一覧取得)"
 (p "サイドバーに年月別のリンクを設けることができるようにしたい。"))

(section
 :h2 "１ページ内の最大記事数指定と next/prev リンクの設定"
 (p "
read more が実現できた段階で、１Index ページ内の記事数を指定できるよう
にし、next/prev リンクを設けたい。というか、それ以前に記事をちゃんと書
け、ということだな。
"))

(section
 :h2 "css関連の修正"
 (p "ページヘッダのサブタイトルがおかしい。post 内 h1,h2,h3,... をそれ
なりに装飾して節の区切りを見やすくしたい。単なる css勉強不足 orz。"))

(section
 :h2 "iPhone で表示したときいろいろとイタい"
 (p "とくに pre ブロックについては、デバイス幅から完全にはみ出している。
しかも横スクロールしたいのに折り返しになっている。"))

(section
 :h2 "amazon の商品画像埋め込みとか、youtube、slideshare、nicovideo 埋
め込みとか"
 (p "埋め込みコードが必要なのはわかるのだが、いちいち hiccup 的な感じ
に変換するのは論外なので、なにかいい方法はないものか、考え中。"))

(section
 :h2 "lisp にありがちな＊variable-name＊ (＊は半角) の表現"
 (p "インラインで *variable-name* と書くと、<em>variable-name</em>
に展開されてしまう。html/core.clj の parse-string の parse-emphasized
が反応してしまう、ということで、markdown の書式に従っているといえば
その通りなのだが、blog 上で表現する方法がないものか。")
 (p "例えばインラインコード `*variable-name*` と書けばよい、とする等。
  "))
