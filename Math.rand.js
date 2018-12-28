//=============================================================================
// Math.rand.js
//=============================================================================
/*:
 * @plugindesc 乱数を発生させるグローバル関数を追加します
 * @author uta_asakayu
 * 
 * @help
 * 乱数を発生させるグローバル関数、
 * Math.rand()を追加します。
 * 
 * Math.rand(min,max)の形式で入力します。
 * ・Math.rand(max,min)と入れても計算してくれます。
 * ・Math.rand(max)と入れると0からmaxまでの
 * 　乱数で計算してくれます。
 * ・1未満の小数は1に切り上げられます。
 * ・なのでこの関数では小数に対応していません。
 * ・利便性を考えてありがちな名前なので、
 * 　他プラグインとの競合にご注意ください。
 * 
 * ※コードレビュー歓迎します。
 * Please feel free to throw me Masakari!
 * 
 * Ver1.0.0 配布
 * 
 */


/**
 * Generates a random integer in the range (0, max-1).
 *
 * @static
 * @method Math.rand
 * @param {Number} max The upper boundary (excluded)
 * @param {Number} min The lower boundary (excluded)
 * @return {Number} random min to max
 */
Math.rand = function(min, max) {// 1未満の少数は1に切り上げ
    min = min || 0
    max = max || 0
    if(min>0 && min<1){
        min = 1
    }
    if(max>0 && max<1){
        max = 1
    }
    if(min > max){
        return Math.rand(max, min)
    }
    //console.log(`Math.rand min=${min}, max=${max}`)
    return Math.floor( Math.random() * ( Number(max)+1-Number(min) ) +Number(min) )
};