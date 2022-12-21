import axios from "axios";
export const signin = ({email, password}) => async (dispatch) => {

  try {
    const { data } =await axios
                .post(process.env.REACT_APP_URL + process.env.REACT_APP_LOGIN, {
                  email,password
                })
     console.log(data.data)           
     localStorage.setItem('userInfo', JSON.stringify(data))
     dispatch({ type: 'USER_SIGNIN_REQUEST', payload: data })
  } catch (error) {
    // dispatch({
    //   type: USER_SIGNIN_FAIL,
    //   payload:
    //     !!error.response && !!error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // })
  }


  // dispatch({ type: 'USER_SIGNIN_REQUEST', payload: { email, password } })
  // try {
  //   const { data } = await axios.post(process.env.REACT_APP_BASE_URL + '/login', {
  //     email,
  //     password,
  //   })
  //   localStorage.setItem('userInfo', JSON.stringify(data))
  //   dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
  // } catch (error) {
  //   dispatch({
  //     type: USER_SIGNIN_FAIL,
  //     payload:
  //       !!error.response && !!error.response.data.message
  //         ? error.response.data.message
  //         : error.message,
  //   })
  // }
}
