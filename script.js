const btnPlay = document.querySelector('#button .mulai')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege2P = document.querySelector('.messege-box2 .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const nama = document.querySelectorAll('.nama h2')[0]
const nama1 = document.querySelectorAll('.nama h2')[1]
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`

// Dirubah 
const pengirim = "Admin Pandhill";
const nomorWa = "6281229807496" // awalan nomor 0 harus di awalin 62
const textWa = "Gass lurr, aku ngikut wae"
const pesan = `Woi lurr, info futsal meh dino opo`;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Hari";
  nama1.innerHTML = "Nama Hari";
}

btnPlay.addEventListener('click', () => {
  audio.play()
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)"
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
})

hilang1.addEventListener('click', () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)"
  hilang1.style.display = "none"
  hilang2.style.display = "block"
  Swal.fire({
    imageUrl: "stiker_bola.gif",
    imageHeight: 120,
    title: 'Woi lurr, info futsal meh dino opo ?',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Nama Hari">`,
    confirmButtonText: 'Kirim',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      if (!login) {
        Swal.showValidationMessage(`Masukin Nama Kamu Dong, Aku Mau Kenalan :(`)
      }
      return { login }
    }
  }).then((result) => {
    let i = 0;
    const speed = 50;
    const namaAwal = result.value.login.charAt(0)
    let txt = `Hmm, yws nek meh ${result.value.login}, klik bawah iki nggo persetujuan`;

    const typeWriter = () => {
      if (i < txt.length) {
        messege2P.innerHTML += txt.charAt(i);
        i++;
        messege2.classList.remove('kelip')
        hilang2.style.display = "none"
        setTimeout(typeWriter, speed)
      } else {
        messege2.classList.add('kelip')
        body.classList.replace('background1', 'background2')
        body.classList.add('muncul')
        hilang2.style.display = "block"
      }
    }
    typeWriter()


  })
})

hilang2.addEventListener('click', () => {
  window.open(`https://wa.me/${nomorWa}/?text=${textWa}`, '_blank')
})

