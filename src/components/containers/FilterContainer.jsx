import { connect } from "react-redux";
import { setVisibilityFilt } from "../../store/actions/actions";
import { Filter } from "../pure/Filter";

const mapStateToProps = (rootReducer, ownProps) => {
  let state = rootReducer.rootReducer;
  return {
    active: ownProps.filter === state.filterState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilt(ownProps.filter));
    },
  };
};

export const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
