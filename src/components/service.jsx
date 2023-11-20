import React from "react";
import reservasi from '/reservasi.svg'
import review from '/review.svg'
import faq from '/faq.svg'
import faqdoc from '/faq1.svg'

function HomeService() {
  return (
    <>
      <div className="px-20 py-10">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Kategori <span style={{ color: "#009781" }}>Layanan Utama</span>
          </h1>
          <h1 className="text-3xl font-bold text-center">Kami</h1>
        </div>
        <div className="flex flex-row gap-6 py-6">
          <div
            className="card w-96 bg-base-100 shadow-xl"
            style={{ backgroundColor: "#f4feff", color: "#000" }}
          >
            <figure>
              <img src={reservasi} alt="Service" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Reservasi Dokter</h2>
              <p>
                Anda dapat melakukan reservasi dokter secara langsung, cepat,
                dan mudah, serta kualitas konsultasi dan pengobatan yang
                ditawarkan tidak perlu diragukan lagi.
              </p>
            </div>
          </div>
          <div
            className="card w-96 bg-base-100 shadow-xl"
            style={{ backgroundColor: "#f4feff", color: "#000" }}
          >
            <figure>
              <img src={review} alt="Service" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Review Dokter</h2>
              <p>
                Diskusikan permasalahan kesehatan yang sedang Anda hadapi, dan
                jangan ragu untuk menanyakan pengobatan yang tepat.
              </p>
            </div>
          </div>
          <div
            className="card w-96 bg-base-100 shadow-xl py-8"
            style={{ backgroundColor: "#f4feff", color: "#000" }}
          >
            <figure>
              <img src={faqdoc} alt="service" />
              <img src={faq} alt="Service" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">FAQ</h2>
              <p>
                Temukan jawaban atas pertanyaan umum Anda tentang layanan dan
                prosedur kami di sini. Jika pertanyaan Anda masih belum
                terjawab, jangan ragu untuk menghubungi kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeService;
