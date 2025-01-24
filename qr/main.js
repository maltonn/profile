const size=Math.min(window.innerWidth,window.innerHeight-250)*0.9;
var qrcode = new QRCode("output",{width:size,height:size});
// document.getElementById('btn').addEventListener('click', () => {
//     qrcode.clear();
//     qrcode.makeCode(document.getElementById('text').value.trim());
// })

document.getElementById('text').addEventListener('input', () => {
    qrcode.clear();
    qrcode.makeCode(document.getElementById('text').value.trim());
})