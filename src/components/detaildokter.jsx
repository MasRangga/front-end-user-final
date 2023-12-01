import React, { useEffect, useState } from "react";
import kalender from "../assets/calendar.png";
import time from "../assets/time.png";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import left from "../assets/left.png";
("../assets/timerss.png");
import timerss from "../assets/timerss.png";
import Time from "../assets/Time.svg";
import media from "../assets/package.png";
import messages from "../assets/messages.svg";
import video from "../assets/Video.svg";
import { useDispatch, useSelector } from "react-redux";
import { submitReservation } from "../redux/actions/reservasi-action";
import { fetchDoctorDetail } from "../redux/actions/doctor-action";

function DetailDokter() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const { doctor } = useSelector((state) => state.doctors);
  const errMessage = useSelector((state) => state.reservasi.error);
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [error, setError] = useState(null);

  const handleButton = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !selectedPackage) {
      setError("Please select a date, time, and package first");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      dispatch(submitReservation(doctor.id, selectedDate, selectedTime, selectedPackage));
    }
  };

  useEffect(() => {
    dispatch(fetchDoctorDetail(params.id));
  }, []);

  useEffect(() => {
    setError(errMessage);
  }, [errMessage]);

  return (
    <>
      {doctor && (
        <>
          <div className="navbar max-w-6xl lg:px-20 px-15 py-10 flex flex-row">
            <div className="flex-none" onClick={() => navigate("/doctors")}>
              <a className="btn btn-ghost normal-case text-xl shadow-xl">
                <img src={left} alt="" />
              </a>
            </div>
            <div className="flex-1 justify-center">
              <button className="btn btn-ghost normal-case text-2xl">
                Reservasi
              </button>
            </div>
          </div>
          <form>
            <div className="alert alert-warning fixed top-0 z-[1] hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                clasme="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Warning: Please check your data</span>
            </div>

            <div className="max-w-6xl mx-auto md:flex">
              <div className="md:w-3/5 max-w-2/3 bg-base-100 shadow-md rounded-tl-2xl md:rounded-l-2xl">
                <div className="card card-side">
                  <div className="w-48">
                    <img
                      className="rounded-2xl w-40"
                      src={doctor.image}
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{doctor.name}</h2>
                    <p>{doctor.specialist.name}</p>
                    <div className="card-actions justify-start items-center h-12">
                      <div className="rating">
                        {[...Array(5)].map((star, i) => {
                          const ratingValue = i + 1;
                          return (
                            <input
                              type="radio"
                              name={`rating-${ratingValue}`}
                              className="mask mask-star-2 bg-orange-400"
                              disabled
                              checked={ratingValue === doctor.rating}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title text-slate-500">Biography</h2>
                    <p className="text-slate-500">
                      {doctor.name}
                      is the top most {doctor.specialist.name} specialist in{" "}
                      {doctor.hospital} at {doctor.city}. She is available for
                      private consultation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5 max-w-1/3 flex flex-col items-center bg-base-100 shadow-md md:rounded-r-2xl py-5">
                <div className="navbar flex">
                  <div className="flex-none">
                    <div className="flex-none py-3 px-2.5">
                      <img src={kalender} alt="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="normal-case text-xl py-2.5 px-4 font-medium">
                      Date
                    </div>
                  </div>
                  <div className="flex-none">
                    <span className="badge border-none font-semibold">
                      October
                    </span>
                  </div>
                </div>
                <div className="menu menu-horizontal bg-base-200 w-80 justify-around rounded-2xl">
                  <input
                    className="join-item btn"
                    type="radio"
                    name="date"
                    value="2023-12-21"
                    aria-label="21"
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                    }}
                  />
                  <input
                    className="join-item btn"
                    type="radio"
                    name="date"
                    value="2023-12-22"
                    aria-label="22"
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                    }}
                  />
                  <input
                    className="join-item btn"
                    type="radio"
                    name="date"
                    value="2023-12-23"
                    aria-label="23"
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                    }}
                  />
                </div>
                <div className="navbar">
                  <div className="flex-none py-3 px-2.5">
                    <img src={time} alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="normal-case text-xl py-2.5 px-4 font-medium">
                      Time
                    </div>
                  </div>
                </div>
                <div className="menu menu-horizontal bg-base-200 w-80 justify-around grid grid-cols-3 rounded-2xl">
                  <input
                    className="join-item btn"
                    type="radio"
                    name="time"
                    value="09:00"
                    aria-label="09:00"
                    onChange={(e) => {
                      setSelectedTime(e.target.value);
                    }}
                  />
                  <input
                    className="join-item btn"
                    type="radio"
                    name="time"
                    value="11:00"
                    aria-label="11:00"
                    onChange={(e) => {
                      setSelectedTime(e.target.value);
                    }}
                  />
                  <input
                    className="join-item btn"
                    type="radio"
                    name="time"
                    value="15:00"
                    aria-label="15:00"
                    onChange={(e) => {
                      setSelectedTime(e.target.value);
                    }}
                  />
                  <input
                    className="join-item btn"
                    type="radio"
                    name="time"
                    value="18:00"
                    aria-label="18:00"
                    onChange={(e) => {
                      setSelectedTime(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="card card-side bg-base-100 top-6 max-w-6xl mx-auto">
              <figure className="ml-10">
                <img src={timerss} alt="timer" />
              </figure>
              <div className="card-body">
                <p className="font-bold">Select Duration</p>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl top-1 bottom-2 max-w-6xl mx-auto w-full">
              <figure className="ml-12">
                <img src={Time} alt="timer" />
              </figure>
              <div className="card-body">
                <p id="duration" className="font-semibold">
                  30 Minutes
                </p>
              </div>
            </div>

            <div className="card card-side bg-base-100 top-10 bottom-2 max-w-6xl mx-auto">
              <figure className="ml-10">
                <img src={media} alt="package" />
              </figure>
              <div className="card-body">
                <p className="font-bold">Select Package</p>
              </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl my-8 max-w-6xl mx-auto w-full">
              <img
                src={messages}
                alt="messages"
                className="w-20 absolute top-6 left-5"
              />

              <div className="card-body">
                <h2 className="text-2xl font-bold ml-20">Messaging</h2>
                <p className="text-sm ml-20 font-semibold">
                  Chat messages with doctor
                </p>
              </div>

              <div className="flex items-center mb-5 mr-5">
                <input
                  type="radio"
                  name="package"
                  value="P0001"
                  className="radio radio-success"
                  onChange={(e) => {
                    setSelectedPackage(e.target.value);
                  }}
                />
                <p className="ml-2 mt-20 text-lg font-bold">$40</p>
              </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl my-8 max-w-6xl mx-auto w-full">
              <img
                src={video}
                alt="video-call"
                className="w-20 absolute top-6 left-5"
              />

              <div className="card-body">
                <h2 className="text-2xl font-bold ml-20">Video Call</h2>
                <p className="text-sm ml-20 font-semibold">
                  Video call with doctor
                </p>
              </div>

              <div className="flex items-center mb-5 mr-5">
                <input
                  type="radio"
                  name="package"
                  value="P0002"
                  className="radio radio-success font-bold"
                  onChange={(e) => {
                    setSelectedPackage(e.target.value);
                  }}
                />
                <p className="ml-2 mt-20 text-lg font-bold">$40</p>
              </div>
            </div>
            <div className="card px-10">
              <div className="card-body flex items-center justify-center">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button
                  type="submit"
                  className="w-full md:w-64 px-6 py-3 mb-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition duration-300 ease-in-out transform hover:scale-105 text-center shadow-md"
                  onClick={handleButton}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default DetailDokter;