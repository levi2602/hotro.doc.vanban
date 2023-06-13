const giong = new SpeechSynthesisUtterance
var dung = true

function phat_dung() {
    if (dung) {
        speechSynthesis.pause();
        console.log('paused')
        document.getElementById('paus').value = 'Tiếp tục'
        dung = false
    } else {
        speechSynthesis.resume();
        console.log('resume')
        document.getElementById('paus').value = 'Tạm dừng'
        dung = true
    }

}

function onButtonClick() {
    var noidung = document.getElementById('vanban').value;
    var speed = document.getElementById('speed').value;
    var lan = document.getElementById('re').value;
    giong.text = (noidung + ' ').repeat(lan)
    giong.pitch = 0;
    giong.rate = speed;
    speechSynthesis.resume;
    speechSynthesis.speak(giong);
}

function cancel() {
    speechSynthesis.cancel();
    console.log('canceled')
}
