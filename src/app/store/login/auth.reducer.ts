import * as LoginActions from './login.actions';

const initialState = {
  logged_user: localStorage.getItem('aep_user')
};

export function AuthenticationReducer(state = initialState, action: LoginActions.LoginActions) {

  switch (action.type) {
    case LoginActions.LOGIN: {
      return {
        ...state,
        logged_user : action.user
      };
    }
  }

}
