Parse Time
======================
時間文字列を秒に変換します。  
以下のクロック値の例をHTML5 Audioで利用する秒に変換することを目的にしてます。

EPUB Media Overlays 3.0 付録 B. クロック値の例
http://imagedrive.github.io/spec/epub30-mediaoverlays.xhtml#app-clock-examples

 
使い方
------
functionひとつなので適当にコピーするなり読み込むなりして、以下のように呼び出してください。

    var sec = parseTime(time, op);

 
パラメータ
---------------- 
+   `time` :
    時間文字列です。
 
+   `op` :
    指定しなければ秒に。「h」で時間、「min」で分、「ms」でミリ秒に変換します。

 
ライセンス
----------
Jasmineにあわせてみました。  
Copyright &copy; 2014 Shunsuke Ito
Distributed under the MIT License.
 
[MIT]: http://www.opensource.org/licenses/mit-license.php
