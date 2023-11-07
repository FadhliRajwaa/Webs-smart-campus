alert("Halo Ini Website Fadhli");

//Prompt (Inputan Untuk User)
const namaAnda = prompt("Masukkan Nama Anda");
alert(`Halo ${namaAnda} ,Selamat Belajar Dan Semangatt !!!`);

//Confirm  (Opsion Boolean True/False Atau Ya/Tidak)
alasanAnda = confirm(
  "Jangan Cuman Bisa Copas Ya Minimal Donasi ke abang Fadhli hehe :v"
);
if (alasanAnda) {
  alasanAnda = prompt(
    "Website Ini Dibuat Menggunakan Bootstrap, Apakah Anda Mau Lanjut"
  );
  alert(
    `Jika Anda Mau Lanjut, Bisa Langsung Buka Bootstrap dan pelajari Dokumentasinya`
  );
} else {
  alert("Jangan Males-Males Ya Kawan :) ");
}

// Mendapatkan referensi ke tombol "scroll-button"
const scrollButton = document.getElementById("scroll-button");

// Menambahkan event listener untuk menangani klik pada tombol
scrollButton.addEventListener("click", function () {
  // Mendapatkan elemen tujuan yang ingin di-scroll
  const formElement = document.getElementById("form");

  // Menjalankan perintah scrollIntoView untuk menggulirkan elemen tujuan ke dalam tampilan
  formElement.scrollIntoView({ behavior: "smooth" });
});

