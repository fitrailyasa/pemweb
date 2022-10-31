// 3. Events Handler (onClick di HTML)
function tombol() {
    // 1. Membuat Teks (Manipulasi Element)
    const judul = document.getElementById('judul'); // Deklarasi Variabel 
    judul.innerHTML = 'CURRICULUM VITAE'; // innerHTML

    const cv = document.getElementById('cv');
    cv.innerHTML = '<table border="10" align="center"> <tr> <td> <img src="https://yt3.ggpht.com/D5g9ir1FXpLc8dVWx2g4GVp3brkW4uP_0b6mPlYxldZHhgJyUHPZjHHyDGIskRf9IH2lJVNBvQ=s88-c-k-c0x00ffffff-no-rj-mo" alt=""> <h1>Fitra Ilyasa</h1> <h3>Web Developer</h3> <br> <nav> <a href="#tentang-saya">Tentang Saya</a> <a href="#pengalaman-kerja">Pengalaman Kerja</a> <a href="#hubungi-saya">Hubungi Saya</a> </nav> <br> <h2 id="tentang-saya">Tentang Saya</h2> <p>Biasa dipanggil Fitra, saya mahasiswa Institut Teknologi Sumatera (ITERA). Saya mengambil jurusan Teknik Informatika dan sekarang saya fokus pada Pengembangan Web dengan pengalaman lebih dari 3 tahun.</p> <iframe src="https://www.youtube.com/embed/44hpivr7Jls"></iframe> <br><br> <h2 id="pengalaman-kerja">Pengalaman Kerja</h2> <table border="1"> <tr> <th rowspan="3">No</th> <th rowspan="3">Posisi</th> <th rowspan="3">Perusahaan</th> <tr> <th colspan="2">waktu</th> </tr> <tr> <th>mulai</th> <th>selesai</th> </tr> </tr> <tr> <td>1</td> <td>CEO</td> <td>Droidcode</td> <td>123</td> <td>456</td> </tr> <tr> <td>2</td> <td>CTO</td> <td>Google</td> <td>456</td> <td>789</td> </tr> </table><br> <form action="#"> <h2 id="hubungi-saya">Hubungi Saya</h2> <p> <label for="nama">Nama :</label> <input type="text" id="nama" name="nama"> </p> <p> <label for="tanya">sudah nonton film saya?</label> <br> <input type="radio" id="tanya" name="tanya">sudah <br> <input type="radio" id="tanya" name="tanya">belum <br> </p> <input type="checkbox"> ini <br> <input type="checkbox"> itu <br> <input type="checkbox"> anu <br> <button type="submit">Kirim</button> </form> </td> </tr> </table>';

    // 2. Membuat Element (Manipulasi Node)
    const div = document.createElement('p'); // Deklarasi Variabel untuk membuat elements
    const teksDiv = document.createTextNode('Terimakasih!'); // Deklarasi Variabel untuk mengisi teks

    div.appendChild(teksDiv); // Fungsi untuk memasukkan isi teks kedalam element yg telah dibuat

    const cetak = document.getElementById('body'); // Deklarasi Variabel untuk mencetak element yg telah dibuat

    cetak.appendChild(div); // Fungsi untuk mencetak element yg telah dibuat
}
