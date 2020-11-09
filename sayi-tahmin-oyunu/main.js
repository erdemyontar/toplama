/**
 * Abdullah Arik
 * @abdullaharik
 * 8 Kasım 2020
 *
 * Erdem'le birlikte
 */

const enAz = 50
const enFazla = 100

/**
 * 0 * 20 + 1 = 1
 * 0.5 * 20 + 1 = 11
 * 0.7 * 14 + 1 = 15
 * 0.7204738363529 * 14 + 1 = 15.2385504736 > 15
 */
const sayi = Math.floor(Math.random() * enFazla + enAz)

const aciklama = document.getElementById('aciklama').innerHTML = `${enAz} ile ${enFazla} arasındaki sayıyı tahmin edin.`

const tahmin = document.getElementById('tahmin')
const tahminler = document.getElementById('tahminler')

const tahminEt = document.getElementById('tahminEt').addEventListener('click', hesapla)



function hesapla(e) {
  e.preventDefault()

  /**
   * TRUE : FALSE
   *
   * FALSE olan değerler
   * 0 - Sıfır
   * "" - Boş yazı değeri
   *
   * TRUE
   * 1 ve daha büyük sayılar
   * boş olmayan bütün yazılar
   */

  if (! tahmin.value) {
    alert('Lütfen bir sayı yazınız...')
    return
  }

  if (sayi == tahmin.value) {
    tahminler.innerHTML += `<li>${tahmin.value} : Bildiniz</li>`
  }

  if ( sayi > tahmin.value) {
    tahminler.innerHTML += `<li>${tahmin.value} : Daha büyük bir sayı</li>`
  }

  if ( sayi < tahmin.value) {
    tahminler.innerHTML += `<li>${tahmin.value} : Daha küçük bir sayı</li>`
  }
}


