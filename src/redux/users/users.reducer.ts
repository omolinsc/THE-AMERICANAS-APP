import { IDefaultRedux } from "../interfaces/default";

const INITIAL_STATE: IDefaultRedux = {
    user: null,
    token: null,
    loading: false,
    error: null,
    theme: null
};

export const usersReducer = (state: IDefaultRedux = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "LOADING":
            return {...state, loading: true};
        case "LOGIN_OK":
            return {...state, loading: false, user: action.payload.user, token: action.payload.token};
        case "GET_USER":
            return {...state, loading: false, user: action.payload};
        case "ERROR":
            return {...state, loading: false, error: action.payload, user: null, token: null};
        default:
            return {...state};
    }
}