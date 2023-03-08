import { connect } from "react-redux";
import { httpRequest } from "../../store/actions/asyncActions";
import { LoginForm } from "../pure/LoginForm";

const mapStateToProps = (rootReducer) => {
  let state = rootReducer.rootReducer;
  return {
    loged: state.userState.loged,
    fetching: state.userState.fetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, passwd) => {
      const data = {
        email: email,
        passwd: passwd,
      };
      const url = "https://reqres.in/api/login";
      dispatch(httpRequest("post", url, data));
    },
  };
};

export const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
