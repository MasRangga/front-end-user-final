import axios from "axios";

export const SUBMIT_RESERVATION_REQUEST = "SUBMIT_RESERVATION_REQUEST";
export const SUBMIT_RESERVATION_SUCCESS = "SUBMIT_RESERVATION_SUCCESS";
export const SUBMIT_RESERVATION_FAILURE = "SUBMIT_RESERVATION_FAILURE";
export const GET_RESERVATION_LIST_REQUEST = "GET_RESERVATION_LIST_REQUEST";
export const GET_RESERVATION_LIST_SUCCESS = "GET_RESERVATION_LIST_SUCCESS";
export const GET_RESERVATION_LIST_FAILURE = "GET_RESERVATION_LIST_FAILURE";

export const submitReservation = (doctorId, date, time, packageId) => {
  const token = localStorage.getItem("token");

  return async (dispatch) => {
    dispatch(submitReservationRequest());

    try {
      const response = await axios.post(
        "https://back-end-production-a31e.up.railway.app/api/reservations",
        {
          doctorId,
          date,
          time,
          packageId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(submitReservationSuccess(response.data.reservationId));
    } catch (error) {
      dispatch(submitReservationFailure(error.response.data.message));
    }
  };
};

const submitReservationRequest = () => ({
  type: SUBMIT_RESERVATION_REQUEST,
});
const submitReservationSuccess = (data) => ({
  type: SUBMIT_RESERVATION_SUCCESS,
  payload: data,
});
const submitReservationFailure = (error) => ({
  type: SUBMIT_RESERVATION_FAILURE,
  payload: error,
});

export const getReservationList = () => {
  return async (dispatch) => {
    dispatch({ type: GET_RESERVATION_LIST_REQUEST });

    try {
      const response = await axios.get("https://back-end-production-a31e.up.railway.app/api/reservations");

      dispatch({
        type: GET_RESERVATION_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_RESERVATION_LIST_FAILURE,
        payload: error.response.data,
      });
    }
  };
};
