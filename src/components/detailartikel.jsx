import React, { useEffect } from "react";
import left from "../assets/left.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStateArticle, fetchArtikelDetail } from "../redux/actions/artikel-action";

function DetailArtikel() {
  const navigate = useNavigate();
  const { article } = useSelector((state) => state.artikels);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(clearStateArticle());
    dispatch(fetchArtikelDetail(params.id));
  }, []);

  return (
    <>
      <div
        className="absolute lg:py-3 py-3 lg:px-20"
        onClick={() => navigate("/doctors")}
      >
        <a className="btn btn-ghost normal-case text-xl shadow-xl">
          <img src={left} alt="" />
        </a>
      </div>
      <div className="flex flex-row justify-center py-5 text-center">
        <div className="">
          <a className="font-bold normal-case text-2xl">Artikel</a>
        </div>
      </div>
      {article && (
        <>
          <div className="lg:px-20 px-15 py-10">
            <div className="card w-ful bg-base-100 shadow-xl">
              <figure className="">
                <img
                  src={article.image}
                  alt="gambar artikel"
                  className="w-80"
                />
              </figure>
              <div className="card-body">
                <p className="font-bold">{article.title}</p>
                <p>{article.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailArtikel;
