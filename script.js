// sample dynamic rendering and simple mobile menu
const sampleNews = [
  {id:1, title:"Protes Operasi Kapal Cepat Cantika 88, Motoris Speedboat Ternate-Jailolo Siap Aksi di Tengah Laut", img:"https://picsum.photos/800/500?random=21", excerpt:"Motoris menyatakan aksi protes terhadap jadwal dan keselamatan penumpang."},
  {id:2, title:"Kuota Calon Jemaah Haji 2026 Ternate 568, Berikut Daftar Nama...", img:"https://picsum.photos/800/500?random=22", excerpt:"Panitia Haji kota umumkan pengumuman resmi kuota 2026."},
  {id:3, title:"Pasar Ikan Modern Akan Dibangun, Nelayan Khawatir", img:"https://picsum.photos/800/500?random=23", excerpt:"Nelayan lokal meminta keterlibatan masyarakat dalam perencanaan."},
  {id:4, title:"Dampak Cuaca Ekstrem terhadap Jadwal Pelayaran", img:"https://picsum.photos/800/500?random=24", excerpt:"BMKG keluarkan peringatan untuk rute utara."},
  {id:5, title:"UMKM Lokal Naik Kelas Berkat Program Pelatihan", img:"https://picsum.photos/800/500?random=25", excerpt:"Pelatihan digital marketing dorong penjualan online."},
  {id:6, title:"Festival Budaya Daerah: Pengunjung Membludak", img:"https://picsum.photos/800/500?random=26", excerpt:"Acara tahunan sukses tarik wisatawan domestik."}
];

const newsGrid = document.getElementById('newsGrid');
let page = 0;
const pageSize = 3;

function renderPage(){
  const start = page * pageSize;
  const slice = sampleNews.slice(start, start+pageSize);
  slice.forEach(item => {
    const el = document.createElement('article');
    el.className = 'news-item';
    el.innerHTML = `
      <img src="${item.img}" alt="">
      <div class="news-body">
        <h4>${item.title}</h4>
        <p>${item.excerpt}</p>
      </div>
    `;
    newsGrid.appendChild(el);
  });
  page++;
  // hide load more if no more
  if(page * pageSize >= sampleNews.length){
    document.getElementById('loadMore').style.display = 'none';
  }
}

// initial render
renderPage();

// load more
document.getElementById('loadMore').addEventListener('click', renderPage);

// menu toggle
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// subscribe (demo)
document.getElementById('subscribeForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Terima kasih! Email Anda telah diterima (demo).');
});

// current year
document.getElementById('year').textContent = new Date().getFullYear();
