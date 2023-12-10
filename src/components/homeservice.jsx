import React from "react";
import reservasi from "../assets/reservasi-doc.svg";
import dokterprof from "../assets/dokterprof.svg";
import faq from "../assets/faqs-doc.svg";

function HomeService() {
  return (
    <>
      <div className="lg:px-20 lg:py-10 py-10">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Kategori <span style={{ color: "#009781" }}>Layanan Utama</span>
          </h1>
          <h1 className="text-3xl font-bold text-center">Kami</h1>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-6 lg:py-6 grid grid-cols-1 gap-6 place-items-center justify-center">
          <div
            className="card w-96 bg-base-100 shadow-xl my-6"
            style={{ backgroundColor: "#f4feff", color: "#000" }}
          >
            <div className="flex items-center justify-center">
              <figure className="w-32 h-40 mt-5">
                <img src={reservasi} alt="Service" />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title">Reservasi Dokter</h2>
              <p>
                Anda dapat melakukan reservasi dokter secara langsung, cepat,
                dan mudah, serta kualitas konsultasi dan pengobatan yang tidak
                perlu diragukan lagi.
              </p>
            </div>
          </div>
          <div
            className="card w-96 bg-base-100 shadow-xl my-6"
            style={{
              background: `linear-gradient(to bottom, #009E75, #177EA1)`,
              color: "#000",
            }}
          >
            <div className="flex items-center justify-center">
              <figure className="w-32 h-40 mt-5">
                <img src={dokterprof} alt="Service" />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title text-white">Dokter Profesional</h2>
              <p className="text-white">
                Ditangani oleh dokter yang profesional dan handal, Anda dapat
                yakin bahwa perawatan kesehatan Anda dikelola dengan penuh
                keahlian dan dedikasi.
              </p>
            </div>
          </div>
          <div
            className="card w-96 bg-base-100 shadow-xl"
            style={{ backgroundColor: "#f4feff", color: "#000" }}
          >
            <div className="flex items-center justify-center">
              <figure className="w-32 h-40 mt-5">
                <img
                  src={faq}
                  alt="Service"
                  className="w-full h-full object-cover object-center"
                />
              </figure>
            </div>

            <div className="card-body">
              <h2 className="card-title">FAQ</h2>
              <p>
                Temukan jawaban atas pertanyaan umum Anda tentang layanan dan
                prosedur kami di sini. Jika masih ada pertanyaan, hubungi kami
                tanpa ragu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeService;
