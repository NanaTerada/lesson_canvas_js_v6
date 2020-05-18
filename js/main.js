'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        //ctx.arc(x,y,r,start,end);
        // ctx.arc(100,100,50,0, 300 /180 * Math.PI);
        ctx.moveTo(100,100); //始点を円の中心にする
        ctx.arc(100,100,50,0, 300 /180 * Math.PI,true);
        //ctx.stroke();
        ctx.fill();
       
    }
    draw();
    
}