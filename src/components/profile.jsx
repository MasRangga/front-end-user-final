import React, { useEffect } from "react";
import logout from "../assets/logoutimg.svg";
import { useNavigate } from "react-router-dom";
import person from "../assets/person.png";
import right from "../assets/right.svg";
import left from "../assets/left.png";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getUserDetail, logoutUser } from "../redux/actions/user-action";
import Footer from "./footer";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReservationButton = () => {
    navigate("/reservations");
  };

  const handleLogoutButton = () => {
    dispatch(logoutUser());
    dispatch(clearState());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUserDetail());
  }, []);

  return (
    <>
      <div
        className="absolute lg:py-3 py-3 lg:px-20"
        onClick={() => navigate("/")}
      >
        <a className="btn btn-ghost normal-case text-xl shadow-xl">
          <img src={left} alt="" />
        </a>
      </div>
      <div className="flex flex-row justify-center py-5 text-center">
        <div className="">
          <a className="font-bold normal-case text-2xl">My Profile</a>
        </div>
      </div>

      <div className="lg:px-20 px-10 py-5">
        <div className="py-3 flex justify-center items-center"></div>
        <div className="card card-side bg-gradient-to-r from-emerald-500 to-blue-500 shadow-xl transform hover:scale-105 transition-transform duration-300 mt-4">
          <div className="card-body text-center text-white">
            <img
              src={user.image ? user.image : person}
              alt=""
              className="w-20 lg:w-40 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-extrabold mb-2">{user.name}</h2>
            <p className="mt-1 text-md opacity-80">{user.email}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="relative" onClick={handleReservationButton}>
            <div className="card card-side bg-white shadow-xl flex flex-row items-center rounded-xl transition-transform transform hover:scale-105">
              <div className="card-body">
                <a className="text-md font-bold">Reservasi 📅</a>
              </div>
              <div>
                <img src={right} alt="" className="p-5" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card card-side bg-white shadow-xl flex flex-row items-center rounded-xl transition-transform transform hover:scale-105">
              <div className="card-body">
                <a href="#my_modal_8" className="text-md font-bold">
                  Logout 🚪
                </a>
              </div>
              <div>
                <img src={right} alt="" className="p-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The button logout to open modal */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
          <div className="py-10 flex justify-center">
            <img src={logout} alt="Logout" className="icon" />{" "}
          </div>
          <h3 className="py-1 font-bold text-lg flex justify-center">
            Peringatan Logout!
          </h3>
          <p className="py-2 flex justify-center">
            Apakah Anda yakin ingin keluar?
          </p>
          <div className="modal-action flex flex-col items-center justify-center">
            <a
              onClick={handleLogoutButton}
              href="#"
              className="w-full md:w-64 px-6 py-3 mb-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition duration-300 ease-in-out transform hover:scale-105 text-center shadow-md"
            >
              Logout
            </a>

            <a
              href="#"
              className="w-full md:w-64 px-6 py-3 mb-4 rounded-full bg-white hover:bg-gray-300 text-emerald-500 transition duration-300 ease-in-out transform hover:scale-105 text-center border-2 border-gray-300"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
