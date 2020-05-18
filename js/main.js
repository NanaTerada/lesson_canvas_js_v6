'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(100,50);
        ctx.lineTo(200,50);
        ctx.setLineDash([5,10]); 
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100,100);
        ctx.lineTo(200,100);
        ctx.setLineDash([]); //点線やめるには空の配列を渡さなきゃ
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100,150);
        ctx.lineTo(200,150);
        ctx.lineWidth = 16 ;
        ctx.lineCap = 'round'; //先端の形
        ctx.stroke();
    }
    draw();
    
}