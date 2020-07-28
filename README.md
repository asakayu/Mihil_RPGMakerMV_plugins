# Mihil_RPGMakerMV_plugins
作ったツクールMVのプラグインを置いていきます

## [Columns_Plural.js](https://github.com/asakayu/Mihil_RPGMakerMV_plugins/blob/master/Columns_Plural.js)
選択肢の列(横の並び)を2列以上にできます。  
木星ペンギンさんの  
[選択肢拡張プラグインv3.5](http://woodpenguin.web.fc2.com/rgss3/choice_ex.html)  
と互換性があります。  
  
詳細やスクショなどは  
[ツクマテの記事](https://tm.lucky-duet.com/viewtopic.php?f=5&t=6270&sid=abba4f34a739591fd65bfd78a2e5277d)  
に。

## [Mihil_EventPageCondition.js](https://github.com/asakayu/Mihil_RPGMakerMV_plugins/blob/master/Mihil_EventPageCondition.js)
イベントページの出現条件をスクリプトで制御できるようになります。
スクリプトの知識がある方向けです。

## [Math.rand.js](https://github.com/asakayu/Mihil_RPGMakerMV_plugins/blob/master/MathRand.js)
スクリプトで乱数を発生させる時、いちいち  
```js
Math.floor( Math.random() * ( max+1-min ) +min )
```  
と打つのって面倒ですよね？  
このプラグインでグローバル空間にMath.rand()を追加します。  
スクリプトでMath.rand(min,max)と打つと、minからmaxまでの乱数を出してくれます。  
Math.rand(max,min)と反転させたり、Math.rand(max)とだけ省略しても動きます。  

## [Mihil_CurrentVolume](https://github.com/asakayu/Mihil_RPGMakerMV_plugins/blob/master/Mihil_CurrentVolume.js)
既に鳴らしているBGMやBGSの音量をスクリプトで変更できます。  
BGMの場合はエディタのスクリプトコマンドを開いて  
AudioManager.currentBgmVolume = 変更したい音量  
BGSの場合は  
AudioManager.currentBgsVolume = 変更したい音量  
を書けば即座に音量が切り替わります。  

## [Mihil_tweaks.js](https://github.com/asakayu/Mihil_RPGMakerMV_plugins/blob/master/Mihil_tweaks.js)
ゲームを快適にしたり、ツクールMV本体のバグを修正するための  
細々とした変更のまとめです。
- セーブデータロード時の暗転時間変更
- マップ移動時の暗転時間変更
- タイトル画面の表示高速化
- ニューゲーム開始時の表示高速化
- ウィンドウの開閉高速化
- メッセージの硬直無効化
- Altキーの無効化
- キーを長押し時の連打速度を変更
- 選択肢で左右キーにページ送り機能を追加
- 選択肢不具合の修正  
- フキダシアイコンの表示高速化(個別に調整可能にする予定)  

項目はそれぞれオンオフを変更できます。  
コアスクリプトのオーバーライドもあるので、他プラグインとの競合に気をつけてください。  
設定がオフのままなら読み込まないので、競合しないし、重くなることもないはずです。  

## [SkipDuplicateTint.js](https://github.com/asakayu/Mihil_RPGMakerMV_plugins/tree/master/SkipDuplicateTint)
イベントコマンド『画面の色調変更』時に、既に画面が同じ色調だった場合、  
処理自体をスキップして、ゲームのテンポを良くします。  

暗転イベントが重なった時に、無駄に待たされることがなくなります。  
分かりづらい比較動画あり  

## [SkipTitleScene](https://github.com/asakayu/Mihil_RPGMakerMV_plugins/tree/master/SkipTitleScene) フォルダ
ゲーム起動時に、ニューゲームやロード画面をスキップできます。

## 講座
## 中級
ツクールMVをもっと便利に。記事へのリンクです。  
### ツクールMVのスクリプトで文章の表示を行う方法＋＋
https://note.mu/asakayu/n/n6f4987e21222  

### ツクールMVのスクリプトで文章の表示を行う方法＋
https://note.mu/asakayu/n/n5611ef004b23  

## 上級
### Visual Studio CodeでツクールMVをデバッグ～NW.js(ローカル環境)編～
https://qiita.com/asakayu/items/a68440e597373aabba02

## ライセンス
MITライセンスについての記述のないプラグインを利用したい場合はご相談ください。

コードレビュー歓迎します。  
Please feel free to throw me Masakari!
