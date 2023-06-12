function textaudiofile(text) {
    document.getElementById('voice_src').setAttribute('src', text)
}

function onButtonClick() {
    var vanban = document.getElementById('vanban').value
    var link = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q={' + vanban + '}&tl=vi&speed=0.5'
    textaudiofile(link)
    document.getElementById('voice_ctr').removeAttribute('hidden')
}