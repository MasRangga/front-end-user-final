import React, { useEffect, useState } from "react";
import dokter from "../assets/dokter.svg";
import artikel2 from "../assets/artikel2.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtikels } from "../redux/actions/artikel-action";

function Artikel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [numArtikelsToShow, setNumArtikelsToShow] = useState(3);

  useEffect(() => {
    dispatch(fetchArtikels());
  }, []);

  const data = useSelector((state) => state.artikels);
  const artikels = data.listartikel && data.listartikel.articles ? data.listartikel.articles : [];

  return (
    <div className="lg:px-20 px-10 py-10 ">
      <div>
        <h1 className="text-3xl font-bold text-center" style={{ color: "#009781" }}>
          Artikel
        </h1>
      </div>
      <div className="lg:flex flex-row gap-40 items-center">
        <div>
          <img src={dokter} alt="donter" className="hidden lg:flex" />
        </div>

        <div>
          <div className="text-sm py-3 justify-end">
            Artikel ini merupakan sumber informasi penting, pada topik tertentu, memberikan penjelasan mendalam dan analisis yang didukung oleh bukti yang kuat.
            Membacanya untuk mendapatkan pemahaman yang lebih baik tentang subjek tersebut.
          </div>

          {artikels.slice(0, numArtikelsToShow).map((artikel, index) => (
            <div className="py-2" key={artikel.id}>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={artikel2} alt="artikel" className="" />
                </figure>
                <div className="card-body">
                  <p className="text-sm">{artikel.category}</p>
                  <button
                    className="card-title"
                    onClick={() => {
                      window.location.href = `/detailartikel/${artikel.id}`;
                    }}>
                    {artikel.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {artikels.length > 3 && (
        <div className="flex justify-end">
          <button onClick={() => setNumArtikelsToShow(numArtikelsToShow === artikels.length ? 3 : artikels.length)} className="btn text-blue text-sky-500">
            {numArtikelsToShow === artikels.length ? "Show Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Artikel;