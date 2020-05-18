'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d'); //ctx =　コンテクスト 絵筆のようなもの。。。？
        //ctx.fillRect(x,y,width,height); 
        //ctx.fillRect(50,50,50,50); 塗りつぶされた四角
        ctx.strokeRect(50,50,50,50);　//わくだけの四角
    }

    draw();
}