//=============================================================================
// Mihil_tweaks.js
//=============================================================================
/*:
 * @plugindesc ゲームの快適化や修正など
 * @author uta_asakayu
 * @Thanks Sigureya, Tsumio, eyn_kenzaki, Plasma
 * 
 * @param ………  Fade  …………………………………………
 * @default ……………………………………………………………………………………
 * 
 * @param LoadFadeMultiple
 * @desc セーブロード時のフェード(暗転)時間を
 * 何倍速にするか　(1.00でOFF)
 * @type number
 * @min 0.1
 * @max 48
 * @decimals 2
 * @default 1.00
 * 
 * @param MapFadeMultiple
 * @desc マップ移動時のフェード(暗転)時間を
 * 何倍速にするか　(1.00でOFF)
 * @type number
 * @min 0.1
 * @max 24
 * @decimals 2
 * @default 1.00
 * 
 * @param DisableTitleFade
 * @desc ゲーム開始時タイトル画面を表示するための
 * フェードインをなくします。動作高速化
 * @type boolean
 * @default false
 * 
 * @param DisableNewgameFade
 * @desc ニューゲーム選択時の
 * フェードアウトをなくします。動作高速化
 * @type boolean
 * @default false
 * 
 * 
 * @param ………  Message   …………………………………………
 * @default ……………………………………………………………………………………
 * 
 * @param DisableMessageInterval
 * @desc メッセージの間に挟まる
 * 操作を受け付けない時間を減らします(10でOFF)
 * @type number
 * @min 0
 * @max 100
 * @default 10
 * 
 * @param WindowShiftSpeed
 * @desc ウィンドウの開閉速度を変更します
 * 倍率指定(1.00でOFF)
 * @type number
 * @min 0.1
 * @max 8
 * @decimals 2
 * @default 1.00
 * 
 * @param BaloonAnimationMultiple
 * @desc フキダシアイコンの表示速度を変更します
 * 倍率指定(1.00でOFF)
 * @type number
 * @min 0.1
 * @max 64
 * @decimals 2
 * @default 1.00
 * 
 * @param ………  InputTweak   …………………………………………
 * @default ……………………………………………………………………………………
 * 
 * @param DisableAltkey
 * @desc Controlキーと同じ動作に割り当てられている
 * Altキーの動作を無効化します。
 * @type boolean
 * @default false
 * 
 * @param KeyRepeatSpeed
 * @desc キー押しっぱなしの時の、連打速度を変更します
 * フレーム指定(6でOFF)
 * @type number
 * @min 1
 * @max 60
 * @default 6
 * 
 * @param ………  Choice fix  …………………………………………
 * @default ……………………………………………………………………………………
 * 
 * @param SideCursorCanPageUpDown
 * @desc 選択肢の左右キーにページ送り機能を追加します
 * @type boolean
 * @default false

 * @param FixChoiceCursorUp
 * @desc 選択肢デフォルトが[なし]の時、
 * カーソル上を押すと下から2番目が選択される問題を修正
 * @type boolean
 * @default false
 * 
 * 
 * @help
 * ゲームを高速化して快適性を増したり、
 * MVのバグを修正したりします。
 * 
 * -------高速化--------
 * 
 *     LoadFadeMultiple
 * セーブファイルをロードした時の暗転時間を調節できます。
 * プラグインパラメータ(LoadFadeMultiple)の数値に合わせて、暗転が速くなります。
 * 1倍未満の数値も入れられます。(遅くなります)
 * 48以上の値は意味ないかも。
 * 1.00以外の数値にすると
 * Scene_Load.prototype.onLoadSuccess
 * を上書きします。
 * 
 *     MapFadeMultiple
 * マップを移動した時の暗転時間を調節できます。
 * プラグインパラメータ(MapFadeMultiple)の数値に合わせて、暗転が速くなります。
 * 1倍未満の数値も入れられます。(遅くなります)
 * 24以上の値は意味ないかも。
 * 1.00以外の数値にすると
 * Scene_Map.prototype.fadeInForTransfer
 * Scene_Map.prototype.fadeOutForTransfer
 * を上書きします。
 * 
 *     DisableTitleFade
 * タイトル画面を表示する時の、フェードインをなくします。
 * 動作は高速化しますが、演出が犠牲になるかもしれません。
 * 
 *     DisableNewgameFade
 * ニューゲーム開始時の、フェードアウトをなくします。
 * 動作は高速化しますが、演出が犠牲になるかもしれません。
 * 
 * 
 *     DisableMessageInterval
 * ツクール標準仕様だと、メッセージウィンドウで文字が表示しきってから、
 * 10フレーム操作を受け付けないインターバルがあります。
 * このインターバルを数値変更します。
 * 値が0だとウェイトなし、
 * 10だと無効になります。
 * 
 *     WindowShiftSpeed
 * ウィンドウを開いたり閉じたりする速度倍率を変更します。
 * 8倍速で一瞬で開閉させられます。
 * 
 *     BaloonAnimationMultiple
 * フキダシアイコンの表示速度を変更します。
 * 標準で付与される12フレームのウェイトもカットしました。
 * 1.00以外の数値にすると
 * Sprite_Balloon.prototype.speed
 * Sprite_Balloon.prototype.waitTime
 * を上書きします
 * 
 * -------入力の快適化--------
 * 
 *     DisableAltkey
 * Ctrlキーでメッセージスキップ、
 * Altキーをスクリーンショットのホットキーに
 * 割り当てている場合などのために、
 * Altキーの役割をなくします。
 * trueにすると
 * Input.keyMapper[18]
 * を上書きします。
 * 
 *     KeyRepeatSpeed
 * ツクールMVは今までのツクールと違い、キーをしばらく押しっぱなしにすると
 * 連打する仕様になりました。
 * その時の連打速度を変更します。値が小さい方が速いです。
 * デフォルトの値である6以外にすると、
 * Input.keyRepeatInterval
 * TouchInput.keyRepeatInterval
 * を上書きします
 * 
 * -------本体の快適化・修正--------
 * 
 *     SideCursorCanPageUpDown
 * 選択肢を選んでいる時に、
 * 左右キーでもページ送りが出来たらと思ったことはありませんか？
 * この機能をオンにすると、
 * 左右キーにページ送りキーと同じ機能を追加できます。
 * trueにすると
 * Window_Selectable.prototype.cursorRight
 * Window_Selectable.prototype.cursorLeft
 * を上書きします。
 * 
 *     FixChoiceCursorUp
 * 選択肢のデフォルト設定が「なし」の時、
 * 選択肢を開いた後に上キーを押すと、
 * 最下部ではなく下から2番目の項目が選択される不具合を修正します。
 * 
 * 共存可能:
 * LoadComSim.js ver1.00
 * https://tm.lucky-duet.com/viewtopic.php?t=3085
 * 選択肢拡張 ver. 3.7
 * http://woodpenguin.web.fc2.com/MV_Plugin/MPP_ChoiceEX.html
 * 
 * ※コードレビュー歓迎します。
 * Please feel free to throw me Masakari!
 * 
 * Ver2.6.2 デフォルトのパラメータを全てOFFの値に設定。
 * Ver2.6.1 DisableMessageIntervalを数値変更するように
 * Ver2.6.0 KeyRepeatSpeedを追加。Descriptionをカテゴライズ
 * Ver2.5.0 Scene_Title.prototype.startの上書きをフックに改善
 *          DisableNewgameFadeを追加
 * Ver2.4.0 BaloonAnimationMultiple(フキダシアイコン表示速度変更)を追加
 * Ver2.3.1 レイアウトを調整
 * Ver2.3.0 MapFadeMultiple機能追加
 * Ver2.2.1 SideCursorCanPageUpDownが常にオンになってしまっていた。
 * Ver2.2.0 SideCursorCanPageUpDown(左右キーでページ送り)追加。
 * Ver2.1.0 WindowShiftSpeed(ウィンドウの開閉速度変更)追加、LoadFadeMultipleの数値が1.00の時は動作しないように。
 *          FadeMultiple　→ LoadFadeMultiple　に名前変更。プラグインパラメータを設定し直してください。
 * Ver2.0.0 タイトルフェードインなし、メッセージインターバルなし、Altキー無効化、選択肢fix機能追加
 * Ver1.0.1 ~~おまけ(タイトル画面の暗転省略)を追加。
 * 　　　　　コードを見てコメントアウトを外してください。~~
 * Ver1.0.0 配布
 * 
 */


