import axios from "axios";

export const SUBMIT_RESERVATION_REQUEST = "SUBMIT_RESERVATION_REQUEST";
export const SUBMIT_RESERVATION_SUCCESS = "SUBMIT_RESERVATION_SUCCESS";
export const SUBMIT_RESERVATION_FAILURE = "SUBMIT_RESERVATION_FAILURE";

export const submitReservation = (reservationData) => {
  return async (dispatch) => {
    dispatch({ type: SUBMIT_RESERVATION_REQUEST });

    try {
      const response = await axios.post(
        "https://back-end-production-a31e.up.railway.app/api/reservations",
        reservationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({
        type: SUBMIT_RESERVATION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SUBMIT_RESERVATION_FAILURE,
        payload: error.message,
      });
    }
  };
};
