import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorList } from "../redux/actions/doctor-action.js";
import Footer from "./footer.jsx";

function ListDoctor() {
  const { data } = useSelector((state) => state.doctors);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (doctorId) => {
    navigate(`/doctors/${doctorId}`);
  };

  useEffect(() => {
    dispatch(getDoctorList());
  }, []);

  useEffect(() => {
    console.log("Data Dokter:", data);
  }, [data]);
   
  return (
    <>
      {Array.isArray(data) && (
        <>
          <div className="flex flex-col gap-6 lg:px-20 px-5 py-10 overflow-x-auto">
            {data.map((doctor, index) => (
              <div
                className="card card-compact bg-base-100 shadow-xl flex flex-col lg:flex-row items-center px-4 sm:w-full"
                key={doctor.id}
              >
                <div
                  className="card-body flex flex-col lg:flex-row"
                  key={doctor.id}
                >
                  <figure className="w-60 mb-2 lg:mr-4 lg:mb-0 lg:w-60">
                    <img
                      src={doctor.image}
                      alt={doctor.image}
                      className="w-40 h-40 object-cover rounded-full shadow-md"
                    />
                  </figure>
                  <div className="flex flex-col mt-5">
                    <h2 className="card-title">{doctor.name}</h2>
                    <p>
                      {doctor.specialist
                        ? doctor.specialist.name
                        : "No specialist"}
                    </p>
                    <div className="card-actions justify-between items-center mb-10">
                      <div className="rating">
                        {[...Array(5)].map((star, i) => {
                          const ratingValue = i + 1;
                          return (
                            <input
                              type="radio"
                              name={`rating-${index + 1}`}
                              className="mask mask-star-2 bg-orange-400"
                              disabled
                              key={i}
                              checked={ratingValue === doctor.rating}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <input type="hidden" name={`id_${index}`} value={doctor.id} />
                  <button
                    type="submit"
                    className="btn bg-blue-500 text-white mb-5"
                    onClick={() => handleButtonClick(doctor.id)}
                  >
                    Reservasi
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default ListDoctor;


