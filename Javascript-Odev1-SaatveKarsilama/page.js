let name = prompt("İsminiz Nedir?") // --> Kullanıcıdan isim bilgisi alindi. 
let userName = document.querySelector("#userName") // --> İsim bilgisinin yazilacagi yer secildi, değişkeni olusturuldu
userName.innerHTML = ` Merhaba ${name}, Hoşgeldiniz!` // --> isim bilgisi yazdirildi 

var date = new Date().toLocaleString('tr-TR'); // --> saat bilgissi alindi
document.querySelector("#clock").innerHTML = date; // --> saat bilgisi id'si clock olan elemente yazıldı

