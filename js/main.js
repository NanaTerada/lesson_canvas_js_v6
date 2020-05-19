'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.ellipse(100,100,40,30,0,0,2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(80,100,8,8,0,0,2 * Math.PI);
        ctx.ellipse(120,100,8,8,0,0,2 * Math.PI);
        ctx.fillStyle = 'skyblue';
        ctx.fill();

        ctx.scale(0.5,0.5); //それ以降半分の位置に描画される

        ctx.beginPath();
        ctx.ellipse(100,100,40,30,0,0,2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(80,100,8,8,0,0,2 * Math.PI);
        ctx.ellipse(120,100,8,8,0,0,2 * Math.PI);
        ctx.fillStyle = 'skyblue';
        ctx.fill();
    }

    draw();
}