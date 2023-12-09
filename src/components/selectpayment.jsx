import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pilih from "../assets/package.png";
import BRI from "../assets/BRI.png";
import mandiri from "../assets/mandiri.png";
import dana from "../assets/dana.png";
import left from "../assets/left.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getReservationDetail } from "../redux/actions/reservasi-action";

function SelectPayment() {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [error, setError] = useState(null);

  const handleNext = () => {
    if (!selectedPayment) {
      setError("Please select a payment method");
    } else {
      navigate(`/reservations/${params.id}/review-summary`);
    }
  };

  const hideErrorAfterTimeout = () => {
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  if (error) hideErrorAfterTimeout();

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
          <a className="font-bold normal-case text-2xl">Payment</a>
        </div>
      </div>

      <div className="card card-side bg-base-100 top-10 bottom-2 max-w-6xl mx-auto">
        <figure className="ml-10">
          <img src={pilih} alt="package" />
        </figure>
        <div className="card-body">
          <p className="font-bold">Select Payment</p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl my-6 max-w-6xl mx-auto">
        <div className="card-body">
          <img src={BRI} alt="bri" className="w-29 absolute top-6 left-16" />
        </div>

        <div className="flex items-center mt-5 mb-10 mr-5">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-success font-bold"
            onChange={(e) => {
              setSelectedPayment(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl my-6 max-w-6xl mx-auto">
        <div className="card-body">
          <img
            src={mandiri}
            alt="mandiri"
            className="w-29 absolute top-6 left-16"
          />
        </div>

        <div className="flex items-center mt-5 mb-10 mr-5">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-success font-bold"
            onChange={(e) => {
              setSelectedPayment(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl my-6 max-w-6xl mx-auto">
        <div className="card-body">
          <img src={dana} alt="dana" className="w-29 absolute top-6 left-16" />
        </div>

        <div className="flex items-center mt-5 mb-10 mr-5">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-success font-bold"
            onChange={(e) => {
              setSelectedPayment(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-body flex items-center justify-center">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            className="w-full mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-10 sm:px-20 md:px-32 lg:px-80 xl:px-64 py-3 mt-3 rounded-full bg-emerald-500 hover:bg-emerald-700 text-white"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default SelectPayment;
