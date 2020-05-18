'use strict';

{
    function draw() {
        const canvas = document.querySelector('canvas'); //canvas要素を取得して定数にいれる
        if (typeof canvas.getContext === 'undefined') { //ブラウザがcanvasをサポートしていなかったら処理を終了
            return;
        }
        const ctx = canvas.getContext('2d');
    //ctx.createLinearGradient(x0,y0,x1,x1);  
    //const g = ctx.createLinearGradient(0,0,canvas.width,0); //0　始点　1終点

     const g = ctx.createRadialGradient(
         canvas.width / 2, canvas.height /2,50,
         canvas.width / 2 + 100, canvas.height /2 +200, 500
     );
    //  const g = ctx.createRadialGradient(
    //     x0,y0,r0,
    //     x1,y1,r1
    // );

    

       g.addColorStop(0,'#f00');
    //    g.addColorStop(0.3,'#0F0');
       g.addColorStop(0.1,'#0F0');
       g.addColorStop(1,'#00F');

       ctx.fillStyle =g;
       ctx.fillRect(0,0,canvas.width,canvas.height);
    }
    draw();
    
}