; @layout  post
; @title   いろんな言語でのサンプル(google code prettify のテスト)
; @tag     tag1
; @summary このページは、あいうえお。

(p "このページは、misakiで google code prettify するパターンを書いてみます。")
(p "summary:[" (:summary (meta contents)) "]")
  
(section :h2 "clojure"
#-CLJ
; CLJ
(defn fact[n]
  "factorial"
  (if (= n 0) 1
      (* n (fact (dec n)))))
CLJ
#-CLOJURE
; CLOJURE
(defn fact[n]
  "factorial"
  (if (= n 0) 1
      (* n (fact (dec n)))))
CLOJURE
)

(section :h2 "lisp"
#-LISP
; LISP
(defun fact (n)
  "factorial"
  (if (= n 0) 1
      (* n (fact (1- n)))))
LISP
)

(section :h2 "scala"
#-SCALA
// http://d.hatena.ne.jp/xuwei/20120515/1337065445 (https://gist.github.com/2699263) でテスト
// Inversefizzbuzz
// http://www.jasq.org/2/post/2012/05/inverse-fizzbuzz.html
//
// fork from https://gist.github.com/2699068
object InverseFizzbuzz extends App {

  def zzubzzif(pattern:Seq[String]) = {
    def fizzbuzz(n:Int) = (n%3, n%5) match{
      case (0,0) => "fizzbuzz"
      case (0,_) => "fizz"
      case (_,0) => "buzz"
      case _ => ""
    }

    val n = Stream.from(0).map(fizzbuzz).indexOfSlice(pattern)
    (n until (pattern.size + n)) toList
  }

  def _p(s:Seq[String]) = {
    println("pattern : %s" format (s.map{s => s.mkString("'", "", "'")}))
    println(zzubzzif(s))
    println("")
  }

  _p(Seq("fizz"))
  _p(Seq("buzz"))
  _p(Seq("fizz","","buzz"))
  _p(Seq("fizz","buzz"))
  _p(Seq("buzz","fizz"))
  _p(Seq("fizz","","buzz","fizz"))
  _p(Seq("fizz","","","fizz"))
  _p(Seq("fizz","","","fizz","buzz"))


  // Result:
  //
  // pattern : List('fizz')
  // List(3)
  //
  // pattern : List('buzz')
  // List(5)
  //
  // pattern : List('fizz', '', 'buzz')
  // List(3, 4, 5)
  //
  // pattern : List('fizz', 'buzz')
  // List(9, 10)
  //
  // pattern : List('buzz', 'fizz')
  // List(5, 6)
  //
  // pattern : List('fizz', '', 'buzz', 'fizz')
  // List(3, 4, 5, 6)
  //
  // pattern : List('fizz', '', '', 'fizz')
  // List(6, 7, 8, 9)
  //
  // pattern : List('fizz', '', '', 'fizz', 'buzz')
  // List(6, 7, 8, 9, 10)
}
SCALA
)

(section :h2 "sql"
#-SQL
-- SQL
select
  user_name, count(*)
from user_tables
where user_name like 'ORA%'
group by user_name
having count(*) > 1
order by 1
/
SQL
)

(section :h2 "vb"
#-VB
Private Sub Foo
   MsgBox "Hello, world"
End Sub
VB
)
