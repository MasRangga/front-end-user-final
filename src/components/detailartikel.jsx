import React, { useEffect } from "react";
import left from "../assets/left.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtikelDetail } from "../redux/actions/artikel-action";

function DetailArtikel() {
  const navigate = useNavigate();
  const {artikels}  = useSelector((state) => state.artikels);
  const dispatch = useDispatch();
  const params = useParams();


  useEffect(() => {
    dispatch(fetchArtikelDetail(params.id));
  }, []);

  console.log(artikels);

  return (
    <>
      <div className="navbar max-w-6xl lg:px-20 px-15 py-10 flex flex-row">
        <div className="flex-none" onClick={() => navigate(-1)}>
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <button className="btn btn-ghost normal-case text-2xl">
            Artikel
          </button>
        </div>
      </div>
      {artikels && (
        <>
          <div className="card w-ful bg-base-100 shadow-xl">
            <figure className="">
              <img
                src={artikels.articles.image}
                alt="gambar artikel"
                className="w-20 lg:w-40 rounded-full"
              />
            </figure>
            <div className="card-body">
              <p className="font-bold">{artikels.articles.title}</p>
              <p>{artikels.articles.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailArtikel;
