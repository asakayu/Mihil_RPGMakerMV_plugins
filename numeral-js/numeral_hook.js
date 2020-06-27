/*:
 * @plugindesc numeral.jsにメソッドを追加
 * @help 
 * https://github.com/adamwdraper/Numeral-js
 * numeral.jsにいくつかのメソッドを追加します。
 * エイリアスとしてplus, minus, sub, mult, divを
 * 複数の引数を入れて一度に計算できるadds, subs, mults, divsを
 * それぞれ追加しました。
 * 
 * 例:
 * numeral(0.3).sub(0.1).value()// => 0.3
 * //== numeral(0.3).subtract(0.1).value()
 * numeral(0.1).adds(0.2, 0.3, 0.4, 0.5).value()// => 1.5
 * 
 * @parent_version : 2.0.6
 * @version 1.0.0 distribute
 * @author : Mihiraghi
 * @license : MIT
 */


Object.assign(numeral.fn, {
    plus: function(value){ return this.add(value) },
    adds: function(...values){
        for(const value of values){
            this.add(value)
        }
        return this;
    },
    sub: function(value){ return this.subtract(value) },
    minus: function(value){ return this.subtract(value) },
    subs: function(...values){
        for(const value of values){
            this.subtract(value)
        }
        return this;
    },
    mult: function(value){ return this.multiply(value) },
    mults: function(...values){
        for(const value of values){
            this.multiply(value)
        }
        return this;
    },
    div: function(value){ return this.divide(value) },
    divs: function(...values){
        for(const value of values){
            this.divide(value)
        }
        return this;
    }
})