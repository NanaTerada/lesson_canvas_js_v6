'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');

    //    ctx.ellipse(x,y,rx,ry,rotation,start,end);
    //    ctx.ellipse(始点のx,y座標,それぞれの半径rx,ry,回転角度rotation,始点の角度start,終点の角度end);

    //ctx.ellipse(100,100,50,30,0,0,2* Math.PI);
    ctx.rect(50,50,50,50);
    ctx.stroke();
    }
    draw();
    
}