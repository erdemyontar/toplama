const aciklama = document.getElementById('aciklama').innerHTML = `İstediğiniz sayıları kutuya girip 'TOPLA' butonuna basınız.`
const TOPLA = document.getElementById('TOPLA')
document.getElementById('ilkSayi')
function topla(){
    var ilkSayi = document.getElementById(ilkSayi).value;
    var ikinciSayi = document.getElementById(ikinciSayi).value;
    var toplam = ilkSayi + ikinciSayi;
    document.getElementById('ileti').innerText = toplam;
}
