import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

// import Login from 'components/Auth/Login';
import Login from "pages/authentication/Login";

/* --------------------------- LOGIN (Index) --------------------------- */

const loginProps = (state: any) => ({});

function loginDispatch(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}
export const LoginContainer = connect(loginProps, loginDispatch)(Login);
