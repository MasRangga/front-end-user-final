function Faqs() {

  return (
    <div className="lg:px-20 px-10 py-10 ">
      <div>
        <h1
          className="text-4xl font-bold text-center"
          style={{ color: "#009781" }}
        >
          Frequently Asked Questions
        </h1>
      </div>

      <div className="join join-vertical w-full py-4">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Apakah KlinikEgo gratis?
          </div>
          <div className="collapse-content">
            <p>
              Kamu dapat dengan bebas mengakses seluruh informasi kesehatan yang
              terdapat di KlinikEgo kapanpun dan dimanapun
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Berapa tarif untuk berkonsultasi dengan dokter?
          </div>
          <div className="collapse-content">
            <p>
              Di Klinik Ego, kami memberikan fleksibilitas kepada Anda untuk
              memilih paket pemeriksaan kesehatan yang sesuai dengan kebutuhan
              dan preferensi Anda.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Bagaimana cara membuat reservasi dokter?
          </div>
          <div className="collapse-content">
            <p>
              Kamu dapat melakukannya dengan mudah, dengan cara : Buka Halaman
              utama KlinikEgo, Pilih Rekomendasi dokter yang tersedia, Tentukan
              tanggal dan jam konsultasi, Pilih metode konsultasi, dan Pilih
              metode pembayaran.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Apakah saya akan mendapatkan obat?
          </div>
          <div className="collapse-content">
            <p>
              Tentu Setelah Anda berhasil melakukan konsultasi di Klinik Ego,
              Anda tidak hanya menjamin pelayanan medis terbaik, tetapi juga
              mendapatkan kemudahan mendapatkan resep dan obat yang Anda
              butuhkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs