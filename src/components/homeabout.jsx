import React from "react";

function HomeAbout() {
  return (
    <div
      className="lg:px-20 px-10 py-40 flex"
      style={{ backgroundColor: "#f4feff", color: "#000" }}
    >
      <div className="lg:px-60">
        <div className="card w-full bg-base-100 shadow-xl rounded-xl p-5">
          <div className="card-body">
            <div
              className="card-title justify-center"
              style={{ color: "#009781" }}
            >
              <h2 className="text-4xl py-3">
                Klinik
                <span className="font-bold">Ego</span>
              </h2>
            </div>
            <p className="text-xl text-center text-gray-400">
              Klinik Ego adalah tempat di mana keahlian medis dan kenyamanan
              pasien bertemu secara harmonis. Dengan tim medis yang
              berpengalaman dan fasilitas modern, kami tidak hanya memberikan
              perawatan kesehatan berkualitas tinggi, tetapi juga menciptakan
              lingkungan ramah yang memprioritaskan kebutuhan dan kesejahteraan
              setiap pasien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
