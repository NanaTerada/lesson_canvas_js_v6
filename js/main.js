'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');

        ctx.beginPath();　//パスはじめる
        ctx.moveTo(50,50);　//パスの始点を移動させる
        ctx.lineTo(100,50);　//どこまで（どこに向かって？）線をひくか　（横,縦）
        ctx.lineTo(100,100);　//もういっぽんひく
        ctx.closePath(); //パスとじる line To　使ってもええけどこっちのが簡単にとじれる
        ctx.stroke();　//線をひく
        ctx.fill(); //中を塗りつぶす

        
  
    }
    draw();
    
}