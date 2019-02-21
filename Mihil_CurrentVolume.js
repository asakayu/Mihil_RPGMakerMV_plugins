//=============================================================================
// Mihil_CurrentVolume.js
//
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================
/*:
 * @plugindesc 今鳴っているBGMとBGSの音量を変更できます
 * 
 * @author uta_asakayu
 *
 * @help 既に鳴らしているBGMとBGSの音量を変更できます。
 * 
 * BGMの場合はエディタのスクリプトコマンドを開いて
 * AudioManager.currentBgmVolume = 変更したい音量
 * BGSの場合は
 * AudioManager.currentBgsVolume = 変更したい音量
 * 
 * に設定すれば即座に音量が切り替わります。
 * (+=や-=なども一応使えます)
 * また、コンソールにて何も代入せずに
 * AudioManager.currentBgmVolume
 * AudioManager.currentBgsVolume
 * と書くと現在の音量を取得できます。
 * 
 * 応用すれば
 * AudioManager.fadeInBgm(秒数)
 * と組み合わせたりもできるはずです。
 * 
 * 
 * 
 * ※コードレビュー歓迎しています。
 * Please feel free to throw me Masakari!
 * 
 * Ver1.1.1 this._currentBgm表記をまとめてすっきりさせた
 * Ver1.1.0 インデントを揃えた。
 *          音量を変更した後再びAudioManager.currentxxxVolumeすると
 *          音量が正しく表記されなかった
 * Ver1.0.0 配布
 */
//-----------------------------------------------------------------------------

AudioManager.changeCurrentBgmVolume = function(value){
    this._currentBgm.volume = value
}
AudioManager.changeCurrentBgsVolume = function(value){
    this._currentBgs.volume = value
}

Object.defineProperty(AudioManager, 'currentBgmVolume', {
    get: function() {
        return this._currentBgm.volume;
    },
    set: function(value) {
        this.changeCurrentBgmVolume(value)
        this.updateBgmParameters(this._currentBgm);
    },
    configurable: true
});
Object.defineProperty(AudioManager, 'currentBgsVolume', {
    get: function() {
        return this._currentBgs.volume;
    },
    set: function(value) {
        this.changeCurrentBgsVolume(value)
        this.updateBgsParameters(this._currentBgm);
    },
    configurable: true
});