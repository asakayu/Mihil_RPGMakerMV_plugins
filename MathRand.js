//=============================================================================
// MathRand.js
//=============================================================================
// Copyright (c) 2018-2019 uta_asakayu
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
/*:
 * @plugindesc 乱数を発生させるグローバル関数を追加します
 * @author uta_asakayu
 * @thanks plasma, @TsumioNtGame
 * 
 * @help
 * 乱数を発生させるグローバル関数、
 * Math.rand()と、
 * 確率を計算できるグローバル関数、
 * Math.randper()
 * を追加します。
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
 * Math.randper(weight, max)の形式で入力します。
 * maxは省略可能です。その場合maxは100になります。
 * 条件分岐にMath.randper(33)と入力すると
 * 33%の確率でtrueを返してくれます。
 * Math.randper(33,200)だと
 * 33/200の確率でtrueを返してくれます。
 * 
 * エディタの「条件分岐」コマンドでも使えたりして便利です。
 * https://i.imgur.com/9Ji7iXX.png
 * 
 * ※コードレビュー歓迎します。
 * Please feel free to throw me Masakari!
 * 
 * Ver2.1.1 誤字修正
 * Ver2.1.0 try-catchのエラー判定を関数化。スタックトレースも出るように
 * Ver2.0.0 Math.randper()を追加
 *          エラーの可能性にも対応
 * Ver1.0.1 Remove punkt from filename.
 * Ver1.0.0 配布
 * 
 */


/**
 * Generates a random integer in the range (0, max-1).
 *
 * @static
 * @method Math.rand
 * @param {Number} max The upper boundary
 * @param {Number} min The lower boundary (excluded)
 * @return {Number} random min to max
 */
Math.rand = function(min, max) {// 1未満の少数は1に切り上げ
    function tryCatchAlert(errorMessage){
        try {
            throw new Error(errorMessage)
        } catch (e) {
            console.error(e)
            alert(e.message)
        }
    }
   const funcName = 'Math.rand'
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
    if(!Number.isFinite(max)){
        tryCatchAlert(`${funcName}関数の引数maxが数値でありません！`)
    }    
    if(!Number.isFinite(min)){
        tryCatchAlert(`${funcName}関数の引数minが数値でありません！`)
    }    
    //console.log(`Math.rand min=${min}, max=${max}`)
    return Math.floor( Math.random() * ( Number(max)+1-Number(min) ) +Number(min) )
};

/**
 * Probability calculation on weight/max percent.
 *
 * @static
 * @method Math.randper
 * @param {Number} weight The numerator of probability
 * @param {Number} max The denominator of probability (excluded)
 * @return {Number} Probability calculation on weight/max percent
 */
Math.randper = function(weight, max){// maxは省略可能
    function tryCatchAlert(errorMessage){
        try {
            throw new Error(errorMessage)
        } catch (e) {
            console.error(e)
            alert(e.message)
        }
    }
    const funcName = 'Math.randper'
    max = max || 100
    const min = 1
    if(!Number.isFinite(max)){
        tryCatchAlert(`${funcName}関数の第二引数(${max})が数値でありません！`)
    }
    if(!Number.isFinite(weight)){
        tryCatchAlert(`${funcName}関数の第一引数(${weight})が数値でありません！`)
    }
    const rand = Math.floor( Math.random() * ( Number(max)+1-Number(min) ) ) +Number(min)
        return rand <= weight
}