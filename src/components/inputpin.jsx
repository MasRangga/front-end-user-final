import React from 'react'
import success from '../assets/img-succes.png'
import { useNavigate } from 'react-router-dom';

function InputPIN() {
  const navigate = useNavigate()
  return (
    <>
      <div className="card bg-base-100 py-20 sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-30">
        <div className="card-body shadow-xl">
          <p className="font-bold text-center text-2xl">
            Enter your PIN to confirm appointment
          </p>
          <br />
          <div className="flex items-center justify-center gap-5 sm:gap-7">
            <div className="kode">
              <input
                type="text"
                className="input input-bordered w-10 sm:w-20 text-center text-sm sm:text-base"
                maxlength="1"
                inputmode="numeric"
              />
            </div>
            <div className="kode">
              <input
                type="text"
                className="input input-bordered w-10 sm:w-20 text-center text-sm sm:text-base"
                maxlength="1"
                inputmode="numeric"
              />
            </div>
            <div className="kode">
              <input
                type="text"
                className="input input-bordered w-10 sm:w-20 text-center text-sm sm:text-base"
                maxlength="1"
                inputmode="numeric"
              />
            </div>
            <div className="kode">
              <input
                type="text"
                className="input input-bordered w-10 sm:w-20 text-center text-sm sm:text-base"
                maxlength="1"
                inputmode="numeric"
              />
            </div>
          </div>
          <br />
          <div className="">
            <div className="card-body flex items-center justify-center">
              <div
                className="btn bg-emerald-500 hover:bg-emerald-700 w-full rounded-full text-white"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Continue
              </div>
            </div>
          </div>
          <div className="text-red-500"></div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <figure className="flex flex-col my-auto items-center">
            <img src={success} width="200" />
          </figure>
          <h3 className="font-bold text-center text-success">Sukses!</h3>
          <p className="py-2 text-sm text-center">
            Reservasi anda berhasil. Anda akan menerima pemberitahuan dan
            dokter yang Anda pilih akan menghubungi Anda.
          </p>
          <div className="modal-action flex flex-col justify-center item-center">
            <form method="dialog">
              <a className="btn bg-emerald-500 hover:bg-emerald-700 w-full rounded-full text-white" onClick={() => navigate("/viewappointment")}>
                View Appointment
              </a>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default InputPIN