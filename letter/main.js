
function randInt(max) {
  return Math.floor(Math.random() * max);
}
setTimeout(()=>{
  document.getElementById('loader').style.display="none"
  callback()
},1000)

function callback() {
  honbun='　こんにちは。ここ最近一層冷え込んできましたが、お元気ですか。\n 以前からの願望であった「ＱＲコードを手書きする」をようやくかなえることができました。無事読み込めるかが心配だったのですが、この文章が読めているということは大丈夫そうですね。\n　さて、この手紙の目的はこの画面が表示された時点で達成されました。\n\n　では、またお会いできることを楽しみにしています。'
  F = (i) => {
    document.getElementById('kakidashi').innerText = honbun.slice(0, i);
    if (i < honbun.length) {
      setTimeout(() => { F(i + 1) }, 50);
    } else {
      setTimeout(() => {
        // document.getElementById('credit').style.opacity = 1;
      }, 500);
    }
  }
  F(0)
}

// document.getElementById('credit').addEventListener('click', () => {
//   document.getElementById('ink').classList.add('active');  
// })

document.getElementById('xbtn').addEventListener('click', () => {
  document.getElementById('ink').classList.remove('active');
})