(function() {
    'use strict';
// プラグインパラメータ設定
    var createPluginParameter = function(pluginName) {
        var paramReplacer = function(key, value) {
            if (value === 'null') {
                return value;
            }
            if (value[0] === '"' && value[value.length - 1] === '"') {
                return value;
            }
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        };
        var parameter     = JSON.parse(JSON.stringify(PluginManager.parameters(pluginName), paramReplacer));
        PluginManager.setParameters(pluginName, parameter);
        return parameter;
    };
    var param = createPluginParameter('Mihil_tweaks');

// ロード時のフェードアウト時間調整
    if(param.LoadFadeMultiple != 1){
        Scene_Load.prototype.fadeOutLoad = function() {
            var time = this.slowFadeSpeed() / 60;
            time /= param.LoadFadeMultiple
            AudioManager.fadeOutBgm(time);
            AudioManager.fadeOutBgs(time);
            AudioManager.fadeOutMe(time);
            this.startFadeOut(this.slowFadeSpeed() / param.LoadFadeMultiple);
        };
        
        Scene_Load.prototype.onLoadSuccess = function() {
            SoundManager.playLoad();
            this.fadeOutLoad();
            this.reloadMapIfUpdated();
            SceneManager.goto(Scene_Map);
            this._loadSuccess = true;
        };
    }    

// マップ移動時のフェード時間変更
    if(param.MapFadeMultiple != 1){
        Scene_Map.prototype.fadeInForTransfer = function() {
            var fadeType = $gamePlayer.fadeType();
            switch (fadeType) {
            case 0: case 1:
                const fadeSpeedMulti = this.fadeSpeed() / param.MapFadeMultiple
                this.startFadeIn(fadeSpeedMulti, fadeType === 1);
                break;
            }
        };
        Scene_Map.prototype.fadeOutForTransfer = function() {
            var fadeType = $gamePlayer.fadeType();
            switch (fadeType) {
            case 0: case 1:
                const fadeSpeedMulti = this.fadeSpeed() / param.MapFadeMultiple
                this.startFadeOut(fadeSpeedMulti, fadeType === 1);
                break;
            }
        };
    }
// タイトル画面フェードインなし
    if(param.DisableTitleFade){
        const _Scene_Title_start = Scene_Title.prototype.start
        Scene_Title.prototype.start = function() {
            _Scene_Title_start.apply(this, arguments)
            this._fadeDuration = 1
        };
    }

// ニューゲームフェードアウトなし

    if(param.DisableNewgameFade){
        const _Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame
        Scene_Title.prototype.commandNewGame = function() {
            _Scene_Title_commandNewGame.apply(this, arguments)
            this.startFadeOut(1)
        };
    }

// メッセージのインターバルをなくす
    if(param.DisableMessageInterval != 10){
        const _Window_Message_startPause = Window_Message.prototype.startPause
        Window_Message.prototype.startPause = function() {
            _Window_Message_startPause.call(this)
            this.startWait(param.DisableMessageInterval);
        };
    }

// ウィンドウの開閉速度
    if(param.WindowShiftSpeed != 1){
        const _Window_Base_updateOpen = Window_Base.prototype.updateOpen
        Window_Base.prototype.updateOpen = function() {
            _Window_Base_updateOpen.call(this)
            if (this._opening) {
                this.openness -=32
                this.openness += (32*param.WindowShiftSpeed)
            }
        }
        const _Window_Base_updateClose = Window_Base.prototype.updateClose
        Window_Base.prototype.updateClose = function() {
            _Window_Base_updateClose.call(this)
            if (this._closing) {
                this.openness += 32;
                this.openness -= (32*param.WindowShiftSpeed)
            }
        };
    }

// フキダシアイコンの表示速度
    if(param.BaloonAnimationMultiple != 1){
        Sprite_Balloon.prototype.speed = function() {
            return 8/param.BaloonAnimationMultiple
        };
        Sprite_Balloon.prototype.waitTime = function() {
            return 0
        };
        /*没
        const _Sprite_Balloon_setup = Sprite_Balloon.prototype.setup
        Sprite_Balloon.prototype.setup = function(balloonId) {
            _Sprite_Balloon_setup.call(this, arguments)
            this._duration = 8 * this.speed() / param.BaloonAnimationMultiple + this.waitTime()
        };
        Sprite_Balloon.prototype.frameIndex = function() {
            var index = (this._duration - this.waitTime()) / this.speed() / param.BaloonAnimationMultiple
            return 7 - Math.max(Math.floor(index), 0);
        };
        */
    }


// Altキーを無効化
    if(param.DisableAltkey){
        Input.keyMapper[18] = '';
    }

// キーリピートの速度変更
    if(param.KeyRepeatSpeed != 6){
        /**
         * The interval of the key repeat in frames.
         *
         * @static
         * @property keyRepeatInterval
         * @type Number
         */
        Input.keyRepeatInterval = param.KeyRepeatSpeed || 6;    /**
         * The interval of the pseudo key repeat in frames.
         *
         * @static
         * @property keyRepeatInterval
         * @type Number
         */
        TouchInput.keyRepeatInterval = param.KeyRepeatSpeed || 6;
    }



// 選択肢の左右キーにページ送り機能を追加する
if(param.SideCursorCanPageUpDown){
    Window_Selectable.prototype.cursorRight = function(wrap) {
        var index = this.index();
        var maxItems = this.maxItems();
        var maxCols = this.maxCols();
        if (maxCols >= 2 && (index < maxItems - 1 || (wrap && this.isHorizontal()))) {
            this.select((index + 1) % maxItems);
        } else if (maxCols <= 1 && this.topRow() + this.maxPageRows() < this.maxRows()) {
            this.setTopRow(this.topRow() + this.maxPageRows());
            this.select(Math.min(index + this.maxPageItems(), maxItems - 1));
        }
    };
    Window_Selectable.prototype.cursorLeft = function(wrap) {
        var index = this.index();
        var maxItems = this.maxItems();
        var maxCols = this.maxCols();
        if (maxCols >= 2 && (index > 0 || (wrap && this.isHorizontal()))) {
            this.select((index - 1 + maxItems) % maxItems);
        } else if (maxCols <= 1 && this.topRow() > 0) {
            this.setTopRow(this.topRow() - this.maxPageRows());
            this.select(Math.max(index - this.maxPageItems(), 0));
        }
    };
}

// 選択肢の修正
    if(param.FixChoiceCursorUp){
        var _Window_ChoiceList_cursorUp = Window_ChoiceList.prototype.cursorUp;
        Window_ChoiceList.prototype.cursorUp = function (wrap) {
            if (this.index() === -1 && $gameMessage.choiceDefaultType() === -1) {
                this.select(0);
            }
            _Window_ChoiceList_cursorUp.call(this, wrap);
        };
    }

})();
