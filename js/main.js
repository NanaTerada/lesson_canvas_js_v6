'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');
        
        const img = document.createElement('img');
        img.src ='img/logo.png';

        img.addEventListener('load', () =>{
            // ctx.drawImage(img,0,0);
            //ctx.drawImage(img,0,0,40,40); サイズ設定できる
            // const pattern = ctx.createPattern(img,'repeat');
            // repeat-x 横方向のみ繰り返し repeat-y　縦方向のみ繰り返し
            const pattern = ctx.createPattern(img,'repeat-y');
            ctx.fillStyle = pattern;
            ctx.fillRect(0,0,canvas.width,canvas.height);
        });


    }

    draw();
}