//=============================================================================
// Mihil_ErasePictures.js
//=============================================================================
// Copyright (c) 2018- Mihiraghi
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
/*:
 * @plugindesc 複数のピクチャを一気に消去します
 * @author Mihiraghi
 * @target MZ
 * 
 * @help $gameScreen.erasePicturesExcludes(残すピクチャID)
 * で括弧の中に入れたIDのピクチャを残して、他を全て消去します。
 * $gameScreen.erasePicturesExcludes(1,2,3)
 * だとピクチャID1,2,3のピクチャだけが画面に残ります。
 * 
 * $gameScreen.erasePicturesIncludes(消去するピクチャID)
 * で括弧の中に入れたIDのピクチャを消去します。
 * $gameScreen.erasePicturesIncludes(1,3,9)
 * だとピクチャID1,3,9のピクチャだけが消えます。
 * 
 * Ver1.0.0 配布
 * 
 */


(function() {
    'use strict';

    Game_Screen.prototype.erasePicturesIncludes = function(...includesIDs){
        includesIDs = includesIDs.map(id => this.realPictureId(id))
        this._pictures = this._pictures.map((picture,index) => (
            includesIDs.includes(index) ? null : picture
        ))
        // console.log(includesIDs, this._pictures)
    }
    
    Game_Screen.prototype.erasePicturesExcludes = function(...excludesIDs){
        excludesIDs = excludesIDs.map(id => this.realPictureId(id))
        this._pictures = this._pictures.map((picture,index) => (
            excludesIDs.includes(index) ? picture : null
        ))
        // console.log(excludesIDs, this._pictures)
    }
    
})();

