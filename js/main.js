'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'pink';
        ctx.fillRect(0,0,200,200);

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
        ctx.translate(400,0);
        ctx.rotate(45 / 180 *Math.PI);

        ctx.fillStyle = 'olive';
        ctx.fillRect(0,0,200,200);

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