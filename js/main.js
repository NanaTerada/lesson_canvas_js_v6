'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0,100);
    ctx.lineTo(canvas.width,100);
    ctx.moveTo(100,0);
    ctx.lineTo(100,canvas.height);
    ctx.stroke();

    ctx.font = 'bold 64px Verdana';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';

    // ctx.fillText('Tokyo',100,100);
    // ctx.fillText('Tokyo',100,100,100); 最大幅を設定できる
    ctx.strokeText('Tokyo',100,100,100); //わくだけ
    }

    draw();
}