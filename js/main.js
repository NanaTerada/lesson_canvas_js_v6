'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');
        
        const img = document.createElement('img');
        img.src ='img/sprite.png';

        img.addEventListener('load', () =>{
        //    ctx.drawImage(img,0,0);
        ctx.drawImage(
            img,
            //切り出し元の画像のｘｙ座標　sx　sy 高さ　幅　sw sh
            //描画する位置　dx　dy　dw dh　ディスティネーション
            70 * 2, 70 ,70 , 70,
            0,0,35,35

        );
        });


    }

    draw();
}