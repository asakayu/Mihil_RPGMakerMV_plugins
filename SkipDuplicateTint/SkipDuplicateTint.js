//=============================================================================
// SkipDuplicateTint.js
//
//=============================================================================
/*:
 * @plugindesc 『画面の色調変更』重複スキップ
 * @author uta_asakayu
 * @help
 * 『画面の色調変更』時に、既に画面が同じ色調だった場合、処理をスキップします。
 * 
 * ※コードレビュー歓迎します。
 * Please feel free to throw me Masakari!
*/



(function(){

// Tint Screen
const _Game_Interpreter_command223 = Game_Interpreter.prototype.command223
Game_Interpreter.prototype.command223 = function() {
    if(this._params[0].toString() === $gameScreen._tone.toString()){
        return true
    }
    _Game_Interpreter_command223.call(this)
};

const _Game_Screen_startTint = Game_Screen.prototype.startTint
Game_Screen.prototype.startTint = function(tone, duration) {
    if(tone.toString() === this._tone.toString()){
        return 
    }
    _Game_Screen_startTint.call(this, tone, duration)
};

})();