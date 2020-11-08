

const enAz = 1
const enFazla = 20

/**
 * 0 * 20 + 1 = 1
 * 0.5 * 20 + 1 = 11
 * 0.7 * 14 + 1 = 15
 * 0.7204738363529 * 14 + 1 = 15.2385504736 > 15
 */
const sayi = Math.floor(Math.random() * 20 + 1)

const tahminler = document.getElementById('tahminler')

const hesapla = function () {
  const tahmin = document.getElementById('tahmin').value

  if (sayi == tahmin) {
    tahminler.innerHTML += `<li>${tahmin} : Bildiniz</li>`
  }

  if ( sayi > tahmin) {
    tahminler.innerHTML += `<li>${tahmin} : Daha büyük bir sayı</li>`
  }

  if ( sayi < tahmin) {
    tahminler.innerHTML += `<li>${tahmin} : Daha küçük bir sayı</li>`
  }
}

const tahminEt = document.getElementById('tahminEt').addEventListener('click', hesapla)

