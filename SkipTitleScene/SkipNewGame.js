//=============================================================================
// SkipNewGame.js
//
//=============================================================================
/*:
 * @plugindesc ニューゲーム時タイトル画面省略
 * @author uta_asakayu
 * @thanks aebafuti
 * @help
 * セーブデータがない場合、即座にニューゲームを始めます
 * セーブデータがある場合は通常通りタイトル画面を呼び出します。
 * 
 * トリアコンタンさんのAutoLoad.jsを参考にしました。
 * 
 * ※コードレビュー歓迎します。
 * Please feel free to throw me Masakari!
 * 
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
    if(!DataManager.isAnySavefileExists()){
        SceneManager.goto(Scene_Map);
    }
}

})();