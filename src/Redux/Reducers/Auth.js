const initialState = {
  data: [],
  loading: false,
};

const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: action.payload,
        error: []
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: "",
        _persist: {
          rehydrated: true,
          version: -1,
        },
      };

    default:
      return state;
  }
};

export default Auth;
