//=============================================================================
// TitleSceneIsGone.js
//
//=============================================================================
// Copyright (c) 2018-2019 uta_asakayu
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
/*:
 * @plugindesc タイトル画面省略
 * @author uta_asakayu
 * @thanks aebafuti
 * @help
 * タイトル画面の読み込みをなくし、
 * セーブデータがない場合はニューゲーム、
 * セーブデータがある場合はロード画面を即座に呼び出します。
 * 
 * ※コードレビュー歓迎します。
 * Please feel free to throw me Masakari!
 * 
 * 類似プラグイン
 * 
 * 自動ロードプラグイン
 * https://tm.lucky-duet.com/viewtopic.php?t=1942
 * 
 * 自動ニューゲーム
 * https://hikimoki.sakura.ne.jp/index.php?article=plugin_system
 * 
 * 
*/



(function(){



var _Scene_Boot_start      = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    _Scene_Boot_start.apply(this, arguments);
    if (!DataManager.isBattleTest() && !DataManager.isEventTest() && typeof Scene_Splash === 'undefined') {
        this.checkGoToLoad()
    }
};

Scene_Boot.prototype.checkGoToLoad = function(){
    if(DataManager.isAnySavefileExists()){
        SceneManager.goto(Scene_Load_Title);
    } else {
        SceneManager.goto(Scene_Map);
    }
}

//タイトルでのロード用の子クラスを作成
function Scene_Load_Title() {
    this.initialize.apply(this, arguments);
}

Scene_Load_Title.prototype = Object.create(Scene_Load.prototype);
Scene_Load_Title.prototype.constructor = Scene_Load_Title;

Scene_Load_Title.prototype.initialize = function() {
    Scene_Load.prototype.initialize.call(this);
};

Scene_Load_Title.prototype.createListWindow = function() {
    Scene_Load.prototype.createListWindow.call(this);
    this._listWindow.setHandler('cancel', '');
};


})();